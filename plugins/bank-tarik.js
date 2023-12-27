const moneymins = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^pull/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / moneymins) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bank >= moneymins * count) {
    global.db.data.users[m.sender].bank -= moneymins * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `-${moneymins * count} ATM\n+ ${count} Money`, m)
  } else conn.reply(m.chat, `ATM kamu tersisah ${count} !!`, m)
}
handler.help = ['tarik', 'tarikall'].map(v => v + ' <jumlah>')
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i

handler.fail = null
export default handler