import uploadImage from '../lib/uploadImage.js'
import { Sticker } from 'wa-sticker-formatter'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    m.reply(wait)
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : ' ')}/${encodeURIComponent(bawah ? bawah : ' ')}.png?background=${url}`
    let stiker = await createSticker(meme, false, '', '')
	await conn.sendFile(m.chat, stiker, '', '', m, '')
}
handler.help = ['smeme <text>|<text>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i
handler.limit = true
export default handler

async function createSticker(img, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: stickpack,
		author: stickauth,
		quality
	}
	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}