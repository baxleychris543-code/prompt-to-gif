import GifEncoder from 'gif-encoder';
import axios from 'axios';
import { createCanvas } from 'canvas';

/**
 * Generate GIF from array of image URLs
 * @param {string[]} imageUrls - Array of image URLs to include in GIF
 * @param {object} options - GIF options (duration, width, height)
 * @returns {Promise<Buffer>} - GIF as buffer
 */
export async function generateGif(imageUrls, options = {}) {
  const { duration = 100, width = 512, height = 512 } = options;

  // Create GIF encoder
  const gif = new GifEncoder(width, height);

  try {
    // Download and add each image to GIF
    for (const [index, url] of imageUrls.entries()) {
      console.log(`📥 Adding frame ${index + 1}/${imageUrls.length}`);
      
      const imageBuffer = await downloadImage(url);
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext('2d');
      
      // Load and draw image
      const Image = (await import('canvas')).Image;
      const img = new Image();
      img.src = imageBuffer;
      
      ctx.drawImage(img, 0, 0, width, height);
      
      // Add frame to GIF
      gif.addFrame(ctx, { delay: duration });
    }

    // Render GIF
    gif.render();

    return gif.out.getData();

  } catch (error) {
    console.error('❌ Error creating GIF:', error);
    throw new Error(`Failed to create GIF: ${error.message}`);
  }
}

/**
 * Download image from URL as buffer
 * @param {string} url - Image URL
 * @returns {Promise<Buffer>} - Image data as buffer
 */
async function downloadImage(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to download image from ${url}:`, error.message);
    throw new Error(`Image download failed: ${error.message}`);
  }
}
