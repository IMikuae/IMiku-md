import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
try {
  let res = await hentaivid()
  res = res.map((v) => `*Title:* ${v.title}\n*Link:* ${v.link}\n*Category:* ${v.category}\n*Share:* ${v.share_count}\n*Views:* ${v.views_count}\n*Video:* ${v.video_1}\n*Video2:* ${v.video_2}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, res, m)
  } catch (e) {
  m.reply(eror)
  }
}
handler.help = ['hentai']
handler.tags = ['haram']
handler.command = /^(hentai)$/i
handler.premium = true

export default handler

async function hentaivid() { 
         return new Promise((resolve, reject) => { 
                 const page = Math.floor(Math.random() * 1153) 
                 axios.get('https://sfmcompile.club/page/' + page) 
                         .then((data) => { 
                                 const $ = cheerio.load(data.data) 
                                 const hasil = [] 
                                 $('#primary > div > div > ul > li > article').each(function(a, b) { 
                                         hasil.push({ 
                                                 title: $(b).find('header > h2').text(), 
                                                 link: $(b).find('header > h2 > a').attr('href'), 
                                                 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''), 
                                                 share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(), 
                                                 views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(), 
                                                 type: $(b).find('source').attr('type') || 'image/jpeg', 
                                                 video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'), 
                                                 video_2: $(b).find('video > a').attr('href') || '' 
                                         }) 
                                 }) 
                                 resolve(hasil) 
                         }) 
         }) 
 }