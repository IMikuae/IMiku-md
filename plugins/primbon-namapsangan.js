const { Primbon } = await(await import('../lib/scraped-primbon.js')) 
 const primbon = new Primbon() 
 let handler = async (m, { 
     conn, 
     args, 
     usedPrefix, 
     command 
 }) => { 
 let text 
 if (args.length >= 1) { 
   text = args.slice(0).join(" ") 
 } else if (m.quoted && m.quoted.text) { 
   text = m.quoted.text 
 } else return m.reply("Contoh: .cocoknamapasangan wahyu|agus") 
 await m.reply(wait) 
 try { 
   const kecocokanNamaPasangan = await primbon.kecocokan_nama_pasangan(text.split("|")[0], text.split("|")[1]); 
  
 const caption = ` 
 === Kecocokan Nama Pasangan === 
 Nama Anda: ${kecocokanNamaPasangan.message.nama_anda} 
 Nama Pasangan: ${kecocokanNamaPasangan.message.nama_pasangan} 
 Sisi Positif Anda: ${kecocokanNamaPasangan.message.sisi_positif} 
 Sisi Negatif Anda: ${kecocokanNamaPasangan.message.sisi_negatif} 
 Gambar: ${kecocokanNamaPasangan.message.gambar} 
 Catatan: ${kecocokanNamaPasangan.message.catatan} 
 `; 
  
 await m.reply(caption); 
  
 } catch (e) { 
   console.error("Error occurred during conversion:", error) 
   await m.reply("Terjadi kesalahan!") 
 } 
  
 } 
 handler.help = ["cocoknamapasangan"] 
 handler.tags = ["ramalan"] 
 handler.command = /^cocoknamapasangan$/i 
 handler.limit = true
 export default handler