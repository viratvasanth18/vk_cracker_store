import sparklers from "../assets/images/sparklers.png";
import flowerpot from "../assets/images/flowerpot.png";
import fancyfountain from "../assets/images/fancy_fountain.png";
import giftbox from "../assets/images/giftbox.png";
import rockets from "../assets/images/rockets.png";
import chakkar from "../assets/images/chakkar.png";
import fountain from "../assets/images/fountain.png";

const products = [
  {
    id: 1,
    name: "Premium Flower Pot",
    category: "Flower Pots",
    image: flowerpot,
    price: 250,
    description:
      "Multi-color fountain with stunning visual effects and long burn time.",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Color Fountain",
    category: "Fountains",
    image: fountain,
    price: 450,
    description: "Premium multi-stage fountain with vibrant color transitions.",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Mega Sparklers",
    category: "Sparklers",
    image: sparklers,
    price: 120,
    description:
      "Extra-long golden sparklers for those magical celebration moments.",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Celebration Rocket",
    category: "Rockets",
    image: rockets,
    price: 350,
    description:
      "High-altitude rocket with dazzling multi-color burst pattern.",
    badge: "New",
  },
  {
    id: 5,
    name: "Ground Chakkar",
    category: "Ground Chakkars",
    image: chakkar,
    price: 180,
    description:
      "Fast-spinning ground chakkar with mesmerizing color patterns.",
    badge: null,
  },
  {
    id: 6,
    name: "Fancy Fountain",
    category: "Fancy Crackers",
    image: fancyfountain,
    price: 520,
    description: "Designer fountain with gold, silver and multi-color stages.",
    badge: "Premium",
  },
  {
    id: 7,
    name: "Family Gift Box",
    category: "Gift Boxes",
    image: giftbox,
    price: 1499,
    description:
      "Complete celebration pack with assorted crackers for the whole family.",
    badge: "Value Pack",
  },
  {
    id: 8,
    name: "Premium Crackers Box",
    category: "Gift Boxes",
    image: sparklers,
    price: 2499,
    description:
      "Luxury assorted crackers collection in premium gift packaging.",
    badge: "Bestseller",
  },
];

export default products;
