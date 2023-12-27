import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
let res = await Kompas_Global()
  res = res.map((v) => `*Judul:* ${v.judul}\n*Tanggal:* ${v.tanggal}\n*Gambar:* ${v.img}\n*Link:* ${v.link}`).join`\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
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
}
handler.help = ['kompasglobal']
handler.tags = ['news']
handler.command = /^(kompasglobal)$/i
handler.limit = true

export default handler

async function Kompas_Global(){ 
   return new Promise(async(resolve, reject) => { 
     try { 
       const ros = await get('https://www.kompas.com/global') 
       const _data = []; 
       ros('div.row div.col-bs10-7 div.trenLatest div.trenLatest__item').each((i, u) => { 
         var hasil = { 
           judul: ros(u).find('div.trenLatest__box h3.trenLatest__title').text().trim(), 
           tanggal: ros(u).find('div.trenLatest__box div.tren__date').text(), 
           img: ros(u).find('div.trenLatest__img a img').attr('src'), 
           link: ros(u).find('div.trenLatest__img a').attr('href') 
         } 
         _data.push(hasil) 
       }) 
       if (_data.every(x => x === undefined)) return resolve({ developer: '@Zeltoria', mess: 'no result found' }) 
       resolve(_data) 
     } catch(err) { 
       console.error(err) 
     } 
   }) 
 }