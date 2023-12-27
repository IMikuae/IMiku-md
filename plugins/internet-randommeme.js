import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let p = await fetch(`https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random`)
  let a = await p.json()
 if (a.data.url) {
 conn.sendFile(m.sender, a.data.url, '', m)
 }
  }
handler.command = /^(randommeme)$/i
handler.tags = ['fun']
handler.help = ['randommeme']

export default handler
