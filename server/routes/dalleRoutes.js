import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
router.route("/").get((req, res) => {
  res.send("Hello from DALL-E api");
});
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiRes = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log("got ai res");
    const image = aiRes.data.data[0].b64_json;
    console.log("got ai image");
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log("got an error");
    console.log(error);
  }
});
export default router;
