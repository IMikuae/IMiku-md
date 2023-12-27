import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch('https://api.akuari.my.id/randomimage/ppcouple')
let url = await anu.json()
let { hasil } = url 
let weem = '𝐑𝐚𝐧𝐝𝗼𝗺 𝐏𝐫𝗼𝐟𝐢𝐥𝐞 𝐂𝗼𝐮𝐩𝐥𝐞'
m.reply(wait)
await conn.sendFile(m.chat, hasil.cowok, 'ppcouple.png',  '𝙱𝚘𝚢𝚜', m)
await conn.sendFile(m.chat, hasil.cewek, 'ppcouple.png',  '𝙶𝚒𝚛𝚕𝚜', m)
}
handler.help = ['ppcp2']
handler.tags = ['ppcouple']
handler.command = /^(ppcp2)$/i
handler.limit = true

export default handler