import sparklers from "../assets/images/sparklers.png";
import flowerpot from "../assets/images/flowerpot.png";
import rockets from "../assets/images/rockets.png";
import chakkar from "../assets/images/chakkar.png";
import fountain from "../assets/images/fountain.png";
import giftbox from "../assets/images/giftbox.png";
import fancyfountain from "../assets/images/fancy_fountain.png";

/*
 * Expanded product catalog for the Products page.
 * Each product has originalPrice and offerPrice (80% OFF).
 * The existing data/products.js is NOT modified.
 */

const productsData = [
  /* ── Flower Pots ──────────────────────────────────────── */
  {
    id: 101,
    name: "Flower Pot Standard",
    category: "Flower Pots",
    image: flowerpot,
    unit: "1 Packet",
    originalPrice: 500,
    offerPrice: 100,
  },
  {
    id: 102,
    name: "Flower Pot Deluxe",
    category: "Flower Pots",
    image: flowerpot,
    unit: "1 Packet",
    originalPrice: 750,
    offerPrice: 150,
  },
  {
    id: 103,
    name: "Flower Pot Supreme",
    category: "Flower Pots",
    image: fancyfountain,
    unit: "1 Packet",
    originalPrice: 1000,
    offerPrice: 200,
  },
  {
    id: 104,
    name: "Flower Pot Premium",
    category: "Flower Pots",
    image: fountain,
    unit: "1 Box",
    originalPrice: 1500,
    offerPrice: 300,
  },

  /* ── Bijili ───────────────────────────────────────────── */
  {
    id: 201,
    name: "Bijili 50 Wala",
    category: "Bijili",
    image: sparklers,
    unit: "1 Packet",
    originalPrice: 250,
    offerPrice: 50,
  },
  {
    id: 202,
    name: "Bijili 100 Wala",
    category: "Bijili",
    image: sparklers,
    unit: "1 Packet",
    originalPrice: 500,
    offerPrice: 100,
  },
  {
    id: 203,
    name: "Bijili 200 Wala",
    category: "Bijili",
    image: sparklers,
    unit: "1 Packet",
    originalPrice: 900,
    offerPrice: 180,
  },
  {
    id: 204,
    name: "Bijili 1000 Wala",
    category: "Bijili",
    image: sparklers,
    unit: "1 Box",
    originalPrice: 2500,
    offerPrice: 500,
  },

  /* ── Rocker ───────────────────────────────────────────── */
  {
    id: 301,
    name: "Single Shot Rocker",
    category: "Rocker",
    image: rockets,
    unit: "1 Piece",
    originalPrice: 150,
    offerPrice: 30,
  },
  {
    id: 302,
    name: "Multi Color Rocker",
    category: "Rocker",
    image: rockets,
    unit: "1 Packet",
    originalPrice: 400,
    offerPrice: 80,
  },
  {
    id: 303,
    name: "Sky Rocker Deluxe",
    category: "Rocker",
    image: rockets,
    unit: "1 Packet",
    originalPrice: 750,
    offerPrice: 150,
  },
  {
    id: 304,
    name: "Mega Rocker Supreme",
    category: "Rocker",
    image: rockets,
    unit: "1 Box",
    originalPrice: 1250,
    offerPrice: 250,
  },

  /* ── Chakkar ──────────────────────────────────────────── */
  {
    id: 401,
    name: "Ground Chakkar Small",
    category: "Chakkar",
    image: chakkar,
    unit: "1 Packet",
    originalPrice: 300,
    offerPrice: 60,
  },
  {
    id: 402,
    name: "Ground Chakkar Big",
    category: "Chakkar",
    image: chakkar,
    unit: "1 Packet",
    originalPrice: 500,
    offerPrice: 100,
  },
  {
    id: 403,
    name: "Special Chakkar",
    category: "Chakkar",
    image: chakkar,
    unit: "1 Piece",
    originalPrice: 200,
    offerPrice: 40,
  },
  {
    id: 404,
    name: "Mega Chakkar Deluxe",
    category: "Chakkar",
    image: chakkar,
    unit: "1 Box",
    originalPrice: 1000,
    offerPrice: 200,
  },

  /* ── Bomb ─────────────────────────────────────────────── */
  {
    id: 501,
    name: "Atom Bomb",
    category: "Bomb",
    image: rockets,
    unit: "1 Packet",
    originalPrice: 350,
    offerPrice: 70,
  },
  {
    id: 502,
    name: "Hydrogen Bomb",
    category: "Bomb",
    image: rockets,
    unit: "1 Packet",
    originalPrice: 600,
    offerPrice: 120,
  },
  {
    id: 503,
    name: "King Bomb",
    category: "Bomb",
    image: rockets,
    unit: "1 Piece",
    originalPrice: 250,
    offerPrice: 50,
  },
  {
    id: 504,
    name: "Classic Bomb Pack",
    category: "Bomb",
    image: rockets,
    unit: "1 Box",
    originalPrice: 1500,
    offerPrice: 300,
  },

  /* ── Gift Box ─────────────────────────────────────────── */
  {
    id: 601,
    name: "Family Gift Box",
    category: "Gift Box",
    image: giftbox,
    unit: "1 Box",
    originalPrice: 5000,
    offerPrice: 1000,
  },
  {
    id: 602,
    name: "Premium Gift Box",
    category: "Gift Box",
    image: giftbox,
    unit: "1 Box",
    originalPrice: 10000,
    offerPrice: 2000,
  },
  {
    id: 603,
    name: "Festival Gift Box",
    category: "Gift Box",
    image: giftbox,
    unit: "1 Box",
    originalPrice: 7500,
    offerPrice: 1500,
  },
  {
    id: 604,
    name: "Royal Gift Box",
    category: "Gift Box",
    image: giftbox,
    unit: "1 Box",
    originalPrice: 15000,
    offerPrice: 3000,
  },
];

export const productCategories = [
  "All",
  "Flower Pots",
  "Bijili",
  "Rocker",
  "Chakkar",
  "Bomb",
  "Gift Box",
];

export const mapCategoryName = (catName) => {
  if (!catName) return "All";
  const name = catName.trim().toLowerCase();
  if (name.includes("flower") || name.includes("fountain") || name.includes("fancy")) return "Flower Pots";
  if (name.includes("sparkler") || name.includes("bijili")) return "Bijili";
  if (name.includes("rocket") || name.includes("rocker")) return "Rocker";
  if (name.includes("chakkar")) return "Chakkar";
  if (name.includes("bomb")) return "Bomb";
  if (name.includes("gift")) return "Gift Box";
  return "All";
};

export default productsData;
