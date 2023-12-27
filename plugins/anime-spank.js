import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let p = await fetch(`https://nekos.life/api/v2/img/spank`)
  let a = await p.json()
  if (a.url) {
let stiker = await sticker(null, a.url, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
   } 
} 
handler.tags = ['sticker']
handler.help = ['spank']
handler.tags = ['anime']
handler.command = /^(spank)$/i
handler.register = true
export default handler


