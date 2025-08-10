import React, {
  ReactNode,
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { Shield, Eye, Sun, Zap, Droplets, Users } from "lucide-react";
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const excellenceFeatures = [
  {
    icon: Shield,
    title: "Blue Light Protection",
    description:
      "Advanced filtering technology that reduces digital eye strain and improves sleep quality.",
    color: "from-blue-400 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-400 to-indigo-600",
  },
  {
    icon: Sun,
    title: "Prescription Sunglasses",
    description:
      "Perfect vision meets UV protection. Custom lenses that adapt to your lifestyle.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    icon: Eye,
    title: "Progressive Lenses",
    description:
      "Seamless vision at all distances. Say goodbye to switching between multiple pairs.",
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Anti-Glare Coating",
    description:
      "Crystal clear vision in any lighting condition. Reduce reflections and enhance clarity.",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    icon: Droplets,
    title: "Hydrophobic Coating",
    description:
      "Water-resistant lenses that repel moisture and make cleaning effortless.",
    color: "from-teal-400 to-cyan-600",
    bgColor: "bg-gradient-to-br from-teal-400 to-cyan-600",
  },
  {
    icon: Users,
    title: "Custom Fitting",
    description:
      "Personalized measurements ensure perfect comfort and optimal visual performance.",
    color: "from-rose-400 to-red-600",
    bgColor: "bg-gradient-to-br from-rose-400 to-red-600",
  },
];

const directions = [
  { x: -200, y: 0 },
  { x: 200, y: 0 },
  { x: 0, y: 200 },
  { x: -200, y: 0 },
  { x: 200, y: 0 },
  { x: -200, y: 0 },
];

interface ScrollVelocityTextProps {
  text: ReactNode;
  baseVelocity?: number;
  numCopies?: number;
  damping?: number;
  stiffness?: number;
  velocityInputRange?: [number, number];
  velocityOutputRange?: [number, number];
  className?: string;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const ScrollVelocityText: React.FC<ScrollVelocityTextProps> = ({
  text,
  baseVelocity = 50,
  numCopies = 6,
  damping = 50,
  stiffness = 400,
  velocityInputRange = [0, 1000],
  velocityOutputRange = [0, 5],
  className = "",
  parallaxClassName = "scroll-velocity-parallax",
  scrollerClassName = "scroll-velocity-scroller",
  parallaxStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping,
    stiffness,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    velocityInputRange,
    velocityOutputRange,
    { clamp: false }
  );

  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = React.useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <span
        className={className}
        key={i}
        ref={i === 0 ? copyRef : null}
        style={{ whiteSpace: "nowrap" }}
      >
        {text}
        &nbsp;
      </span>
    );
  }

  return (
    <div
      className={parallaxClassName}
      style={{ overflow: "hidden", ...parallaxStyle }}
      aria-label="Scrolling heading"
    >
      <motion.div
        className={scrollerClassName}
        style={{ display: "inline-flex", x, ...scrollerStyle }}
      >
        {spans}
      </motion.div>
    </div>
  );
};

const Excellence: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 900);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActiveCard(index);
          }
        });
      },
      { threshold: [0.6] }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [isSmallScreen]);

  const largeScreenVariants: Variants = {
    offscreen: (index: number) => ({
      opacity: 0,
      x: directions[index % directions.length].x,
      y: directions[index % directions.length].y,
      scale: 0.8,
    }),
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  const smallScreenVariants: Variants = {
    offscreen: { opacity: 0.7, scale: 0.95 },
    onscreen: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="excellence" className="px-4 sm:px-8 lg:px-20 py-16 bg-white">
      {/* Scroll velocity heading */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
          userSelect: "none",
        }}
        aria-label="Scrolling heading"
      >
        <ScrollVelocityText
          text={
            <span
              style={{
                fontWeight: "900",
                fontSize: "6rem",
                color: "#121212",
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "-0.03em",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              Unrivaled Excellence
            </span>
          }
          baseVelocity={60}
          numCopies={8}
          className="scrolling-heading-text"
          parallaxStyle={{ margin: 0 }}
          velocityInputRange={[0, 1200]}
          velocityOutputRange={[0, 6]}
        />
      </div>

      <div className="container mx-auto max-w-4xl mt-12">
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
          Experience the difference that premium technology and craftsmanship
          make.
        </p>

        {/* Small screen: horizontal scroll */}
        {isSmallScreen && (
          <div className="overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4 touch-pan-x">
            <div className="flex gap-4">
              {excellenceFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = activeCard === index;

                return (
                  <motion.div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    data-index={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.6 }}
                    variants={smallScreenVariants}
                    className={`bg-white w-[80vw] p-6 rounded-3xl transition-transform duration-300 transform snap-center flex-shrink-0
                      shadow-[0_8px_20px_rgba(0,0,0,0.3)]
                      ${
                        isActive
                          ? "scale-105 shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                          : ""
                      }`}
                    onTouchStart={() => setActiveCard(index)}
                  >
                    <div
                      className={`inline-flex p-3 rounded-2xl mb-5 transition-transform duration-300 bg-gradient-to-br ${
                        feature.color
                      } ${isActive ? "scale-110" : ""}`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold text-black mb-3`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm text-gray-700`}>
                      {feature.description}
                    </p>
                    <div className="mt-5">
                      <div
                        className={`h-1 transition-all duration-500 rounded-full bg-gradient-to-r ${
                          feature.color
                        } ${isActive ? "w-full" : "w-0"}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Large screen: vertical cards */}
        {!isSmallScreen && (
          <div className="flex flex-col gap-8">
            {excellenceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = activeCard === index;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={largeScreenVariants}
                  className={`bg-white w-full p-8 rounded-3xl transition-transform duration-300 transform
                    shadow-[0_8px_20px_rgba(0,0,0,0.3)]
                    ${
                      isActive
                        ? "scale-105 shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                        : ""
                    }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onTouchStart={() => setActiveCard(index)}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-6 transition-transform duration-300 bg-gradient-to-br ${
                      feature.color
                    } ${isActive ? "scale-110" : ""}`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold text-black mb-4`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-700 leading-relaxed`}>
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <div
                      className={`h-1 transition-all duration-500 rounded-full bg-gradient-to-r ${
                        feature.color
                      } ${isActive ? "w-full" : "w-0"}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Excellence;
