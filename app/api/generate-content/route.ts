import 'groq-sdk/shims/web'; // Must be the first import for Next.js compatibility
import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    console.log("Received prompt:", prompt);

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    console.log("GROQ_API_KEY exists:", !!apiKey);
    console.log("GROQ_API_KEY length:", apiKey?.length);

    if (!apiKey) {
      console.error("Groq API key is missing");
      return NextResponse.json({ error: "Groq API key not configured." }, { status: 500 });
    }

    const groq = new Groq({
      apiKey: apiKey,
    });

    console.log("Attempting to generate content...");
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    let text = completion.choices[0]?.message?.content || "";

    // Remove content within <think>...</think> tags
    text = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

    console.log("Content generated successfully");

    return NextResponse.json({ content: text }, { status: 200 });
  } catch (error: any) {
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json({ error: `Failed to generate content: ${error.message}` }, { status: 500 });
  }
} 

