 let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*File dikirim di chat pribadi*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
let res = await fetch(`https://api.waifu.pics/sfw/shinobu`)
let a = await res.json() 
if (a.url) {
conn.sendFile(m.sender, a.url, null, '', m)
}
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i

handler.premium = true

export default handler
