const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

StudentSchema.index({ email: 1 }, { unique: true });
StudentSchema.index({ phone: 1 });

module.exports = mongoose.model('Student', StudentSchema);
