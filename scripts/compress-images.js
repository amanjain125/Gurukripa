const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

async function compressAllImages() {
  console.log('Starting image compression in public directory...');
  const publicDir = path.join(process.cwd(), 'public');
  const allFiles = getAllFiles(publicDir);
  const imgFiles = allFiles.filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f) && 
    !f.includes(path.join('public', '.cache'))
  );

  console.log(`Found ${imgFiles.length} image files to inspect.`);

  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  let compressedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  const logs = [];

  for (const filePath of imgFiles) {
    try {
      const stat = fs.statSync(filePath);
      const sizeBefore = stat.size;
      totalSizeBefore += sizeBefore;

      const inputBuffer = fs.readFileSync(filePath);
      const ext = path.extname(filePath).toLowerCase();

      const pipeline = sharp(inputBuffer).resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      });

      let outputBuffer;
      if (ext === '.png') {
        const meta = await sharp(inputBuffer).metadata();
        if (meta.hasAlpha) {
          outputBuffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
        } else {
          outputBuffer = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
        }
      } else if (ext === '.webp') {
        outputBuffer = await pipeline.webp({ quality: 82 }).toBuffer();
      } else {
        // jpeg / jpg
        outputBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      }

      if (outputBuffer && outputBuffer.length < sizeBefore) {
        fs.writeFileSync(filePath, outputBuffer);
        const sizeAfter = outputBuffer.length;
        totalSizeAfter += sizeAfter;
        compressedCount++;
        const relPath = path.relative(publicDir, filePath);
        const savedPercent = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
        logs.push({
          file: relPath,
          beforeKB: Math.round(sizeBefore / 1024),
          afterKB: Math.round(sizeAfter / 1024),
          savedPercent: savedPercent + '%'
        });
      } else {
        totalSizeAfter += sizeBefore;
        skippedCount++;
      }
    } catch (err) {
      errorCount++;
      console.error(`Error processing ${filePath}:`, err.message);
    }
  }

  // Clear thumbnail cache if exists so it regenerates from updated images
  const cacheDir = path.join(publicDir, '.cache', 'pdf-thumbs');
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('Cleared pdf-thumbs cache.');
  }

  console.log('\n--- Compression Summary ---');
  console.log(`Total Images Evaluated: ${imgFiles.length}`);
  console.log(`Compressed: ${compressedCount}`);
  console.log(`Skipped (already optimal): ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Original Total Size: ${(totalSizeBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`New Total Size:      ${(totalSizeAfter / (1024 * 1024)).toFixed(2)} MB`);
  const totalSavedMB = ((totalSizeBefore - totalSizeAfter) / (1024 * 1024)).toFixed(2);
  const totalSavedPct = (((totalSizeBefore - totalSizeAfter) / totalSizeBefore) * 100).toFixed(1);
  console.log(`Total Saved:         ${totalSavedMB} MB (${totalSavedPct}%)`);

  if (logs.length > 0) {
    console.log('\nTop 20 most reduced files:');
    logs.sort((a, b) => (b.beforeKB - b.afterKB) - (a.beforeKB - a.afterKB));
    console.log(JSON.stringify(logs.slice(0, 20), null, 2));
  }
}

compressAllImages();
