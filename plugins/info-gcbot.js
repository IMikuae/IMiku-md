let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group VynaaMD_
*Offcial Group*
${link.gc}

*Ytb Vynα Vαlerié. Telegram*
https://t.me/VynaaMD
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
