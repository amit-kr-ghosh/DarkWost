import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(product.amazonUrl, '_blank');
    }
  };

  // Generate stars (full, half, and empty)
  const renderStars = (rating: number | null) => {
    const stars = [];
    const fullStars = rating ? Math.floor(rating) : 0;
    const hasHalfStar = rating ? rating % 1 >= 0.5 : false;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-300 opacity-70 fill-current" />);
    }

    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden max-w-xs sm:max-w-sm md:max-w-md"
      style={{ width: '100%' }}
    >
      {/* Image with overlay */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
        {product.tag && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
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
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        {/* Title and rating */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 max-w-[70%]">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
            <div className="flex items-center">{renderStars(product.rating)}</div>
            {product.rating !== null && (
              <span className="text-xs text-gray-600 mt-1">{product.rating.toFixed(1)}</span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-3 flex-grow">{product.description}</p>

        {/* Price and button aligned bottom - responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 pt-2">
          <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 whitespace-nowrap">
            {product.price}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.amazonUrl, '_blank');
            }}
            className="inline-flex items-center gap-1 bg-indigo-600 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap"
          >
            View on Amazon <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
