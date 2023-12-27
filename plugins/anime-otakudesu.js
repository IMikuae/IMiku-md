import { otakudesu } from '@xct007/frieren-scraper'
import axios from 'axios'
import fs from 'fs'
let handler = async(m, { conn, usedPrefix, command, text, isPrems }) => {
    if (!text && !(/otakulatest|otakudesulatest|otakudesu-latest/i.test(command))) return m.reply(`Masukan Query Atau Link!\n\nContoh :\n${usedPrefix + command} Tonikaku Kawai\n${usedPrefix + command} https://otakudesu.lol/anime/tonikaku-ni-kawaii-sub-indo/`)
    if (/otakulatest|otakudesulatest|otakudesu-latest/i.test(command)) {
        let result = await otakudesu.latest()
        let teks = result.map((v, i) => {
            return `
_*${i + 1}. ${v.title}*_
❃ Hari : ${v.day}
❃ Tanggal : ${v.date}
❃ Link : ${v.url}
`.trim()
        }).filter(v => v).join('\n\n')
        conn.adReply(m.chat, teks, result[0].title, '', fs.readFileSync('./media/otakudesu.jpg'), result[0].url, m)
    } else if (text.startsWith('https://otakudesu.lol/anime')) {
        let result = await otakudesu.detail(text)
        let caption = result.url.episodes.reverse().map((v, i) => {
            return `
_*${i + 1}. ${v.title}*_
❃ Link : ${v.url}
`.trim()
        }).join('\n\n')
        let teks = `
❃ Title : ${result.judul}
❃ Score : ${result.skor}
❃ Produser : ${result.produser}
❃ Status : ${result.status}
❃ Total Eps : ${result.total_episode}
❃ Durasi : ${result.durasi}
❃ Tanggal Rilis : ${result.tanggal_rilis}
❃ Studio : ${result.studio}
❃ Genre : ${result.genre}
`.trim()
        let msg = await conn.sendFile(m.chat, result.thumbnail, 'thumbnail.jpeg', teks, m)
        conn.adReply(m.chat, caption, result.judul, '', fs.readFileSync('./media/otakudesu.jpg'), text, msg)
    } else if (text.startsWith('https://otakudesu.lol/episode')) {
        let result = await otakudesu.detail(text)
        let d1 = await originalUrl(result.urls['360p'] ? result.urls['360p'][4].url: result.urls['Mp4 360p'][4].url)
        let d2 = await originalUrl(result.urls['480p'] ? result.urls['480p'][4].url: result.urls['Mp4 480p'][4].url)
        let d3 = await originalUrl(result.urls['720p'] ? result.urls['720p'][4].url: result.urls['Mp4 720p'][4].url)
        let caption = `
❏ _*Download Resolusi 360p:*_
▧ Link : ${d1}

❏ _*Download Resolusi 480p:*_
▧ Link : ${d2} ${isPrems ? `

❏ _*Download Resolusi 720p:*_
▧ Link : ${d3}`: ''}


❏ _*Cara Mendownload Anime :*_
${usedPrefix}mega ${d1}
`.trim()
        conn.adReply(m.chat, caption, result.title, '', fs.readFileSync('./media/otakudesu.jpg'), text, m)
    } else {
        let result = await otakudesu.search(text)
        let teks = result.map((v, i) => {
            return `
_*${i + 1}. ${v.title}*_
❃ Status : ${v.status}
❃ Genre : ${v.genres}
❃ Link : ${v.url}`.trim()
        }).filter(v => v).join('\n\n')
        conn.adReply(m.chat, teks, result[0].title, '', fs.readFileSync('./media/otakudesu.jpg'), result[0].url, m)
    }
}
handler.help = ['otakudesu', 'otakudesu-latest']
handler.tags = ['internet']
handler.command = /^(otakudesu|otakudesu-latest|otakudesulatest|otakulatest)$/i
handler.limit = true
export default handler

async function originalUrl(url) {
    return (await axios(url)).request.res.responseUrl
}

const delay = time => new Promise(res => setTimeout(res, time))