const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { requireAuth } = require('../middleware/auth');
const { Admin, Student } = require('../models');

const router = express.Router();

function sanitizeUser(user, role) {
  const { passwordHash, __v, ...safe } = user.toObject ? user.toObject() : user;
  return { ...safe, role };
}

function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
}

function normalizeEmail(email) {
  return String(email || '').toLowerCase().trim();
}

router.post('/signup', async (req, res) => {
  const { fullName, email, phone, password } = req.body || {};

  if (!fullName || !email || !phone || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const normalizedEmail = normalizeEmail(email);

  const adminEmail = normalizeEmail(process.env.ADMIN_EMAIL);
  if (adminEmail && normalizedEmail === adminEmail) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  try {
    const existing = await Student.findOne({ email: normalizedEmail }).lean();
    if (existing) return res.status(409).json({ message: 'Email already registered' });

    const passwordHash = await bcrypt.hash(String(password), 10);
    const student = await Student.create({
      fullName: String(fullName),
      email: normalizedEmail,
      phone: String(phone),
      passwordHash
    });

    const token = signToken({ id: student._id.toString(), email: student.email, role: 'student', fullName: student.fullName });
    return res.json({ token, user: sanitizeUser(student, 'student') });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    return res.status(500).json({ message: 'Failed to create user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

  const normalizedEmail = normalizeEmail(email);

  // Single admin from .env
  const adminEmail = normalizeEmail(process.env.ADMIN_EMAIL);
  const adminPassword = String(process.env.ADMIN_PASSWORD || '');
  const adminFullName = String(process.env.ADMIN_FULLNAME || 'Admin');

  if (adminEmail && normalizedEmail === adminEmail) {
    if (!adminPassword || String(password) !== adminPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const adminUser = await Admin.findOne({ email: adminEmail }).lean();
    const baseAdmin = {
      id: 'admin',
      fullName: adminFullName,
      email: adminEmail,
      phone: adminUser?.phone || ''
    };
    const token = signToken({ id: 'admin', email: adminEmail, role: 'admin', fullName: adminFullName });
    return res.json({ token, user: sanitizeUser(baseAdmin, 'admin') });
  }

  try {
    const student = await Student.findOne({ email: normalizedEmail });
    if (!student) return res.status(401).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(String(password), student.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = signToken({ id: student._id.toString(), email: student.email, role: 'student', fullName: student.fullName });
    return res.json({ token, user: sanitizeUser(student, 'student') });
  } catch (err) {
    return res.status(500).json({ message: 'Login failed' });
  }
});

router.get('/me', requireAuth, async (req, res) => {
  const { id, role } = req.user;

  if (role === 'admin') {
    const adminEmail = normalizeEmail(process.env.ADMIN_EMAIL);
    const adminFullName = String(process.env.ADMIN_FULLNAME || 'Admin');
    if (!adminEmail) return res.status(404).json({ message: 'Admin not configured' });
    const adminUser = await Admin.findOne({ email: adminEmail }).lean();
    return res.json({
      user: {
        id: 'admin',
        fullName: adminFullName,
        email: adminEmail,
        phone: adminUser?.phone || '',
        role: 'admin'
      }
    });
  }

  try {
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: 'User not found' });
    return res.json({ user: sanitizeUser(student, 'student') });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to load user' });
  }
});

module.exports = router;
