let handler = async (m, { conn }) => {
let user = db.data.users[m.sender]
    var jumlahHari = 86400000 * 2
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
if (user.limit > 4999) 
{ 
await m.reply('🚩 Berhasil menjadi anggota premium bot secara permanen, ketik *#premium* untuk mengetahui apa itu anggota premium dan keuntungannya.')
user.money -= 5000 * 1
Info.premium.push(m.sender.split('@')[0])
} else {
m.reply('Untuk mendaftar menjadi *pengguna premium* menggunakan inventory, kamu harus memiliki money sebesar\n\nRp 500.000.000.')
}
}
handler.help = ['daftarprem','daftarpremium']
handler.tags = ['xp']
handler.command = /^(daftarpremium)$/i

export default handler
