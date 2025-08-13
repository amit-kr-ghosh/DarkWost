export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  imagePng: string;
  tag?: string;
  amazonUrl: string;
  category: "sunglasses" | "prescription" | "reading";
  mood: string[];
  description: string;
  rating: number | null;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Rimless Sunglasses",
    price: "₹349",
    image: "../public/images/1.jpg",
    imagePng: "../public/images/1.png",
    tag: "Lightweight",
    amazonUrl: "https://amzn.in/d/gaNhWg3",
    category: "sunglasses",
    mood: ["minimalist", "casual"],
    description:
      "Stylish rimless design with UV protection for a sleek, everyday look.",
    rating: 3.9,
  },
  {
    id: 2,
    name: "Computer Glasses Antiglare",
    price: "₹449",
    image: "../public/images/2.jpg",
    imagePng: "../public/images/2.png",
    tag: "Blue Light",
    amazonUrl: "https://amzn.in/d/9SplO8i",
    category: "prescription",
    mood: ["tech", "professional"],
    description:
      "Anti-glare computer glasses with blue-light filtering for digital eye protection.",
    rating: null,
  },
  {
    id: 3,
    name: "Retro Hexagon Sunglasses",
    price: "₹399",
    image: "../public/images/3.jpg",
    imagePng: "../public/images/3.png",
    tag: "Retro Style",
    amazonUrl: "https://amzn.in/d/bByDuAW",
    category: "sunglasses",
    mood: ["bold", "vintage"],
    description:
      "Hexagon frame sunglasses with a vintage flair for standout style.",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Wayfarer Square Sunglasses",
    price: "₹348",
    image: "../public/images/4.jpg",
    imagePng: "../public/images/4.png",
    tag: "Classic",
    amazonUrl: "https://amzn.in/d/ibAURLl",
    category: "sunglasses",
    mood: ["classic", "versatile"],
    description: "Timeless wayfarer square frames with UV400 lens protection.",
    rating: 3.5,
  },
  {
    id: 5,
    name: "Hexagonal Sunglasses",
    price: "₹299",
    image: "../public/images/5.jpg",
    imagePng: "../public/images/5.png",
    tag: "Geometric",
    amazonUrl: "https://amzn.in/d/bwmmMCX",
    category: "sunglasses",
    mood: ["trendy", "playful"],
    description:
      "Geometric hexagonal frames offering a modern twist on classic sunglasses.",
    rating: 4.1,
  },
  {
    id: 6,
    name: "Mens Sports Sunglasses",
    price: "₹395",
    image: "../public/images/6.jpg",
    imagePng: "../public/images/6.png",
    tag: "Sports",
    amazonUrl: "https://amzn.in/d/2u7FwOU",
    category: "sunglasses",
    mood: ["outdoor", "active"],
    description:
      "Durable sports sunglasses designed for outdoor and athletic activities.",
    rating: 3.9,
  },
  {
    id: 7,
    name: "Sports Sunglasses Unisex",
    price: "₹331",
    image: "../public/images/7.jpg",
    imagePng: "../public/images/7.png",
    tag: "High Rating",
    amazonUrl: "https://amzn.in/d/7ZH1XfZ",
    category: "sunglasses",
    mood: ["sporty", "bold"],
    description:
      "Unisex sports sunglasses with a high customer rating and full UV protection.",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Sports Sunglasses UV400 Protection",
    price: "₹368",
    image: "../public/images/8.jpg",
    imagePng: "../public/images/8.png",
    tag: "UV400",
    amazonUrl: "https://amzn.in/d/92AX2EX",
    category: "sunglasses",
    mood: ["outdoor", "protective"],
    description:
      "Sports sunglasses with UV400 lenses for maximum sun protection.",
    rating: null,
  },
  {
    id: 9,
    name: "Womens Cat Eye Glasses",
    price: "₹299",
    image: "../public/images/9.jpg",
    imagePng: "../public/images/9.png",
    tag: "Cat Eye",
    amazonUrl: "https://amzn.in/d/0xME8Gz",
    category: "reading",
    mood: ["feminine", "stylish"],
    description: "Chic cat eye frames for a fashionable and elegant look.",
    rating: 3.4,
  },
  {
    id: 10,
    name: "Rimless Sunglasses Retro",
    price: "₹349",
    image: "../public/images/10.jpg",
    imagePng: "../public/images/10.png",
    tag: "Retro Rimless",
    amazonUrl: "https://amzn.in/d/81vUleu",
    category: "sunglasses",
    mood: ["retro"],
    description:
      "Retro-inspired rimless sunglasses blending modern minimalism with vintage charm.",
    rating: 3.9,
  },
  {
    id: 11,
    name: "Computer Glasses Clean Lens",
    price: "₹499",
    image: "../public/images/11.jpg",
    imagePng: "../public/images/11.png",
    tag: "Blue Light",
    amazonUrl: "https://amzn.in/d/dssfLss",
    category: "prescription",
    mood: ["tech", "gaming"],
    description:
      "Lightweight round blue-light blocking glasses for gaming, TV, and phone use with anti-eyestrain technology.",
    rating: 3.4,
  },
  {
    id: 12,
    name: "Folding Sunglasses",
    price: "₹295",
    image: "../public/images/12.jpg",
    imagePng: "../public/images/12.png",
    tag: "Folding",
    amazonUrl: "https://amzn.in/d/hamP7PX",
    category: "sunglasses",
    mood: ["travel", "compact"],
    description:
      "Foldable rectangular sunglasses with UV protection, perfect for on-the-go storage.",
    rating: 3.0,
  },
];

export const moodFilters = [
  { id: "all", name: "All Styles", color: "bg-gray-500" },
  { id: "bold", name: "Bold & Dramatic", color: "bg-red-500" },
  { id: "colorful", name: "Pop & Color", color: "bg-pink-500" },
  { id: "earthy", name: "Earthy", color: "bg-green-500" },
  { id: "tech", name: "Tech Forward", color: "bg-purple-500" },
  { id: "classic", name: "Classic", color: "bg-yellow-600" },
  { id: "sporty", name: "Sporty & Active", color: "bg-orange-500" },
  { id: "retro", name: "Retro Vibes", color: "bg-amber-600" },
];
