import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
/*=========== LINK ============*/
global.link = {
	ig: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
	gh: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
	gc: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
	web: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
	yt: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
	fb: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
    tree: 'https://chat.whatsapp.com/BUICC0WOTsTI8jd0nJcoLi',
	nh: 'https://nhentai.net/g/365296/'	
}
/*===========PAYMENT==========*/
/*============DONASI===========*/
global.pay = {
	dana: '085736458548',
	ovo: '085736458548',
	gopay: '085736458548',
	pulsa: '085736458548',
	qris: 'https://telegra.ph/file/'
}
/*==============================*/
/*========= NOMOR ============*/
global.info = {
	nomorbot: '6285730400612',
	nomorown: '6285736458548',
	namebot: '© 2024 Vanyla Ai',
	nameown: '𝖝𝖎𝖔 | クシオ 🇮🇹'
}
/*==============================*/
/*=========== STAFF ============*/
global.owner = [
    ['6285736458548', '𝖝𝖎𝖔 | クシオ 🇮🇹', 'true']
]
global.mods = [] 
global.prems = [] 
/*==============================*/
/*======== WATERMARK ========*/
global.versibot = '10.15'
global.wm = '© 2024 Vanyla Ai' 
global.author = '𝖝𝖎𝖔 | クシオ 🇮🇹'
global.wait = '_Chotto matte_'
global.panila = '6281918369184'
/*==============================*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
/*======= TYPE DOCUMENT ======*/
global.doc = {
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    pdf: 'application/pdf',
    rtf: 'text/rtf'
}
/*==============================*/
/*========== HIASAN ===========*/
global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}
/*=========== FOTO ============*/
global.elainajpg = [
    'https://telegra.ph/file/3e43fcfaea6dc1ba95617.jpg',
    'https://telegra.ph/file/c738a9fc0722a59825cbb.mp4',
    'https://telegra.ph/file/4018167852aef19651f46.jpg',]
global.vanylathumb = 'https://files.catbox.moe/zb6xqq.jpg',    
// INI THUMBNAIL 
global.thumbnail = 'https://files.catbox.moe/zb6xqq.jpg',    
/*==============================*/
/*==============================*/
// WELCOME GOOD BYE 
global.wel = 'https://telegra.ph/file/ddc2589307fe851dfa1db.mp4',
global.good = 'https://telegra.ph/file/b262558cf65343c584e64.mp4',
/*==============================*/
/*==============================*/
global.flaaa = [
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
global.hwaifu = [
    'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
    'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
]

/*==================================*/
/*======== STICKER WM ============*/
global.stickpack = ' '
global.stickauth = ' '

global.multiplier = 38 // The higher, The harder levelup
/*===================================*/
/*============== EMOJI ==============*/
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})
