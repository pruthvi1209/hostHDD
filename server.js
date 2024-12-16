const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');
const cors = require('cors');
const { getLocalIpAddress } = require('./utils/network');
const welcomeRouter = require('./routes/welcome');

const app = express();
const PORT = 3000;
const LOCAL_IP = getLocalIpAddress();

// Replace this path with your external hard disk mount point
const EXTERNAL_DRIVE_PATH = '/Volumes/myhdd/pics';

// Basic security middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Enable CORS for local network
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    // Allow requests from local network
    if (origin.match(/^https?:\/\/192\.168\./)) return callback(null, true);
    if (origin.match(/^https?:\/\/localhost/)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  }
}));

// Welcome page route
app.use('/', welcomeRouter);

// Serve files with directory listing
app.use('/files', 
  express.static(EXTERNAL_DRIVE_PATH, {
    dotfiles: 'deny',
    index: false,
    fallthrough: true,
    maxAge: '1d',
  }),
  serveIndex(EXTERNAL_DRIVE_PATH, {
    icons: true,
    view: 'details'
  })
);

app.listen(PORT, '0.0.0.0', () => {
  console.log('\n=== File Server Started ===');
  console.log(`Local access:     http://localhost:${PORT}`);
  console.log(`Network access:   http://${LOCAL_IP}:${PORT}`);
  console.log('========================\n');
});
