// DOM Elements
const gifForm = document.getElementById('gifForm');
const promptInput = document.getElementById('prompt');
const framesInput = document.getElementById('frames');
const durationInput = document.getElementById('duration');
const resolutionInput = document.getElementById('resolution');
const generateBtn = document.getElementById('generateBtn');
const previewBtn = document.getElementById('previewBtn');
const downloadBtn = document.getElementById('downloadBtn');
const newBtn = document.getElementById('newBtn');

const loadingDiv = document.getElementById('loading');
const resultDiv = document.getElementById('result');
const previewDiv = document.getElementById('preview');
const errorDiv = document.getElementById('error');

const outputGif = document.getElementById('outputGif');
const previewImage = document.getElementById('previewImage');
const loadingText = document.getElementById('loadingText');
const errorText = document.getElementById('errorText');

let currentGifData = null;

// Event Listeners
gifForm.addEventListener('submit', handleGenerateGif);
previewBtn.addEventListener('click', handlePreview);
downloadBtn.addEventListener('click', handleDownload);
newBtn.addEventListener('click', resetForm);

/**
 * Handle preview button click
 */
async function handlePreview() {
    const prompt = promptInput.value.trim();
    if (!prompt) {
        showError('Please enter a prompt first');
        return;
    }

    try {
        showLoading('Generating preview...');
        const response = await fetch('/api/gif/preview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        previewImage.src = data.imageUrl;
        hideLoading();
        previewDiv.style.display = 'block';
        resultDiv.style.display = 'none';

    } catch (error) {
        hideLoading();
        showError(`Preview failed: ${error.message}`);
    }
}

/**
 * Handle GIF generation
 */
async function handleGenerateGif(e) {
    e.preventDefault();

    const prompt = promptInput.value.trim();
    if (!prompt) {
        showError('Please enter a prompt');
        return;
    }

    const frames = parseInt(framesInput.value) || 5;
    const duration = parseInt(durationInput.value) || 100;
    const resolution = parseInt(resolutionInput.value) || 512;

    if (frames < 2 || frames > 10) {
        showError('Frames must be between 2 and 10');
        return;
    }

    try {
        showLoading('Generating your GIF... This may take a minute.');
        previewDiv.style.display = 'none';
        resultDiv.style.display = 'none';

        const response = await fetch('/api/gif/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt,
                frames,
                duration,
                width: resolution,
                height: resolution
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        // Get GIF as blob
        const gifBlob = await response.blob();
        currentGifData = gifBlob;

        // Display GIF
        const gifUrl = URL.createObjectURL(gifBlob);
        outputGif.src = gifUrl;

        hideLoading();
        resultDiv.style.display = 'block';
        errorDiv.style.display = 'none';

    } catch (error) {
        hideLoading();
        showError(`GIF Generation failed: ${error.message}`);
    }
}

/**
 * Handle GIF download
 */
function handleDownload() {
    if (!currentGifData) {
        showError('No GIF to download');
        return;
    }

    const url = URL.createObjectURL(currentGifData);
    const link = document.createElement('a');
    link.href = url;
    link.download = `prompt-to-gif-${Date.now()}.gif`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Reset form to initial state
 */
function resetForm() {
    gifForm.reset();
    framesInput.value = 5;
    durationInput.value = 100;
    resolutionInput.value = 512;
    resultDiv.style.display = 'none';
    previewDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    promptInput.focus();
}

/**
 * Show loading spinner
 */
function showLoading(message = 'Processing...') {
    loadingText.textContent = message;
    loadingDiv.style.display = 'block';
    generateBtn.disabled = true;
    previewBtn.disabled = true;
}

/**
 * Hide loading spinner
 */
function hideLoading() {
    loadingDiv.style.display = 'none';
    generateBtn.disabled = false;
    previewBtn.disabled = false;
}

/**
 * Show error message
 */
function showError(message) {
    errorText.textContent = message;
    errorDiv.style.display = 'block';
    console.error('Error:', message);
}

/**
 * Hide error message
 */
function hideError() {
    errorDiv.style.display = 'none';
}

// Focus on prompt input on load
window.addEventListener('load', () => {
    promptInput.focus();
});
