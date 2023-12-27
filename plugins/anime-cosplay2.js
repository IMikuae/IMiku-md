 let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(` *cosplay dikirim private chat*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.sender, `https://zeltoria.site/api/random/cosplay`, null, `Nih *${name}*`, m)
}
handler.help = ['cosplay']
handler.tags = ['nsfw']
handler.command = /^(cosplay)$/i

handler.premium = true

export default handler
