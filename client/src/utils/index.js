import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";
export function getRandomPrompt(prompt) {
  console.log("here");
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `downlaod-${_id}.jpg`);
}
