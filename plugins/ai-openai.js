import fetch from "node-fetch";
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'Example: .ai how are you'
  let anu = await ChatGpt(text)
  m.reply(anu)
  }
handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true
handler.register = false

export default handler

async function ChatGpt(you_qus) {
  let baseURL = "https://free-api.cveoy.top/";
  try {
    const response = await fetch(baseURL + "v3/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "origin": "https://ai1.chagpt.fun",
        "Referer": baseURL
      },
      body: JSON.stringify({
        prompt: you_qus
      })
    });
    
    const data = await response.text();
    return data; // Return the response data if needed
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}