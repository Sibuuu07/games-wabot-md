import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Send a broadcast message to ${chats.length} chat_`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '❰ ' + author + ' 𝐀𝐑𝐂𝐓𝐈𝐗  𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 ❱\n' + randomID(32)), true).catch(_ => _)
  m.reply('Done Broadcast All Chat :)')
}
handler.help = ['broadcast', 'bc'].map(v => v + '')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
