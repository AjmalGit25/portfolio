import openai from "../config/openAI.js";
import { generateResponse } from "../config/localAI.js";
import { instructions } from "../data/portfolioContext.js";

export const userMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await generateResponse(message);
    res.status(200).json({ message: "AI answered the query successfully!", response });
  } catch (error) {
    console.log("Something went wrong in AI", error);
    res.status(500).json({ message: "Something went wrong in AI" });
  }


  // OpenAI ==================================================
  // try {
  //   const response = await openai.responses.create({
  //     model: "gpt-5.4-mini",
  //     instructions,
  //     input: message,
  //   });

  //   console.log(response.output_text);
  //   res.status(200).json({ message: "AI answered the query successfully!", response: response.output_text });
  // } catch (error) {
  //   console.log("Something went wrong in AI", error);
  //   res.status(500).json({ message: "Something went wrong in AI" });
  // }
}