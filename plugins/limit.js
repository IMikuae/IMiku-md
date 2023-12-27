let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (args[0] == 'reset') {
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*Berhasil Direset ${lim} / User*`, m)
		}		
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    let caption = ` ––––『 *ɪ ɴ ғ ᴏ  ᴜ s ᴇ ʀ* 』––––    
◦ *Username:* ${user.registered ? user.name : conn.getName(who)}
◦ *ʟɪᴍɪᴛ:* ${ke1}
◦ *ᴇxᴘ:* ${ke2}
◦ *Status:* ${who.split`@`[0] == user.premiumTime >= 1 ? 'Premium User' : user.level >= 1000 ? 'Elite User' : 'Free User'}
◦ *ᴍᴏɴᴇʏ:* ${ke3}
`
  conn.reply(m.chat, caption, m)

}
handler.help = ['limit']
handler.tags = ['main']
handler.command = /^(limit|money)$/i
export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}