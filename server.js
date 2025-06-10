const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moodmuse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// Define schema & model
const entrySchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Entry = mongoose.model('Entry', entrySchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/post-entry', async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Content is required' });

    const newEntry = new Entry({ content });
    await newEntry.save();
    res.status(200).json({ message: 'Entry saved successfully' });
  } catch (error) {
    console.error('❌ Error posting entry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.get('/', (req, res) => {
  res.send('MoodMuse Backend Running');
});


// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
