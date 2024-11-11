type TInfluencer = {
  id: number;
  name: string;
  imageUrl: string;
  welcomeText: string;
  featured: boolean;
  tags: string[];
  description: string;
  prompt: string;
};

type Blogs = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  seoMetadata: string;
};

type NewsLetter = {
  email: string;
};
