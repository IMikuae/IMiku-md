import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/v2/elaina?apikey=zenzkey_ab72cdd5af82'
		conn.sendFile(m.chat, url, null, 'Random elaina', m)
		}
		handler.command = /^(elaina2)$/i
		handler.tags = ['anime']
		handler.help = ['elaina']
		export default handler
