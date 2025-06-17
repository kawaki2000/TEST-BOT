const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "🪀", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://freeimage.host/i/FB4LduI' }, // Image URL from your request
            caption: `╭━━〔 *🅃🄴🅂🅃-🄱🄾🅃* 〕━━┈✰
┃◈╭─────────────·✰
┃◈┃• *Here is the owner details*
┃◈┃• *Name* : *${config.OWNER_NAME}*
┃◈┃• *Number* ${ownerNumber}
┃◈┃• *Version*: 2.0.0 Beta
┃◈└───────────┈✰
╰──🅃🄴🅂🅃-🄱🄾🅃──┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter',
                    newsletterName: '🅃🄴🅂🅃-🄱🄾🅃🍁',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/gidmqw.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
