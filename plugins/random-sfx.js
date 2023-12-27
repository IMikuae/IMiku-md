import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} 10
NOTE :nanti kalau mau download sondnya tinggal ketik .get(linknya) `
let json = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${text}`)
        let jsons = await json.json()
        let caption = '*⎔┉━「 Search 」━┉⎔*'
        for (let x of jsons.results) {
        caption += `
        *Name :* ${x.name}
*Sound :* ${x.sound}
`}
        return m.reply(caption)
}

handler.command = handler.help = ['sfx']
handler.tags = ['audio']

export default handler
