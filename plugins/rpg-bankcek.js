import fs from "fs"
let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    let user = global.db.data.users[who]
    const caption = `
 °^      「 *BANK CEK* 」     °^
│ 👤 Name: ${user.registered ? user.name: conn.getName(m.sender)}
│ ${rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
│ ${rpg.emoticon('money')} Money: ${user.money}
│ 🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 🌟 Status: ${who.split`@`[0] == info.nomorown ? 'Developer': user.premiumTime >= 1 ? 'Premium User': user.level >= 1000 ? 'Elite User': 'Free User'}
│ 📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
    m.reply(caption) 
    }
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^bank$/i

handler.register = true
handler.group = true
handler.rpg = true

export default handler