const fs = require('fs/promises');
const path = require('path');

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function ensureFile(filePath, defaultValue) {
  try {
    await fs.access(filePath);
  } catch {
    await ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, JSON.stringify(defaultValue, null, 2), 'utf8');
  }
}

async function readJson(filePath, defaultValue) {
  await ensureFile(filePath, defaultValue);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

async function writeJsonAtomic(filePath, value) {
  await ensureDir(path.dirname(filePath));
  const tmpPath = `${filePath}.tmp`;
  await fs.writeFile(tmpPath, JSON.stringify(value, null, 2), 'utf8');
  await fs.rename(tmpPath, filePath);
}

module.exports = {
  ensureDir,
  readJson,
  writeJsonAtomic
};
