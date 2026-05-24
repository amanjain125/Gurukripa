/**
 * Process the source villa image into a sharpened, color-graded JPEG
 * for the cinematic hero.
 */
import sharp from 'sharp';
import path from 'node:path';

const SRC = path.resolve('villa image.png');
const OUT = path.resolve('public/villa-hero.jpg');

await sharp(SRC)
  // Slight downsample (we don't need 1536 in canvas; 1920 is overkill since canvas
  // displays at most 1.5× CSS px on retina). Keep a wide working size for crispness.
  .resize({ width: 2400, height: 1600, fit: 'cover', kernel: 'lanczos3' })
  .sharpen({ sigma: 0.8, m1: 1.0, m2: 1.5 })
  .modulate({ saturation: 1.08, brightness: 1.0 })
  .jpeg({ quality: 88, progressive: true, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(OUT);

console.log('Wrote', OUT);
