import express from 'express';
import { generateGif } from '../lib/gifGenerator.js';
import { generateImage } from '../lib/imageGenerator.js';

const router = express.Router();

// POST /api/gif/generate - Generate GIF from prompt
router.post('/generate', async (req, res) => {
  try {
    const { prompt, frames = 5, duration = 100, width = 512, height = 512 } = req.body;

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    console.log(`🎬 Generating GIF for prompt: "${prompt}"`);

    // Generate frames using AI
    const frameUrls = await generateImage(prompt, frames);

    // Create GIF from frames
    const gifBuffer = await generateGif(frameUrls, { duration, width, height });

    // Send GIF as response
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.gif"');
    res.send(gifBuffer);

  } catch (error) {
    console.error('❌ Error generating GIF:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/gif/preview - Get preview of generated image
router.post('/preview', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    console.log(`🖼️ Generating preview for prompt: "${prompt}"`);
    const imageUrl = await generateImage(prompt, 1);

    res.json({ imageUrl: imageUrl[0] });

  } catch (error) {
    console.error('❌ Error generating preview:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
