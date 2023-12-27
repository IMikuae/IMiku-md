import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nama Heronya?`
  let res = await HeroML(text)
  let hero = res
  let ini = res.gameplay_info
  let story = res.story_info_list
  let teks = `*Name:* ${text}\n*Alias:* ${story.Alias}\n*Origin:* ${story.Origin}\n*Species:* ${story.Species}\n*Gender:* ${story.Gender}\n*Affiliation:* ${story.Affiliation}\n*Weapon:* ${story.Weapons}\n*Abilities:* ${story.Abilities}\n*Height:* ${story.Height}\n`
  
  let kntl = `\n*Realese:* ${hero.release}\n*Role:* ${hero.role}\n*Specialty:* ${hero.specialty}\n*Lane:* ${hero.lane}\n*Price:* ${hero.price}\n\n*Durability:* ${ini.durability}\n*Offense:* ${ini.offense}\n*Control:* ${ini.control_effect}\n*Difficulty:* ${ini.difficulty}\n\n`
  
  res = res.attributes.map((v) => `*Attributes:* ${v.attribute}\n*Level:* ${v.level_1}\n*Growth:* ${v.growth}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  
  conn.sendFile(m.chat, hero.hero_img, '', teks + kntl + res, m)
  } 
handler.help = ['heroml']
handler.tags = ['search']
handler.command = /^(heroml)$/i
handler.limit = true

export default handler

async function HeroML(querry) { 
   return new Promise(async (resolve, reject) => { 
     try { 
       let upper = querry.charAt(0).toUpperCase() + querry.slice(1).toLowerCase() 
       const { data, status } = await axios.get('https://mobile-legends.fandom.com/wiki/' + upper); 
       if (status === 200) { 
         const $ = cheerio.load(data); 
         let atributes = [] 
         let rill = [] 
         let rull = [] 
         let rell = [] 
         let hero_img = $('figure.pi-item.pi-image > a > img').attr('src') 
         let desc = $('div.mw-parser-output > p:nth-child(6)').text() 
         $('.mw-parser-output > table:nth-child(9) > tbody > tr').each((u, i) => { 
           let _doto = [] 
           $(i).find('td').each((o, p) => { _doto.push($(p).text().trim()) }) 
           if (_doto.length === 0) return 
           atributes.push({ 
             attribute: _doto[0], 
             level_1: _doto[1], 
             level_15: _doto[2], 
             growth: _doto.pop() 
           }) 
         }) 
         $('div.pi-item.pi-data.pi-item-spacing.pi-border-color > div.pi-data-value.pi-font').each((i, u) => { rill.push($(u).text().trim()) }) 
         $('aside.portable-infobox.pi-background.pi-border-color.pi-theme-wikia.pi-layout-default').each((i, u) => { rull.push($(u).html()) }) 
         const _$ = cheerio.load(rull[1]) 
         _$('.pi-item.pi-data.pi-item-spacing.pi-border-color').each((l, m) => { 
           rell.push(_$(m).text().trim().replace(/\n/g, ':').replace(/\t/g, '')) 
         }) 
         const result = rell.reduce((acc, curr) => { 
           const [key, value] = curr.split('::'); 
           acc[key] = value; 
           return acc; 
         }, {}); 
         let anu = { 
           hero_img: hero_img, 
           desc: desc, 
           release: rill[0], 
           role: rill[1], 
           specialty: rill[2], 
           lane: rill[3], 
           price: rill[4], 
           gameplay_info: { 
             durability: rill[5], 
             offense: rill[6], 
             control_effect: rill[7], 
             difficulty: rill[8], 
           }, 
           story_info_list: result, 
           story_info_array: rell, 
           attributes: atributes 
         } 
         resolve(anu) 
       } else if (status === 400) { 
         resolve({ mess: 'hh'}) 
       } 
       console.log(status) 
     } catch (err) { 
       resolve({ mess: 'asu'}) 
     } 
   }) 
 }