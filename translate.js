import fetch from "node-fetch";

export const translate = async (target = "en") => {
  const { translatedText } = await fetch(
    "https://libretranslate.com/translate",
    {
      method: "POST",
      body: JSON.stringify({
        q: "Happy Birthday, Lucy",
        source: "en",
        target: target,
        api_key: process.env.API_KEY,
      }),
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());
  return { message: translatedText };
};
