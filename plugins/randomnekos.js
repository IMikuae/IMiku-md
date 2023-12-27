import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, usedPrefix, command }) => {
	try {
		let anu = await (await fetch(`https://nekos.best/api/v2/${command}`)).json()
		anu = anu.results[0].url
		if (!anu) throw Error('error : no url')
		if (anu.split('.').pop() == 'gif') {
			let buffer = await sticker(false, anu, packname, author)
			await conn.sendFile(m.chat, buffer, '', '', m)
		} else await conn.sendFile(m.chat, anu, '', `_Random pic: ${command}_`, m)
	} catch (e) {
		console.log(e)
		throw 'Internal server error.'
	}
}

handler.help = ['baka','bored','facepalm','feed','handshake','husbando','kitsune','laugh','lurk','nod','nope','peck','pout','punch','shoot','shrug','sleep','stare','think','thumbsup','tickle','yawn']
handler.tags = ['sticker']
handler.command = /^(baka|bored|facepalm|feed|handshake|husbando|kitsune|laugh|lurk|nod|nope|peck|pout|punch|shoot|shrug|sleep|stare|think|thumbsup|tickle|yawn)$/i

handler.limit = true

export default handler