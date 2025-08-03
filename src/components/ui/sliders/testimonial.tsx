import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  // Mock images for demonstration
  const slider1 =
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face";
  const slider2 =
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face";
  const slider3 =
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face";
  const slider4 =
    "https://images.unsplash.com/photo-1594824475882-8b9bdfa5a56d?w=100&h=100&fit=crop&crop=face";

  const testimonials = [
    {
      id: 1,
      src: slider1,
      alt: "Laboratory researcher",
      text: "I secured a hospital internship immediately after my certification. Best decision ever!",
      name: "Zainab M.",
    },
    {
      id: 2,
      src: slider2,
      alt: "Chemical beaker",
      text: "The practical training was exceptional. I felt confident from day one at my new job.",
      name: "Ahmed K.",
    },
    {
      id: 3,
      src: slider3,
      alt: "Medical professionals",
      text: "Outstanding program! The instructors were knowledgeable and very supportive.",
      name: "Fatima A.",
    },
    {
      id: 4,
      src: slider4,
      alt: "Medical equipment",
      text: "This certification opened doors I never thought possible. Highly recommended!",
      name: "Ibrahim S.",
    },
    {
      id: 5,
      src: slider1,
      alt: "Laboratory researcher",
      text: "Professional development at its finest. The curriculum is industry-relevant.",
      name: "Aisha L.",
    },
    {
      id: 6,
      src: slider2,
      alt: "Chemical beaker",
      text: "Great learning experience with hands-on practice. Worth every penny!",
      name: "Yusuf O.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get visible count based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile - 1 card
      if (window.innerWidth < 1024) return 1; // Tablet - 1 card
    }
    return 2; // Desktop - 2 cards side by side
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
    const maxIndex = testimonials.length - visibleCount;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    const maxIndex = testimonials.length - visibleCount;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + visibleCount);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-lg overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-[#A91210] hover:bg-[#8a0e0c] text-white border p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-[#A91210] hover:bg-[#8a0e0c] border text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} />
        </button>

        {/* Testimonial Container */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="relative p-[55px] rounded-[20px] bg-white shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="p-6">
                  <div>
                    <RiDoubleQuotesL className="text-[#A91210] mb-4" />
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <h6 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h6>
                      <p className="text-sm text-gray-500">
                        Certified Graduate
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#A91210]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        {/* <div className="flex justify-center pb-6 space-x-2">
          {Array.from({
            length: Math.ceil(testimonials.length - visibleCount + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#A91210] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
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
      `}</style>
    </div>
  );
};

export default Testimonial;
