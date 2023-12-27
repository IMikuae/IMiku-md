function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: IMiku\nitem1.TEL;waid=6281806369588:6281806369577\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;Email Owner:v@gmail.com\nORG: INI OWNER\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler