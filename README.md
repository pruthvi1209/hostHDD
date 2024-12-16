# Read-only File Server

This is a simple file server that allows users on your local network to browse and download files from your external hard drive.

## Setup Instructions

1. Connect your external hard drive to your computer
2. Find the mount point of your external drive
3. Update the `EXTERNAL_DRIVE_PATH` in `server.js` with your drive's mount point
4. Install dependencies: `npm install`
5. Start the server: `npm start`

## Features

- Browse files and directories
- Download files
- Read-only access (no upload/modify capabilities)
- Works on local network only
- Clean directory listing interface

## Security Notes

- The server only allows connections from your local network
- Files cannot be modified or uploaded
- Hidden files are not served
- Basic security headers are implemented

## Accessing the Server

1. From the same computer:
   - Open `http://localhost:3000` in your browser

2. From other devices on the same WiFi network:
   - Find your computer's local IP address
   - Open `http://[your-local-ip]:3000` in the browser
   - Example: `http://192.168.1.100:3000`