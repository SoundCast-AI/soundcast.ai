const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function sendMessageToGeminiAPI(messages: any[]) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // Concatenate messages into a single prompt
    const prompt = messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");

    // Generate content based on the prompt
    const result = await model.generateContent(prompt);

    return result.response.text(); // Returns the generated text content
  } catch (error: any) {
    throw new Error(`Gemini API error: ${error.message}`);
  }
}
