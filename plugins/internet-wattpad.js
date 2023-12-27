import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let res = await WattPad(text)
  res = res.map((v) => `*Title:* ${v.title}\n*Reads:* ${v.reads}\n*Vote:* ${v.vote}\n*Chapter:* ${v.chapter}\n*Link:* ${v.link}\n*Description:* ${v.desc}\n*Image:* ${v.thumb}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, res, m)
  }
handler.help = ['wattpad']
handler.tags = ['search']
handler.command = /^(wattpad)$/i
handler.limit = true

export default handler

async function WattPad(judul) { 
   return new Promise(async (resolve, reject) => { 
     try { 
       const { data } = await axios.get('https://www.wattpad.com/search/' + judul, { 
         headers: { 
           cookie: 'wp_id=d92aecaa-7822-4f56-b189-f8c4cc32825c; sn__time=j%3Anull; fs__exp=1; adMetrics=0; _pbkvid05_=0; _pbeb_=0; _nrta50_=0; lang=20; locale=id_ID; ff=1; dpr=1; tz=-8; te_session_id=1681636962513; _ga_FNDTZ0MZDQ=GS1.1.1681636962.1.1.1681637905.0.0.0; _ga=GA1.1.1642362362.1681636963; signupFrom=search; g_state={"i_p":1681644176441,"i_l":1}; RT=r=https%3A%2F%2Fwww.wattpad.com%2Fsearch%2Fanime&ul=1681637915624', 
           'suer-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0' 
         } 
       }), 
         $ = cheerio.load(data), 
         limk = 'https://www.wattpad.com', 
         _data = []; 
       $('.story-card-container > ul.list-group.new-list-group > li.list-group-item').each(function (i, u) { 
         let link = limk + $(u).find('a').attr('href') 
         let judul = $(u).find('a > div > div.story-info > div.title').text().trim() 
         let img = $(u).find('a > div > div.cover > img').attr('src') 
         let desc = $(u).find('a > div > div.story-info > .description').text().replace(/\s+/g, ' ') 
         let _doto = [] 
         $(u).find('a > div > div.story-info > .new-story-stats > .stats-item').each((u, i) => { 
           _doto.push($(i).find('.icon-container > .tool-tip > .sr-only').text()) 
         }) 
         _data.push({ 
           title: judul, 
           thumb: img, 
           desc: desc, 
           reads: _doto[0], 
           vote: _doto[1], 
           chapter: _doto[2], 
           link: link, 
         }) 
       }) 
  
       resolve(_data) 
     } catch (err) { 
       console.error(err) 
     } 
   }) 
 }