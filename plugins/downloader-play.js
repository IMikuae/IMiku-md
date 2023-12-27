import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`
  let res = await yts(text)
  let vid = res.videos[0]
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `*〔 Y O U T U B E P L A Y 〕*

𝐓𝐢𝐭𝐥𝐞: ${title}
𝐔𝐫𝐥: ${url}
𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝗼𝐧 ${description}
𝐏𝐮𝐛𝐥𝐢𝐬𝐡𝐞𝐝: ${publishedTime}
𝐃𝐮𝐫𝐚𝐭𝐢𝗼𝐧: ${durationH}
𝐕𝐢𝐞𝐰: ${viewH}`

conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: vap,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: "© VynaaMD 0.9",
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
handler.limit = 5
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
