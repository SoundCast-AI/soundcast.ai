export interface Character {
  id: number;
  name: string;
  creator: string;
  description: string;
  image: string;
  type: string;
}

export interface CarouselProps {
  selectedFilter: Character[];
  characters: Character[];
}
