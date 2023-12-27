let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `✳️ Masukkan teks singkat\n\n📌 contoh  : *${usedPrefix + command}* MAHIRU`
	let too = `✳️ Pisahkan teks dengan menggunakan simbol *+* \n\n📌 contoh : \n*${usedPrefix + command}* MAHIRU *+* AI`
	
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'bluecircuit':
		if (!text) throw tee;
		let chut = `https://api.zahwazein.xyz/textpro/bluecircuit?text=${encodeURIComponent(text)}&apikey=zenzkey_ab72cdd5af82`;
		conn.sendFile(m.chat, chut, 'logo.png', `Done Ya Kak >.<`, m);
		break;
	  case 'logopubg': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.erdwpe.com/api/photooxy/pubg?text=${encodeURIComponent(a.trim())}&text2=${encodeURIComponent(b.trim())}`;
		conn.sendFile(m.chat, loda, 'logo.png', `Done Ya Kak >.<`, m);
		break;
	  case 'magma':
		if (!text) throw tee;
		let cp = `https://api.zahwazein.xyz/textpro/magma?text=${encodeURIComponent(text.trim())}&apikey=zenzkey_ab72cdd5af82`;
		conn.sendFile(m.chat, cp, 'logo.png', `Done Ya Kak >.<`, m);
		break;
	  case 'metallic': 
		if (!text) throw tee;
		let gandu = `https://api.zahwazein.xyz/textpro/metallic?text=${encodeURIComponent(text.trim())}&apikey=zenzkey_ab72cdd5af82`;
		conn.sendFile(m.chat, gandu, 'logo.png', `Done Ya Kak >.<`, m);
		break;
		case 'sertitolol':
	if (!text) throw tee 
	let chu = `https://zeltoria.site/api/maker/tolol?q=${encodeURIComponent(text.trim())}`;
	conn.sendFile(m.chat, chu, 'logo.png', `Done Ya Kak >.<`, m)
	break
	case 'logomarvel': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	let lo = `https://api.zahwazein.xyz/textpro/marvel?text=${encodeURIComponent(c.trim())}&text2=${encodeURIComponent(d.trim())}&apikey=zenzkey_ab72cdd5af82`
	conn.sendFile(m.chat, lo, 'logo.png', `Done Ya Kak >.<`, m)
	break 
	case 'wolf2': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.zahwazein.xyz/textpro/logowolf2?text=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}&apikey=zenzkey_ab72cdd5af82`;
	conn.sendFile(m.chat, oda, 'logo.png', `Done Ya Kak >.<`, m);
	break 
	case 'anonymhacker': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=31fe0c7b7761a4dcb6d8e227&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'avatarlolnew': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=31fe0c7b7761a4dcb6d8e227&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'avatardota': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=31fe0c7b7761a4dcb6d8e227&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'codwarzone': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=31fe0c7b7761a4dcb6d8e227&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
    conn.sendFile(m.chat, od, 'logo.png', `Done Ya Kak >.<`, m)
	case 'pornhub': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [i, j] = text.split('+');
	let odo = `https://api.zahwazein.xyz/textpro/pornhub?text=${encodeURIComponent(i.trim())}&text2=${encodeURIComponent(j.trim())}&apikey=zenzkey_ab72cdd5af82`;
	conn.sendFile(m.chat, odo, 'logo.png', `Done Ya Kak >.<`, m)
	break;
	case 'naruto': 
	if (!text) throw tee;
	let rr = `https://api.erdwpe.com/api/photooxy/naruto?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'butterfly': 
	if (!text) throw tee;
	let rrr = `https://saipulanuar.cf/api/photooxy/butterfly?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rrr, 'logo.png', `Done Ya Kak >.<`, m);
	break;
case 'shadow': 
	if (!text) throw tee;
	let ror = `https://saipulanuar.cf/api/photooxy/shadow?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, ror, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'strawberry': 
	if (!text) throw tee;
	let ghr = `https://api.erdwpe.com/api/textpro/strawberry?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, ghr, 'logo.png', `Done Ya Kak >.<`, m);
	break;
		case 'sweet-candy': 
	if (!text) throw tee;
	let ghro = `https://api.erdwpe.com/api/photooxy/sweet-candy?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, ghro, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'illuminated-metallic': 
	if (!text) throw tee;
	let gho = `https://api.erdwpe.com/api/photooxy/illuminated-metallic?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, gho, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'glitchtiktok': 
	if (!text) throw tee;
	let lpo = `https://api.erdwpe.com/api/textpro/glitchtiktok?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lpo, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'romantic': 
	if (!text) throw tee;
	let lyo = `https://saipulanuar.cf/api/photooxy/romantic?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lyo, 'logo.png', `Done Ya Kak >.<`, m);
	break;
		case 'smoke': 
	if (!text) throw tee;
	let lyd = `https://saipulanuar.cf/api/photooxy/smoke?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lyd, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'burn-paper': 
	if (!text) throw tee;
	let lym = `https://saipulanuar.cf/api/photooxy/burn-paper?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lym, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'love-message': 
	if (!text) throw tee;
	let lyn = `https://saipulanuar.cf/api/photooxy/love-message?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lyn, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'message-under-grass': 
	if (!text) throw tee;
		let lyi = `https://saipulanuar.cf/api/photooxy/message-under-grass?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lyi, 'logo.png', `Done Ya Kak >.<`, m);
	break;
		case 'double-heart': 
	if (!text) throw tee;
		let lii = `https://saipulanuar.cf/api/photooxy/double-heart?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, lii, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'coffe-cup': 
	if (!text) throw tee;
		let li = `https://saipulanuar.cf/api/photooxy/coffe-cup?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, li, 'logo.png', `Done Ya Kak >.<`, m);
	break;
	case 'harry-potter': 
	if (!text) throw tee;
		let loi = `https://api.erdwpe.com/api/photooxy/harry-potter?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, loi, 'logo.png', `Done Ya Kak >.<`, m);
	break;	
		case 'green-horror': 
	if (!text) throw tee;
		let ki = `https://api.erdwpe.com/api/textpro/green-horror?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, ki, 'logo.png', `Done Ya Kak >.<`, m);
	break;	
	case 'green-horror': 
	if (!text) throw tee;
		let ldi = `https://xzn.wtf/api/mascot-game?text=${encodeURIComponent(text)}&apikey=imiku`;
	conn.sendFile(m.chat, ldi, 'logo.png', `Done Ya Kak >.<`, m);
	break;	
		case 'amongus': 
	if (!text) throw tee;
		let li = `https://api.lolhuman.xyz/api/amongus?apikey=31fe0c7b7761a4dcb6d8e227&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, li, 'logo.png', `Done Ya Kak >.<`, m);
	break;	

	  default:
	} 
  };
  
  handler.help = ['bluecircuit', 'logopubg', 'magma', 'metallic', 'sertitolol', 'logomarvel', 'wolf2', 'anonymhacker', 'avatarlolnew', 'avatardota', 'codwarzone', 'pornhub', 'naruto', 'butterfly', 'shadow', 'strawberry', 'sweet-candy', 'illuminated-metallic', 'glitchtiktok', 'romantic', 'smoke', 'burn-paper', 'love-message', 'message-under-grass', 'double-heart', 'coffe-cup', 'harry-potter', 'green-horror', 'gamemaker', 'amongus'];
  handler.tags = ['maker'];
  handler.command = /^(bluecircuit|logopubg|magma|metallic|sertitolol|logomarvel|wolf2|anonymhacker|avatarlolnew|avatardota|codwarzone|pornhub|naruto|butterfly|shadow|strawberry|sweet-candy|illuminated-metallic|glitchtiktok|romantic|smoke|burn-paper|love-message|message-under-grass|double-heart|coffe-cup|harry-potter|green-horror|gamemaker|amongus)$/i;
  handler.limit = true
  
  export default handler;
  
