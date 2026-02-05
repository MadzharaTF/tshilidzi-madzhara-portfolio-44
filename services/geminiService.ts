
import { GoogleGenAI, Type } from "@google/genai";

export const generateBrandingStatement = async (background: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on this background: "${background}", generate a professional personal branding statement for an AI/ML portfolio. Focus on impact and technical mastery. Keep it under 2 sentences.`,
  });
  return response.text;
};

export const generateResumeBullets = async (projectTitle: string, description: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Transform this project description into 3 high-impact resume bullet points using the STAR method (Situation, Task, Action, Result). Project: ${projectTitle}. Description: ${description}`,
  });
  return response.text;
};
