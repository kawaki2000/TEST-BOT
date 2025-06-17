const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭┈───────────────•*
*ʜᴇʟʟᴏ 👋 ${pushname}*
*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ: ᴘʀᴏғ xᴛʀᴇᴍᴇ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➩ sɪᴅᴅʜᴀʀᴛʜ's*
*│  ◦* *ɴɪᴄᴋɴᴀᴍᴇ➩ xᴛʀᴇᴍᴇ*
*│  ◦* *ᴀɢᴇ➩ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
*│  ◦* *ᴄɪᴛʏ➩ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ* 
*│  ◦* *ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅᴇᴠ*
*╰┈───────────────•*

*⪨ • 🅃🄴🅂🅃-🄱🄾🅃 - ᴘʀᴏᴊᴇᴄᴛ • ⪩*

*╭┈───────────────•*
*│  ◦* *✰➩ᴘʀᴏғ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*
*│  ◦* *✰➩ᴏɴʟʏ 1 ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*

*•────────────•✱*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*
*•────────────•✱*
`
await conn.sendMessage(from, {
    image: { url: 'https://freeimage.host/i/FBtzFF2' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398101781980@newsletter', // ou ton JID actuel
            newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
