const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>File Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f0f2f5;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                h1 { color: #1a73e8; }
                .browse-link {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #1a73e8;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>👋 Hi! Welcome to File Server</h1>
                <p>You can browse and download files from this server.</p>
                <a href="/files" class="browse-link">Browse Files</a>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;