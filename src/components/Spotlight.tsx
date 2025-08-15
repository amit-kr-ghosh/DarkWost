import React, { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Instagram,

  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import GradientWrapper from "./GradientWrapper";
import { motion } from "framer-motion";
import LightRays from "../components/LightRays/LightRays";

const styleIcons = [
  {
    id: 1,
    name: "Chahat Gupta",
    role: "Actor / Model",
    description:
      "Bold choices for bold personalities. Chahat pushes boundaries in eyewear fashion.",
    image: "images/Chahat.jpg",
    productName: "Wayfarer Sunglasses",
    amazonUrl: "https://amzn.in/d/ibAURLl",
    instagramId: "chahat_chunu",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "Joyous",
    role: "Marketing Expert",
    description:
      "Vibrant colors and playful designs that capture the joy of self-expression and confidence.",
    image: "/images/Dishad.jpg",
    productName: "Rimless Sunglasses",
    amazonUrl: "https://amzn.in/d/81vUleu",
    instagramId: "joyous_ad",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    name: "Arushi Kanwar",
    role: "Athlete / Content Creator",
    description:
      "Minimalist aesthetics meet maximum impact. Sofia's choices redefine modern elegance.",
    image: "images/Arushi.jpg",
    productName: "Cat's Eye",
    amazonUrl: "https://amzn.in/d/0xME8Gz",
    instagramId: "aarushikanwar11",
    gradient: "from-orange-500 to-pink-500",
  },
];

const wrapperGradient = "linear-gradient(180deg, #000000 0%, #000000 100%)";

const Spotlight: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = styleIcons.length;

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  const getCardStyle = (index: number) => {
    const pos = index - currentIndex;
    if (pos === 0)
      return {
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        zIndex: 30,
        pointerEvents: "auto",
      };
    if (pos === -1 || (pos === total - 1 && currentIndex === 0))
      return {
        opacity: 0.6,
        scale: 0.8,
        x: -150,
        rotateY: 45,
        zIndex: 10,
        pointerEvents: "none",
      };
    if (pos === 1 || (pos === -(total - 1) && currentIndex === total - 1))
      return {
        opacity: 0.6,
        scale: 0.8,
        x: 150,
        rotateY: -45,
        zIndex: 10,
        pointerEvents: "none",
      };
    return {
      opacity: 0,
      scale: 0.5,
      x: 0,
      rotateY: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  return (
    <section
      id="spotlight"
      className="relative px-6 md:px-20 py-20 bg-black select-none overflow-hidden"
    >
      {!isSmallScreen && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffffff"
            raysSpeed={1.9}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.5}
            distortion={0.05}
            className="w-full h-full mix-blend-screen opacity-100"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Spotlight
            <br />
            <div className="text-4xl md:text-6xl font-bold text-white mb-4">
              Icons in Dark Wost
            </div>
          </h2>
        </div>

        <GradientWrapper
          gradient={wrapperGradient}
          wrapperClassName="rounded-3xl w-full p-10 relative"
          className="relative"
        >
          <div className="relative flex items-center justify-center overflow-visible">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className={`absolute top-1/2 -translate-y-1/2 z-40 rounded-full bg-white/10 hover:bg-white/20 transition ${
                isSmallScreen ? "p-2 opacity-70 left-1" : "p-3 left-2 md:left-5"
              }`}
            >
              <ChevronLeft
                className={`text-white ${
                  isSmallScreen ? "w-5 h-5" : "w-6 h-6"
                }`}
              />
            </button>

            <motion.div
              ref={containerRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={isSmallScreen ? 0.4 : 0.2}
              onDragEnd={(event, info) => {
                const swipeThreshold = 50;
                const velocityThreshold = 500;

                if (
                  info.velocity.x < -velocityThreshold ||
                  info.offset.x < -swipeThreshold
                ) {
                  nextSlide();
                } else if (
                  info.velocity.x > velocityThreshold ||
                  info.offset.x > swipeThreshold
                ) {
                  prevSlide();
                }
              }}
              className="flex relative w-full max-w-5xl h-[450px] justify-center items-center overflow-visible"
            >
              {styleIcons.map((icon, i) => {
                const style = getCardStyle(i);
                return (
                  <motion.div
                    key={icon.id}
                    initial={false}
                    animate={style}
                    transition={{
                      type: "spring",
                      stiffness: isSmallScreen ? 200 : 300,
                      damping: isSmallScreen ? 25 : 30,
                    }}
                    className="absolute w-72 md:w-80 lg:w-96 rounded-3xl bg-neutral-900 shadow-lg shadow-black/50 cursor-pointer overflow-hidden border border-neutral-700"
                    onClick={() => setCurrentIndex(i)}
                    style={{ perspective: 1200, zIndex: style.zIndex }}
                  >
                    {/* Image clickable to Instagram */}
                    <a
                      href={`https://instagram.com/${icon.instagramId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative overflow-hidden rounded-t-3xl h-64"
                    >
                      <img
                        src={icon.image}
                        alt={icon.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-black/90 transition">
                        <Instagram className="w-4 h-4 text-pink-500" />
                        <span className="text-sm font-medium text-white">
                          @{icon.instagramId}
                        </span>
                      </div>
                    </a>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {icon.name}
                        </h3>
                        <p className="text-sm text-gray-400">{icon.role}</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {icon.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-neutral-700">
                        <div>
                          <p className="text-sm text-gray-400">Wearing:</p>
                          <p className="text-sm text-indigo-400 font-semibold">
                            {icon.productName}
                          </p>
                        </div>

        
                      </div>

                      <button
                        onClick={() => window.open(icon.amazonUrl, "_blank")}
                        className={`w-full py-3 bg-gradient-to-r ${icon.gradient} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                      >
                        <span>Shop This Look</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className={`absolute top-1/2 -translate-y-1/2 z-40 rounded-full bg-white/10 hover:bg-white/20 transition ${
                isSmallScreen
                  ? "p-2 opacity-70 right-1"
                  : "p-3 right-2 md:right-5"
              }`}
            >
              <ChevronRight
                className={`text-white ${
                  isSmallScreen ? "w-5 h-5" : "w-6 h-6"
                }`}
              />
            </button>
          </div>
        </GradientWrapper>
      </div>
    </section>
  );
};

export default Spotlight;
