import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `
⌬〡 *Nama Bot:* %me
⌬〡 *Nama:*  %name 
⌬〡︎ *Premium:* %prems Ⓟ
⌬〡︎ *Limit:* %limit Ⓛ
⌬〡︎ *Role:* %role
⌬〡︎︎ *Level:* %level
⌬〡︎︎ *Xp:* %exp / %maxexp
⌬〡︎︎ *Total Xp:* %totalexp

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
Berikut Adalah Fitur Game.
%readmore
`.trimStart(),
  header: '╭─────≼ %category ≽',
  body: '╎❖ %cmd %isPremium %islimit',
  footer: '╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢',
  after: global.wm,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let tags = {
'game': 'Games Feature',
}
 
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, eris} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, eris, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    global.hwaifu = ['https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/46/ad/05/46ad0505d33a2c2359f84ed9b867a58c.jpg',
'https://i.pinimg.com/originals/23/b7/fb/23b7fb922770e139a2a57b1a443a2180.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/a4/a1/74/a4a1740e565f4205eb3f700e1936e064.jpg',
'https://i.pinimg.com/originals/f9/8d/2c/f98d2c3f64e50ba6c8efd9fdc7cf0093.png',
'https://i.pinimg.com/originals/29/a4/b4/29a4b4573f993d7d6abb45843f529892.jpg',
'https://i.pinimg.com/originals/40/de/84/40de84ce2ee376d8fae8ff5863d6edb0.jpg',
'https://i.pinimg.com/originals/b6/f5/b7/b6f5b7d59fd4f332b3820db38612a5a0.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/b5/94/ef/b594ef0774d29f5a05cd182994aa354e.jpg',
'https://i.pinimg.com/originals/0f/ed/3f/0fed3f4c456158c506d88f5867ca93d2.jpg',
'https://i.pinimg.com/originals/1b/7a/a8/1b7aa80191b83b888e9ea6042f090763.jpg',
'https://i.pinimg.com/originals/72/7a/08/727a08cdf67b62c2ba49e7308c09a1cd.jpg',
'https://i.pinimg.com/originals/86/93/75/8693757390b9d5b83fb8e40ff9ea876f.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/b8/b3/f3/b8b3f397fead38a988174df75d481202.png',
'https://i.pinimg.com/originals/7a/e0/55/7ae055891f8200cd62ec76a40d47118d.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/41/10/c6/4110c64fc91a1c85de02166f67aff7ad.jpg',
'https://i.pinimg.com/originals/45/11/41/451141522a9086f56efc0da3fdac1957.jpg',
'https://i.pinimg.com/originals/c1/4e/c7/c14ec7dffbc682f78c52ad8a295b8831.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/1f/95/15/1f95156c3d8e2b339a22b3bad2f69a8a.png',
'https://i.pinimg.com/originals/bb/1a/12/bb1a1249dbc73736ab534fdd52bdc74c.jpg',
'https://i.pinimg.com/originals/d5/58/a7/d558a745f2452d851d480025ab341537.jpg',
'https://i.pinimg.com/originals/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg',
'https://i.pinimg.com/originals/9e/53/a9/9e53a92ee711d979b9bdbb6212115fe0.jpg',
'https://i.pinimg.com/originals/c6/16/d9/c616d9a871ed3cd9fb6a46efb7f92d95.jpg',
'https://i.pinimg.com/originals/ac/f0/29/acf029047efffe57999fa876554cbf1d.jpg',
'https://i.pinimg.com/originals/ae/86/3b/ae863b64ca579f05008dbf027b04988f.jpg',
'https://i.pinimg.com/originals/d5/65/43/d56543a959da518e08012b4db93747bb.jpg',
'https://i.pinimg.com/originals/ed/3c/e2/ed3ce276ca71e5bfec1cf2fbfc5561e1.jpg',
'https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/db/a4/13/dba413518c0a470a5e81cafa431281da.jpg',
'https://i.pinimg.com/originals/3b/d9/aa/3bd9aa880d23dc3262e119ca09345e99.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/fb/f7/a9/fbf7a92af75577e33a564ce490154c8f.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/fc/51/4e/fc514e2f4c23eb96721611b483edc28c.jpg',
'https://i.pinimg.com/originals/bb/a4/98/bba49848bc4369333f4128b62fc64258.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/83/e5/71/83e5710c42b9e8b9e1a4b6381c4535fe.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/16/14/9c/16149c94a7c0f753230b1edbd03ab3e6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/6d/bc/61/6dbc616311268a25b0ee0e1bd4de13b6.jpg',
'https://i.pinimg.com/originals/60/34/18/603418ea5c35839914a1071e134add8b.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/ed/ea/37/edea37b6f876bfc8f59bbae4d43e26d7.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/f6/20/b4/f620b4b1c2aaf096455952465db8a980.jpg',
'https://i.pinimg.com/originals/97/50/73/9750731b4b004da61d44fe01dbe93d85.jpg',
'https://i.pinimg.com/originals/a0/55/41/a055419e96bc61a5990c575af10ba99e.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/c4/e4/1d/c4e41d096e7585a7e6245e852ece25c2.jpg',
'https://i.pinimg.com/originals/87/cf/bc/87cfbc189e773ed9294bccfd50a4fbc7.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/c5/42/f8/c542f83b992e51c6d2519f07489b1dec.jpg',
'https://i.pinimg.com/originals/96/29/1e/96291e9abbf311b8fc6c8c3f9f8ae059.jpg',
'https://i.pinimg.com/originals/e5/1a/8d/e51a8d35d2b717fa757fa2abf053a2c7.jpg',
'https://i.pinimg.com/originals/47/18/af/4718afcd517c8e7e07cc9dba48b3b770.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/ab/f9/50/abf950c9aa1c4710437d9acc83078f87.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/f1/f7/fc/f1f7fca39eba7d64e50749da5406247c.jpg',
'https://i.pinimg.com/originals/71/18/96/711896c067c28814ec9ec9c25d4a3ba9.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/8f/fe/d4/8ffed485ed8b6db07067e452f8399fff.jpg',
'https://i.pinimg.com/originals/db/b6/46/dbb6463c9134591aa79369f325877e03.jpg',
'https://i.pinimg.com/originals/9f/23/1a/9f231a6acc906f95ff3f917211b9abda.png',
'https://i.pinimg.com/originals/b9/a9/66/b9a9669f0fbbe75e780adad301601b43.jpg',
'https://i.pinimg.com/originals/86/ed/26/86ed265f2dbb22a48bbc612f59303508.png',
'https://i.pinimg.com/originals/da/ae/25/daae25409adec418a9b6f6c5dcdecd47.jpg',
'https://i.pinimg.com/originals/a4/6d/fa/a46dfad749d0577366e9ea2db6cc305e.jpg',
'https://i.pinimg.com/originals/09/5b/4d/095b4d0ce48f40eca7ad23e43e85ab9a.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/db/cf/dc/dbcfdc263095906eabf7e06099ebaef0.png',
'https://i.pinimg.com/originals/89/14/0d/89140d3ef976904013f672fea0157b7e.png',
'https://i.pinimg.com/originals/cf/4f/cf/cf4fcf2036f0b5b974f146f2c0ba81db.jpg',
'https://i.pinimg.com/originals/93/62/9e/93629ee9ab27043076bce2b1f22f9193.jpg',
'https://i.pinimg.com/originals/99/6b/c4/996bc4049d632bdbf7d9bc24dc8081f0.png',
'https://i.pinimg.com/originals/f2/6d/35/f26d354b1421546ae993c83f5c7bcfb0.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/08/8f/1d/088f1dc58092b60652e05cc941ee0fbd.jpg',
'https://i.pinimg.com/originals/14/17/dd/1417dd63009eea0b63252076f3b405e6.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
]
conn.sendMessage(m.chat, {
	text: text,
	contextInfo: {
	externalAdReply: {
	title: global.botdate,
	body: global.author,
thumbnailUrl: hwaifu.getRandom(), 
	sourceUrl: global.myweb,
	mediaType: 1,
	renderLargerThumbnail: true
	}}})

  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['gamemenu']
handler.tags = ['victoriamenu']
handler.command = /^(gamemenu|gamehelp|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
