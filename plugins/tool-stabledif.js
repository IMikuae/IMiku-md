import fetch from "node-fetch"
import uploadImage from "../lib/uploadImage.js"
const isHent = /naked|nsfw/i
let handler = async (m, { conn, text: prompt, command, usedPrefix }) => {
    if (!prompt) return m.reply(`Example: \n${usedPrefix + command} jackie chan as neo from matrix, ilustration, highly detailed, artstation`)
    let isHentai = isHent.exec(prompt)
    if (isHentai) return m.reply('Jangan Mencari Hal Aneh!, Ketahuan Owner Bakal Di Banned')
    conn.waifudif = conn.waifudif ? conn.waifudif: {}
    if (m.sender in conn.waifudif) {
        return m.reply("You have undone job, please wait...")
    }
    conn.waifudif[m.sender] = true
    m.reply(wait)
    let url
    const q = m.quoted ? m.quoted: m
    const mime = (q.msg || q).mimetype || q.mediaType || ""
    if (/image\/(jpe?g|png)/.test(mime)) {
        url = await uploadImage(await q.download?.())
    }
    try {
        await conn.sendMessage(m.chat, { image: { url: API("rose", "/image/stable/diffusion", { prompt, style: "Realistic", ratio: "9:16", ...(url ? { init_image: url }: {}), cfg: 7, sampler: "DPM++ 2S a Karras", negative_prompt: "((NSFW)), naked, nude, no clothes, upper body uncovered, breast uncovered, (worst quality, low quality, extra digits:1.4),artist name, nsfw, monochrome, fused face, poorly drawn face, cloned face, false body, false face, bad hands, poorly drawn hands, fused eyes, poorly drawn eyes, liquid eyes, false eyes, scary, ugly" }, "apikey") }, caption: "Prompt: ```" + prompt + "```" }, { quoted: m })
    } catch (e) {
        m.reply("Failed :(")
    } finally {
        delete conn.waifudif[m.sender]
    }
}
handler.help = ["stabledif"]
handler.tags = ["tools"]
handler.command = ["stabledif"]
export default handler