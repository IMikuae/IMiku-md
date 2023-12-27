import fetch from "node-fetch"


let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .animedif highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(wait)
let anu = await Animedif(text)
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
}

handler.help = ['animedif']
handler.tags = ['ai']
handler.command = /^(animedif)$/i
handler.limit = true
export default handler 

async function Animedif(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Ryzan/fantasy-diffusion-v1",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}