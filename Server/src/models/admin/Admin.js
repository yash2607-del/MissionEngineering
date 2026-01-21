const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: '' },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

AdminSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Admin', AdminSchema);
