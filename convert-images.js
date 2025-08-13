import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = path.join(process.cwd(), "public", "images");

async function convertImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const baseName = path.basename(file, ext);

    // Different naming for JPG vs PNG
    const outputFileName =
      [".jpg", ".jpeg"].includes(ext)
        ? `${baseName}_jpg.webp`
        : `${baseName}_png.webp`;

    const outputPath = path.join(imagesDir, outputFileName);

    // Skip if already converted
    if (fs.existsSync(outputPath)) {
      console.log(`⚠️ Skipped (already exists): ${outputFileName}`);
      continue;
    }

    await sharp(path.join(imagesDir, file))
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ Converted ${file} → ${outputFileName}`);
  }
}

(async () => {
  await convertImages();
})();
