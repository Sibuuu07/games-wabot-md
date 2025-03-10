import fetch from 'node-fetch'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*List Effect*\n\nEXAMPLE:\n*.textpro/style 1917 zabot|zabot*\n\n' + effects.sort((a, b) => a + b).join('\n 🔰 ')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'textpro.jpg', `*TEXTPRO*\n*Effect:* ${effect}`, m)
}
handler.help = ['textpro','style'].map(v => v + '')
handler.tags = ['nulis']
handler.command = /^(textpro|style)$/i

export default handler
