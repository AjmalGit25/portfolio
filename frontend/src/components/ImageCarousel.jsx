import { useEffect, useState } from "react";

export function ImageCarousel({ images, title, className = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="">
      {/* Images */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} ${index + 1}`}
              className="w-full shrink-0 object-contain aspect-4/3"
            />
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 bg-linear-to-l from-blue-950 via-blue-900 to-blue-950">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`${className} ${current === index
              ? "text-blue-500"
              : "text-white/30"
              }`}
          >
            ●
          </button>
        ))}
      </div>
    </div>
  );
}