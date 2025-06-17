const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const axios = require('axios');

cmd({
    pattern: "menu3",
    desc: "menu the bot",
    category: "menu2",
    react: "💫",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭━━━〔 *🅃🄴🅂🅃-🄱🄾🅃* 〕━━━╮
┃ ✨ *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Mode:* ${config.MODE}
┃ 📡 *Platform:* RENDER
┃ 🧠 *Type:* NodeJs (Multi Device)
┃ ⌨️ *Prefix:* ${config.PREFIX}
┃ 🧾 *Version:* TEST
╰━━━━━━🅃🄴🅂🅃-🄱🄾🅃━━━━╯
  *https://chat.whatsapp.com/I17LZkKClr67NEG3wajDpk*
╭━━〔 🧩 *Command Categories* 〕━━╮
┃ Quranmenu🍁
┃ Prayertime🍁
┃ Aimenu🍁
┃ Anmiemenu🍁
┃ Reactions🍁
┃ Convertmenu🍁
┃ Funmenu🍁
┃ Dlmenu🍁
┃ Listcmd🍁
┃ Mainmenu🍁
┃ Groupmenu🍁
┃ Allmenu🍁
┃ Ownermenu🍁
┃ Othermenu🍁
┃ Logo🍁
┃ Repo🍁
╰━━━━━━━🅃🄴🅂🅃-🄱🄾🅃━━━━━━━━╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBtzFF2` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send cool voice note with context
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/gm2hfz.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter',
                    newsletterName:'🅃🄴🅂🅃-🄱🄾🅃🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});

cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Logo List* 〕━━┈✰
┃🅃╭─────────────·🅃
┃🅃┃• neonlight
┃🅃┃• blackpink
┃🅃┃• dragonball
┃🅃┃• 3dcomic
┃🅃┃• america
┃🅃┃• naruto
┃🅃┃• sadgirl
┃🅃┃• clouds
┃🅃┃• futuristic
┃🅃┃• 3dpaper
┃🅃┃• eraser
┃🅃┃• sunset
┃🅃┃• leaf
┃🅃┃• galaxy
┃🅃┃• sans
┃🅃┃• boom
┃🅃┃• hacker
┃🅃┃• devilwings
┃🅃┃• nigeria
┃🅃┃• bulb
┃🅃┃• angelwings
┃🅃┃• zodiac
┃🅃┃• luxury
┃🅃┃• paint
┃🅃┃• frozen
┃🅃┃• castle
┃🅃┃• tatoo
┃🅃┃• valorant
┃🅃┃• bear
┃🅃┃• typography
┃🅃┃• birthday
┃🅃└───────────┈✰
╰──────────────┈✰`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBtzFF2` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: "🅃🄴🅂🅃-🄱🄾🅃",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `╭━━〔 *Reactions Menu* 〕━━┈✰
┃🅃╭─────────────·🅃
┃🅃┃• bully @tag
┃🅃┃• cuddle @tag
┃🅃┃• cry @tag
┃🅃┃• hug @tag
┃🅃┃• awoo @tag
┃🅃┃• kiss @tag
┃🅃┃• lick @tag
┃🅃┃• pat @tag
┃🅃┃• smug @tag
┃🅃┃• bonk @tag
┃🅃┃• yeet @tag
┃🅃┃• blush @tag
┃🅃┃• smile @tag
┃🅃┃• wave @tag
┃🅃┃• highfive @tag
┃🅃┃• handhold @tag
┃🅃┃• nom @tag
┃🅃┃• bite @tag
┃🅃┃• glomp @tag
┃🅃┃• slap @tag
┃🅃┃• kill @tag
┃🅃┃• happy @tag
┃🅃┃• wink @tag
┃🅃┃• poke @tag
┃🅃┃• dance @tag
┃🅃┃• cringe @tag
┃🅃└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/n8o5y2.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈✰
┃🅃╭─────────────·🅃
┃🅃┃• facebook
┃🅃┃• mediafire
┃🅃┃• tiktok
┃🅃┃• twitter
┃🅃┃• Insta
┃🅃┃• apk
┃🅃┃• img
┃🅃┃• tt2
┃🅃┃• pins
┃🅃┃• apk2
┃🅃┃• fb2
┃🅃┃• pinterest 
┃🅃┃• spotify
┃🅃┃• play
┃🅃┃• play2
┃🅃┃• play3
┃🅃┃• play4
┃🅃┃• play5
┃🅃┃• play6
┃🅃┃• play7
┃🅃┃• play8
┃🅃┃• play9
┃🅃┃• play10
┃🅃┃• audio
┃🅃┃• video
┃🅃┃• video2
┃🅃┃• video3
┃🅃┃• video4
┃🅃┃• video5
┃🅃┃• video6
┃🅃┃• video7
┃🅃┃• video8
┃🅃┃• video9
┃🅃┃• video10
┃🅃┃• ytmp3
┃🅃┃• ytmp4
┃🅃┃• song
┃🅃┃• darama
┃🅃┃• gdrive
┃🅃┃• ssweb
┃🅃┃• tiks
┃🅃└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FB4LduI` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭━━〔 *Group Menu* 〕━━┈✰
┃🅃╭─────────────·🅃
┃🅃┃• grouplink
┃🅃┃• kickall
┃🅃┃• kickall2
┃🅃┃• kickall3
┃🅃┃• add
┃🅃┃• remove
┃🅃┃• kick
┃🅃┃• promote 
┃🅃┃• demote
┃🅃┃• dismiss 
┃🅃┃• revoke
┃🅃┃• setgoodbye
┃🅃┃• setwelcome
┃🅃┃• delete 
┃🅃┃• getpic
┃🅃┃• ginfo
┃🅃┃• delete 
┃🅃┃• disappear on
┃🅃┃• disappear off
┃🅃┃• disappear 7D,24H
┃🅃┃• allreq
┃🅃┃• updategname
┃🅃┃• updategdesc
┃🅃┃• joinrequests
┃🅃┃• senddm
┃🅃┃• nikal
┃🅃┃• mute
┃🅃┃• unmute
┃🅃┃• lockgc
┃🅃┃• unlockgc
┃🅃┃• invite
┃🅃┃• tag
┃🅃┃• hidetag
┃🅃┃• tagall
┃🅃┃• tagadmins
┃🅃└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FB4LduI` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈✰
┃ᵀ╭─────────────·🅃
┃ᵀ┃• shapar
┃ᵀ┃• rate
┃ᵀ┃• insult
┃ᵀ┃• hack
┃ᵀ┃• ship
┃ᵀ┃• character
┃ᵀ┃• pickup 
┃ᵀ┃• joke
┃ᵀ┃• hrt
┃ᵀ┃• hpy
┃ᵀ┃• syd
┃ᵀ┃• anger
┃ᵀ┃• shy
┃ᵀ┃• kiss
┃ᵀ┃• mon
┃ᵀ┃• cunfuzed
┃ᵀ┃• setpp
┃ᵀ┃• hand
┃ᵀ┃• nikal
┃ᵀ┃• hold
┃ᵀ┃• hug
┃ᵀ┃• nikal
┃ᵀ┃• hifi
┃ᵀ┃• poke
┃ᵀ└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBtzFF2` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈✰
┃🆃╭─────────────·🅃
┃🆃┃• timenow
┃🆃┃• date
┃🆃┃• count
┃🆃┃• calculate
┃🆃┃• countx
┃🆃┃• flip
┃🆃┃• coinflip
┃🆃┃• rcolor
┃🆃┃• roll
┃🆃┃• fact
┃🆃┃• cpp
┃🆃┃• rw
┃🆃┃• pair
┃🆃┃• pair2
┃🆃┃• pair3
┃🆃┃• fancy
┃🆃┃• logo <text>
┃🆃┃• define
┃🆃┃• news
┃🆃┃• movie
┃🆃┃• weather
┃🆃┃• srepo
┃🆃┃• insult
┃🆃┃• save
┃🆃┃• wikipedia
┃🆃┃• gpass
┃🆃┃• githubstalk
┃🆃┃• yts
┃🆃┃• ytv
┃🆃└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FB4LduI` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈✰
┃🅣╭─────────────·🅃
┃🅣┃• ping
┃🅣┃• live 
┃🅣┃• alive
┃🅣┃• runtime
┃🅣┃• uptime 
┃🅣┃• repo
┃🅣┃• owner
┃🅣┃• menu
┃🅣┃• menu2
┃🅣┃• restart
┃🅣└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBtzFF2` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🦞",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈✰
┃𝚃╭─────────────·🅃
┃𝚃┃• owner
┃𝚃┃• menu
┃𝚃┃• menu2
┃𝚃┃• listcmd
┃𝚃┃• allmenu
┃𝚃┃• repo
┃𝚃┃• block
┃𝚃┃• unblock
┃𝚃┃• fullpp
┃𝚃┃• setpp
┃𝚃┃• restart
┃𝚃┃• shutdown
┃𝚃┃• updatecmd
┃𝚃┃• alive
┃𝚃┃• ping 
┃𝚃┃• gjid
┃𝚃┃• jid
┃𝚃└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FB4LduI` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈✰
┃🅃╭─────────────·🅃
┃🅃┃• sticker
┃🅃┃• sticker2
┃🅃┃• emojimix
┃🅃┃• fancy
┃🅃┃• take
┃🅃┃• tomp3
┃🅃┃• tts
┃🅃┃• trt
┃🅃┃• base64
┃🅃┃• unbase64
┃🅃┃• binary
┃🅃┃• dbinary
┃🅃┃• tinyurl
┃🅃┃• urldecode
┃🅃┃• urlencode
┃🅃┃• url
┃🅃┃• repeat 
┃🅃┃• ask
┃🅃┃• readmore
┃🅃└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBtzFF2` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈✰
┃✰╭─────────────·🅃
┃✰┃• fack🪽
┃✰┃• dog🪽
┃✰┃• awoo🪽
┃✰┃• garl🪽
┃✰┃• waifu🪽
┃✰┃• neko🪽
┃✰┃• megnumin🪽
┃✰┃• neko🪽
┃✰┃• maid🪽
┃✰┃• loli🪽
┃✰┃• animegirl🪽
┃✰┃• animegirl🪽
┃✰┃• animegirl1🪽
┃✰┃• animegirl2🪽
┃✰┃• animegirl3🪽
┃✰┃• animegirl4🪽
┃✰┃• animegirl5🪽
┃✰┃• anime1🪽
┃✰┃• anime1🪽
┃✰┃• anime2🪽
┃✰┃• anime3🪽
┃✰┃• anime4🪽
┃✰┃• anime5🪽
┃✰┃• animenews🪽
┃✰┃• foxgirl🪽
┃✰┃• naruto🪽
┃✰└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBSL2v1` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈✰
┃Ⓣ╭─────────────·🅃
┃Ⓣ┃• ai🍁
┃Ⓣ┃• gpt3🍁
┃Ⓣ┃• gpt2🍁
┃Ⓣ┃• gptmini🍁
┃Ⓣ┃• gpt🍁
┃Ⓣ┃• meta🍁
┃Ⓣ┃• blackbox🍁
┃Ⓣ┃• luma🍁
┃Ⓣ┃• dj🍁 
┃Ⓣ┃• khan🍁
┃Ⓣ┃• jawad🍁
┃Ⓣ┃• gpt4🍁
┃Ⓣ┃• bing🍁
┃Ⓣ┃• imagine🍁 
┃Ⓣ┃• imagine2🍁
┃Ⓣ┃• copilote🍁
┃Ⓣ└───────────┈✰
╰──────────────┈✰
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://freeimage.host/i/FBtzFF2` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: '🅃🄴🅂🅃-🄱🄾🅃🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
          
