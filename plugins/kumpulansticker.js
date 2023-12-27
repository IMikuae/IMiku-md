import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'patrick':
	  let res = 'https://api.zeeoneofc.my.id/api/telegram-sticker/patrick?apikey=RCo6vEcS'
let stiker = await sticker(null, res, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
		break;
	  case 'smug':
	  let p = await fetch(`https://api.waifu.pics/sfw/smug`)
  let a = await p.json()
  if (a.url) {
let stiker = await sticker(null, a.url, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
   } 
		break;
		  case 'hug':		
  let ress = await fetch(global.API('https://api.waifu.pics', '/sfw/hug'))
  let json = await ress.json()
  let stker = await sticker(null, json.url, global.packname, global.author)
  if (stker) return conn.sendFile(m.chat, stker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
		break;		
		  case 'kis':
		  let rs = await fetch(global.API('https://api.waifu.pics', '/sfw/kiss'))
  let jon = await rs.json()
  let sker = await sticker(null, jon.url, global.packname, global.author)
  if (sker) return conn.sendFile(m.chat, sker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
		break;
		  case 'sponsbob':
		  let s = 'https://api.zeeoneofc.my.id/api/telegram-sticker/sponsbob?apikey=RCo6vEcS'
let sr = await sr(null, s, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, sr, 'sticker.webp', '', m, false, { asSticker: true })
		break;
	  default:
	} 
  };
  
  handler.help = ['patrick', 'smug', 'hug', 'kis', 'sponsbob'];
  handler.tags = ['sticker'];
  handler.command = /^(patrick|smug|hug|kis|sponsbob)$/i;
  handler.limit = true
  
  export default handler;
  
