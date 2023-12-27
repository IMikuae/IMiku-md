let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*trap dikirim di chat pribadi*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
let g = await fetch(`https://waifu.pics/api/nsfw/trap`)
let f = await g.json()
if (f.url) {
 conn.sendFile(m.sender, f.url, '', '', m)
 }
}
handler.help = ['trap']
handler.tags = ['anime']
handler.command = /^(trap)$/i

handler.limit = 15

export default handler