export interface Character {
  id: number;
  creator: string;
  description: string;
  image: string;
  welcomeMessage: string;
  name: string;
  type: string;
}

export interface CarouselProps {
  selectedFilter: Character[];
  characters: Character[];
}
