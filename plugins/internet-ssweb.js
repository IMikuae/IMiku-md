let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Masukkan Linknya Kak', m)
   m.reply('_𝚃𝚞𝚗𝚐𝚐𝚞 𝚂𝚎𝚋𝚎𝚗𝚝𝚊𝚛⏲️_')
   let txt = args[0].startsWith('https://') ? args[0].toLowerCase() : 'https://' + args[0].toLowerCase()
   let img = API('xzn', '/api/ssweb', { type: 'dekstop', url: txt }, 'apikey')
   await conn.sendFile(m.chat, img, 'ssweb.jpg', 'Ini Dia Kak' , m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
handler.limit = true
export default handler