import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Product } from '../data/products';
import { motion, Variants } from "framer-motion";

interface DynamicCardsProps {
  product: Product;
  onClick?: () => void;
}

const cardVariants: Variants = {
  offscreen: { y: 80, opacity: 0, scale: 0.9 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 }
  }
};

const DynamicCards: React.FC<DynamicCardsProps> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(product.amazonUrl, '_blank');
    }
  };

  const floatDelay = Math.random() * 2;

  // Generate star icons dynamically based on rating
  const renderStars = (rating: number | null) => {
    const stars = [];

    if (rating === null) {
      // Always show 5 empty stars if no rating
      for (let i = 0; i < 5; i++) {
        stars.push(
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        );
      }
      return stars;
    }

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-yellow-300 opacity-70 fill-current" />
      );
    }
    while (stars.length < 5) {
      stars.push(
        <Star key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" />
      );
    }
    return stars;
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2, once: true }}
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02, rotate: -0.5 }}
      animate={{ y: [0, -4, 0, 4, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: floatDelay }}
      className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group relative"
      style={{ maxWidth: 340 }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />

        {product.tag && (
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
              product.tag === 'Best Seller'
                ? 'bg-red-600'
                : product.tag === 'New Arrival'
                ? 'bg-green-600'
                : product.tag === 'Limited Edition'
                ? 'bg-purple-600'
                : product.tag === 'Gaming'
                ? 'bg-blue-600'
                : product.tag === 'Eco-Friendly'
                ? 'bg-emerald-600'
                : product.tag === 'Trending'
                ? 'bg-pink-600'
                : product.tag === 'Hot Pick'
                ? 'bg-orange-600'
                : product.tag === 'Blue Light'
                ? 'bg-indigo-600'
                : 'bg-gray-600'
            }`}
          >
            {product.tag}
          </motion.span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 max-w-[70%] group-hover:text-indigo-600 transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
            <div className="flex items-center">{renderStars(product.rating)}</div>
            {product.rating !== null && (
              <span className="text-xs text-gray-600 mt-1">
                {product.rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-700 line-clamp-3 flex-grow">
          {product.description}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-extrabold text-indigo-600">
            {product.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.amazonUrl, '_blank');
            }}
            className="inline-flex items-center gap-1 bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-indigo-700 transition-colors duration-200"
          >
            View on Amazon <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-300 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default DynamicCards;
