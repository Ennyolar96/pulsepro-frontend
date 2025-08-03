import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slider1, slider2, slider3, slider4 } from "../../../assets";

const ImageSlider = () => {
  const images = [
    {
      id: 1,
      src: slider1,
      alt: "Laboratory researcher",
      small: true,
    },
    {
      id: 2,
      src: slider2,
      alt: "Chemical beaker",
      small: false,
    },
    {
      id: 3,
      src: slider3,
      alt: "Medical professionals",
      small: false,
    },
    {
      id: 4,
      src: slider4,
      alt: "Medical equipment",
      small: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get visible count based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 2; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
    }
    return 4; // Desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (images.length > visibleCount) {
      // If we have more images than visible slots, shift to next image
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      // If we have fewer images than visible slots, cycle through positions
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > visibleCount) {
      // If we have more images than visible slots, shift to previous image
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      // If we have fewer images than visible slots, cycle through positions
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const getVisibleImages = () => {
    if (images.length > visibleCount) {
      // Show a sliding window of images
      const visibleImages = [];
      for (let i = 0; i < visibleCount; i++) {
        const imageIndex = (currentIndex + i) % images.length;
        visibleImages.push(images[imageIndex]);
      }
      return visibleImages;
    } else {
      // If fewer images than visible slots, rearrange them
      const rearranged = [];
      for (let i = 0; i < visibleCount; i++) {
        const imageIndex = (currentIndex + i) % images.length;
        rearranged.push(images[imageIndex]);
      }
      return rearranged;
    }
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-lg overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-[#FFFFFF26] hover:bg-[#FFFFFF26] text-white border p-1.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-[#FFFFFF26] hover:bg-[#FFFFFF26] border text-white p-1.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image Container */}
        <div className="px-16 py-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 custom">
            {visibleImages.map((image, index) => (
              <div //aspect-[4/3]
                key={`${image.id}-${currentIndex}-${index}`}
                className={`relative aspect-[2/3] md:h-96 overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105`}
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="hidden justify-center pb-6 space-x-2">
          {Array.from({ length: Math.ceil(images.length / visibleCount) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCount)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCount) === index
                    ? "bg-red-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            )
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .custom > div {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 767px) {
          .custom {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .custom {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .custom {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
