const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━🅃 *𝗧𝗘𝗦𝗧-𝗕𝗢𝗧* 🅃━┈🅃
├⧈╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├⧈┃💫 _*Owner*_ : *${config.OWNER_NAME}*
├⧈┃💫 _*Prefix*_ : *➥${config.PREFIX}*
├⧈┃💫 _*Platform*_ : *NINJA*
├⧈┃💫 _*Version*_ : *1.0*
├⧈┃💫 _*Mode*_ : *${config.MODE}*
├⧈┃💫 _*command*_ : *𝟹𝟶𝟶*
├⧈┃💫 _*Runtime*_ : *${runtime(process.uptime())}*
├⧈╰───────────────┈🅃
╰━━━━𝗧𝗘𝗦𝗧-𝗕𝗢𝗧━━━┈🅃

*𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗨𝗘 𝗦𝗨𝗥 𝗟𝗘 𝗕𝗢𝗧 𝗧𝗘𝗦𝗧*
-------------------------------------------------
  *https://chat.whatsapp.com/Jlb1pobu4GGK0UZwi4toSe*
╭━🅃👥𝐆𝐑𝐎𝐔𝐏 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  grouplink💫
├✰┃❖  kickall💫
├✰┃❖  kickall2💫
├✰┃❖  kickall3💫
├✰┃❖  add💫
├✰┃❖  remove💫
├✰┃❖  kick💫
├✰┃❖  promote💫
├✰┃❖  demote💫
├✰┃❖  dismiss💫
├✰┃❖  revoke💫
├✰┃❖  setgoodbye💫
├✰┃❖  setwelcome💫
├✰┃❖  delete💫
├✰┃❖  getpic💫
├✰┃❖  ginfo💫
├✰┃❖  disappear on💫
├✰┃❖  disappear off💫
├✰┃❖  disappear 7D,24H💫
├✰┃❖  allreq💫
├✰┃❖  updategname💫
├✰┃❖  updategdesc💫
├✰┃❖  joinrequests💫
├✰┃❖  senddm💫
├✰┃❖  nikal💫
├✰┃❖  mute💫
├✰┃❖  unmute💫
├✰┃❖  lockgc💫
├✰┃❖  unlockgc💫
├✰┃❖  invite💫
├✰┃❖  tag💫
├✰┃❖  hidetag💫
├✰┃❖  tagall💫
├✰┃❖  tagadmins💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃
╭━🅃📥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  facebook💫
├✰┃❖  mediafire💫
├✰┃❖  tiktok💫
├✰┃❖  twitter💫
├✰┃❖  insta💫
├✰┃❖  apk💫
├✰┃❖  img💫
├✰┃❖  tt2💫
├✰┃❖  pins💫
├✰┃❖  apk2💫
├✰┃❖  fb2💫
├✰┃❖  pinterest💫
├✰┃❖  spotify💫
├✰┃❖  play💫
├✰┃❖  play2💫
├✰┃❖  audio💫
├✰┃❖  video💫
├✰┃❖  video2💫
├✰┃❖  ytmp3💫
├✰┃❖  ytmp4💫
├✰┃❖  song💫
├✰┃❖  darama💫
├✰┃❖ gdrive💫
├✰┃❖  ssweb💫
├✰┃❖  tiks💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃🎭𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  bully💫 
├✰┃❖  cuddle💫 
├✰┃❖  cry💫 
├✰┃❖  hug💫
├✰┃❖  awoo💫 
├✰┃❖  kiss💫 
├✰┃❖  lick💫 
├✰┃❖  pat💫 
├✰┃❖  smug💫 
├✰┃❖  bonk💫 
├✰┃❖  yeet💫 
├✰┃❖  blush💫 
├✰┃❖  smile💫 
├✰┃❖  wave💫 
├✰┃❖  highfive💫 
├✰┃❖  handhold💫 
├✰┃❖  nom💫 
├✰┃❖  bite💫 
├✰┃❖  glomp💫 
├✰┃❖  slap💫 
├✰┃❖  kill💫 
├✰┃❖  happy💫 
├✰┃❖  wink💫 
├✰┃❖  poke💫 
├✰┃❖  dance💫 
├✰┃❖  cringe💫 
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃🎨𝐋𝐎𝐆𝐎 𝐌𝐀𝐊𝐄𝐑 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  neonlight💫
├✰┃❖  blackpink💫
├✰┃❖  dragonball💫
├✰┃❖  3dcomic💫
├✰┃❖  america💫
├✰┃❖  naruto💫
├✰┃❖  sadgirl💫
├✰┃❖  clouds💫
├✰┃❖  futuristic💫
├✰┃❖  3dpaper💫
├✰┃❖  eraser💫
├✰┃❖  sunset💫
├✰┃❖  leaf💫
├✰┃❖  galaxy💫
├✰┃❖  sans💫
├✰┃❖  boom💫
├✰┃❖  hacker💫
├✰┃❖  devilwings💫
├✰┃❖  nigeria💫
├✰┃❖  bulb💫
├✰┃❖  angelwing💫
├✰┃❖  zodiac💫
├✰┃❖  luxury💫
├✰┃❖  paint💫
├✰┃❖  frozen💫
├✰┃❖  castle💫
├✰┃❖  tatoo💫
├✰┃❖  valorant💫
├✰┃❖  bear💫
├✰┃❖  typography💫
├✰┃❖  birthday💫
├✰╰───────────────┈🅃
╰━━━🅃🄴🅂🅃-🄱🄾🅃━━━━┈🅃

╭━🅃👑𝐎𝐖𝐍𝐄𝐑 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  owner💫
├✰┃❖  menu💫
├✰┃❖  menu2💫
├✰┃❖  vv💫
├✰┃❖  listcmd💫
├✰┃❖  allmenu💫
├✰┃❖  repo💫
├✰┃❖  block💫
├✰┃❖  unblock💫
├✰┃❖  fullpp💫
├✰┃❖  setpp💫
├✰┃❖  restart💫
├✰┃❖  shutdown💫
├✰┃❖  updatecmd💫
├✰┃❖  alive💫
├✰┃❖  ping💫
├✰┃❖  gjid💫
├✰┃❖  jid💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃🎉𝐅𝐔𝐍 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  shapar💫
├✰┃❖  rate💫
├✰┃❖  insult💫
├✰┃❖  hack💫
├✰┃❖  ship💫
├✰┃❖  character💫
├✰┃❖  pickup💫
├✰┃❖  joke💫
├✰┃❖  hrt💫
├✰┃❖  hpy💫
├✰┃❖  syd💫
├✰┃❖  anger💫
├✰┃❖  shy💫
├✰┃❖  kiss💫
├✰┃❖  mon💫
├✰┃❖  cunfuzed💫
├✰┃❖  setpp💫
├✰┃❖  hand💫
├✰┃❖  nikal💫
├✰┃❖  hold💫
├✰┃❖  hug💫
├✰┃❖  nikal💫
├✰┃❖  hifi💫
├✰┃❖  poke💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃💱𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  sticker💫
├✰┃❖  sticker2💫
├✰┃❖  emojimix💫
├✰┃❖  fancy💫
├✰┃❖  take💫
├✰┃❖  tomp3💫
├✰┃❖  tts💫
├✰┃❖  trt💫
├✰┃❖  base64💫
├✰┃❖  unbase64💫
├✰┃❖  binary💫
├✰┃❖  dbinary💫
├✰┃❖  tinyurl💫
├✰┃❖  urldecode💫
├✰┃❖  urlencode💫
├✰┃❖  url💫
├✰┃❖  repeat💫
├✰┃❖  ask💫
├✰┃❖  readmore💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃🤖𝐀𝐈 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  ai💫
├✰┃❖  gpt3💫
├✰┃❖  gpt2💫
├✰┃❖  gptmini💫
├✰┃❖  gpt💫
├✰┃❖  meta💫
├✰┃❖  blackbox💫
├✰┃❖  luma💫
├✰┃❖  dj💫
├✰┃❖  khan💫
├✰┃❖  jawad💫
├✰┃❖  gpt4💫
├✰┃❖  bing💫
├✰┃❖  imagine💫
├✰┃❖  imagine2💫
├✰┃❖  copilot💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃👻𝐌𝐀𝐈𝐍 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  ping💫
├✰┃❖  ping2💫
├✰┃❖  speed💫
├✰┃❖  live💫
├✰┃❖  alive💫
├✰┃❖  runtime💫
├✰┃❖  uptime💫
├✰┃❖  repo💫
├✰┃❖  owner💫
├✰┃❖  menu💫
├✰┃❖  menu2💫
├✰┃❖  restart💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃🎎𝐀𝐍𝐈𝐌𝐄 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  fack💫
├✰┃❖  truth💫
├✰┃❖  dare💫
├✰┃❖  dog💫
├✰┃❖  awoo💫
├✰┃❖  garl💫
├✰┃❖  waifu💫
├✰┃❖  neko💫
├✰┃❖  megnumin💫
├✰┃❖  neko💫
├✰┃❖  maid💫
├✰┃❖  loli💫
├✰┃❖  animegirl💫
├✰┃❖  animegirl1💫
├✰┃❖  animegirl2💫
├✰┃❖  animegirl3💫
├✰┃❖  animegirl4💫
├✰┃❖  animegirl5💫
├✰┃❖  anime1💫
├✰┃❖  anime2💫
├✰┃❖  anime3💫
├✰┃❖  anime4💫
├✰┃❖  anime5💫
├✰┃❖  animenews💫
├✰┃❖  foxgirl💫
├✰┃❖  naruto💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃

╭━🅃♻️𝐎𝐓𝐇𝐄𝐑 𝙼𝙴𝙽𝚄 🅃━┈🅃
├✰╭─🅃🄴🅂🅃-🄱🄾🅃───·🅃
├✰┃❖  timenow💫
├✰┃❖  date💫
├✰┃❖  count💫
├✰┃❖  calculate💫
├✰┃❖  countx💫
├✰┃❖  flip💫
├✰┃❖  coinflip💫
├✰┃❖  rcolor💫
├✰┃❖  roll💫
├✰┃❖  fact💫
├✰┃❖  cpp💫
├✰┃❖  rw💫
├✰┃❖  pair💫
├✰┃❖  pair2💫
├✰┃❖  pair3💫
├✰┃❖  fancy💫
├✰┃❖  logo <text>💫
├✰┃❖  define💫
├✰┃❖  news💫
├✰┃❖  movie💫
├✰┃❖  weather💫
├✰┃❖  srepo💫
├✰┃❖  insult💫
├✰┃❖  save💫
├✰┃❖  wikipedia💫
├✰┃❖  gpass💫
├✰┃❖  githubstalk💫
├✰┃❖  yts💫
├✰┃❖  ytv💫
├✰╰───────────────┈🅃
╰━━━━🅃🄴🅂🅃-🄱🄾🅃━━━┈🅃
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇᴠ 𝙺𝙰𝚆𝙰𝙺𝙸²²7*`;

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
                        newsletterName: "🅃𝙺𝙰𝚆𝙰𝙺𝙸²²7🅃",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/uzvvj1.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
  
