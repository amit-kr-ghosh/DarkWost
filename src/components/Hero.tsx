import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/DarkWost.png";
import { products, Product } from "../data/products";
import GradientWrapper from "../components/GradientWrapper";

const Hero: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [typedText, setTypedText] = useState("");

  const fullText = "See the world\nin style";
  const typingSpeed = 100;
  const pauseTime = 1500;

  useEffect(() => {
    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * products.length);
      setCurrentProduct(products[randomIndex]);
    };
    pickRandom();
    const timer = setInterval(pickRandom, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    let deleting = false;

    const typeLoop = () => {
      setTypedText(fullText.slice(0, i));

      if (!deleting && i < fullText.length) {
        i++;
        setTimeout(typeLoop, typingSpeed);
      } else if (!deleting && i === fullText.length) {
        deleting = true;
        setTimeout(typeLoop, pauseTime);
      } else if (deleting && i > 0) {
        i--;
        setTimeout(typeLoop, typingSpeed / 2);
      } else if (deleting && i === 0) {
        deleting = false;
        setTimeout(typeLoop, typingSpeed);
      }
    };

    typeLoop();
  }, []);

  if (!currentProduct) return null;

  return (
    <section id="hero" className="relative min-h-screen pb-[14rem] bg-[#0C0C0F] overflow-hidden text-white">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap"
            >
              <div className="p-1.5 sm:p-2.5 bg-white rounded-xl shadow-lg">
                <img
                  src={logo}
                  alt="Dark Wost"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>

              <h1
                className={`
                  text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                  playfair-display-new font-extrabold tracking-wide
                  leading-tight
                  ${
                    // On md and above: gradient text, on smaller: solid white
                    "text-white md:text-transparent bg-clip-text md:bg-clip-text"
                  }
                `}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #7C3AED, #a5c7f7ff)",
                }}
              >
                Dark Wost
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-3 sm:space-y-4"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight whitespace-pre-line min-h-[100px] sm:min-h-[140px]"
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 w-full max-w-full"
              >
                Discover premium eyewear that combines cutting-edge{" "}
                <br className="hidden lg:block" /> technology with timeless
                style.
                <br />
                Your vision deserves the extraordinary.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6 sm:mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 sm:px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-indigo-500"
                onClick={() => {
                  const el = document.getElementById("eyewear-by-mood");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 sm:px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-colors duration-300 hover:bg-gray-600 hover:text-white"
                onClick={() =>
                  window.open(
                    "https://www.amazon.in/s?i=apparel&rh=n%3A1571271031%2Cp_4%3ADark%2BWost%2Cp_6%3AA24X4D06WYHJQP&s=popularity-rank&dc&qid=1754744007&rnid=1318474031&xpid=cxDNReMAdsA2H&ref=sr_st_popularity-rank&ds=v1%3AbelacXEflSlj9K4ASa5zLCrK2Wzntg%2B1IOBHszGCNPI",
                    "_blank"
                  )
                }
              >
                Find Your Style
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Animated Card */}
          <GradientWrapper
            className="relative flex items-center justify-center mt-12 md:mt-0"
            wrapperClassName="max-w-md h-[70vw] sm:h-[60vw] md:h-[50vw] lg:h-[600px] inset-0 m-auto blur-[140px]"
          >
            <div className="relative w-full max-w-md min-h-[260px] lg:min-h-[600px] flex items-center justify-center z-10 mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, scale: 0.85, rotateY: 45 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    y: [0, -5, 0],
                  }}
                  exit={{ opacity: 0, scale: 0.85, rotateY: -45 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
                  className="relative bg-white backdrop-blur-md rounded-2xl p-3 sm:p-5 shadow-2xl border border-white/20 flex flex-col items-center"
                  style={{ perspective: "1000px" }}
                >
                  <motion.img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-48 sm:w-64 h-36 sm:h-44 object-contain"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  />
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 mt-3">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center px-2">
                    {currentProduct.description}
                  </p>
                  <div className="flex items-center justify-between w-full mt-3 px-2">
                    <span className="text-lg sm:text-2xl font-bold text-indigo-600">
                      {currentProduct.price}
                    </span>
                    <button
                      onClick={() =>
                        window.open(currentProduct.amazonUrl, "_blank")
                      }
                      className="px-3 sm:px-4 py-1.5 bg-indigo-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors duration-200 transform hover:scale-105"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </GradientWrapper>
        </div>
      </div>

      <svg
        className="absolute block bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="white" // Change to match the NEXT section’s background
          d="M0,100 C480,0 960,200 1440,100 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
