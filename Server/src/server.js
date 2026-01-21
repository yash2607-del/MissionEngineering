const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDb } = require('./db/connect');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const testRoutes = require('./routes/testRoutes');

const app = express();

const PORT = Number(process.env.PORT || 5000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(
	cors({
		origin: CLIENT_ORIGIN,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization']
	})
);
app.use(express.json());

app.get('/api/health', (req, res) => {
	res.json({ ok: true });
});

app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/tests', testRoutes);

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' });
});

async function start() {
	try {
		await connectDb();
		// eslint-disable-next-line no-console
		console.log('MongoDB connected');

		app.listen(PORT, () => {
			// eslint-disable-next-line no-console
			console.log(`Server listening on http://localhost:${PORT}`);
		});
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error('Failed to connect to MongoDB', err);
		process.exit(1);
	}
}

start();