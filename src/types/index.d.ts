type TInfluencer = {
  id: number;
  name: string;
  imageUrl: string;
  welcomeText: string;
  featured: boolean;
  tags: string[];
  description: string;
  prompt: string;
  featured: boolean;
};

type Blogs = {
  id: number;
  title: string;
  content: string;
  author: string;
  tags: string[];
  image: string;
  createdAt: string;
};

type NewsLetter = {
  email: string;
};
