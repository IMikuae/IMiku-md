let handler = async (m, { conn, args, participants, text, usedPrefix, command }) => {
  switch (command) {
case 'bego':
case 'goblok':
case 'tolol':
case 'pinter':
case 'pintar':
case 'bodoh':
case 'gay':
case 'lesby':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'horny':
case 'wibu':
case 'peak':
case 'pantex':
case 'pantek':
case 'noob': {
      let member = participants.map(u => u.id).filter(v => v !== conn.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      conn.sendMessage(m.chat, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
      break;
    }
  }
};
handler.tags = ['fun']
handler.help = handler.command = ['bego',
'goblok',
'tolol',
'pinter',
'pintar',
'bodoh',
'gay',
'lesby',
'mastah',
'newbie',
'bangsat',
'bangke',
'sange',
'sangean',
'horny',
'wibu',
'peak',
'pantex',
'pantek',
'noob']
handler.group = true
export default handler;
