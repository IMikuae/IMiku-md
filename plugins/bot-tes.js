import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Bot aktif kak*\n@${m.sender.split('@')[0]}`
m.reply(info) 
}
handler.customPrefix = /^(tes|tess|test|bot|miku)$/i
handler.command = new RegExp

export default handler