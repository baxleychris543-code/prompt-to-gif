# 🎬 Prompt to GIF Generator

A web application that transforms text prompts into animated GIF images using AI-powered image generation.

## ✨ Features

🤖 **AI-Powered Image Generation** - Uses Hugging Face's Stable Diffusion API to generate images from text prompts

🎬 **GIF Creation** - Combines generated images into smooth animated GIFs

👁️ **Live Preview** - Preview generated images before creating the full GIF

⚙️ **Customizable Settings**:
- Number of frames (2-10)
- Frame duration (50-500ms)
- Resolution (256x256, 512x512, 768x768)

🎨 **Beautiful UI** - Modern, responsive interface with smooth animations

📥 **Download Support** - Download generated GIFs directly to your device

## 🚀 Quick Start

### Option 1: Offline (Easiest - 10 seconds)
```bash
# Download offline.html and double-click to open
```

### Option 2: Python Server (30 seconds)
```bash
python3 server.py
# Open: http://localhost:8000/offline.html
```

### Option 3: Node.js Server (Full Features - 3 minutes)
```bash
# Mac/Linux
bash start-server.sh

# Windows
start-server.bat

# Open: http://localhost:3000
```

## 📋 Complete File List

```
prompt-to-gif/
├── 📄 README.md                 ← Full Documentation
├── 📄 RELEASE-NOTES.md          ← Version & Release Info
├── 📄 SETUP-GUIDE.md            ← Setup Instructions (3 options)
├── 🟢 server.js                 ← Node.js Backend Server
├── 🐍 server.py                 ← Python HTTP Server
├── 📦 package.json              ← Node.js Dependencies
├── .env.example                 ← Environment Config Template
├── .gitignore                   ← Git Ignore Rules
├── start-server.sh              ← Mac/Linux Auto-Startup
├── start-server.bat             ← Windows Auto-Startup
├── download-offline.bat         ← Windows Download Script
├── 
├── public/ (Frontend Files)
│   ├── 📄 index.html            ← Online Version UI ✅ NEW
│   ├── 📄 offline.html          ← Standalone Offline App
│   ├── app.js                   ← Frontend JavaScript Logic
│   └── styles.css               ← CSS Styling
│
├── routes/ (API Routes)
│   └── gif.js                   ← GIF Generation API Routes
│
└── lib/ (Backend Libraries)
    ├── gifGenerator.js          ← GIF Encoding Library
    └── imageGenerator.js        ← AI Image Generation Library
```

## 🎯 How It Works

1. **Enter a prompt** - Describe what you want to generate
2. **Customize settings** - Choose frames, duration, resolution
3. **Preview first** - See a sample image before full generation
4. **Generate GIF** - AI creates images and combines them
5. **Download** - Save your animated GIF

## 💻 Tech Stack

**Frontend:**
- HTML5
- CSS3 with modern features
- Vanilla JavaScript

**Backend:**
- Node.js (ES6+ modules)
- Express.js
- Canvas library for image processing
- gif-encoder for GIF creation
- Axios for HTTP requests

**APIs:**
- Hugging Face Inference API (Stable Diffusion 2)

## 🔧 Getting Started

### Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- npm or yarn
- Hugging Face API Key (free at [huggingface.co](https://huggingface.co))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/baxleychris543-code/prompt-to-gif.git
   cd prompt-to-gif
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Hugging Face API key:
   ```
   HUGGINGFACE_API_KEY=your_api_key_here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📖 Usage

### Basic Workflow

1. Enter a text prompt describing what you want to generate
2. Click "Preview" to see a sample image
3. Adjust settings (frames, duration, resolution) as needed
4. Click "Generate GIF" to create the animation
5. Download the GIF or generate another

### Example Prompts

- "A cat dancing in the rain"
- "Sunset over mountains"
- "Robot walking through neon city"
- "Butterfly flying through flowers"
- "Aurora borealis in the sky"

## 📡 API Endpoints

### POST `/api/gif/generate`

Generate a GIF from a prompt.

**Request Body:**
```json
{
  "prompt": "A dancing astronaut",
  "frames": 5,
  "duration": 100,
  "width": 512,
  "height": 512
}
```

**Response:**
- Content-Type: `image/gif`
- Body: GIF file data

### POST `/api/gif/preview`

Generate a single preview image from a prompt.

**Request Body:**
```json
{
  "prompt": "A dancing astronaut"
}
```

**Response:**
```json
{
  "imageUrl": "data:image/jpeg;base64,..."
}
```

### GET `/api/health`

Check server health.

**Response:**
```json
{
  "status": "Server is running!"
}
```

## ⚙️ Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `HUGGINGFACE_API_KEY` - API key for image generation
- `GIF_FRAME_COUNT` - Default number of frames
- `GIF_FRAME_DURATION` - Default frame duration in ms
- `GIF_WIDTH` - Default GIF width
- `GIF_HEIGHT` - Default GIF height

## 🛠️ Development

### Run with auto-reload
```bash
npm run dev
```

### Project Structure
```
prompt-to-gif/
├── server.js              # Main server file
├── package.json           # Dependencies
├── .env.example           # Environment template
├── routes/
│   └── gif.js            # API routes
├── lib/
│   ├── gifGenerator.js   # GIF encoding logic
│   └── imageGenerator.js # AI image generation
└── public/
    ├── index.html        # Main online version
    ├── offline.html      # Standalone offline version
    ├── app.js            # Frontend logic
    └── styles.css        # Styling
```

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create your-app-name
git push heroku main
heroku config:set HUGGINGFACE_API_KEY=your_key_here
```

### Deploy to DigitalOcean
1. Create a Droplet (Ubuntu 20.04)
2. SSH into the droplet
3. Clone the repository
4. Install Node.js and npm
5. Set environment variables
6. Run `npm start`

### Deploy to AWS
1. Create an EC2 instance
2. Install Node.js
3. Clone repository
4. Set up environment variables
5. Run with PM2 for process management

## 📝 Getting a Hugging Face API Key

1. Go to [huggingface.co](https://huggingface.co)
2. Sign up for a free account
3. Navigate to Settings → Access Tokens
4. Create a new token with read access
5. Copy the token and paste it in your `.env` file

## 🆘 Troubleshooting

### "HUGGINGFACE_API_KEY not set"
- Make sure you've created a `.env` file with your API key
- Check that the key is correctly formatted
- Restart the server after updating `.env`

### "Canvas module not building"
- You may need build tools installed:
  - **Windows**: Install Visual Studio Build Tools
  - **Mac**: Install Xcode Command Line Tools
  - **Linux**: Install build-essential

### GIF generation is slow
- This is normal! Generating 5+ high-resolution images takes time
- Reduce the number of frames or resolution to speed up generation

### index.html not showing
- Make sure you're accessing `http://localhost:3000/`
- The server serves `public/index.html` as the default route
- Check that the public folder exists and contains index.html

## 📊 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

MIT License - feel free to use and modify!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

Having issues? 
- Check the [Troubleshooting](#troubleshooting) section
- Read SETUP-GUIDE.md for detailed setup help
- Open an issue on GitHub

## 🎉 Version Info

- **Current Version:** 1.0.0
- **Release Date:** August 27, 2026
- **Status:** Production Ready ✅

---

**Made with ❤️ by baxleychris543-code**

**Repository:** https://github.com/baxleychris543-code/prompt-to-gif
