const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fancy",
  alias: ["font", "style"],
  react: "✍️",
  desc: "Convert text into various fancy fonts.",
  category: "tools",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  reply
}) => {
  try {
    if (!q) return reply("❎ Please provide text to convert.\n\n*Example:* .fancy Hello");

    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`;
    const res = await axios.get(apiUrl);

    if (!res.data.status || !Array.isArray(res.data.result)) {
      return reply("❌ Error fetching fonts. Try again later.");
    }

    const fonts = res.data.result;
    const maxDisplay = 44;
    const displayList = fonts.slice(0, maxDisplay);

    let menuText = "╭─✰ *FANCY STYLES* ✰──⬣\n";
    displayList.forEach((f, i) => {
      menuText += `┃ ${i + 1}. ${f.result}\n`;
    });
    menuText += "╰───🅃🄴🅂🅃-🄱🄾🅃───⬣\n\n📌 *Reply with the number to select a font style for:*\n❝ " + q + " ❞";

    const sentMsg = await conn.sendMessage(from, {
      text: menuText
    }, { quoted: m });

    const messageID = sentMsg.key.id;

    const messageHandler = async (msgData) => {
      const receivedMsg = msgData.messages?.[0];
      if (!receivedMsg || !receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation ||
        receivedMsg.message.extendedTextMessage?.text;

      const senderID = receivedMsg.key.remoteJid;
      const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

      if (isReplyToBot && senderID === from) {
        const selectedNumber = parseInt(receivedText.trim());
        if (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > displayList.length) {
          return conn.sendMessage(from, {
            text: "❎ Invalid selection. Please reply with a number from 1 to " + displayList.length + ".",
          }, { quoted: receivedMsg });
        }

        const chosen = displayList[selectedNumber - 1];
        const finalText = `✨ *Your Text in ${chosen.name || 'Selected Style'}:*\n\n${chosen.result}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇᴠ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(from, {
          text: finalText
        }, { quoted: receivedMsg });
      }
    };

    conn.ev.on("messages.upsert", messageHandler);
  } catch (error) {
    console.error("❌ Error in .fancy:", error);
    reply("⚠️ An error occurred while processing.");
  }
});
