import { youtube } from '@xct007/frieren-scraper'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
    conn.room = conn.room ? conn.room: {}
    let text = (args.length > 1 ? args.slice(1).join(' '): '') || ''
    if (!text) return m.reply(`Masukan Query!\n\nContoh:\n${usedPrefix + command} audio Grand Escape\n${usedPrefix + command} video Grand Escape Amv`)
    if (!/audio|video/i.test(args[0])) return m.reply(`Masukan Query!\n\nContoh:\n${usedPrefix + command} audio Grand Escape\n${usedPrefix + command} video Grand Escape Amv`)
    let id = 'youtube_' + m.sender
    try {
        conn.room[id] = true
        let { title, uploaded, duration, views, url, thumbnail } = (await youtube.search(text))[0]
        let caption = `*${decor.htki} Y T - P L A Y ${decor.htka}*

🎧 *Title:* ${title}
📤 *Published:* ${uploaded}
⏰ *Duration:* ${duration}
👁️ *Views:* ${views}

🔗 *Url:* ${url}

*L O A D I N G. . .*
`.trim()
        let { audio, video } = await youtubedl(url).catch(async _=> await youtubedlv2(url)) 
        if (isPrems ? (audio['128kbps'].fileSize > 100000 || video['360p'].fileSize > 100000): (audio['128kbps'].fileSize > 50000 || video['360p'].fileSize > 50000)) return m.reply('_Gagal Mendownload, Ukuran File Terlalu Besar!_')
        let msg = await conn.adReply(m.chat, caption, title, 'Playing 🔊', thumbnail, url, m)
        if (/play/i.test(command)) {
            switch (args[0]) {
                case 'audio':
                    conn.sendFile(m.chat, await audio['128kbps'].download(), title + '.mp3', '', msg, false, { mimetype: 'audio/mpeg' })
                    break
                case 'video':
                    conn.sendFile(m.chat, await video['360p'].download(), title + '.mp4', title, msg)
                    break
                default:
                    return
            }
        }
    } catch (e) {
        return m.reply('Failed :(')
    } finally {
        delete conn.room[id]
    }
}
handler.help = ['play'].map(v => v + ' <type> <query>')
handler.tags = ['downloader']
handler.command = /^play2$/i
handler.limit = true
export default handler