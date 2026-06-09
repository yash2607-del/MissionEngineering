const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  slot: { type: Number, required: true, unique: true },
  title: { type: String, default: '' },
  youtubeUrl: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);
