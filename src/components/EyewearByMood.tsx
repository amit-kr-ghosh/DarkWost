import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { products, moodFilters } from '../data/products';

const EyewearByMood: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Only include moods that have products
  const availableFilters = moodFilters.filter(filter =>
    filter.id === 'all' || products.some(product => product.mood.includes(filter.id))
  );

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter(product => product.mood.includes(activeFilter));

  return (
    <section
      id="eyewear-by-mood"
      className="px-6 sm:px-12 md:px-20 py-20 bg-gradient-to-br from-teal-50 to-green-50"
    >
      <div className="container mx-auto px-0">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 justify-center">
            <Filter className="w-5 h-5 sm:w-8 sm:h-8 text-teal-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Eyewear by Mood & Style
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Express your personality with our curated collections.
            Filter by mood to discover frames that match your unique style and energy.
          </p>
        </div>

        {/* Filter Buttons - desktop */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-12">
          {availableFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
                activeFilter === filter.id
                  ? `${filter.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Hamburger Filter Button - mobile */}
        <div className="sm:hidden mb-6 flex justify-center">
          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="inline-flex items-center gap-1 sm:gap-2 px-4 py-2 bg-teal-600 text-white rounded-full font-semibold shadow-md hover:bg-teal-700 transition-colors duration-300 text-sm sm:text-base"
            aria-label="Toggle filters"
          >
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            Filters
            {showFiltersMobile && <X className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile Filters Dropdown */}
        {showFiltersMobile && (
          <div className="sm:hidden flex flex-wrap justify-center gap-3 mb-12 px-4">
            {availableFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setShowFiltersMobile(false);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? `${filter.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        )}

        {/* Products Flexbox */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[100%] sm:max-w-[90%] md:max-w-[80%] mx-auto">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              No products found for this mood. Try selecting a different filter!
            </p>
          </div>
        )}

        {/* Results Counter */}
        <div className="text-center mt-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Showing{' '}
            <span className="font-semibold text-teal-600">
              {filteredProducts.length}
            </span>{' '}
            products
            {activeFilter !== 'all' && (
              <span>
                {' '}
                for{' '}
                <span className="font-semibold">
                  {availableFilters.find(f => f.id === activeFilter)?.name}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
<a
  href="https://www.amazon.in/s?i=apparel&rh=n%3A1571271031%2Cp_4%3ADark%2BWost%2Cp_6%3AA24X4D06WYHJQP&s=popularity-rank&dc&qid=1754744007&rnid=1318474031&xpid=cxDNReMAdsA2H&ref=sr_st_popularity-rank&ds=v1%3AbelacXEflSlj9K4ASa5zLCrK2Wzntg%2B1IOBHszGCNPI"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 sm:px-8 py-3
             bg-gradient-to-br from-black via-[#1a0a2a] to-[#3b1f4d]
             bg-opacity-60 backdrop-blur-md border border-white/10
             text-white font-semibold rounded-full
             hover:from-[#150822] hover:via-[#2b1761] hover:to-[#57378a]
             hover:scale-105 transition-all duration-300 shadow-lg
             text-sm sm:text-base"
>
  See More on Amazon
</a>
        </div>
      </div>
    </section>
  );
};

export default EyewearByMood;
