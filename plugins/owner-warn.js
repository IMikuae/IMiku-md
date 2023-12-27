let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
    	let user = global.db.data.users[m.sender]
        let ban = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
        let warn = global.db.data.users[ban]
        let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
        user.WarnReason = txt 
        if (warn.warning < 5) {
            warn.warning += 1
            m.reply(`*berhasil Warn!* User`)
            conn.sendButton(ban, hiasan, `Kamu Mendapatkan 1Warn Dari Owner\nAlasan: *${txt}* \nWarn Kamu Sekarang: ` + '*' + (warn + 1) + '*' + `\n*Ingat Jika kamu mendapat warn 5 kali kamu akan otomatis ke banned*`, null, [['Customer Service', usedPrefix + 'owner']], null)
        } else if (warn.warning > 5) {
            warn.bannedReason = 'Warn Mencapai 5'
            warn.banned = true
            warn.warning = 0
            m.reply('*Dia sudah kebanned, karena mendapatkan 5 warn*')
            conn.sendButton(ban, decor.hiasan, '*Kamu ke banned karena telah mendapatkan 5 kali warn*', null, [['Owner', usedPrefix + 'owner']], null)
        }
    } else conn.reply(m.chat, '*Siapa yang mau di Warn?\nTag orangnya*', m)
}
handler.help = ['warn @tag']
handler.tags = ['owner']
handler.command = /^warn$/i
handler.mods = true

export default handler
