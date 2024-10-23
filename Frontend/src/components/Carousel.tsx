import { CarouselProps } from "../types/types";

const Carousel: React.FC<CarouselProps> = ({ selectedFilter }) => {
  return (
    <div className="h-screen bg-black pt-10 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-black">
        {selectedFilter.map((characters) => (
          <div
            key={characters.id}
            className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  group cursor-pointer overflow-hidden"
          >
            <div className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={characters.image}
                  alt={characters.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{characters.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
