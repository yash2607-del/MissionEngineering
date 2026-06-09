const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const Video = require('../models/Video');

const router = express.Router();

// Get all 4 video slots. Initialize if they don't exist.
router.get('/', async (req, res) => {
  try {
    let videos = await Video.find({}).sort({ slot: 1 });
    
    // Initialize exactly 4 slots if empty or incomplete
    if (videos.length < 4) {
      for (let i = 1; i <= 4; i++) {
        const exists = videos.find(v => v.slot === i);
        if (!exists) {
          await Video.create({ slot: i, title: '', youtubeUrl: '' });
        }
      }
      videos = await Video.find({}).sort({ slot: 1 });
    }
    
    return res.json({ videos });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Update a video slot
router.put('/:id', requireAuth, requireRole('admin'), async (req, res) => {
  const { title, youtubeUrl } = req.body || {};
  
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { title, youtubeUrl },
      { new: true }
    );
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    return res.json({ video });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
