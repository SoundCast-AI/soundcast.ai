export interface Character {
  id: number;
  title: string;
  image: string;
  url: string;
  type: string;
}

export interface CarouselProps {
  selectedFilter: Character[];
  characters: Character[];
}
