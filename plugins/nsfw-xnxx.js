import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command, text }) => {
    if (!text) return m.reply(`Masukan Link Atau Query!\n\nContoh\n${usedPrefix + command} Korean Girl\n${usedPrefix + command} https://www.xnxx.com/video-l7i2lb3/hot_korean_girl_doggystyle_fucked`)
    if (/https:\/\/www.xnxx.com/i.test(text)) {
        let res = await fetch(API('rose', '/dewasa/xnxx/detail', { url: text }, 'apikey'))
        let data = await res.json()
        let cap = `
❏ Title : ${data.result.title}
▧ Duration : ${data.result.duration}
▧ Views : ${data.result.views}
▧ Rating : ${data.result.rating}
▧ Like : ${data.result.like}
▧ Dislike : ${data.result.dislike}

❏ Download Urls :

▧ Grafik Low : ${data.result.download.low}
▧ Grafik High : ${data.result.download.high}
▧ Grafix Hls : ${data.result.download.hls}

❏ Download Dengan Cara :
${usedPrefix}get ${data.result.download.low}
`.trim()
    m.reply(cap)
    } else {
        let res = await fetch(API('rose', '/dewasa/xnxx/search', { query: text }, 'apikey'))
        let data = await res.json()
        if (!data.status) throw `Query "${text}" Yang Anda Masukan Tidak Valid`
        let cap = data.result.map((value, index) => {
            return `
_*${index + 1}. ${value.title}*_
▧ Views: ${value.views}
▧ Quality: ${value.quality}
▧ Duration: ${value.duration}
▧ Link: ${value.url}
`.trim()
        }).join('\n\n')
        m.reply(cap)
    }
}
handler.help = ['xnxx'].map(v => v + ' <query>')
handler.tags = ['nsfw']
handler.command = /^(xnxx)$/i
handler.premium = true
handler.nsfw = true
handler.age = 18
export default handler