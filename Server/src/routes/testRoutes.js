const express = require('express');
const path = require('path');
const { readJson, writeJsonAtomic } = require('../utils/fileStore');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

const TESTS_PATH = path.join(__dirname, '..', 'data', 'tests.json');

router.get('/', requireAuth, async (req, res) => {
  const tests = await readJson(TESTS_PATH, []);
  const list = req.user.role === 'student'
    ? tests.filter((t) => t.active !== false)
    : tests;

  list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return res.json({ tests: list });
});

router.post('/', requireAuth, requireRole('admin'), async (req, res) => {
  const { title, subject, date, link, details, duration, questions } = req.body || {};
  if (!title || !subject || !date || !link) {
    return res.status(400).json({ message: 'title, subject, date, and link are required' });
  }

  const tests = await readJson(TESTS_PATH, []);
  const test = {
    id: cryptoRandomId(),
    title: String(title),
    subject: String(subject),
    date: String(date),
    link: String(link),
    details: details ? String(details) : '',
    duration: duration ? String(duration) : '',
    questions: questions !== undefined && questions !== null && String(questions) !== '' ? Number(questions) : null,
    active: true,
    createdAt: new Date().toISOString(),
    createdBy: req.user.id
  };

  tests.push(test);
  await writeJsonAtomic(TESTS_PATH, tests);

  return res.status(201).json({ test });
});

router.delete('/:id', requireAuth, requireRole('admin'), async (req, res) => {
  const { id } = req.params;
  const tests = await readJson(TESTS_PATH, []);
  const next = tests.filter((t) => String(t.id) !== String(id));
  if (next.length === tests.length) return res.status(404).json({ message: 'Test not found' });
  await writeJsonAtomic(TESTS_PATH, next);
  return res.status(204).send();
});

function cryptoRandomId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

module.exports = router;
