import { stalkff, stalkml } from '../lib/scrape.js'
let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (command == 'stalkff') {
        if (!text) throw 'Masukan id FreeFire mu!'
        let result = await stalkff(text)
        m.reply(result.nickname)
    }
    if (command == 'stalkml') {
        let [id, zoneId] = text.split(',');
        if (!id || !zoneId) throw `Example: ${usedPrefix + command} 84830127,2169`
        let result = await stalkml(id, zoneId)
        m.reply(result.nickname)
    }
}
handler.help = ['stalkff', 'stalkml']
handler.tags = ['tools']
handler.command = /^(stalkff|stalkml)$/i
handler.limit = true
export default handler