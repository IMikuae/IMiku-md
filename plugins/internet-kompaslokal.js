import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  try {
  let res = await Kompas_News()
  res = res.map((v) => `*Judul:* ${v.judul}\n*Deskripsi:* ${v.deskripsi}\n*Artikel:* ${v.artikel}\n*Tanggal:* ${v.tanggal}\n*Image:* ${v.img}\n*Link:* ${v.link}`).join`\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  let loadd = [
 '▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%',
 '██▒▒▒▒▒▒▒▒▒▒▒ 10%',
 '████▒▒▒▒▒▒▒▒▒ 30%',
 '███████▒▒▒▒▒▒ 50%',
 '██████████▒▒▒ 70%',
 '█████████████ 100%',
 `${res}`
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Bentar_'})

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['kompaslokal']
handler.tags = ['news']
handler.command = /^(kompaslokal)$/i
handler.limit = true

export default handler

async function Kompas_News(){ 
   return new Promise(async(resolve, reject) => { 
     try { 
       const ros = await get('https://news.kompas.com/') 
       const _data = []; 
       ros('div.col-bs10-7 div.latest div.ga--latest div.row div.col-bs9-3').each((i, u) => { 
         var hasil = { 
           judul: ros(u).find('div.article__grid div.article__box h3.article__title a').text(), 
           deskripsi: ros(u).find('div.article__grid div.article__box div.article__lead').text(), 
           tanggal: ros(u).find('div.article__grid div.article__box div.article__date').text(), 
           artikel: ros(u).find('div.article__grid div.article__boxsubtitle h2').text().trim(), 
           img: ros(u).find('div.article__grid div.article__asset a img').attr('data-src'), 
           link: ros(u).find('div.article__grid div.article__asset a').attr('href') 
         } 
         _data.push(hasil) 
       }) 
       if (_data.every(x => x === undefined)) return resolve({ developer: '@Zeltoria', mess: 'no result found' }) 
       resolve(_data) 
     } catch(err) { 
       console.log(err) 
     } 
   }) 
 }