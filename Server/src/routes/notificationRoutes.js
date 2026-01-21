const express = require('express');
const path = require('path');
const { readJson, writeJsonAtomic } = require('../utils/fileStore');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

const NOTIFS_PATH = path.join(__dirname, '..', 'data', 'notifications.json');

// Public notifications endpoint – visible to everyone visiting the site.
router.get('/', async (req, res) => {
  const notifications = await readJson(NOTIFS_PATH, []);
  // Visitors and students see only active notifications.
  const list = notifications.filter((n) => n.active !== false);

  // newest first
  list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return res.json({ notifications: list });
});

router.post('/', requireAuth, requireRole('admin'), async (req, res) => {
  const { title, message } = req.body || {};
  if (!title || !message) return res.status(400).json({ message: 'Title and message required' });

  const notifications = await readJson(NOTIFS_PATH, []);
  const notification = {
    id: cryptoRandomId(),
    title: String(title),
    message: String(message),
    active: true,
    createdAt: new Date().toISOString(),
    createdBy: req.user.id
  };

  notifications.push(notification);
  await writeJsonAtomic(NOTIFS_PATH, notifications);

  return res.status(201).json({ notification });
});

router.delete('/:id', requireAuth, requireRole('admin'), async (req, res) => {
  const { id } = req.params;
  const notifications = await readJson(NOTIFS_PATH, []);
  const next = notifications.filter((n) => String(n.id) !== String(id));
  if (next.length === notifications.length) return res.status(404).json({ message: 'Notification not found' });
  await writeJsonAtomic(NOTIFS_PATH, next);
  return res.status(204).send();
});

function cryptoRandomId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

module.exports = router;
