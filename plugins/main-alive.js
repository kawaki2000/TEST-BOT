const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["bot", "online"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "🗞️",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status = `
╭───✰🍁𝐒𝐓𝐀𝐓𝐔𝐒✰───✰
│✨ *Bot is Active & Online!*
│
│🧠 *Owner:* ${config.OWNER_NAME}
│⚡ *Version:* 2.0.0
│📝 *Prefix:* [${config.PREFIX}]
│📳 *Mode:* [${config.MODE}]
│💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
│🖥️ *Host:* ${os.hostname()}
│⌛ *Uptime:* ${runtime(process.uptime())}
╰─────🅃🄴🅂🅃-🄱🄾🅃─────◉
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇᴠ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*}`;

        await conn.sendMessage(from, {
            image: { url: `https://freeimage.host/i/FBtzFF2` },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter',
                    newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
          
