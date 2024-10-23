import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ExploreImage from "../assets/exploreimage.png";
import { Character } from "../types/types";

const ExplorePage = () => {
  const [selectedType, setSelectedType] = useState("For you");
  const characters: Character[] = [
    {
      id: 1,
      title: "Weirdoh Birds",
      image: ExploreImage,
      url: "#",
      type: "For you",
    },
    {
      id: 2,
      title: "Koketit",
      image: ExploreImage,
      url: "#",
      type: "Featured",
    },
    {
      id: 3,
      title: "Cami Ferreol",
      image: ExploreImage,
      url: "#",
      type: "For you",
    },
    {
      id: 4,
      title: "Coco Gonser",
      image: ExploreImage,
      url: "#",
      type: "Featured",
    },
    {
      id: 5,
      title: "Dance Studio",
      image: ExploreImage,
      url: "#",
      type: "Try these",
    },
    {
      id: 6,
      title: "Portfolio",
      image: ExploreImage,
      url: "#",
      type: "Try these",
    },
  ];

  const seletecdFilter =
    selectedType === "For you"
      ? characters
      : characters.filter((character) => character.type === selectedType);
  return (
    <div className="bg-black ">
      <div className="relative">
        {/* Navbar positioned on top of the image */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <h1 className="absolute inset-0 z-10 flex justify-center items-center text-red-50 text-3xl">
          Explore different personalities
        </h1>
        {/* Background Image */}
        <img
          src={ExploreImage}
          alt="Explore"
          className="w-full h-[50%] object-cover"
          style={{ opacity: 0.6 }}
        />
      </div>
      <hr className="border-t-2 border-[#696060]" />
      <h1 className="text-center text-white text-2xl">
        Explore Different Ai Personalites
      </h1>
      <div className="flex items-center rounded-lg mb-8 border border-red-200 w-[20rem] mt-8 bg-gradient-to-l from-[#3d3d3d] to-[#000000] ">
        <div className="flex gap-4 text-sm p-2">
          <button
            className={`text-white text-lg hover:text-white ${
              selectedType === "For you" && "font-semibold"
            }`}
            onClick={() => setSelectedType("For you")}
          >
            For you
          </button>
          <span className="text-gray-300 ">|</span>
          <button
            className={`text-white text-lg hover:text-gray-600 ${
              selectedType === "Featured" && "font-semibold"
            }`}
            onClick={() => setSelectedType("Featured")}
          >
            Featured
          </button>
          <span className=" text-gray-300">|</span>
          <button
            className={`text-white text-lg hover:text-gray-600 ${
              selectedType === "Try these" && "font-semibold"
            }`}
            onClick={() => setSelectedType("Try these")}
          >
            Try these
          </button>
        </div>
      </div>
      <Carousel selectedFilter={seletecdFilter} characters={characters} />
    </div>
  );
};

export default ExplorePage;
