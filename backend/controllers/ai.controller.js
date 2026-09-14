import openai from "../config/openAI.js";
import gemini from "../config/geminiAI.js";
import { instructions } from "../data/portfolioContext.js";
import { generateResponse } from "../config/localAI.js";

export const userMessage = async (req, res) => {
  const { message } = req.body;

  // ==============  Rule-based Response ==============

  // try {
  //   const response = await generateResponse(message);
  //   res.status(200).json({ message: "AI answered the query successfully!", response });
  // } catch (error) {
  //   console.log("Something went wrong in AI", error);
  //   res.status(500).json({ message: "Something went wrong in AI" });
  // }


  // =============== LLM powered Response =================

  // OpenAI 
  // try {
  //   const response = await openai.responses.create({
  //     model: "gpt-5.4-mini",
  //     instructions,
  //     input: message,
  //   });

  //   console.log(response.output_text);
  //   res.status(200).json({ message: "OpenAI answered the query successfully!", response: response.output_text });
  // } catch (error) {
  //   console.log("Something went wrong in OpenAI", error);
  //   if (error.status === 429) {
  //     return res.status(429).json({message: "Ajmal's AI assistant has reached its current usage limit. Please try again later. In the meantime, feel free to explore the portfolio! 😊"});
  //   }
  //   res.status(500).json({ message: "My AI assistant is temporarily unavailable. Please try again later, or feel free to explore the portfolio! 😊" });
  // }


  // Google Gemini 
  try {
    const response = await gemini.interactions.create({
      model: "gemini-3.1-flash-lite",
      system_instruction: instructions,
      input: message,
    });

    res.status(200).json({ message: "GeminiAI answered the query successfully!", response: response.output_text });
  } catch (error) {
    console.log("Something went wrong in GeminiAI", error);
    if (error.status === 429) {
      return res.status(429).json({message: "Ajmal's AI assistant has reached its current usage limit. Please try again later. In the meantime, feel free to explore the portfolio! 😊"});
    }
    res.status(500).json({ message: "My AI assistant is temporarily unavailable. Please try again later, or feel free to explore the portfolio! 😊" });
  }
}