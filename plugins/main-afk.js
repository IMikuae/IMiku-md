let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`${user.registered ? user.name : conn.getName(m.sender)} is now AFK

Reason ➠ ${text ? '' + text : 'Tanpa Alasan'}`)
}
handler.help = ['afk'].map(v => v + ' <text>')
handler.tags = ['main']
handler.command = /^afk$/i

export default handler