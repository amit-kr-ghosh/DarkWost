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
    image: "/images/1_jpg.webp",
    imagePng: "/images/1_png.webp",
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
    image: "/images/2_jpg.webp",
    imagePng: "/images/2_png.webp",
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
    image: "/images/3_jpg.webp",
    imagePng: "/images/3_png.webp",
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
    image: "/images/4_jpg.webp",
    imagePng: "/images/4_png.webp",
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
    image: "/images/5_jpg.webp",
    imagePng: "/images/5_png.webp",
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
    image: "/images/6_jpg.webp",
    imagePng: "/images/6_png.webp",
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
    image: "/images/7_jpg.webp",
    imagePng: "/images/7_png.webp",
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
    image: "/images/8_jpg.webp",
    imagePng: "/images/8_png.webp",
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
    image: "/images/9_jpg.webp",
    imagePng: "/images/9_png.webp",
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
    image: "/images/10_jpg.webp",
    imagePng: "/images/10_png.webp",
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
    image: "/images/11_jpg.webp",
    imagePng: "/images/11_png.webp",
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
    image: "/images/12_jpg.webp",
    imagePng: "/images/12_png.webp",
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
