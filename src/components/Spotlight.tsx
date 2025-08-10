import React from 'react';
import { ExternalLink, Instagram, Star } from 'lucide-react';
import GradientWrapper from './GradientWrapper';

const styleIcons = [
  {
    id: 1,
    name: "Sofia Chen",
    role: "Fashion Stylist",
    description: "Minimalist aesthetics meet maximum impact. Sofia's choices redefine modern elegance.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    productName: "Urban Minimalist",
    amazonUrl: "https://amazon.com/dp/example6",
    followers: "125K",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "Creative Director",
    description: "Bold choices for bold personalities. Marcus pushes boundaries in eyewear fashion.",
    image: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400",
    productName: "Midnight Aviator",
    amazonUrl: "https://amazon.com/dp/example2",
    followers: "89K",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    name: "Luna Martinez",
    role: "Lifestyle Blogger",
    description: "Vibrant colors and playful designs that capture the joy of self-expression and confidence.",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    productName: "Coral Reef",
    amazonUrl: "https://amazon.com/dp/example3",
    followers: "156K",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Tech Influencer",
    description: "Where technology meets style. Alex showcases the perfect blend of function and fashion.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    productName: "Tech Master Pro",
    amazonUrl: "https://amazon.com/dp/example4",
    followers: "203K",
    gradient: "from-purple-500 to-blue-500"
  }
];

// Gradient string for the wrapper around all cards
const wrapperGradient =
  'linear-gradient(180deg, #efaf19ff 0%, rgba(154, 190, 38, 0.98) 0.01%, rgba(167, 34, 56, 0.2) 100%)';

const Spotlight: React.FC = () => {
  return (
    <section className="px-20 py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-100 mb-4">
            Spotlight : Icons in Dark Wost
          </h2>
          <br />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the style mavens and creative minds who make Dark Wost their signature choice. 
            Discover how they express their unique vision through our eyewear.
          </p>
        </div>

        <GradientWrapper
          gradient={wrapperGradient}
          wrapperClassName="rounded-3xl w-full p-10"
          className="relative"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {styleIcons.map((icon) => (
              <div
                key={icon.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={icon.image}
                    alt={icon.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>
                  
                  {/* Social Stats */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span className="text-sm font-medium text-gray-700">{icon.followers}</span>
                  </div>

                  {/* Gradient Overlay */}
                 
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {icon.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{icon.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {icon.description}
                  </p>

                  {/* Product & Rating */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Wearing:</p>
                      <p className="text-sm text-indigo-600 font-semibold">{icon.productName}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">5.0</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => window.open(icon.amazonUrl, '_blank')}
                    className={`w-full py-3 bg-gradient-to-r ${icon.gradient} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                  >
                    <span>Shop This Look</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GradientWrapper>
      </div>
    </section>
  );
};

export default Spotlight;
