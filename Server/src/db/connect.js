const mongoose = require('mongoose');

let cached = null;

async function connectDb(uri) {
  const mongoUri = uri || process.env.MONGODB_URL || process.env.MONGODB_URI || process.env.MONGO_URI;
  if (!mongoUri) throw new Error('Missing MongoDB connection string (set MONGODB_URL)');

  if (cached) return cached;

  mongoose.set('strictQuery', true);

  cached = mongoose.connect(mongoUri, {
    autoIndex: true
  });

  await cached;
  return cached;
}

module.exports = { connectDb };
