import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Reptiles",
    description: "Adopt a scaly and fascinating reptile.",
    color: "bg-[#d4ff80]",
    icon: "🦎",
  },
  {
    title: "Birds",
    description: "Adopt a beautiful and intelligent avian friend.",
    color: "bg-[#ff4d79]",
    icon: "🦜",
  },
  {
    title: "Cats",
    description: "Adopt a cuddly and independent feline.",
    color: "bg-[#ffb84d]",
    icon: "🐱",
  },
  {
    title: "Dogs",
    description: "Adopt a loyal and loving canine companion.",
    color: "bg-[#80b3ff]",
    icon: "🐕",
  },
  {
    title: "Fish",
    description: "Adopt a colorful aquatic friend.",
    color: "bg-[#80ffea]",
    icon: "🐠",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 400; // Width of each card in pixels
  const gap = 24; // Gap between cards in pixels
  const cardsToShow = 3; // Number of cards visible at once

  const nextSlide = () => {
    if (currentIndex < categories.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative  mx-auto px-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${category.color} rounded-3xl`}
              style={{ width: `${cardWidth}px` }}
            >
              <div className="relative p-8">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20"
                    />
                  ))}
                </div>
                <h2 className="text-4xl font-bold mb-2">{category.title}</h2>
                <p className="text-lg">{category.description}</p>
                <div className="absolute right-4 top-4 w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-50"
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex >= categories.length - cardsToShow}
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
          currentIndex >= categories.length - cardsToShow
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-50"
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
