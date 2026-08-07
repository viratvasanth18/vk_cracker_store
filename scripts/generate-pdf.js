import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createPriceListPDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 Size in points

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const { width, height } = page.getSize();

  // Colors
  const darkBg = rgb(0.08, 0.08, 0.12);
  const goldColor = rgb(0.83, 0.66, 0.26); // #D4A843
  const darkGray = rgb(0.2, 0.2, 0.25);
  const lightGray = rgb(0.95, 0.95, 0.96);
  const textColor = rgb(0.15, 0.15, 0.15);
  const white = rgb(1, 1, 1);

  // Header Banner Background
  page.drawRectangle({
    x: 0,
    y: height - 110,
    width: width,
    height: 110,
    color: darkBg,
  });

  // Top Accent Gold Bar
  page.drawRectangle({
    x: 0,
    y: height - 6,
    width: width,
    height: 6,
    color: goldColor,
  });

  // Header Text
  page.drawText('VK CRACKERS', {
    x: 35,
    y: height - 42,
    size: 26,
    font: fontBold,
    color: goldColor,
  });

  page.drawText('PREMIUM FIREWORKS & FESTIVE PRICE LIST 2026', {
    x: 35,
    y: height - 64,
    size: 11,
    font: fontBold,
    color: white,
  });

  page.drawText('Sivakasi Direct Quality | Safe & Certified | WhatsApp: +91 99999 99999', {
    x: 35,
    y: height - 85,
    size: 9,
    font: fontRegular,
    color: rgb(0.8, 0.8, 0.8),
  });

  let currentY = height - 140;

  // Table Headers
  const drawTableHeader = (y) => {
    page.drawRectangle({
      x: 35,
      y: y - 22,
      width: width - 70,
      height: 24,
      color: darkGray,
    });

    page.drawText('S.NO', { x: 45, y: y - 15, size: 9, font: fontBold, color: goldColor });
    page.drawText('PRODUCT NAME / CATEGORY', { x: 90, y: y - 15, size: 9, font: fontBold, color: goldColor });
    page.drawText('PACK CONTENT', { x: 330, y: y - 15, size: 9, font: fontBold, color: goldColor });
    page.drawText('PRICE', { x: 480, y: y - 15, size: 9, font: fontBold, color: goldColor });
  };

  const categories = [
    {
      name: 'SPARKLERS & GROUND CHAKKARS',
      items: [
        { sno: '01', name: 'Mega Crackling Sparklers', pack: '10 Pcs Pack', price: 'Rs. 120' },
        { sno: '02', name: 'Golden Electric Sparklers', pack: '10 Pcs Pack', price: 'Rs. 150' },
        { sno: '03', name: 'Multi-Color Deluxe Sparklers', pack: '10 Pcs Pack', price: 'Rs. 200' },
        { sno: '04', name: 'Ground Spinning Chakkar Deluxe', pack: '10 Pcs Pack', price: 'Rs. 180' },
        { sno: '05', name: 'Special Multi-Color Wheel', pack: '10 Pcs Pack', price: 'Rs. 220' },
      ],
    },
    {
      name: 'FLOWER POTS & FOUNTAINS',
      items: [
        { sno: '06', name: 'Premium High-Rise Flower Pot', pack: '10 Pcs Pack', price: 'Rs. 250' },
        { sno: '07', name: 'Deluxe Tri-Color Flower Pot', pack: '10 Pcs Pack', price: 'Rs. 380' },
        { sno: '08', name: 'Multi-Stage Color Fountain', pack: '5 Pcs Box', price: 'Rs. 450' },
        { sno: '09', name: 'Fancy Tri-Stage Fountain', pack: '2 Pcs Box', price: 'Rs. 520' },
        { sno: '10', name: 'Peacock Feather Mega Fountain', pack: '1 Pc Box', price: 'Rs. 650' },
      ],
    },
    {
      name: 'HIGH-FLYING ROCKETS',
      items: [
        { sno: '11', name: 'Celebration Multi-Burst Rocket', pack: '10 Pcs Pack', price: 'Rs. 350' },
        { sno: '12', name: 'Whistling Sky Sound Rocket', pack: '10 Pcs Pack', price: 'Rs. 420' },
        { sno: '13', name: 'Sky Thunder Parachute Rocket', pack: '5 Pcs Pack', price: 'Rs. 600' },
      ],
    },
    {
      name: 'EXCLUSIVE FESTIVE GIFT BOXES',
      items: [
        { sno: '14', name: 'Family Joy Celebration Combo Pack', pack: 'Assorted (30 Items)', price: 'Rs. 1,499' },
        { sno: '15', name: 'Premium Fireworks Bumper Box', pack: 'Assorted (50 Items)', price: 'Rs. 2,499' },
        { sno: '16', name: 'Royal Grand Celebration Box', pack: 'Luxury VIP Pack', price: 'Rs. 3,999' },
      ],
    },
  ];

  drawTableHeader(currentY);
  currentY -= 28;

  let rowCounter = 0;

  categories.forEach((cat) => {
    // Category Header Row
    page.drawRectangle({
      x: 35,
      y: currentY - 18,
      width: width - 70,
      height: 20,
      color: rgb(0.92, 0.88, 0.78),
    });

    page.drawText(cat.name, {
      x: 45,
      y: currentY - 13,
      size: 9,
      font: fontBold,
      color: darkBg,
    });

    currentY -= 24;

    cat.items.forEach((item) => {
      // Alternate row background
      if (rowCounter % 2 === 1) {
        page.drawRectangle({
          x: 35,
          y: currentY - 16,
          width: width - 70,
          height: 18,
          color: lightGray,
        });
      }

      page.drawText(item.sno, { x: 45, y: currentY - 12, size: 8.5, font: fontRegular, color: textColor });
      page.drawText(item.name, { x: 90, y: currentY - 12, size: 8.5, font: fontBold, color: textColor });
      page.drawText(item.pack, { x: 330, y: currentY - 12, size: 8.5, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
      page.drawText(item.price, { x: 480, y: currentY - 12, size: 8.5, font: fontBold, color: darkBg });

      currentY -= 20;
      rowCounter++;
    });

    currentY -= 6;
  });

  // Terms & Safety Box at the bottom
  const boxY = 45;
  page.drawRectangle({
    x: 35,
    y: boxY,
    width: width - 70,
    height: 75,
    color: darkBg,
  });

  page.drawRectangle({
    x: 35,
    y: boxY + 71,
    width: width - 70,
    height: 4,
    color: goldColor,
  });

  page.drawText('SAFETY INSTRUCTIONS & ORDERING TERMS:', {
    x: 45,
    y: boxY + 54,
    size: 9,
    font: fontBold,
    color: goldColor,
  });

  const terms = [
    '* All prices include GST. Discounts applicable on bulk orders.',
    '* Always burst crackers in open outdoor areas under adult supervision.',
    '* Keep a bucket of water and sand nearby for emergency safety.',
    '* To place an instant order, WhatsApp your selection to +91 99999 99999.',
  ];

  terms.forEach((term, idx) => {
    page.drawText(term, {
      x: 45,
      y: boxY + 38 - idx * 10,
      size: 7.5,
      font: fontRegular,
      color: white,
    });
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, '..', 'public', 'price-list.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated valid PDF at public/price-list.pdf!');
}

createPriceListPDF().catch(console.error);
