const express = require('express');
const Notification = require('../models/Notification');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Public notifications endpoint – visible to everyone visiting the site.
router.get('/', async (req, res) => {
  try {
    // Visitors and students see only active notifications.
    const list = await Notification.find({ active: true }).sort({ createdAt: -1 });
    return res.json({ notifications: list });
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching notifications' });
  }
});

router.post('/', requireAuth, requireRole('admin'), async (req, res) => {
  try {
    const { title, message } = req.body || {};
    if (!title || !message) return res.status(400).json({ message: 'Title and message required' });

    const notification = await Notification.create({
      title: String(title),
      message: String(message),
      active: true,
      createdBy: req.user.id
    });

    return res.status(201).json({ notification });
  } catch (err) {
    return res.status(500).json({ message: 'Error creating notification' });
  }
});

router.delete('/:id', requireAuth, requireRole('admin'), async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Notification.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Notification not found' });
    
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting notification' });
  }
});

module.exports = router;
