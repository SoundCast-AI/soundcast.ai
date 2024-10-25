import { createInfluencer, getInfluecnerById } from "../service/influencer";
import { sendMessageToGeminiAPI } from "../config/gemini";

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

async function chatWithInfluencer(req: any, res: any) {
  const { id } = req.params;
  const { message } = req.body;

  try {
    const influencer = await getInfluecnerById(parseInt(id));
    if (!influencer) {
      return res.status(404).json({ error: "Influencer not found" });
    }
    const messages = [
      { role: "system", content: influencer.prompt },
      { role: "user", content: message },
    ];
    const response = await sendMessageToGeminiAPI(messages);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export {
  createInfluencerController,
  getInfluencerByIdController,
  chatWithInfluencer,
};
