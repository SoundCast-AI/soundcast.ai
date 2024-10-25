import { CarouselProps } from "../types/types";

const Carousel: React.FC<CarouselProps> = ({ selectedFilter }) => {
  return (
    <div className="pt-10 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedFilter.map((characters) => (
          <div
            key={characters.id}
            className="flex border border-[#a19191] rounded-lg group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="w-[20rem] h-[20rem] overflow-hidden">
              <img
                src={characters.image}
                alt={characters.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-center space-y-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-r-lg">
              <h3 className="text-2xl font-semibold text-white">
                {characters.name}
              </h3>
              <h4 className="text-lg font-medium text-gray-300">
                {characters.creator}
              </h4>
              <p className="text-sm text-gray-400">{characters.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
