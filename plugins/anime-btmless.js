import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { lookup } from 'mime-types';

let handler = async (m, { conn, args }) => {
let score = '200'

  let { image, info } = await getYandeImageWithScore(score);
  if (image === 'in_progress') {
  m.reply(wait)    
  return;
  }

  let mime = await lookup(image);
  let caption = createCaption(info);
  await conn.sendMessage(
    m.chat,
    { [mime.split('/')[0]]: { url: image }, caption: caption },
    { quoted: m }
  );
};
handler.tags = [`anime`]
handler.help = handler.command = ['btmless']

export default handler;

async function getYandeImageWithScore(score) {
  let apiUrl = `https://yande.re/post.json?tags=bottomless`;


  let res = await fetch(apiUrl);
  let json = await res.json();
    
  if (json.length === 0) {
    throw `Gambar dengan skor ${score} tidak ditemukan :/`;
  }

  let data = json[~~(Math.random() * json.length)];
  if (!data) {
    throw `Gambar dengan skor ${score} tidak ditemukan :/`;
  }

  let imageInfo = {
    id: data.id,
    tags: data.tags,
    created_at: data.created_at,
    updated_at: data.updated_at,
    creator_id: data.creator_id,
    approver_id: data.approver_id,
    author: data.author,
    change: data.change,
    source: data.source,
    score: data.score,
    md5: data.md5,
    file_size: data.file_size,
    file_ext: data.file_ext,
    file_url: data.file_url,
    is_shown_in_index: data.is_shown_in_index,
    preview_url: data.preview_url,
    preview_width: data.preview_width,
    preview_height: data.preview_height,
    actual_preview_width: data.actual_preview_width,
    actual_preview_height: data.actual_preview_height,
    sample_url: data.sample_url,
    sample_width: data.sample_width,
    sample_height: data.sample_height,
    sample_file_size: data.sample_file_size,
    jpeg_url: data.jpeg_url,
    jpeg_width: data.jpeg_width,
    jpeg_height: data.jpeg_height,
    jpeg_file_size: data.jpeg_file_size,
    rating: data.rating,
    is_rating_locked: data.is_rating_locked,
    has_children: data.has_children,
    parent_id: data.parent_id,
    status: data.status,
    is_pending: data.is_pending,
    width: data.width,
    height: data.height,
    is_held: data.is_held,
    frames_pending_string: data.frames_pending_string,
    frames_pending: data.frames_pending,
    frames_string: data.frames_string,
    frames: data.frames,
    is_note_locked: data.is_note_locked,
    last_noted_at: data.last_noted_at,
    last_commented_at: data.last_commented_at
  };

  return { image: data.file_url, info: imageInfo };
}

function createCaption(info) {
  return `
ID: ${info.id}
Tags: ${info.tags}
Author: ${info.author}
Source: ${info.source}
Score: ${info.score}
MD5: ${info.md5}
File Size: ${info.file_size}
File Ext: ${info.file_ext}
Is Shown in Index: ${info.is_shown_in_index}
Preview Width: ${info.preview_width}
Preview Height: ${info.preview_height}
Actual Preview Width: ${info.actual_preview_width}
Actual Preview Height: ${info.actual_preview_height}
Sample Width: ${info.sample_width}
Sample Height: ${info.sample_height}
Sample File Size: ${info.sample_file_size}
JPEG Width: ${info.jpeg_width}
JPEG Height: ${info.jpeg_height}
JPEG File Size: ${info.jpeg_file_size}
Rating: ${info.rating}
Is Rating Locked: ${info.is_rating_locked}
Has Children: ${info.has_children}
Parent ID: ${info.parent_id}
Status: ${info.status}
Is Pending: ${info.is_pending}
Width: ${info.width}
Height: ${info.height}
Is Held: ${info.is_held}
Frames Pending String: ${info.frames_pending_string}
Frames Pending: ${info.frames_pending}
Frames String: ${info.frames_string}
Frames: ${info.frames}
Is Note Locked: ${info.is_note_locked}
Last Noted At: ${info.last_noted_at}
Last Commented At: ${info.last_commented_at}
  `;
}
