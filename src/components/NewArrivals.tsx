import React, { useMemo, useState, useEffect } from "react";
import DynamicCards from "./DynamicCards";
import { products } from "../data/products";
import { ContainerScroll } from "../components/ui/container-scroll-animation.tsx";

const NewArrivals: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size and update on resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Pick random products based on screen size
  const randomNewArrivals = useMemo(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return isSmallScreen ? shuffled.slice(0, 1) : shuffled.slice(0, 2);
  }, [isSmallScreen]);

  return (
    <ContainerScroll
      titleComponent={
        <h2 className="text-4xl md:text-9xl font-bold text-gray-800 mb-3 leading-tight">
          New Arrivals
        </h2>
      }
    >
      <section className="py-8">
        <div
          className="
            flex gap-6 justify-center
            overflow-x-auto sm:overflow-visible
            px-4 sm:px-0
          "
        >
          {randomNewArrivals.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[85%] max-w-sm sm:w-72"
            >
              <DynamicCards product={product} />
            </div>
          ))}
        </div>
      </section>
    </ContainerScroll>
  );
};

export default NewArrivals;
