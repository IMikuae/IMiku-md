import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ organization: `org-wlQ2hrPSZIepQa7QcTaG7Lh5`, apiKey: `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` }); 
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    if (!text) throw new Error(`Contoh:\n${usedPrefix}${command} Apakah Puan Cocok Menjadi Presiden Indonesia?`);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });

    conn.reply(m.chat, `${response.data.choices[0].message.content}`, m);

  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
    } else {
      conn.reply(m.chat, `${error.message}`, m);
    }
  }
}

handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true
handler.register = false

export default handler