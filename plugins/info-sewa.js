let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.40.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
*Premium itu hanya akses fitur premium saja kak seperti hdr, remini dll dan tidak bisa di masukkan ke grup*

_Sewa bot bisa bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
❏──「 *Pembayaran* 」
│ • *Qris:* Hub owner
❏──────────────๑
│ Hubungi Owner!!!
│${global.owner}
❏──────────────๑
 _2023 © IMiku_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(sewa|prem|sewabot)$/i

export default handler