const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "thanks",
    alias: ["thanksto", "dev"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message = `
╭─🅃 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 🅃 :
│
│👨‍💻 𝐃𝐄𝐕:𝐏𝐑𝐎𝐅 𝙺𝙰𝚆𝙰𝙺𝙸²²7
│🪀 𝐍𝐔𝐌:+22781289418   
│──────────────────────
│🛠️ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:©🅃🄴🅂🅃-🄱🄾🅃
│──────────────────────
│🙋‍♂️ 𝐇𝐄𝐋𝐋𝐎 @${m.sender.split("@")[0]}
│*https://chat.whatsapp.com/Jlb1pobu4GGK0UZwi4toSe*
╰───🅃🄴🅂🅃-🄱🄾🅃─────✙
`;

        await conn.sendMessage(from, {
            image: { url: 'https://freeimage.host/i/FB4LduI' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter', // remplace avec ton vrai newsletterJid si besoin
                    newsletterName: '✰🅃🄴🅂🅃-🄱🄾🅃✰',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});
