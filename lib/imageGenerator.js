import axios from 'axios';

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY || 'YOUR_HF_API_KEY';
const HF_API_URL = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2';

/**
 * Generate images from text prompt using Hugging Face API
 * @param {string} prompt - Text prompt for image generation
 * @param {number} count - Number of images to generate (default: 1)
 * @returns {Promise<string[]>} - Array of image URLs or base64 data
 */
export async function generateImage(prompt, count = 1) {
  try {
    if (!HF_API_KEY || HF_API_KEY === 'YOUR_HF_API_KEY') {
      console.warn('⚠️  Warning: HUGGINGFACE_API_KEY not set. Using placeholder images.');
      return generatePlaceholderImages(prompt, count);
    }

    const images = [];

    for (let i = 0; i < count; i++) {
      console.log(`🤖 Generating image ${i + 1}/${count} from Hugging Face...`);
      
      const response = await axios.post(
        HF_API_URL,
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${HF_API_KEY}`,
          },
          responseType: 'arraybuffer',
        }
      );

      // Convert image buffer to base64
      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      const imageUrl = `data:image/jpeg;base64,${base64Image}`;
      images.push(imageUrl);
    }

    return images;

  } catch (error) {
    console.error('❌ Error generating images:', error.message);
    throw new Error(`Image generation failed: ${error.message}`);
  }
}

/**
 * Generate placeholder images for testing (when API key not set)
 * @param {string} prompt - Text prompt
 * @param {number} count - Number of placeholders to generate
 * @returns {string[]} - Array of placeholder image URLs
 */
function generatePlaceholderImages(prompt, count) {
  const images = [];
  const colors = ['FF6B6B', '4ECDC4', '45B7D1', 'FFA502', '95E1D3'];

  for (let i = 0; i < count; i++) {
    const color = colors[i % colors.length];
    // Use placeholder service
    const imageUrl = `https://via.placeholder.com/512x512/${color}/FFFFFF?text=${encodeURIComponent(prompt.substring(0, 30))}+${i + 1}`;
    images.push(imageUrl);
  }

  return images;
}
