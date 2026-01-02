// Quick CORS test script
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({
  origin: function (origin, callback) {
    console.log('CORS origin check:', origin);
    if (!origin || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/test', (req, res) => {
  res.json({ message: 'CORS test successful', origin: req.headers.origin });
});

app.listen(5001, () => {
  console.log('CORS test server on port 5001');
});


