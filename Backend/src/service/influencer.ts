import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createInfluencer(
  name: string,
  imageUrl: string,
  description: string,
  prompt: string
) {
  const influencer = await prisma.influencer.create({
    data: {
      name: name,
      imageUrl: imageUrl,
      description: description,
      prompt: prompt,
    },
  });

  return influencer;
}

async function getInfluecnerById(id: number) {
  const influencer = await prisma.influencer.findUnique({
    where: {
      id: id,
    },
  });

  return influencer;
}

export { createInfluencer, getInfluecnerById };
