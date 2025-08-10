import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { Product } from "../data/products";

interface DynamicCardsProps {
  product: Product;
  onClick?: () => void;
}

const DynamicCards: React.FC<DynamicCardsProps> = ({ product, onClick }) => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(product.amazonUrl, "_blank");
    }
  };

  // Generate star icons dynamically based on rating
  const renderStars = (rating: number | null) => {
    const stars = [];

    if (rating === null) {
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
        <Star
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 text-yellow-300 opacity-70 fill-current"
        />
      );
    }
    while (stars.length < 5) {
      stars.push(
        <Star key={`empty-${stars.length}`} className="w-4 h-4 text-gray-300" />
      );
    }
    return stars;
  };

  const buttonText = isSmallScreen ? "Amazon" : "View on Amazon";

  return (
    <div
      className="flex flex-col bg-white rounded-2xl cursor-pointer overflow-hidden group relative"
      style={{ maxWidth: 340 }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />

        {product.tag && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              product.tag === "Best Seller"
                ? "bg-red-600"
                : product.tag === "New Arrival"
                ? "bg-green-600"
                : product.tag === "Limited Edition"
                ? "bg-purple-600"
                : product.tag === "Gaming"
                ? "bg-blue-600"
                : product.tag === "Eco-Friendly"
                ? "bg-emerald-600"
                : product.tag === "Trending"
                ? "bg-pink-600"
                : product.tag === "Hot Pick"
                ? "bg-orange-600"
                : product.tag === "Blue Light"
                ? "bg-indigo-600"
                : "bg-gray-600"
            }`}
          >
            {product.tag}
          </span>
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

        <p className="text-sm text-gray-700 line-clamp-3 flex-grow">{product.description}</p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-2xl font-extrabold text-indigo-600">{product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.amazonUrl, "_blank");
            }}
            className="inline-flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-indigo-700 transition-colors duration-200"
          >
            {buttonText} <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicCards;
