require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

async function callGroq(system, user) {
  const res = await fetch(GROQ_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }
      ],
      max_tokens: 4096,
      temperature: 0.7,
      response_format: { type: 'json_object' }
    })
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error?.message || `Groq HTTP ${res.status}`);
  }
  const d = await res.json();
  return d.choices?.[0]?.message?.content || '';
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', groqConfigured: !!GROQ_API_KEY });
});

app.post('/api/generate', async (req, res) => {
  try {
    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: 'Server misconfigured: GROQ_API_KEY missing.' });
    }
    const { system, user } = req.body;
    if (!system || !user) {
      return res.status(400).json({ error: 'Missing system or user prompt.' });
    }
    const content = await callGroq(system, user);
    res.json({ content, provider: 'groq' });
  } catch (err) {
    console.error('/api/generate error:', err.message);
    res.status(502).json({ error: err.message });
  }
});

module.exports = app;
