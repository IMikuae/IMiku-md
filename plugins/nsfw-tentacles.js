let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(glasses), null, `Nih *${name}*`, m)
}
handler.help = ['tentacles']
handler.tags = ['nsfw']
handler.command = /^(tentacles)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const glasses = [
    "https://media.discordapp.net/attachments/531827778664923137/773578218938695710/7551vtd641x51.png",
    "https://media.discordapp.net/attachments/443583003650818048/764789074191581194/c0ae953.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/745212696802361375/9d37dd9.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/744562136222662746/image0.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758733958905947/4345411.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758644368572516/19493144.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758735456010391/21141020.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758825008726226/23076769.webp",
    "https://media.discordapp.net/attachments/443583003650818048/756081978981482566/1c1bea1.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/725800863641239562/f83903e.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/725565213679812638/82106129_p0.png",
    "https://media.discordapp.net/attachments/531827778664923137/745758890301587606/978374.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758789973573682/15646561.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758825251995818/21918951.webp",
    "https://media.discordapp.net/attachments/443583003650818048/755158343869399223/d4e1d21.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758792893071430/17791043.webp",
    "https://media.discordapp.net/attachments/531827778664923137/749792395364794368/lusciousnet_lusciousnet_jsoq-hentai-tentacles-8_980029619.png",
    "https://media.discordapp.net/attachments/443583003650818048/754533144618598400/danbooru.donmai.us_4094538_1girl_bangs_black_dress_black_gloves_blonde_hair_blue_eyes_blunt_bangs_bl.jpg",  
    "https://media.discordapp.net/attachments/531827778664923137/769442458492731412/1603519760709.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/730975135481462864/82523373_p5.png",
    "https://media.discordapp.net/attachments/531827778664923137/745758791915536484/16597833.webp",
    "https://media.discordapp.net/attachments/531827778664923137/757059549768450079/1.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/757059546903740426/3.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758644166983790/4345075.webp",
    "https://media.discordapp.net/attachments/443583003650818048/729892051273121810/cf26fdb.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758791722860756/18232364.webp",
    "https://media.discordapp.net/attachments/531827778664923137/765844796207267840/image0.png",
    "https://media.discordapp.net/attachments/531827778664923137/745758645093925034/4345408.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758644871757894/18232408.webp",
    "https://images-ext-2.discordapp.net/external/NYZZ15GoH0llotcCWawIKfD9pg2khWOEs6oHWWYkNFA/https/i.redd.it/56vqrruvxn651.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/754521630008672336/danbooru.donmai.us_4094532_2girls_aki_rosenthal_arms_up_bangs_bare_shoulders_between_breasts_black_d.jpg",  
    "https://media.discordapp.net/attachments/531827778664923137/770327984414392331/5146a6a.gif",
    "https://media.discordapp.net/attachments/443583003650818048/731211078423412736/image0.png",
    "https://media.discordapp.net/attachments/443583003650818048/744562159391998063/image0.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758891823988746/20734855.webp",
    "https://images-ext-2.discordapp.net/external/Z1hn_vbAUsLF585snuh1ZsiWRN7NtjymYFTk2KLYo5k/https/danbooru.donmai.us/data/981f5809de874854c2aadafd7a0ac825.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758824819851334/23492073.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758791307362344/19460609.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758792670642237/784690.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758890775281734/3815739.webp",
    "https://media.discordapp.net/attachments/443583003650818048/731211085822034011/image0.png",
    "https://media.discordapp.net/attachments/531827778664923137/745758643621986334/14563131.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758824413003886/20226727.webp",
    "https://media.discordapp.net/attachments/443583003650818048/729076856757813288/74ad40a.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/767424073511862272/th.jpeg.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758890570022982/17790987.webp",
    "https://media.discordapp.net/attachments/746482636465111090/746649624143724575/image0.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/761656606491672596/CheerioNzoth.png",
    "https://media.discordapp.net/attachments/531827778664923137/773295377977704458/lusciousnet_lusciousnet_neo-and-grimm-tentacles-by-shonomi_1686943761.640x0.jpg",
    "https://media.discordapp.net/attachments/531827778664923137/745758824186773504/22826555.webp",
    "https://media.discordapp.net/attachments/531827778664923137/745758734281736202/16629093.webp",
    "https://media.discordapp.net/attachments/443583003650818048/731211064846319696/image0.jpg",
    "https://media.discordapp.net/attachments/443583003650818048/754533102532952165/danbooru.donmai.us_4094886_1girl_bangs_black_dress_black_gloves_blonde_hair_blue_eyes_blunt_bangs_bl.jpg",  
    "https://media.discordapp.net/attachments/531827778664923137/745758789713657936/16691138.webp"
]