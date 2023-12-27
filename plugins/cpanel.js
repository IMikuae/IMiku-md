import fetch from "node-fetch";
import crypto from "crypto";
import { sizeFormatter } from "human-readable";
const format = sizeFormatter()
let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {    
    //Manage panel
    const domain = "https://fallxdomain.zrillhosting.xyz" // Domain
const apikey = "ptla_AFBbvK52IjBjXSfI2AH6WLMhPJZ107upNZUyLKKTXu1" // Apikey
const c_apikey = "ptlc_ZhGv7c4oJY3ZHWU3sApFJv9IWHMQNmMNXA9121gVKst" // c Apikey

    const webPage = "https://fallxdomain.zrillhosting.xyz" // Web Page            
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
    switch (command) {
    case "unli": {
    if (!isROwner) return global.dfail("rowner", m, conn)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@IMiku.com"
let akunlo = "https://telegra.ph/file/e1e57c1cefcc24f248f85.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": "IMiku" + profil.toString() + "@gmail.com", // Email
 "username": "anu" + profil.toString(), 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "1gb": { 
    if (!isROwner) return global.dfail("rowner", m, conn)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command}  user,nomer`)
let username = t[0];
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
let akunlo = "https://telegra.ph/file/e1e57c1cefcc24f248f85.jpg" 
if (!u) return
let d = (conn.sendMessage(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": "IMiku" + profil.toString() + "@gmail.com", // Email
 "username": "anu" + profil.toString(), 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Hai Ini Data Akun Panel Mu

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*
*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*

`)

}
break
case "4gb": {
  if (!isROwner) return global.dfail("rowner", m, conn)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${_p + command}  user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4024"
let cpu = "100"
let disk = "4024"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": "IMiku" + profil.toString() + "@gmail.com", // Email
"username": "anu" + profil.toString(), 
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
let ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 4200
DISK : 4200
CPU 100%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



}
break
    case "11gb": {
    if (!isROwner) return global.dfail("rowner", m, conn)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel IMiku - 11GB"
let egg = global.eggsnya
let loc = global.location
let memo = "11000"
let cpu = "250"
let disk = "12000"
let email = username + "@IMiku.net"
let akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
 let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({              "email": "IMiku" + profil.toString() + "@gmail.com", // Email
 "username": "anu" + profil.toString(), 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
}}}
handler.help = handler.command = ["unli", "1gb", "4gb", "11gb"];
handler.tags = ["panel", "host"]
handler.premium = true
export default handler