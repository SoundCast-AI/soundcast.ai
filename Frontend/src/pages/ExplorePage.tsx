import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ExploreImage from "../assets/exploreimage.png";
import { Character } from "../types/types";
import Footer from "../components/Footer";

const ExplorePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("For you");

  const characters: Character[] = [
    {
      id: 1,
      name: "Weirdoh Birds",
      description: "Weirdoh Birds is a collection of 10,000 unique birds.",
      creator: "#",
      image: ExploreImage,
      type: "For you",
    },
    {
      id: 2,
      name: "Weirdoh Birds",
      description: "Weirdoh Birds is a collection of 10,000 unique birds.",
      creator: "#",
      image: ExploreImage,
      type: "Featured",
    },
    {
      id: 3,
      name: "Weirdoh Birds",
      description: "Weirdoh Birds is",
      creator: "#",
      image: ExploreImage,
      type: "For you",
    },
    {
      id: 4,
      name: "Weirdoh Birds",
      description: "Weirdoh Birds is a collection of 10,000 unique birds.",
      creator: "#",
      image: ExploreImage,
      type: "Featured",
    },
    {
      id: 5,
      name: "Weirdoh Birds",
      description: "Weirdoh Birds is a collection of 10,000 unique birds.",
      creator: "#",
      image: ExploreImage,
      type: "Try these",
    },
    {
      id: 6,
      name: "Weirdoh Birds",
      description: "Weirdoh Birds is a collection of 10,000 unique birds.",
      creator: "#",
      image: ExploreImage,
      type: "Try these",
    },
  ];

  const selectedFilter =
    selectedType === "For you"
      ? characters
      : characters.filter((character) => character.type === selectedType);

  return (
    <div className="bg-black">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <h1 className="absolute inset-0 z-10 flex justify-center items-center text-red-50 text-3xl">
          Explore different personalities
        </h1>
        <img
          src={ExploreImage}
          alt="Explore"
          className="w-full h-[50%] object-cover"
          style={{ opacity: 0.6 }}
        />
      </div>
      <hr className="border-t-2 border-[#696060]" />
      <h1 className="text-center text-white text-4xl pt-8 tracking-wide mb-6 drop-shadow-lg">
        Explore Different AI Personalities
      </h1>
      <div className="flex items-center ml-[40px] justify-center rounded-lg mb-8 w-[20rem] mt-8  bg-gradient-to-l from-gray-700 to-black shadow-lg">
        <div className="flex gap-4 text-sm p-2">
          <button
            className={`text-white text-lg hover:text-gray-300 transition-colors duration-200 ${
              selectedType === "For you" && "font-semibold underline"
            }`}
            onClick={() => setSelectedType("For you")}
          >
            For you
          </button>
          <span className="text-gray-400">|</span>
          <button
            className={`text-white text-lg hover:text-gray-300 transition-colors duration-200 ${
              selectedType === "Featured" && "font-semibold underline"
            }`}
            onClick={() => setSelectedType("Featured")}
          >
            Featured
          </button>
          <span className="text-gray-400">|</span>
          <button
            className={`text-white text-lg hover:text-gray-300 transition-colors duration-200 ${
              selectedType === "Try these" && "font-semibold underline"
            }`}
            onClick={() => setSelectedType("Try these")}
          >
            Try these
          </button>
        </div>
      </div>

      <Carousel selectedFilter={selectedFilter} characters={characters} />
      <hr className="border-t-2 border-[#696060]" />

      <Footer />
    </div>
  );
};

export default ExplorePage;
