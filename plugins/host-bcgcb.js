import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
 for (let id of groups) {
 let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
 await conn.reply(id, '────━┅ *BROADCAST* ┅━────\n' + text, 0, {
    contextInfo: {
        externalAdReply : {
            showAdAttribution: true,
            mediaType: 1,
            title: wm,
            thumbnail: await (await fetch(elainajpg.getRandom())).buffer(),
            renderLargerThumbnail: true,
            mediaUrl: hwaifu.getRandom(),
            sourceId: 'Biar Fotonya Ga Satu',
            sourceUrl: ''
        }
    }
  }) 
  }
  m.reply('*D O N E !*')
}
handler.command = ['bcgcb']
handler.tags = ['owner']
handler.help = ['bcgcb']

handler.rowner = true

export default handler
