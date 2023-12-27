let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `✳️ Masukkan teks singkat\n\n📌 contoh  : *${usedPrefix + command}* MAHIRU`
	let too = `✳️ Pisahkan teks dengan menggunakan simbol *+* \n\n📌 contoh : \n*${usedPrefix + command}* MAHIRU *+* AI`
	
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'flaming1':
		if (!text) throw tee;
		let chut = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(text)}`;
		conn.sendFile(m.chat, chut, 'logo.jpg', `Done Ya Kak >.<`, m);
		break;
	  case 'flaming2':
		if (!text) throw tee;
		let cp = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(text.trim())}`;
		conn.sendFile(m.chat, cp, 'logo.jpg', `Done Ya Kak >.<`, m);
		break;
	  case 'flaming3': 
		if (!text) throw tee;
		let gandu = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${encodeURIComponent(text.trim())}`;
		conn.sendFile(m.chat, gandu, 'logo.jpg', `Done Ya Kak >.<`, m);
		break;
		case 'flaming4':
	if (!text) throw tee 
	let chu = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${encodeURIComponent(text.trim())}`;
	conn.sendFile(m.chat, chu, 'logo.jpg', `Done Ya Kak >.<`, m)
	break
	case 'flaming5': 
	if (!text) throw tee;
	let rand = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.jpg', `Done Ya Kak >.<`, m);
	break;
	case 'flaming6': 
	if (!text) throw tee;
	let randi = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.jpg', `Done Ya Kak >.<`, m);
	break;
		case 'flaming7': 
	if (!text) throw tee;
		let lz = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lz, 'logo.jpg', `Done Ya Kak >.<`, m);
	break;	
	
	  default:
	} 
  };
  
  handler.help = ['flaming1', 'flaming2', 'flaming3', 'flaming4', 'flaming5', 'flaming6', 'flaming7'];
  handler.tags = ['maker'];
  handler.command = /^(flaming1|flaming2|flaming3|flaming4|flaming5|flaming6|flaming7)$/i;
  handler.limit = true
  
  export default handler;
  
