import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const TARGET_DIRS = [
  path.resolve('public/assets'),
  path.resolve('src/assets')
];

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        files.push(filePath);
      }
    }
  }
  return files;
}

function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Get image dimensions using sips
  let width = 0;
  try {
    const output = execSync(`sips -g pixelWidth "${filePath}"`).toString();
    const match = output.match(/pixelWidth:\s*(\d+)/);
    if (match) {
      width = parseInt(match[1], 10);
    }
  } catch (err) {
    console.error(`Error reading dimensions of ${filePath}: ${err.message}`);
    return;
  }

  const shouldResize = width > 2000;
  const initialSize = fs.statSync(filePath).size;

  try {
    if (ext === '.jpg' || ext === '.jpeg') {
      if (shouldResize) {
        execSync(`sips --resampleWidth 2000 -s formatOptions 75 "${filePath}"`);
      } else {
        execSync(`sips -s formatOptions 75 "${filePath}"`);
      }
    } else {
      // For PNG, WebP, AVIF
      if (shouldResize) {
        execSync(`sips --resampleWidth 2000 "${filePath}"`);
      }
    }
    
    const finalSize = fs.statSync(filePath).size;
    const diff = initialSize - finalSize;
    if (diff > 1024) { // Only log if we saved more than 1KB
      console.log(`Compressed: ${path.relative(process.cwd(), filePath)} | ${(initialSize / 1024).toFixed(1)}KB -> ${(finalSize / 1024).toFixed(1)}KB (-${((diff / initialSize) * 100).toFixed(1)}%)`);
    } else {
      console.log(`No change: ${path.relative(process.cwd(), filePath)}`);
    }
  } catch (err) {
    console.error(`Failed to compress ${filePath}: ${err.message}`);
  }
}

function main() {
  console.log("Scanning assets...");
  let allFiles = [];
  for (const dir of TARGET_DIRS) {
    allFiles = allFiles.concat(getFiles(dir));
  }
  console.log(`Found ${allFiles.length} images.`);

  let count = 0;
  for (const file of allFiles) {
    count++;
    console.log(`[${count}/${allFiles.length}] Processing ${path.basename(file)}...`);
    compressImage(file);
  }
  console.log("Image compression completed successfully!");
}

main();
