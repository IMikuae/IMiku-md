import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
  const caption = `─────❑ 「 *B A N K* 」 ❑─────

📛 *Name :* ${name}
⚡ *Tags :* @${m.sender.split`@`[0]}
🏛️ *Bank :* ${user.bank}
💹 *Money :* ${user.money}`

conn.reply(m.chat, caption, m)

}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = true
export default handler