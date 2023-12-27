import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${sad.getRandom()}`, "nt.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.tags = ['quotes']
handler.command = handler.help = ['sadgirl']
handler.limit = true
export default handler;

const sad = [
"https://melbotuser.000webhostapp.com/sadgirl/1.mp3",
"https://melbotuser.000webhostapp.com/sadgirl/2.mp3", 
"https://melbotuser.000webhostapp.com/sagirl/3.mp3", 
"https://melbotuser.000webhostapp.com/sadgirl/4.mp3", 
"https://melbotuser.000webhostapp.com/sadgirl/5.mp3", 
"https://melbotuser.000webhostapp.com/sadgirl/6.mp3", 
"https://melbotuser.000webhostapp.com/sadgirl/7.mp3", 
"https://melbotuser.000webhostapp.com/sadgirl/8.mp3", 
"https://melbotuser.000webhostapp.com/sadgirl/9.mp3",
]