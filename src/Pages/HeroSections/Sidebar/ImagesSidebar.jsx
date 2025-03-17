import React, { useState, useEffect, useRef } from "react";

const ServicesSidebar = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Create 14 identical service boxes
  const services = Array(14).fill({ route: "" });

  // Duplicate services for smooth infinite scrolling
  const extendedServices = [...services, ...services];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = scrollContainer.scrollWidth / 2; // Start from the end
    scrollContainer.scrollLeft = scrollAmount;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount -= 1; // Moves RIGHT to LEFT
        scrollContainer.scrollLeft = scrollAmount;

        // Reset when reaching the start of the list
        if (scrollAmount <= 0) {
          scrollAmount = scrollContainer.scrollWidth / 2;
          scrollContainer.scrollLeft = scrollAmount;
        }
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, [isPaused]);

  return (
    <div
      className="w-full bg-blue-700 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto py-4 whitespace-nowrap"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          display: "flex",
          gap: "20px",
          whiteSpace: "nowrap",
        }}
      >
        {extendedServices.map((_, index) => (
          <a
            key={index}
            href=""
            className="flex items-center justify-center flex-shrink-0 cursor-pointer px-4 py-6 mx-2 transition-all duration-300 rounded-md bg-blue-800 hover:bg-blue-900"
            style={{
              minWidth: "100px",
              height: "100px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSidebar;
