# 🎬 Prompt to GIF Generator

A web application that transforms text prompts into animated GIF images using AI-powered image generation.

## Features

✨ **AI-Powered Image Generation** - Uses Hugging Face's Stable Diffusion API to generate images from text prompts

🎞️ **GIF Creation** - Combines generated images into smooth animated GIFs

👀 **Live Preview** - Preview generated images before creating the full GIF

⚙️ **Customizable Settings**:
- Number of frames (2-10)
- Frame duration (50-500ms)
- Resolution (256x256, 512x512, 768x768)

🎨 **Beautiful UI** - Modern, responsive interface with smooth animations

💾 **Download Support** - Download generated GIFs directly to your device

## Tech Stack

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

## Getting Started

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

## Usage

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

## API Endpoints

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

## Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `HUGGINGFACE_API_KEY` - API key for image generation
- `GIF_FRAME_COUNT` - Default number of frames
- `GIF_FRAME_DURATION` - Default frame duration in ms
- `GIF_WIDTH` - Default GIF width
- `GIF_HEIGHT` - Default GIF height

## Development

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
    ├── index.html        # Main HTML
    ├── app.js            # Frontend logic
    └── styles.css        # Styling
```

## Getting a Hugging Face API Key

1. Go to [huggingface.co](https://huggingface.co)
2. Sign up for a free account
3. Navigate to Settings → Access Tokens
4. Create a new token with read access
5. Copy the token and paste it in your `.env` file

## Troubleshooting

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

## License

MIT License - feel free to use and modify!

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## Support

Having issues? 
- Check the [Troubleshooting](#troubleshooting) section
- Open an issue on GitHub
- Visit the Discord community

---

**Made with ❤️ by baxleychris543-code**
