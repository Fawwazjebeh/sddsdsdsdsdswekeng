let handler = async (m, {participants, text}) => {
    let teks = `āāāŖć *š„ Mention All* ćāŖāā\n\nā² *Message : ${text ? text : 'Nothing'}*\n\n`
        for (let mem of participants) {
		    teks += `š„ @${mem.id.split('@')[0]}\n`
		}
    teks += `\nā *${author}* ā`
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
handler.command = ['tagall']
handler.help = ['tagall']
handler.tags = ['group']
handler.admin = true
handler.group = true

export default handler
