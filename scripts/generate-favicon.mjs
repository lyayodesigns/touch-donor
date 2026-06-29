import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function generateFavicon() {
  const inputPath = path.join(publicDir, 'apple-icon.png');
  
  // Get image metadata
  const metadata = await sharp(inputPath).metadata();
  console.log(`Original image: ${metadata.width}x${metadata.height}`);
  
  // The shield emblem is roughly in the center-top of the image
  // Crop to just the shield area (removing whitespace and "TOUCH DONOR" text)
  // Based on the 1024x1024 image, the shield is approximately:
  // Left: ~310, Top: ~170, Width: ~410, Height: ~420
  const cropLeft = Math.round(metadata.width * 0.28);
  const cropTop = Math.round(metadata.height * 0.15);
  const cropWidth = Math.round(metadata.width * 0.44);
  const cropHeight = Math.round(metadata.width * 0.38);

  // Generate 32x32 favicon
  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Created favicon-32x32.png');

  // Generate 16x16 favicon  
  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Created favicon-16x16.png');

  // Generate 48x48 favicon (good for high-DPI tabs)
  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created favicon.png (48x48)');

  // Also generate a cropped icon for general use (192x192)
  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'icon-192x192.png'));
  console.log('Created icon-192x192.png');
}

generateFavicon().catch(console.error);
