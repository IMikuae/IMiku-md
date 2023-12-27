import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
try {
  let res = await tiktok(text)
  let caption = `*ID:* ${res.id}\n*Title:* ${res.title}\n*Created:* ${res.created_at}`
  await conn.sendMessage(m.chat, { video: { url: res.video.noWatermark }, caption: caption }, { quoted: m })
  } catch (e) {
  m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
  }
  }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler

async function tiktok(url) { 
   return new Promise((resolve, reject) => { 
     if (!url) return reject(new Error("url input is required")); 
     axios.get("https://api.tiklydown.eu.org/api/download", { params: { url } }) 
       .then((b) => resolve(b.data)) 
       .catch(reject); 
   }); 
 }