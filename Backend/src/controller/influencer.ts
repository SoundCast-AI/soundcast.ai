import { createInfluencer, getInfluecnerById } from "../service/influencer";

async function createInfluencerController(req: any, res: any) {
  const { name, imageUrl, description, prompt } = req.body;

  try {
    const influencer = await createInfluencer(
      name,
      imageUrl,
      description,
      prompt
    );
    res.status(201).json(influencer);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getInfluencerByIdController(req: any, res: any) {
  const { id } = req.params;
  try {
    const influencer = await getInfluecnerById(parseInt(id));
    res.status(200).json(influencer);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export { createInfluencerController, getInfluencerByIdController };
