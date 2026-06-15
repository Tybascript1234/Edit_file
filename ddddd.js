// Place this emoji-input class in the box
// 1,543 different emojis

(function() {
    'use strict';

    // --- 1. بيانات الإيموجي (Emoji Data) ---
    // تم تقسيم الإيموجي إلى فئات مع أسمائها الرسمية لسهولة البحث والتنظيم.
    const emojiData = {
        'الأخيرة': [], // سيتم ملؤه ديناميكيًا بآخر الإيموجي المستخدمة
        'Smileys & People': [
            "😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾",
            "👋","🤚","🖐️","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🙏","🤝","💪","✍️","💅","🤳","💃","🕺","👯‍♀️","👯‍♂️","🕴️","🚶‍♀️","🚶","🚶‍♂️","🧍‍♀️","🧍","🧍‍♂️","🏃‍♀️","🏃","🏃‍♂️","💃","🕺","🕺","👯‍♀️","👯‍♂️","🧖‍♀️","🧖","🧖‍♂️","🧗‍♀️","🧗","🧗‍♂️","🤺","🏇","🏂","🏌️‍♀️","🏌️","🏌️‍♂️","🏄‍♀️","🏄","🏄‍♂️","🚣‍♀️","🚣","🚣‍♂️","🏊‍♀️","🏊","🏊‍♂️","⛹️‍♀️","⛹️","⛹️‍♂️","🏋️‍♀️","🏋️","🏋️‍♂️","🚴‍♀️","🚴","🚴‍♂️","🚵‍♀️","🚵","🚵‍♂️","🤸‍♀️","🤸","🤸‍♂️","🤼‍♀️","🤼","🤼‍♂️","🤽‍♀️","🤽","🤽‍♂️","🤾‍♀️","🤾","🤾‍♂️","🤹‍♀️","🤹","🤹‍♂️","🧘‍♀️","🧘","🧘‍♂️","🛀","🛌","🧑‍🤝‍🧑","👭","👫","👬","💏","👩‍❤️‍💋‍👨","👩‍❤️‍💋‍👩","👨‍❤️‍💋‍👨","💑","👩‍❤️‍👨","👩‍❤️‍👩","👨‍❤️‍👨","👪","👨‍👩‍👦","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👚","👕","👖","👔","👗","👙","👘","🥻","🩱","🩲","🩳","👙","👚","👕","👖","👔","👗","🥼","🩺","🦺","👔","👕","👖","👗","👙","🦺","🥻","🩱","🩲","🩳","👘","🩴","👞","👟","🥾","🥿","👠","👡","🩰","👢","👑","👒","🎩","🎓","🧢","⛑️","📿","💄","💍","💎","🔇","🔈","🔉","🔊","📢","📣","📯","🔔","🔕","🎼","🎵","🎶","🎙️","🎚️","🎛️","🎤","🎧","📻","🎷","🪗","🎸","🎹","🎺","🎻","🪕","🥁","🪘","🪇","🪈"
        ],
        "Animals & Nature": [
            "🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄️","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🪱","🐛","🦋","🌾","💐","🌷","🌹","🥀","🌺","🌸","🌼","🌻","🌞","🌝","🌛","🌜","🌚","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌙","🌎","🌍","🌏","🪐","💫","⭐","🌟","✨","⚡","☄️","💥","🔥","🌪️","🌈","☀️","🌤️","⛅","🌥️","☁️","🌦️","🌧️","⛈️","🌩️","🌨️","❄️","☃️","⛄","🌬️","💨","💧","💦","☔","☂️","🌊","🌫️"
        ],
        "Food & Drink": [
            "🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶️","🫑","🌽","🥕","🫒","🧄","🧅","🥔","🍠","🥐","🍞","🥖","🫓","🥨","🥯","🥞","🧇","🧀","🍖","🍗","🥩","🥓","🍔","🍟","🍕","🌭","🥪","🌮","🌯","🫔","🥙","🧆","🥚","🍳","🥘","🍲","🫕","🥣","🥗","🍿","🧈","🧂","🥫","🍱","🍘","🍙","🍚","🍛","🍜","🍝","🍠","🍢","🍣","🍤","🍥","🥮","🍡","🥟","🥠","🥡","🦀","🦞","🦐","🦑","🦪","🍦","🍧","🍨","🍩","🍪","🎂","🍰","🧁","🥧","🍫","🍬","🍭","🍮","🍯","🍼","🥛","☕","🫖","🍵","🍶","🍺","🍻","🥂","🍷","🥃","🥃","🍸","🍹","🧉","🍾","🧊","🥄","🍴","🍽️","🥣","🥡","🥢"
        ],
        "Activities": [
            "⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱","🪀","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳","🪁","🏹","🎣","🤿","🥊","🥋","🎽","🛹","🛷","⛸️","🥌","🎿","⛷️","🏂","🪂","🏋️‍♀️","🏋️","🏋️‍♂️","🤼‍♀️","🤼","🤼‍♂️","🤸‍♀️","🤸","🤸‍♂️","⛹️‍♀️","⛹️","⛹️‍♂️","🤺","🤾‍♀️","🤾","🤾‍♂️","🏌️‍♀️","🏌️","🏌️‍♂️","🏇","🧘‍♀️","🧘","🧘‍♂️","🏄‍♀️","🏄","🏄‍♂️","🏊‍♀️","🏊","🏊‍♂️","🤽‍♀️","🤽","🤽‍♂️","🤾‍♀️","🤾","🤾‍♂️","🤹‍♀️","🤹","🤹‍♂️","🧩"
        ],
        "Travel & Places": [
            "🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🚲","🛴","🛹","🛼","🚁","🛸","🚀","✈️","🛩️","🛫","🛬","⛵","🚤","🛥️","🛳️","⚓","⛽","🚧","🚨","🚥","🚦","🏁","🚏","🗺️","🗿","🗽","🗼","🏰","🏯","🏟️","🎡","🎢","🎠","⛲","⛱️","🏖️","🏝️","🏜️","🌋","⛰️","🏔️","🗻","🏕️","⛺","🏠","🏡","🏘️","🏚️","🏗️","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛️","⛪","🕌","🕍","🛕","🕋","⛩️","🛤️","🛣️","🗾","🎑","🏞️","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🏙️","🌃","🌌","🌉","🌁","🌃","🏙️","🌌","🌉","🌁","🎠","🎡","🎢","💈","🎪","🚂","🚃","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚝","🚞","🚋","🚌","🚍","🚎","🚐","🚑","🚒","🚓","🚔","🚕","🚖","🚗","🚘","🚙","🛻","🚚","🚛","🚜","🏎️","🏍️","🛵","🚲","🛴","🛹","🛼","🚁","🛸","🚀","✈️","🛩️","🛫","🛬","⛵","🚤","🛥️","🛳️","⚓","⛽","🚧","🚨","🚥","🚦","🚏","🗺️","🗿","🗽","🗼","🏰","🏯","🏟️","🎡","🎢","🎠","⛲","⛱️","🏖️","🏝️","🏜️","🌋","⛰️","🏔️","🗻","🏕️","⛺","🏠","🏡","🏘️","🏚️","🏗️","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛️","⛪","🕌","🕍","🛕","🕋","⛩️","🛤️","🛣️","🗾","🎑","🏞️","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🏙️","🌃","🌌","🌉","🌁"
        ],
        "Objects": [
            "⌚","📱","📲","💻","⌨️","🖥️","🖨️","🖱️","🖲️","🕹️","🗜️","💽","💾","💿","📀","📼","📷","📸","📹","🎥","📽️","🎞️","📞","☎️","📟","📠","📺","📻","🎙️","🎚️","🎛️","🧭","⏱️","⏲️","⏰","🕰️","⌛","⏳","📡","🔋","🔌","💡","🔦","🕯️","🪔","🧯","🛢️","💸","💵","💴","💶","💷","💰","💳","💎","⚖️","🧰","🔧","🔨","⚒️","🛠️","⛏️","🔩","⚙️","🧱","⛓️","🧲","🔫","💣","🧨","🪓","🔪","🗡️","⚔️","🛡️","🚬","⚰️","⚱️","🏺","🔮","📿","🧿","💈","⚗️","🔭","🔬","🕳️","🩹","🩺","💊","💉","🩸","🧬","🦠","🧫","🧪","🌡️","🧹","🧺","🧻","🚽","🚰","🚿","🛁","🛀","🧼","🪒","🧽","🧴","🛎️","🔑","🗝️","🚪","🪑","🛋️","🛏️","🛌","🧸","🖼️","🖼️","🛍️","🎁","🎈","🎏","🎀","🎊","🎉","🎎","🏮","🎐","🧧","✉️","📩","📨","📧","💌","📥","📤","📦","🏷️","📪","📫","📬","📭","📮","📯","📜","📃","📄","📑","🧾","📊","📈","📉","🗒️","🗓️","📆","📅","🗑️","📇","🗃️","🗳️","🗄️","📋","📁","📂","🗂️","🗞️","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🔖","🧷","🔗","📎","🖇️","📐","📏","🧮","📌","📍","✂️","🖊️","🖋️","✒️","🖌️","🖍️","📝","✏️","🔍","🔎","🔏","🔐","🔒","🔓"
        ],
        "Symbols": [
            "❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚️","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","❌","⭕","🛑","⛔","📛","🚫","💯","💢","♨️","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗","❕","❓","❔","‼️","⁉️","🔅","🔆","〽️","⚠️","🚸","🔱","⚜️","🔰","♻️","✅","🈯","💹","❇️","✳️","❎","🌐","💠","Ⓜ️","🌀","💤","🏧","🚾","♿","🅿️","🈳","🈂️","🛂","🛃","🛄","🛅","🚹","🚺","🚼","🚻","🚮","🎦","📶","🈁","🔣","ℹ️","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔢","#️⃣","*️⃣","⏏️","▶️","⏸️","⏯️","⏹️","⏺️","⏭️","⏮️","⏩","⏪","⏫","⏬","◀️","🔼","🔽","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖️","💲","💱","™️","©️","®️","〰️","➰","➿","🔚","🔙","🔛","🔝","🔜","✔️","☑️","🔘","⚪","⚫","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪️","▫️","◾","◽","◼️","◻️","⬛","⬜","🔈","🔇","🔉","🔊","🔔","🔕","📣","📢","👁️‍🗨️","💬","💭","🗯️","♠️","♣️","♥️","♦️","🃏","🎴","🀄","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧","🏳️","🏴","🏁","🚩","🏴‍☠️"
        ],
        "Flags": [
            "🏳️","🏴","🏁","🚩","🏴‍☠️","🇦🇫","🇦🇽","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇶","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇮🇴","🇻🇮","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇮🇨","🇨🇻","🇧🇶","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇽","🇨🇨","🇨🇴","🇰🇲","🇨🇬","🇨🇩","🇨🇰","🇨🇷","🇨🇮","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇩🇰","🇩🇯","🇩🇲","🇩🇴","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇪🇹","🇪🇺","🇫🇰","🇫🇴","🇫🇯","🇫🇴","🇫🇮","🇫🇷","🇬🇫","🇵🇫","🇹🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳","🇬🇼","🇬🇾","🇭🇹","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇹","🇯🇲","🇯🇵","🎌","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮","🇱🇹","🇱🇺","🇲🇴","🇲🇰","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽","🇫🇲","🇲🇸","🇲🇸","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇳🇺","🇳🇫","🇰🇵","🇲🇵","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇸","🇵🇬","🇵🇾","🇵🇪","🇵🇭","🇵🇺","🇵🇱","🇵🇹","🇵🇷","🇶🇦","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🇼🇸","🇸🇲","🇸🇹","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱","🇸🇬","🇸🇽","🇸🇰","🇸🇮","🇬🇸","🇸🇧","🇸🇴","🇿🇦","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇧🇱","🇸🇭","🇰🇳","🇱🇨","🇵🇲","🇻🇨","🇸🇩","🇸🇷","🇸🇿","🇸🇪","🇨🇭","🇸🇾","🇹🇾","🇹🇿","🇹🇭","🇹🇱","🇹🇬","🇹🇰","🇹🇴","🇹🇹","🇹🇽","🇹🇷","🇹🇲","🇹🇨","🇻🇮","🇹🇻","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏴󠁧󠁢󠁳󠁣󠁴󠁿","🏴󠁧󠁢󠁷󠁬󠁳󠁿","🇺🇸","🇺🇾","🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇿🇲","🇿🇼","🇦🇨","🇧🇻","🇨🇵","🇪🇦","🇩🇬","🇭🇲","🇲🇫","🇸🇯","🇹🇦","🇺🇲","🇺🇳"
        ]
    };

    // --- 1.1. أسماء الإيموجي بالعربية والإنجليزية ---
    const emojiNames = {
        "😀": { ar: "وجه مبتسم", en: "Grinning Face" },
        "😃": { ar: "وجه مبتسم بعيون كبيرة", en: "Grinning Face with Big Eyes" },
        "😄": { ar: "وجه مبتسم بعيون مبتسمة", en: "Grinning Face with Smiling Eyes" },
        "😁": { ar: "وجه مبتسم بعيون مبتسمة مغلق", en: "Beaming Face with Smiling Eyes" },
        "😆": { ar: "وجه مبتسم مغلق العيون", en: "Grinning Squinting Face" },
        "😅": { ar: "وجه مبتسم مع عرق", en: "Grinning Face with Sweat" },
        "😂": { ar: "وجه مع دموع الفرح", en: "Face with Tears of Joy" },
        "🤣": { ar: "وجه يضحك بشدة", en: "Rolling on the Floor Laughing" },
        "😊": { ar: "وجه مبتسم بعيون مبتسمة", en: "Smiling Face with Smiling Eyes" },
        "😇": { ar: "وجه مبتسم مع هالة", en: "Smiling Face with Halo" },
        "🙂": { ar: "وجه مبتسم بسيط", en: "Slightly Smiling Face" },
        "🙃": { ar: "وجه مبتسم مقلوب", en: "Upside-Down Face" },
        "😉": { ar: "وجه غامز", en: "Winking Face" },
        "😌": { ar: "وجه مرتاح", en: "Relieved Face" },
        "😍": { ar: "وجه مع قلوب عيون", en: "Smiling Face with Heart-Eyes" },
        "🥰": { ar: "وجه مبتسم مع ثلاث قلوب", en: "Smiling Face with Hearts" },
        "😘": { ar: "وجه يرسل قبلة", en: "Face Blowing a Kiss" },
        "😗": { ar: "وجه يرسل قبلة", en: "Kissing Face" },
        "😙": { ar: "وجه يرسل قبلة مبتسم", en: "Kissing Face with Smiling Eyes" },
        "😚": { ar: "وجه يرسل قبلة مغمض العيون", en: "Kissing Face with Closed Eyes" },
        "😋": { ar: "وجه يتذوق", en: "Face Savoring Food" },
        "😛": { ar: "وجه لسان خارج", en: "Face with Tongue" },
        "😝": { ar: "وجه لسان خارج مغلق العيون", en: "Squinting Face with Tongue" },
        "😜": { ar: "وجه غامز لسان خارج", en: "Winking Face with Tongue" },
        "🤪": { ar: "وجه مجنون", en: "Zany Face" },
        "🤨": { ar: "وجه مرتفع الحاجب", en: "Raised Eyebrow" },
        "🧐": { ar: "وجه مع نظارة", en: "Monocle Face" },
        "🤓": { ar: "وجه نerd", en: "Nerd Face" },
        "😎": { ar: "وجه مع نظارات شمسية", en: "Smiling Face with Sunglasses" },
        "🥸": { ar: "وجه مقنع", en: "Disguised Face" },
        "🤩": { ar: "وجه نجمي", en: "Star-Struck" },
        "🥳": { ar: "وجه يحتفل", en: "Partying Face" },
        "😏": { ar: "وجه مبتسم مريب", en: "Smirking Face" },
        "😒": { ar: "وجه غير مبالٍ", en: "Unamused Face" },
        "😞": { ar: "وجه خائب", en: "Disappointed Face" },
        "😔": { ar: "وجه حزين", en: "Pensive Face" },
        "😟": { ar: "وجه قلق", en: "Worried Face" },
        "😕": { ar: "وجه حائر", en: "Confused Face" },
        "🙁": { ar: "وجه حزين بسيط", en: "Slightly Frowning Face" },
        "☹️": { ar: "وجه حزين", en: "Frowning Face" },
        "😣": { ar: "وجه محتار", en: "Persevering Face" },
        "😖": { ar: "وجه متألم", en: "Confounded Face" },
        "😫": { ar: "وجه متعب", en: "Tired Face" },
        "😩": { ar: "وجه يائس", en: "Weary Face" },
        "🥺": { ar: "وجه متوسل", en: "Pleading Face" },
        "😢": { ar: "وجه يبكي", en: "Crying Face" },
        "😭": { ar: "وجه يبكي بشدة", en: "Loudly Crying Face" },
        "😤": { ar: "وجه يزفر", en: "Face with Steam From Nose" },
        "😠": { ar: "وجه غاضب", en: "Angry Face" },
        "😡": { ar: "وجه غاضب جداً", en: "Enraged Face" },
        "🤬": { ar: "وجه يشتتم", en: "Face with Symbols on Mouth" },
        "🤯": { ar: "وجه منفجر", en: "Exploding Head" },
        "😳": { ar: "وجه محمر", en: "Flushed Face" },
        "🥵": { ar: "وجه حار", en: "Hot Face" },
        "🥶": { ar: "وجه بارد", en: "Cold Face" },
        "😱": { ar: "وجه مصدوم", en: "Face Screaming in Fear" },
        "😨": { ar: "وجه خائف", en: "Fearful Face" },
        "😰": { ar: "وجه متعرق", en: "Face with Open Mouth and Cold Sweat" },
        "😥": { ar: "وجه حزين مع عرق", en: "Sad but Relieved Face" },
        "😓": { ar: "وجه متعرق", en: "Downcast Face with Sweat" },
        "🤗": { ar: "وجه يعانق", en: "Hugging Face" },
        "🤔": { ar: "وجه يفكر", en: "Thinking Face" },
        "🤭": { ar: "وجه يغطي فمه", en: "Face with Hand Over Mouth" },
        "🤫": { ar: "وجه صامت", en: "Shushing Face" },
        "🤥": { ar: "وجه كاذب", en: "Lying Face" },
        "😶": { ar: "وجه بلا تعبير", en: "Face Without Mouth" },
        "😐": { ar: "وجه محايد", en: "Neutral Face" },
        "😑": { ar: "وجه بلا تعبير", en: "Expressionless Face" },
        "😬": { ar: "وجه متوتر", en: "Grimacing Face" },
        "🙄": { ar: "وجه يدور عينيه", en: "Face with Rolling Eyes" },
        "😯": { ar: "وجه مفاجأ", en: "Hushed Face" },
        "😦": { ar: "وجه منفتح الفم", en: "Frowning Face with Open Mouth" },
        "😧": { ar: "وجه منفتح الفم مرعوب", en: "Anguished Face" },
        "😮": { ar: "وجه منفتح الفم", en: "Face with Open Mouth" },
        "😲": { ar: "وجه مندهش", en: "Astonished Face" },
        "🥱": { ar: "وجه يتثاءب", en: "Yawning Face" },
        "😴": { ar: "_face نائم", en: "Sleeping Face" },
        "🤤": { ar: "ريق يسيل", en: "Drooling Face" },
        "😪": { ar: "وجه نائم", en: "Sleepy Face" },
        "😵": { ar: "وجه دوار", en: "Dizzy Face" },
        "🤐": { ar: "وجه مغلق الفم", en: "Zipper-Mouth Face" },
        "🥴": { ar: "وجه مخمور", en: "Woozy Face" },
        "🤢": { ar: "وجه غثيان", en: "Nauseated Face" },
        "🤮": { ar: "وجه يتقيأ", en: "Face Vomiting" },
        "🤧": { ar: "وجه يعطس", en: "Sneezing Face" },
        "😷": { ar: "وجه مع قناع", en: "Face with Medical Mask" },
        "🤒": { ar: "وجه مريض", en: "Face with Thermometer" },
        "🤕": { ar: "وجه مصاب", en: "Face with Head-Bandage" },
        "🤑": { ar: "وجه مع أموال", en: "Money-Mouth Face" },
        "🤠": { ar: "وجه كاوبوي", en: "Cowboy Hat Face" },
        "😈": { ar: "وجه شيطان مبتسم", en: "Smiling Face with Horns" },
        "👿": { ar: "شيطان", en: "Angry Face with Horns" },
        "👹": { ar: "وحش", en: "Japanese Ogre" },
        "👺": { ar: "غول", en: "Japanese Goblin" },
        "🤡": { ar: "مهرج", en: "Clown Face" },
        "💩": { ar: "براز", en: "Pile of Poo" },
        "👻": { ar: "شبح", en: "Ghost" },
        "💀": { ar: "جمجمة", en: "Skull" },
        "☠️": { ar: "جمجمة وعظام", en: "Skull and Crossbones" },
        "👽": { ar: "كائن فضائي", en: "Alien" },
        "👾": { ar: "وحش فضائي", en: "Alien Monster" },
        "🤖": { ar: "روبوت", en: "Robot" },
        "🎃": { ar: "قرع هالوين", en: "Jack-O-Lantern" },
        "😺": { ar: "قطة مبتسمة", en: "Grinning Cat" },
        "😸": { ar: "قطة مبتسمة بعيون مبتسمة", en: "Grinning Cat with Smiling Eyes" },
        "😹": { ar: "قطة تضحك", en: "Cat with Tears of Joy" },
        "😻": { ar: "قطة مع قلوب عيون", en: "Smiling Cat with Heart-Eyes" },
        "😼": { ar: "قطة مبتسمة مغرورة", en: "Cat with Wry Smile" },
        "😽": { ar: "قطة تقبض", en: "Kissing Cat" },
        "🙀": { ar: "قطة مندهشة", en: "Weary Cat" },
        "😿": { ar: "قطة حزينة", en: "Crying Cat" },
        "😾": { ar: "قطة غاضبة", en: "Pouting Cat" },
        "👋": { ar: "يد تلوح", en: "Waving Hand" },
        "🤚": { ar: "يد خلف", en: "Raised Back of Hand" },
        "🖐️": { ar: "يد مفتوحة", en: "Hand with Fingers Splayed" },
        "✋": { ar: "يد مرفوعة", en: "Raised Hand" },
        "🖖": { ar: "يد فولكان", en: "Vulcan Salute" },
        "👌": { ar: "علامة موافق", en: "OK Hand" },
        "🤌": { ar: "إصبع إيطالي", en: "Pinched Fingers" },
        "🤏": { ar: "إصبع صغير", en: "Pinching Hand" },
        "✌️": { ar: "علامة النصر", en: "Victory Hand" },
        "🤞": { ar: "إصبعان متقاطعان", en: "Crossed Fingers" },
        "🤟": { ar: "إشارة الحب", en: "Love-You Gesture" },
        "🤘": { ar: "علامة الصخرة", en: "Sign of the Horns" },
        "🤙": { ar: "إشارة الهاتف", en: "Call Me Hand" },
        "👈": { ar: "إصبع خلف", en: "Backhand Index Pointing Left" },
        "👉": { ar: "إصبع أمام", en: "Backhand Index Pointing Right" },
        "👆": { ar: "إصبع لأعلى", en: "Backhand Index Pointing Up" },
        "🖕": { ar: "إصبع وسط", en: "Middle Finger" },
        "👇": { ar: "إصبع لأسفل", en: "Backhand Index Pointing Down" },
        "☝️": { ar: "إصبع لأعلى", en: "Index Pointing Up" },
        "👍": { ar: "إبهام لأعلى", en: "Thumbs Up" },
        "👎": { ar: "إبهام لأسفل", en: "Thumbs Down" },
        "✊": { ar: "قبضة مرفوعة", en: "Raised Fist" },
        "👊": { ar: "قبضة", en: "Oncoming Fist" },
        "🤛": { ar: "قبضة يسار", en: "Left-Facing Fist" },
        "🤜": { ar: "قبضة يمين", en: "Right-Facing Fist" },
        "👏": { ar: "تصفيق", en: "Clapping Hands" },
        "🙌": { ar: "يدان مرفوعتان", en: "Raising Hands" },
        "👐": { ar: "يدان مفتوحتان", en: "Open Hands" },
        "🤲": { ar: "يدان متشابكتان", en: "Palms Up Together" },
        "🙏": { ar: "يدان متصالبتان", en: "Folded Hands" },
        "🤝": { ar: "مصافحة", en: "Handshake" },
        "💪": { ar: "عضلة", en: "Flexed Biceps" },
        "✍️": { ar: "كتابة", en: "Writing Hand" },
        "💅": { ar: "أظافر مصبوغة", en: "Nail Polish" },
        "🤳": { ar: "سيلفي", en: "Selfie" },
        "💃": { ar: "امرأة ترقص", en: "Woman Dancing" },
        "🕺": { ar: "رجل يرقص", en: "Man Dancing" },
        "👯‍♀️": { ar: "نساء بأقنعة أرانب", en: "Women with Bunny Ears" },
        "👯‍♂️": { ar: "رجال بأقنعة أرانب", en: "Men with Bunny Ears" },
        "🕴️": { ar: "رجل يرتدي بذلة", en: "Man in Suit Levitating" },
        "🚶‍♀️": { ar: "امرأة تمشي", en: "Woman Walking" },
        "🚶": { ar: "شخص يمشي", en: "Person Walking" },
        "🚶‍♂️": { ar: "رجل يمشي", en: "Man Walking" },
        "🧍‍♀️": { ar: "امرأة واقفة", en: "Woman Standing" },
        "🧍": { ar: "شخص واقف", en: "Person Standing" },
        "🧍‍♂️": { ar: "رجل واقف", en: "Man Standing" },
        "🏃‍♀️": { ar: "امرأة تركض", en: "Woman Running" },
        "🏃": { ar: "شخص يركض", en: "Person Running" },
        "🏃‍♂️": { ar: "رجل يركض", en: "Man Running" },
        "🧖‍♀️": { ar: "امرأة في حمام بخار", en: "Woman in Steamy Room" },
        "🧖": { ar: "شخص في حمام بخار", en: "Person in Steamy Room" },
        "🧖‍♂️": { ar: "رجل في حمام بخار", en: "Man in Steamy Room" },
        "🧗‍♀️": { ar: "امرأة تتسلق", en: "Woman Climbing" },
        "🧗": { ar: "شخص يتسلق", en: "Person Climbing" },
        "🧗‍♂️": { ar: "رجل يتسلق", en: "Man Climbing" },
        "🤺": { ar: "مبارزة", en: "Person Fencing" },
        "🏇": { ar: "فروسية", en: "Horse Racing" },
        "🏂": { ar: "تزلج على الثلج", en: "Snowboarder" },
        "🏌️‍♀️": { ar: "امرأة تلعب الجولف", en: "Woman Golfing" },
        "🏌️": { ar: "شخص يلعب الجولف", en: "Person Golfing" },
        "🏌️‍♂️": { ar: "رجل يلعب الجولف", en: "Man Golfing" },
        "🏄‍♀️": { ar: "امرأة تتجول على الأمواج", en: "Woman Surfing" },
        "🏄": { ar: "شخص يتجول على الأمواج", en: "Person Surfing" },
        "🏄‍♂️": { ar: "رجل يتجول على الأمواج", en: "Man Surfing" },
        "🚣‍♀️": { ar: "امرأة تجدف", en: "Woman Rowing Boat" },
        "🚣": { ar: "شخص يجدف", en: "Person Rowing Boat" },
        "🚣‍♂️": { ar: "رجل يجدف", en: "Man Rowing Boat" },
        "🏊‍♀️": { ar: "امرأة تسبح", en: "Woman Swimming" },
        "🏊": { ar: "شخص يسبح", en: "Person Swimming" },
        "🏊‍♂️": { ar: "رجل يسبح", en: "Man Swimming" },
        "⛹️‍♀️": { ar: "امرأة تلعب كرة السلة", en: "Woman Bouncing Ball" },
        "⛹️": { ar: "شخص يلعب بالكرة", en: "Person Bouncing Ball" },
        "⛹️‍♂️": { ar: "رجل يلعب كرة السلة", en: "Man Bouncing Ball" },
        "🏋️‍♀️": { ar: "امرأة ترفع أثقال", en: "Woman Lifting Weights" },
        "🏋️": { ar: "شخص يرفع أثقال", en: "Person Lifting Weights" },
        "🏋️‍♂️": { ar: "رجل يرفع أثقال", en: "Man Lifting Weights" },
        "🚴‍♀️": { ar: "امرأة تدرج", en: "Woman Biking" },
        "🚴": { ar: "شخص يدرج", en: "Person Biking" },
        "🚴‍♂️": { ar: "رجل يدرج", en: "Man Biking" },
        "🚵‍♀️": { ar: "امرأة تدرج جبلي", en: "Woman Mountain Biking" },
        "🚵": { ar: "شخص يدرج جبلي", en: "Person Mountain Biking" },
        "🚵‍♂️": { ar: "رجل يدرج جبلي", en: "Man Mountain Biking" },
        "🤸‍♀️": { ar: "امرأة تقوم بحركة بهلوانية", en: "Woman Cartwheeling" },
        "🤸": { ar: "شخص يقوم بحركة بهلوانية", en: "Person Cartwheeling" },
        "🤸‍♂️": { ar: "رجل يقوم بحركة بهلوانية", en: "Man Cartwheeling" },
        "🤼‍♀️": { ar: "نساء مصارعات", en: "Women Wrestling" },
        "🤼": { ar: "مصارعة", en: "People Wrestling" },
        "🤼‍♂️": { ar: "رجال مصارعون", en: "Men Wrestling" },
        "🤽‍♀️": { ar: "امرأة تلعب كرة الماء", en: "Woman Playing Water Polo" },
        "🤽": { ar: "شخص يلعب كرة الماء", en: "Person Playing Water Polo" },
        "🤽‍♂️": { ar: "رجل يلعب كرة الماء", en: "Man Playing Water Polo" },
        "🤾‍♀️": { ar: "امرأة تلعب كرة اليد", en: "Woman Playing Handball" },
        "🤾": { ar: "شخص يلعب كرة اليد", en: "Person Playing Handball" },
        "🤾‍♂️": { ar: "رجل يلعب كرة اليد", en: "Man Playing Handball" },
        "🤹‍♀️": { ar: "امرأة تلعب بالكرات", en: "Woman Juggling" },
        "🤹": { ar: "شخص يلعب بالكرات", en: "Person Juggling" },
        "🤹‍♂️": { ar: "رجل يلعب بالكرات", en: "Man Juggling" },
        "🧘‍♀️": { ar: "امرأة في وضعية اللوتس", en: "Woman in Lotus Position" },
        "🧘": { ar: "شخص في وضعية اللوتس", en: "Person in Lotus Position" },
        "🧘‍♂️": { ar: "رجل في وضعية اللوتس", en: "Man in Lotus Position" },
        "🛀": { ar: "شخص يأخذ حمام", en: "Person Taking Bath" },
        "🛌": { ar: "شخص في السرير", en: "Person in Bed" },
        "🧑‍🤝‍🧑": { ar: "أشخاص يتصافحون", en: "People Holding Hands" },
        "👭": { ar: "نساء يمسكن بأيدي بعض", en: "Women Holding Hands" },
        "👫": { ar: "رجل وامرأة يمسكان بأيدي بعض", en: "Woman and Man Holding Hands" },
        "👬": { ar: "رجال يمسكون بأيدي بعض", en: "Men Holding Hands" },
        "💏": { ar: "زوج يقبّل", en: "Kiss" },
        "👩‍❤️‍💋‍👨": { ar: "زوج يقبّل", en: "Kiss: Woman, Man" },
        "👩‍❤️‍💋‍👩": { ar: "زوجتان تقبّلان", en: "Kiss: Woman, Woman" },
        "👨‍❤️‍💋‍👨": { ar: "زوجان يقبّلان", en: "Kiss: Man, Man" },
        "💑": { ar: "زوج مع قلب", en: "Couple with Heart" },
        "👩‍❤️‍👨": { ar: "زوج مع قلب", en: "Couple with Heart: Woman, Man" },
        "👩‍❤️‍👩": { ar: "زوجتان مع قلب", en: "Couple with Heart: Woman, Woman" },
        "👨‍❤️‍👨": { ar: "زوجان مع قلب", en: "Couple with Heart: Man, Man" },
        "👪": { ar: "عائلة", en: "Family" },
        "👨‍👩‍👦": { ar: "عائلة: رجل، امرأة، ولد", en: "Family: Man, Woman, Boy" },
        "👨‍👩‍👧": { ar: "عائلة: رجل، امرأة، بنت", en: "Family: Man, Woman, Girl" },
        "👨‍👩‍👧‍👦": { ar: "عائلة: رجل، امرأة، بنت، ولد", en: "Family: Man, Woman, Girl, Boy" },
        "👨‍👩‍👦‍👦": { ar: "عائلة: رجل، امرأة، ولدين", en: "Family: Man, Woman, Boy, Boy" },
        "👨‍👩‍👧‍👧": { ar: "عائلة: رجل، امرأة، بنتين", en: "Family: Man, Woman, Girl, Girl" },
        "👩‍👩‍👦": { ar: "عائلة: امرأة، امرأة، ولد", en: "Family: Woman, Woman, Boy" },
        "👩‍👩‍👧": { ar: "عائلة: امرأة، امرأة، بنت", en: "Family: Woman, Woman, Girl" },
        "👩‍👩‍👧‍👦": { ar: "عائلة: امرأة، امرأة، بنت، ولد", en: "Family: Woman, Woman, Girl, Boy" },
        "👩‍👩‍👦‍👦": { ar: "عائلة: امرأة، امرأة، ولدين", en: "Family: Woman, Woman, Boy, Boy" },
        "👩‍👩‍👧‍👧": { ar: "عائلة: امرأة، امرأة، بنتين", en: "Family: Woman, Woman, Girl, Girl" },
        "👨‍👨‍👦": { ar: "عائلة: رجل، رجل، ولد", en: "Family: Man, Man, Boy" },
        "👨‍👨‍👧": { ar: "عائلة: رجل، رجل، بنت", en: "Family: Man, Man, Girl" },
        "👨‍👨‍👧‍👦": { ar: "عائلة: رجل، رجل، بنت، ولد", en: "Family: Man, Man, Girl, Boy" },
        "👨‍👨‍👦‍👦": { ar: "عائلة: رجل، رجل، ولدين", en: "Family: Man, Man, Boy, Boy" },
        "👨‍👨‍👧‍👧": { ar: "عائلة: رجل، رجل، بنتين", en: "Family: Man, Man, Girl, Girl" },
        "👩‍👦": { ar: "أم وولد", en: "Family: Woman, Boy" },
        "👩‍👧": { ar: "أم وبنت", en: "Family: Woman, Girl" },
        "👩‍👧‍👦": { ar: "أم وبنت وولد", en: "Family: Woman, Girl, Boy" },
        "👩‍👦‍👦": { ar: "أم وولدين", en: "Family: Woman, Boy, Boy" },
        "👩‍👧‍👧": { ar: "أم وبنتين", en: "Family: Woman, Girl, Girl" },
        "👨‍👦": { ar: "أب وولد", en: "Family: Man, Boy" },
        "👨‍👧": { ar: "أب وبنت", en: "Family: Man, Girl" },
        "👨‍👧‍👦": { ar: "أب وبنت وولد", en: "Family: Man, Girl, Boy" },
        "👨‍👦‍👦": { ar: "أب وولدين", en: "Family: Man, Boy, Boy" },
        "👨‍👧‍👧": { ar: "أب وبنتين", en: "Family: Man, Girl, Girl" },
        "👚": { ar: "قميص نسائي", en: "Womans Clothes" },
        "👕": { ar: "قميص رجالي", en: "T-Shirt" },
        "👖": { ar: "بنطال", en: "Jeans" },
        "👔": { ar: "ربطة عنق", en: "Necktie" },
        "👗": { ar: "فستان", en: "Dress" },
        "👙": { ar: "ملابس سباحة", en: "Bikini" },
        "👘": { ar: "ملابس يابانية", en: "Kimono" },
        "🥻": { ar: "ساري", en: "Sari" },
        "🩱": { ar: "ملابس سباحة قطعة واحدة", en: "One-Piece Swimsuit" },
        "🩲": { ar: "ملابس داخلية قصيرة", en: "Briefs" },
        "🩳": { ar: "شورت", en: "Shorts" },
        "🥼": { ar: "معطف مختبر", en: "Lab Coat" },
        "🩺": { ar: "معطف طبيب", en: "Stethoscope" },
        "🦺": { ar: "سترة أمان", en: "Safety Vest" },
        "🩴": { ar: "صندل", en: "Thong Sandal" },
        "👞": { ar: "حذاء رجالي", en: "Mans Shoe" },
        "👟": { ar: "حذاء رياضي", en: "Running Shoe" },
        "🥾": { ar: "حذاء تسلق", en: "Hiking Boot" },
        "🥿": { ar: "حذاء مسطح", en: "Flat Shoe" },
        "👠": { ar: "حذاء نسائي بكعب عالٍ", en: "High-Heeled Shoe" },
        "👡": { ar: "حذاء نسائي بكعب منخفض", en: "Womans Sandal" },
        "🩰": { ar: "حذاء باليه", en: "Ballet Shoes" },
        "👢": { ar: "حذاء نسائي جلدي", en: "Womans Boot" },
        "👑": { ar: "تاج", en: "Crown" },
        "👒": { ar: "قبعات نسائية", en: "Womans Hat" },
        "🎩": { ar: "قبعة رسمية", en: "Top Hat" },
        "🎓": { ar: "قبعة تخرج", en: "Graduation Cap" },
        "🧢": { ar: "قبعة شعر", en: "Billed Cap" },
        "⛑️": { ar: "قبعة أمان", en: "Rescue Workers Helmet" },
        "📿": { ar: "قلادة خرز", en: "Prayer Beads" },
        "💄": { ar: " أحمر شفاه", en: "Lipstick" },
        "💍": { ar: "خاتم", en: "Ring" },
        "💎": { ar: "ماسة", en: "Gem Stone" },
        "🔇": { ar: "صامت", en: "Muted Speaker" },
        "🔈": { ar: "صوت منخفض", en: "Speaker Low Volume" },
        "🔉": { ar: "صوت متوسط", en: "Speaker Medium Volume" },
        "🔊": { ar: "صوت عالٍ", en: "Speaker High Volume" },
        "📢": { ar: "مكبر صوت", en: "Loudspeaker" },
        "📣": { ar: "بوق", en: "Megaphone" },
        "📯": { ar: "بوق بريد", en: "Postal Horn" },
        "🔔": { ar: "جرس", en: "Bell" },
        "🔕": { ar: "جرس صامت", en: "Bell with Slash" },
        "🎼": { ar: "موسيقى", en: "Musical Score" },
        "🎵": { ar: "ملاحظة موسيقية", en: "Musical Note" },
        "🎶": { ar: "ملاحظات موسيقية", en: "Musical Notes" },
        "🎙️": { ar: "ميكروفون", en: "Studio Microphone" },
        "🎚️": { ar: "مستوى صوت", en: "Level Slider" },
        "🎛️": { ar: "لوحة تحكم", en: "Control Knobs" },
        "🎤": { ar: "ميكروفون", en: "Microphone" },
        "🎧": { ar: "سماعات", en: "Headphone" },
        "📻": { ar: "راديو", en: "Radio" },
        "🎷": { ar: "ساكسفون", en: "Saxophone" },
        "🪗": { ar: "أكورديون", en: "Accordion" },
        "🎸": { ar: "جيتار", en: "Guitar" },
        "🎹": { ar: "بيانو", en: "Musical Keyboard" },
        "🥁": { ar: "طبول", en: "Drum" },
        "🪘": { ar: "طبول إفريقية", en: "Long Drum" },
        "🪇": { ar: "ماراكاس", en: "Maracas" },
        "🪈": { ar: "فلوت", en: "Flute" },
        "🐶": { ar: "كلب", en: "Dog Face" },
        "🐱": { ar: "قطة", en: "Cat Face" },
        "🐭": { ar: "فأر", en: "Mouse Face" },
        "🐹": { ar: "هامستر", en: "Hamster Face" },
        "🐰": { ar: "أرنب", en: "Rabbit Face" },
        "🦊": { ar: "ثعلب", en: "Fox Face" },
        "🐻": { ar: "دب", en: "Bear Face" },
        "🐼": { ar: "باندا", en: "Panda Face" },
        "🐻‍❄️": { ar: "دب قطبي", en: "Polar Bear" },
        "🐨": { ar: "كوالا", en: "Koala" },
        "🐯": { ar: "نمر", en: "Tiger Face" },
        "🦁": { ar: "أسد", en: "Lion" },
        "🐮": { ar: "بقرة", en: "Cow Face" },
        "🐷": { ar: "خنزير", en: "Pig Face" },
        "🐽": { ar: "أنف خنزير", en: "Pig Nose" },
        "🐸": { ar: "ضفدع", en: "Frog Face" },
        "🐵": { ar: "قرد", en: "Monkey Face" },
        "🙈": { ar: "قرد لا يرى الشر", en: "See-No-Evil Monkey" },
        "🙉": { ar: "قرد لا يسمع الشر", en: "Hear-No-Evil Monkey" },
        "🙊": { ar: "قرد لا يتكلم الشر", en: "Speak-No-Evil Monkey" },
        "🐒": { ar: "قرد", en: "Monkey" },
        "🐔": { ar: "دجاجة", en: "Chicken" },
        "🐧": { ar: "بطريق", en: "Penguin" },
        "🐦": { ar: "طائر", en: "Bird" },
        "🐤": { ar: "فرخ صغير", en: "Baby Chick" },
        "🐣": { ar: "فرخ يفقس", en: "Hatching Chick" },
        "🐥": { ar: "فرخ ناشئ", en: "Front-Facing Baby Chick" },
        "🦆": { ar: "بطة", en: "Duck" },
        "🦅": { ar: "نسر", en: "Eagle" },
        "🦉": { ar: "بومة", en: "Owl" },
        "🦇": { ar: "خفاش", en: "Bat" },
        "🐺": { ar: "ذئب", en: "Wolf" },
        "🐗": { ar: "خنزير بري", en: "Boar" },
        "🐴": { ar: "حصان", en: "Horse Face" },
        "🦄": { ar: "حصان وحيد القرن", en: "Unicorn" },
        "🐝": { ar: "نحلة", en: "Honeybee" },
        "🪱": { ar: "دودة", en: "Worm" },
        "🐛": { ar: "يرقة", en: "Bug" },
        "🦋": { ar: "فراشة", en: "Butterfly" },
        "🐌": { ar: "قوقع", en: "Snail" },
        "🐞": { ar: "خنفساء", en: "Lady Beetle" },
        "🐜": { ar: "نملة", en: "Ant" },
        "🪰": { ar: "ذبابة", en: "Fly" },
        "🪲": { ar: "خنفساء", en: "Beetle" },
        "🦟": { ar: "بعوضة", en: "Mosquito" },
        "🦗": { ar: "جرادة", en: "Cricket" },
        "🪳": { ar: "صرصور", en: "Cockroach" },
        "🕷️": { ar: "عنكبوت", en: "Spider" },
        "🕸️": { ar: "شبكة عنكبوت", en: "Spider Web" },
        "🦂": { ar: "عقرب", en: "Scorpion" },
        "🐢": { ar: "سلحفاة", en: "Turtle" },
        "🐍": { ar: "ثعبان", en: "Snake" },
        "🦎": { ar: "سحلية", en: "Lizard" },
        "🦖": { ar: "ديناصور", en: "T-Rex" },
        "🦕": { ar: "ديناصور", en: "Sauropod" },
        "🐙": { ar: "أخطبوط", en: "Octopus" },
        "🦑": { ar: "حبار", en: "Squid" },
        "🦐": { ar: "روبيان", en: "Shrimp" },
        "🦞": { ar: "جراد البحر", en: "Lobster" },
        "🦀": { ar: "سرطان البحر", en: "Crab" },
        "🐡": { ar: "سمك بالون", en: "Blowfish" },
        "🐠": { ar: "سمك استوائي", en: "Tropical Fish" },
        "🐟": { ar: "سمك", en: "Fish" },
        "🐬": { ar: "دولفين", en: "Dolphin" },
        "🐳": { ar: "حوت", en: "Whale" },
        "🐋": { ar: "حوت", en: "Whale" },
        "🦈": { ar: "قرش", en: "Shark" },
        "🐊": { ar: "تمساح", en: "Crocodile" },
        "🐅": { ar: "نمر", en: "Tiger" },
        "🐆": { ar: "فهد", en: "Leopard" },
        "🦓": { ar: "حمار وحشي", en: "Zebra" },
        "🦍": { ar: "غوريلا", en: "Gorilla" },
        "🦧": { ar: "orangutan", en: "Orangutan" },
        "🐘": { ar: "فيل", en: "Elephant" },
        "🦛": { ar: "فرس النهر", en: "Hippopotamus" },
        "🦏": { ar: "كركدن", en: "Rhinoceros" },
        "🐪": { ar: "جمل", en: "Camel" },
        "🐫": { ar: "جمل", en: "Two-Hump Camel" },
        "🦒": { ar: "زرافة", en: "Giraffe" },
        "🦘": { ar: "كنغر", en: "Kangaroo" },
        "🐃": { ar: "ثور", en: "Water Buffalo" },
        "🐂": { ar: "ثور", en: "Ox" },
        "🐄": { ar: "بقرة", en: "Cow" },
        "🐎": { ar: "حصان", en: "Horse" },
        "🐖": { ar: "خنزير", en: "Pig" },
        "🐏": { ar: "كبش", en: "Ram" },
        "🐑": { ar: "خروف", en: "Ewe" },
        "🦙": { ar: "لاما", en: "Llama" },
        "🐐": { ar: "ماعز", en: "Goat" },
        "🐕": { ar: "كلب", en: "Dog" },
        "🐩": { ar: "كلب بودل", en: "Poodle" },
        "🦮": { ar: "كلب مرشد", en: "Guide Dog" },
        "🐈": { ar: "قطة", en: "Cat" },
        "🪶": { ar: "ريشة", en: "Feather" },
        "🐓": { ar: "ديك", en: "Rooster" },
        "🦃": { ar: "ديك رومي", en: "Turkey" },
        "🦤": { ar: "طائر منقرض", en: "Dodo" },
        "🦚": { ar: "طاووس", en: "Peacock" },
        "🦜": { ar: "ببغاء", en: "Parrot" },
        "🦢": { ar: "بجعة", en: "Swan" },
        "🦩": { ar: "فلامنجو", en: "Flamingo" },
        "🕊️": { ar: "حمامة", en: "Dove" },
        "🐇": { ar: "أرنب", en: "Rabbit" },
        "🦝": { ar: "راكون", en: "Raccoon" },
        "🦨": { ar: "حيوان الخلد", en: "Skunk" },
        "🦡": { ar: "القنفذ", en: "Badger" },
        "🦫": { ar: "بيفر", en: "Beaver" },
        "🦦": { ar: "قضاعة", en: "Otter" },
        "🦥": { ar: "سلحفاة", en: "Sloth" },
        "🐁": { ar: "فأر", en: "Mouse" },
        "🐀": { ar: "جرذ", en: "Rat" },
        "🐿️": { ar: "سنجاب", en: "Chipmunk" },
        "🦔": { ar: "قنفذ", en: "Hedgehog" },
        "🐾": { ar: "آثار أقدام", en: "Paw Prints" },
        "🐉": { ar: "تنين", en: "Dragon" },
        "🐲": { ar: "تنين ياباني", en: "Dragon Face" },
        "🌵": { ar: "صبار", en: "Cactus" },
        "🎄": { ar: "شجرة عيد الميلاد", en: "Christmas Tree" },
        "🌲": { ar: "شجرة دائمة الخضرة", en: "Evergreen Tree" },
        "🌳": { ar: "شجرة متساقطة الأوراق", en: "Deciduous Tree" },
        "🌴": { ar: "شجرة نخيل", en: "Palm Tree" },
        "🌱": { ar: "بذرة", en: "Seedling" },
        "🌿": { ar: "عشب", en: "Herb" },
        "☘️": { ar: "شعار أيرلندا", en: "Shamrock" },
        "🍀": { ar: "برسيم حظ سعيد", en: "Four Leaf Clover" },
        "🎍": { ar: "خيزران", en: "Pine Decoration" },
        "🎋": { ar: "خيزران", en: "Tanabata Tree" },
        "🍃": { ar: "ورقة في مهب الريح", en: "Leaf Fluttering in Wind" },
        "🍂": { ar: "ورقة متساقطة", en: "Falling Leaf" },
        "🍁": { ar: "ورقة القيقب", en: "Maple Leaf" },
        "🍄": { ar: "فطر", en: "Mushroom" },
        "🐚": { ar: "صدفة", en: "Spiral Shell" },
        "🌾": { ar: "حصاد", en: "Sheaf of Rice" },
        "💐": { ar: "باقة زهور", en: "Bouquet" },
        "🌷": { ar: "زنبق", en: "Tulip" },
        "🌹": { ar: "وردة", en: "Rose" },
        "🥀": { ar: "وردة ذابلة", en: "Wilted Flower" },
        "🌺": { ar: "زهرة", en: "Hibiscus" },
        "🌸": { ar: "زهر الكرز", en: "Cherry Blossom" },
        "🌼": { ar: "زهرة", en: "Blossom" },
        "🌻": { ar: "دوار الشمس", en: "Sunflower" },
        "🌞": { ar: "شمس مع وجه", en: "Sun with Face" },
        "🌝": { ar: "قمر كامل مع وجه", en: "Full Moon with Face" },
        "🌛": { ar: "قمر هلال مع وجه", en: "First Quarter Moon with Face" },
        "🌜": { ar: "قمر هلال مع وجه", en: "Last Quarter Moon with Face" },
        "🌚": { ar: "قمر جديد مع وجه", en: "New Moon with Face" },
        "🌕": { ar: "قمر كامل", en: "Full Moon" },
        "🌖": { ar: "قمر متناقص", en: "Waning Gibbous Moon" },
        "🌗": { ar: "قمر متناقص", en: "Last Quarter Moon" },
        "🌘": { ar: "قمر متناقص", en: "Waning Crescent Moon" },
        "🌑": { ar: "قمر جديد", en: "New Moon" },
        "🌒": { ar: "قمر متزايد", en: "Waxing Crescent Moon" },
        "🌓": { ar: "قمر متزايد", en: "First Quarter Moon" },
        "🌔": { ar: "قمر متزايد", en: "Waxing Gibbous Moon" },
        "🌙": { ar: "قمر", en: "Crescent Moon" },
        "🌎": { ar: "كرة أرضية الأمريكتين", en: "Earth Globe Americas" },
        "🌍": { ar: "كرة أرضية أوروبا أفريقيا", en: "Earth Globe Europe-Africa" },
        "🌏": { ar: "كرة أرضية آسيا أستراليا", en: "Earth Globe Asia-Australia" },
        "🪐": { ar: "حلقة زحل", en: "Ringed Planet" },
        "💫": { ar: "مذنب", en: "Dizzy" },
        "⭐": { ar: "نجمة", en: "Star" },
        "🌟": { ar: "نجمة لامعة", en: "Glowing Star" },
        "✨": { ar: "بريق", en: "Sparkles" },
        "⚡": { ar: "برق", en: "High Voltage" },
        "☄️": { ar: "مذنب", en: "Comet" },
        "💥": { ar: "انفجار", en: "Collision" },
        "🔥": { ar: "نار", en: "Fire" },
        "🌪️": { ar: "إعصار", en: "Tornado" },
        "🌈": { ar: "قوس قزح", en: "Rainbow" },
        "☀️": { ar: "شمس", en: "Sun" },
        "🌤️": { ar: "شمس خلف سحابة", en: "Sun Behind Small Cloud" },
        "⛅": { ar: "شمس خلف سحابة", en: "Sun Behind Large Cloud" },
        "🌥️": { ar: "شمس خلف سحابة", en: "White Sun Behind Cloud" },
        "☁️": { ar: "سحابة", en: "Cloud" },
        "🌦️": { ar: "مطر مع شمس", en: "Sun Behind Rain Cloud" },
        "🌧️": { ar: "مطر", en: "Cloud with Rain" },
        "⛈️": { ar: "عاصفة رعدية", en: "Cloud with Lightning and Rain" },
        "🌩️": { ar: "سحابة مع برق", en: "Cloud with Lightning" },
        "🌨️": { ar: "ثلج", en: "Cloud with Snow" },
        "❄️": { ar: "ثلج", en: "Snowflake" },
        "☃️": { ar: "رجل ثلج", en: "Snowman with Snow" },
        "⛄": { ar: "رجل ثلج", en: "Snowman Without Snow" },
        "🌬️": { ar: "رياح", en: "Wind Face" },
        "💨": { ar: "رياح", en: "Dashing Away" },
        "💧": { ar: "قطرة ماء", en: "Droplet" },
        "💦": { ar: "قطرات ماء", en: "Sweat Droplets" },
        "☔": { ar: "مطر", en: "Umbrella with Rain Drops" },
        "☂️": { ar: "مظلة", en: "Umbrella" },
        "🌊": { ar: "موج", en: "Water Wave" },
        "🌫️": { ar: "ضباب", en: "Fog" },
        "🍏": { ar: "تفاح أخضر", en: "Green Apple" },
        "🍎": { ar: "تفاح أحمر", en: "Red Apple" },
        "🍐": { ar: "كمثرى", en: "Pear" },
        "🍊": { ar: "برتقال", en: "Tangerine" },
        "🍋": { ar: "ليمون", en: "Lemon" },
        "🍌": { ar: "موز", en: "Banana" },
        "🍉": { ar: "بطيخ", en: "Watermelon" },
        "🍇": { ar: "عنب", en: "Grapes" },
        "🍓": { ar: "فراولة", en: "Strawberry" },
        "🫐": { ar: "توت أزرق", en: "Blueberries" },
        "🍈": { ar: "شمام", en: "Melon" },
        "🍒": { ar: "كرز", en: "Cherries" },
        "🍑": { ar: "خوخ", en: "Peach" },
        "🥭": { ar: "مانجو", en: "Mango" },
        "🍍": { ar: "أناناس", en: "Pineapple" },
        "🥥": { ar: "جوز الهند", en: "Coconut" },
        "🥝": { ar: "كيوي", en: "Kiwifruit" },
        "🍅": { ar: "طماطم", en: "Tomato" },
        "🍆": { ar: "باذنجان", en: "Eggplant" },
        "🥑": { ar: "أفوكادو", en: "Avocado" },
        "🥦": { ar: "بروكلي", en: "Broccoli" },
        "🥬": { ar: "خضروات ورقية", en: "Leafy Green" },
        "🥒": { ar: "خيار", en: "Cucumber" },
        "🌶️": { ar: "فلفل حار", en: "Hot Pepper" },
        "🫑": { ar: "فلفل", en: "Bell Pepper" },
        "🌽": { ar: "ذرة", en: "Ear of Corn" },
        "🥕": { ar: "جزر", en: "Carrot" },
        "🫒": { ar: "زيتون", en: "Olive" },
        "🧄": { ar: "ثوم", en: "Garlic" },
        "🧅": { ar: "بصل", en: "Onion" },
        "🥔": { ar: "بطاطس", en: "Potato" },
        "🍠": { ar: "بطاطا حلوة", en: "Roasted Sweet Potato" },
        "🥐": { ar: "كرواسون", en: "Croissant" },
        "🍞": { ar: "خبز", en: "Bread" },
        "🥖": { ar: "خبز فرنسي", en: "Baguette Bread" },
        "🫓": { ar: "خبز مسطح", en: "Flatbread" },
        "🥨": { ar: "برتزل", en: "Pretzel" },
        "🥯": { ar: "خبز بغل", en: "Bagel" },
        "🥞": { ar: "بانكيك", en: "Pancakes" },
        "🧇": { ar: "وافل", en: "Waffle" },
        "🧀": { ar: "جبن", en: "Cheese Wedge" },
        "🍖": { ar: "لحم", en: "Meat on Bone" },
        "🍗": { ar: "دجاج", en: "Poultry Leg" },
        "🥩": { ar: "شريحة لحم", en: "Cut of Meat" },
        "🥓": { ar: "بيكون", en: "Bacon" },
        "🍔": { ar: "برجر", en: "Hamburger" },
        "🍟": { ar: "بطاطس مقلية", en: "French Fries" },
        "🍕": { ar: "بيتزا", en: "Pizza" },
        "🌭": { ar: "هوت دوج", en: "Hot Dog" },
        "🥪": { ar: "ساندويتش", en: "Sandwich" },
        "🌮": { ar: "تاكو", en: "Taco" },
        "🌯": { ar: "بريتو", en: "Burrito" },
        "🫔": { ar: "تمال", en: "Tamale" },
        "🥙": { ar: "فلافل", en: "Stuffed Flatbread" },
        "🧆": { ar: "فلافل", en: "Falafel" },
        "🥚": { ar: "بيضة", en: "Egg" },
        "🍳": { ar: "بيض مقلي", en: "Cooking" },
        "🥘": { ar: "طاجن", en: "Shallow Pan of Food" },
        "🍲": { ar: "حساء", en: "Pot of Food" },
        "🫕": { ar: "شواية", en: "Paella" },
        "🥣": { ar: "وعاء حبوب", en: "Cereal Bowl" },
        "🥗": { ar: "سلطة", en: "Green Salad" },
        "🍿": { ar: "فشار", en: "Popcorn" },
        "🧈": { ar: "زبدة", en: "Butter" },
        "🧂": { ar: "ملح", en: "Salt" },
        "🥫": { ar: "معلبات", en: "Canned Food" },
        "🍱": { ar: "صندوق طعام ياباني", en: "Bento Box" },
        "🍘": { ar: "أرز مقرمش", en: "Rice Cracker" },
        "🍙": { ar: "كرة أرز", en: "Rice Ball" },
        "🍚": { ar: "أرز مطبوخ", en: "Cooked Rice" },
        "🍛": { ar: "كاري أرز", en: "Curry Rice" },
        "🍜": { ar: "نودلز", en: "Steaming Bowl" },
        "🍝": { ar: "سباغيتي", en: "Spaghetti" },
        "🍠": { ar: "بطاطا حلوة مشوية", en: "Roasted Sweet Potato" },
        "🍢": { ar: "أودين", en: "Oden" },
        "🍣": { ar: "سوشي", en: "Sushi" },
        "🍤": { ar: "روبيان المقلي", en: "Fried Shrimp" },
        "🍥": { ar: "كامابوكو", en: "Fish Cake with Swirl" },
        "🥮": { ar: "كيك القمر", en: "Moon Cake" },
        "🍡": { ar: "دانغو", en: "Dango" },
        "🥟": { ar: "ديبلينغ", en: "Dumpling" },
        "🥠": { ar: "حلوى مقرمشة", en: "Fortune Cookie" },
        "🥡": { ar: "صندوق طعام صيني", en: "Takeout Box" },
        "🦀": { ar: "سرطان البحر", en: "Crab" },
        "🦞": { ar: "جراد البحر", en: "Lobster" },
        "🦐": { ar: "روبيان", en: "Shrimp" },
        "🦑": { ar: "حبار", en: "Squid" },
        "🦪": { ar: "محار", en: "Oyster" },
        "🍦": { ar: "آيس كريم", en: "Soft Ice Cream" },
        "🍧": { ar: "ثلج مبشور", en: "Shaved Ice" },
        "🍨": { ar: "آيس كريم", en: "Ice Cream" },
        "🍩": { ar: "دونات", en: "Doughnut" },
        "🍪": { ar: "بسكويت", en: "Cookie" },
        "🎂": { ar: "كيك عيد ميلاد", en: "Birthday Cake" },
        "🍰": { ar: "شريحة كيك", en: "Shortcake" },
        "🧁": { ar: "كب كيك", en: "Cupcake" },
        "🥧": { ar: "فطيرة", en: "Pie" },
        "🍫": { ar: "شوكولاتة", en: "Chocolate Bar" },
        "🍬": { ar: "حلوى", en: "Candy" },
        "🍭": { ar: "حلوى عصا", en: "Lollipop" },
        "🍮": { ar: "بودينغ", en: "Custard" },
        "🍯": { ar: "عسل", en: "Honey Pot" },
        "🍼": { ar: "زجاجة حليب", en: "Baby Bottle" },
        "🥛": { ar: "حليب", en: "Glass of Milk" },
        "☕": { ar: "قهوة", en: "Hot Beverage" },
        "🫖": { ar: "إبريق", en: "Teapot" },
        "🍵": { ar: "شاي", en: "Teacup Without Handle" },
        "🍶": { ar: "ساكي", en: "Sake" },
        "🍺": { ar: "بيرة", en: "Beer Mug" },
        "🍻": { ar: "بيرة", en: "Clinking Beer Mugs" },
        "🥂": { ar: "نبيذ", en: "Clinking Glasses" },
        "🍷": { ar: "نبيذ أحمر", en: "Wine Glass" },
        "🥃": { ar: "كأس ويسكي", en: "Whiskey Glass" },
        "🥃": { ar: "كأس ويسكي", en: "Whiskey Glass" },
        "🍸": { ar: "كوكتيل", en: "Cocktail Glass" },
        "🍹": { ar: "مشروب استوائي", en: "Tropical Drink" },
        "🧉": { ar: "ماتي", en: "Mate" },
        "🍾": { ar: "زجاجة شمبانيا", en: "Bottle with Popping Cork" },
        "🧊": { ar: "مكعبات ثلج", en: "Ice Cube" },
        "🥄": { ar: "ملعقة", en: "Spoon" },
        "🍴": { ar: "شوكة وسكين", en: "Fork and Knife" },
        "🍽️": { ar: "طبق", en: "Plate with Cutlery" },
        "🥢": { ar: "عيدان طعام", en: "Chopsticks" },
        "⚽": { ar: "كرة قدم", en: "Soccer Ball" },
        "🏀": { ar: "كرة سلة", en: "Basketball" },
        "🏈": { ar: "كرة قدم أمريكية", en: "American Football" },
        "⚾": { ar: "كرة بيسبول", en: "Baseball" },
        "🥎": { ar: "كرة سوفتبول", en: "Softball" },
        "🎾": { ar: "كرة تنس", en: "Tennis" },
        "🏐": { ar: "كرة طائرة", en: "Volleyball" },
        "🏉": { ar: "كرة رغبي", en: "Rugby Football" },
        "🥏": { ar: "قرص طائر", en: "Flying Disc" },
        "🎱": { ar: "كرة 8", en: "8 Ball" },
        "🪀": { ar: "يو يو", en: "Yo-Yo" },
        "🏓": { ar: "تنس طاولة", en: "Ping Pong" },
        "🏸": { ar: "ريشة طائرة", en: "Badminton" },
        "🏒": { ar: "هوكي على الجليد", en: "Ice Hockey" },
        "🏑": { ar: "هوكي العشب", en: "Field Hockey" },
        "🥍": { ar: "لاكروس", en: "Lacrosse" },
        "🏏": { ar: "كريكت", en: "Cricket" },
        "🪃": { ar: "قوس وسهم", en: "Bow and Arrow" },
        "🥅": { ar: "شبكة هدف", en: "Goal Net" },
        "⛳": { ar: "جولف", en: "Flag in Hole" },
        "🪁": { ar: "طائرة ورقية", en: "Kite" },
        "🏹": { ar: "قوس وسهم", en: "Bow and Arrow" },
        "🎣": { ar: "صيد السمك", en: "Fishing Pole" },
        "🤿": { ar: "غوص", en: "Diving Mask" },
        "🥊": { ar: "قفازات الملاكمة", en: "Boxing Glove" },
        "🥋": { ar: "زي فنون قتالية", en: "Martial Arts Uniform" },
        "🎽": { ar: "قميص رياضي", en: "Running Shirt" },
        "🛹": { ar: "لوح تزلج", en: "Skateboard" },
        "🛷": { ar: "زلاجة", en: "Sled" },
        "⛸️": { ar: "تزلج فني", en: "Ice Skate" },
        "🥌": { ar: "كيرلنغ", en: "Curling Stone" },
        "🎿": { ar: "تزلج على الجليد", en: "Skis" },
        "⛷️": { ar: "متزلج", en: "Skier" },
        "🏂": { ar: "متزلج على الثلج", en: "Snowboarder" },
        "🪂": { ar: "مظلة", en: "Parachute" },
        "🏆": { ar: "كأس", en: "Trophy" },
        "🥇": { ar: "ميدالية ذهبية", en: "1st Place Medal" },
        "🥈": { ar: "ميدالية فضية", en: "2nd Place Medal" },
        "🥉": { ar: "ميدالية برونزية", en: "3rd Place Medal" },
        "🏅": { ar: "ميدالية رياضية", en: "Sports Medal" },
        "🎖️": { ar: "ميدالية عسكرية", en: "Military Medal" },
        "🏵️": { ar: "زهرة", en: "Rosette" },
        "🎗️": { ar: "شريوع", en: "Ribbon" },
        "🎫": { ar: "تذكرة", en: "Ticket" },
        "🎟️": { ar: "تذاكر", en: "Admission Tickets" },
        "🎪": { ar: "سيرك", en: "Circus Tent" },
        "🎭": { ar: "أقنعة مسرحية", en: "Performing Arts" },
        "🩰": { ar: "حذاء باليه", en: "Ballet Shoes" },
        "🎨": { ar: "فنان", en: "Artist Palette" },
        "🎬": { ar: "كاميرا", en: "Clapper Board" },
        "🎤": { ar: "ميكروفون", en: "Microphone" },
        "🎧": { ar: "سماعات", en: "Headphone" },
        "🎼": { ar: "موسيقى", en: "Musical Score" },
        "🎹": { ar: "بيانو", en: "Musical Keyboard" },
        "🥁": { ar: "طبول", en: "Drum" },
        "🪘": { ar: "طبول إفريقية", en: "Long Drum" },
        "🎷": { ar: "ساكسفون", en: "Saxophone" },
        "🎺": { ar: "بوق", en: "Trumpet" },
        "🎸": { ar: "جيتار", en: "Guitar" },
        "🪕": { ar: "بانجو", en: "Banjo" },
        "🎻": { ar: "كمان", en: "Violin" },
        "🎲": { ar: "نرد", en: "Game Die" },
        "♟️": { ar: "شطرنج", en: "Chess Pawn" },
        "🎯": { ar: "هدف", en: "Direct Hit" },
        "🎳": { ar: "بولينج", en: "Bowling" },
        "🎮": { ar: "ألعاب فيديو", en: "Video Game" },
        "🕹️": { ar: "جويستيك", en: "Joystick" },
        "🎰": { ar: "ماكينة قمار", en: "Slot Machine" },
        "🧩": { ar: "قطع puzzl", en: "Jigsaw" },
        "🚗": { ar: "سيارة", en: "Automobile" },
        "🚕": { ar: "سيارة أجرة", en: "Taxi" },
        "🚙": { ar: "سيارة دفع رباعي", en: "Sport Utility Vehicle" },
        "🚌": { ar: "حافلة", en: "Bus" },
        "🚎": { ar: "ترام", en: "Trolleybus" },
        "🏎️": { ar: "سيارة سباق", en: "Racing Car" },
        "🚓": { ar: "سيارة شرطة", en: "Police Car" },
        "🚑": { ar: "سيارة إسعاف", en: "Ambulance" },
        "🚒": { ar: "سيارة إطفاء", en: "Fire Engine" },
        "🚐": { ar: "فان", en: "Minibus" },
        "🛻": { ar: "شاحنة صغيرة", en: "Pickup Truck" },
        "🚚": { ar: "شاحنة", en: "Truck" },
        "🚛": { ar: "شاحنة مقطورة", en: "Articulated Lorry" },
        "🚜": { ar: "جرار", en: "Tractor" },
        "🏍️": { ar: "دراجة نارية", en: "Motorcycle" },
        "🛵": { ar: "دراجة نارية صغيرة", en: "Motor Scooter" },
        "🚲": { ar: "دراجة", en: "Bicycle" },
        "🛴": { ar: "سكوتر", en: "Kick Scooter" },
        "🛹": { ar: "لوح تزلج", en: "Skateboard" },
        "🛼": { ar: "أحذية تزلج", en: "Roller Skate" },
        "🚁": { ar: "مروحية", en: "Helicopter" },
        "🛸": { ar: "طبق طائر", en: "Flying Saucer" },
        "🚀": { ar: "صاروخ", en: "Rocket" },
        "✈️": { ar: "طائرة", en: "Airplane" },
        "🛩️": { ar: "طائرة صغيرة", en: "Small Airplane" },
        "🛫": { ar: "إقلاع", en: "Airplane Departure" },
        "🛬": { ar: "هبوط", en: "Airplane Arrival" },
        "⛵": { ar: "قارب شراعي", en: "Sailboat" },
        "🚤": { ar: "قارب سريع", en: "Speedboat" },
        "🛥️": { ar: "قارب", en: "Motor Boat" },
        "🛳️": { ar: "سفينة", en: "Ship" },
        "⚓": { ar: "مرساة", en: "Anchor" },
        "⛽": { ar: "محطة وقود", en: "Fuel Pump" },
        "🚧": { ar: "إنشاءات", en: "Construction" },
        "🚨": { ar: "إنذار", en: "Police Car Light" },
        "🚥": { ar: "إشارة مرور أفقي", en: "Horizontal Traffic Light" },
        "🚦": { ar: "إشارة مرور عمودي", en: "Vertical Traffic Light" },
        "🏁": { ar: "علم شطرنج", en: "Checkered Flag" },
        "🚏": { ar: "محطة حافلات", en: "Bus Stop" },
        "🗺️": { ar: "خريطة", en: "World Map" },
        "🗿": { ar: "تمثال مواي", en: "Moai" },
        "🗽": { ar: "تمثال الحرية", en: "Statue of Liberty" },
        "🗼": { ar: "برج طوكيو", en: "Tokyo Tower" },
        "🏰": { ar: "قلعة", en: "Castle" },
        "🏯": { ar: "قلعة يابانية", en: "Japanese Castle" },
        "🏟️": { ar: "ملعب", en: "Stadium" },
        "🎡": { ar: "عجلة فيريس", en: "Ferris Wheel" },
        "🎢": { ar: "قطار بهلوان", en: "Roller Coaster" },
        "🎠": { ar: "حصان دوام", en: "Carousel Horse" },
        "⛲": { ar: "نافورة", en: "Fountain" },
        "⛱️": { ar: "مظلة شاطئ", en: "Umbrella on Ground" },
        "🏖️": { ar: "شاطئ", en: "Beach with Umbrella" },
        "🏝️": { ar: "جزيرة مهجورة", en: "Desert Island" },
        "🏜️": { ar: "صحراء", en: "Desert" },
        "🌋": { ar: "بركان", en: "Volcano" },
        "⛰️": { ar: "جبل", en: "Mountain" },
        "🏔️": { ar: "جبل مغطى بالثلج", en: "Snow-Capped Mountain" },
        "🗻": { ar: "جبل", en: "Mountain" },
        "🏕️": { ar: "مخيم", en: "Camping" },
        "⛺": { ar: "خيمة", en: "Tent" },
        "🏠": { ar: "منزل", en: "House" },
        "🏡": { ar: "منزل مع حديقة", en: "House with Garden" },
        "🏘️": { ar: "مجموعة منازل", en: "Houses" },
        "🏚️": { ar: "منزل مهدم", en: "Derelict House" },
        "🏗️": { ar: "مبنى تحت الإنشاء", en: "Building Construction" },
        "🏭": { ar: "مصنع", en: "Factory" },
        "🏢": { ar: "مبنى مكاتب", en: "Office Building" },
        "🏬": { ar: "متجر", en: "Department Store" },
        "🏣": { ar: "مكتب بريد", en: "Japanese Post Office" },
        "🏤": { ar: "مكتب بريد", en: "Post Office" },
        "🏥": { ar: "مستشفى", en: "Hospital" },
        "🏦": { ar: "بنك", en: "Bank" },
        "🏨": { ar: "فندق", en: "Hotel" },
        "🏪": { ar: "متجر", en: "Convenience Store" },
        "🏫": { ar: "مدرسة", en: "School" },
        "🏩": { ar: "فندق للحب", en: "Love Hotel" },
        "💒": { ar: "كنيسة زفاف", en: "Wedding" },
        "🏛️": { ar: "مبنى حكومي", en: "Classical Building" },
        "⛪": { ar: "كنيسة", en: "Church" },
        "🕌": { ar: "مسجد", en: "Mosque" },
        "🕍": { ar: "كنيس يهودي", en: "Synagogue" },
        "🛕": { ar: "معبد هندوسي", en: "Hindu Temple" },
        "🕋": { ar: "الكعبة", en: "Kaaba" },
        "⛩️": { ar: "بوابة شنتو", en: "Torii Gate" },
        "🛤️": { ar: "خط سكة حديد", en: "Railway Track" },
        "🛣️": { ar: "طريق", en: "Motorway" },
        "🗾": { ar: "خريطة يابان", en: "Map of Japan" },
        "🎑": { ar: "احتفال القمر", en: "Moon Viewing Ceremony" },
        "🏞️": { ar: "منتزه وطني", en: "National Park" },
        "🌅": { ar: "شروق الشمس", en: "Sunrise" },
        "🌄": { ar: "شروق الشمس فوق الجبال", en: "Sunrise Over Mountains" },
        "🌠": { ar: "شهاب", en: "Shooting Star" },
        "🎇": { ar: "ألعاب نارية", en: "Sparkler" },
        "🎆": { ar: "ألعاب نارية", en: "Fireworks" },
        "🌇": { ar: "غروب الشمس", en: "Sunset" },
        "🌆": { ar: "غروب الشمس في المدينة", en: "Cityscape at Dusk" },
        "🏙️": { ar: "مدينة ليلاً", en: "Cityscape" },
        "🌃": { ar: "مدينة ليلاً", en: "Night with Stars" },
        "🌌": { ar: "مجرة", en: "Milky Way" },
        "🌉": { ar: "جسر ليلاً", en: "Bridge at Night" },
        "🌁": { ar: "مدينة ضبابية", en: "Foggy" },
        "⌚": { ar: "ساعة يد", en: "Watch" },
        "📱": { ar: "هاتف محمول", en: "Mobile Phone" },
        "📲": { ar: "هاتف مع سهم", en: "Mobile Phone with Arrow" },
        "💻": { ar: "حاسوب محمول", en: "Laptop" },
        "⌨️": { ar: "لوحة مفاتيح", en: "Keyboard" },
        "🖥️": { ar: "شاشة حاسوب", en: "Desktop Computer" },
        "🖨️": { ar: "طابعة", en: "Printer" },
        "🖱️": { ar: "فأرة حاسوب", en: "Computer Mouse" },
        "🖲️": { ar: "فأرة حاسوب ثلاثية الأبعاد", en: "Trackball" },
        "🕹️": { ar: "جويستيك", en: "Joystick" },
        "🗜️": { ar: "ملزمة", en: "Compression" },
        "💽": { ar: "قرص مدمج", en: "Computer Disk" },
        "💾": { ar: "قرص مرن", en: "Floppy Disk" },
        "💿": { ar: "قرص مدمج", en: "Optical Disc" },
        "📀": { ar: "دي في دي", en: "DVD" },
        "📼": { ar: "شريط فيديو", en: "Videocassette" },
        "📷": { ar: "كاميرا", en: "Camera" },
        "📸": { ar: "كاميرا مع فلاش", en: "Camera with Flash" },
        "📹": { ar: "كاميرا فيديو", en: "Video Camera" },
        "🎥": { ar: "كاميرا سينما", en: "Movie Camera" },
        "📽️": { ar: "جهاز عرض أفلام", en: "Film Projector" },
        "🎞️": { ar: "شريط فيلم", en: "Film Strip" },
        "📞": { ar: "هاتف", en: "Telephone Receiver" },
        "☎️": { ar: "هاتف", en: "Telephone" },
        "📟": { ar: "هاتف لاسلكي", en: "Pager" },
        "📠": { ar: "فاكس", en: "Fax Machine" },
        "📺": { ar: "تلفزيون", en: "Television" },
        "📻": { ar: "راديو", en: "Radio" },
        "🎙️": { ar: "ميكروفون استوديو", en: "Studio Microphone" },
        "🎚️": { ar: "مستوى صوت", en: "Level Slider" },
        "🎛️": { ar: "لوحة تحكم", en: "Control Knobs" },
        "🧭": { ar: "بوصلة", en: "Compass" },
        "⏱️": { ar: "ساعة توقيت", en: "Stopwatch" },
        "⏲️": { ar: "ساعة توقيت", en: "Timer Clock" },
        "⏰": { ar: "منبه", en: "Alarm Clock" },
        "🕰️": { ar: "ساعة حائط", en: "Mantelpiece Clock" },
        "⌛": { ar: "رمل", en: "Hourglass Done" },
        "⏳": { ar: "رمل", en: "Hourglass Not Done" },
        "📡": { ar: "طبق استقبال", en: "Satellite Antenna" },
        "🔋": { ar: "بطارية", en: "Battery" },
        "🔌": { ar: "قابس كهرباء", en: "Electric Plug" },
        "💡": { ar: "مصباح", en: "Light Bulb" },
        "🔦": { ar: "كشاف", en: "Flashlight" },
        "🕯️": { ar: "شمعة", en: "Candle" },
        "🪔": { ar: "مصباح ديوي", en: "Diya Lamp" },
        "🧯": { ar: "طفاية حريق", en: "Fire Extinguisher" },
        "🛢️": { ar: "برميل نفط", en: "Oil Drum" },
        "💸": { ar: "أموال تطير", en: "Money with Wings" },
        "💵": { ar: "دولار", en: "Dollar Bill" },
        "💴": { ar: "ين", en: "Yen Banknote" },
        "💶": { ar: "يورو", en: "Euro Banknote" },
        "💷": { ar: "جنيه استرليني", en: "Pound Banknote" },
        "💰": { ar: "كيس نقود", en: "Money Bag" },
        "💳": { ar: "بطاقة ائتمان", en: "Credit Card" },
        "💎": { ar: "ماسة", en: "Gem Stone" },
        "⚖️": { ar: "ميزان", en: "Balance Scale" },
        "🧰": { ar: "صندوق أدوات", en: "Toolbox" },
        "🔧": { ar: "مفتاح ربط", en: "Wrench" },
        "🔨": { ar: "مطرقة", en: "Hammer" },
        "⚒️": { ar: "مطرقة ومفتاح", en: "Hammer and Pick" },
        "🛠️": { ar: "مطرقة ومفتاح", en: "Hammer and Wrench" },
        "⛏️": { ar: "فأس", en: "Pick" },
        "🔩": { ar: "برغي ومفتاح", en: "Nut and Bolt" },
        "⚙️": { ar: "ترس", en: "Gear" },
        "🧱": { ar: "طوبة", en: "Brick" },
        "⛓️": { ar: "سلسلة", en: "Chains" },
        "🧲": { ar: "مغناطيس", en: "Magnet" },
        "🔫": { ar: "مسدس مائي", en: "Water Pistol" },
        "💣": { ar: "قنبلة", en: "Bomb" },
        "🧨": { ar: "مفرقعات", en: "Firecracker" },
        "🪓": { ar: "فأس", en: "Axe" },
        "🔪": { ar: "سكين", en: "Kitchen Knife" },
        "🗡️": { ar: "خنجر", en: "Dagger" },
        "⚔️": { ar: "سيوف متقاطعة", en: "Crossed Swords" },
        "🛡️": { ar: "درع", en: "Shield" },
        "🚬": { ar: "سجائر", en: "Cigarette" },
        "⚰️": { ar: "تابوت", en: "Coffin" },
        "⚱️": { ar: "جرة رماد", en: "Funeral Urn" },
        "🏺": { ar: "جرة", en: "Amphora" },
        "🔮": { ar: "كرة بلور", en: "Crystal Ball" },
        "📿": { ar: "سبحة", en: "Prayer Beads" },
        "🧿": { ar: "عين نذرة", en: "Nazar Amulet" },
        "💈": { ar: "شريط حلاقة", en: "Barber Pole" },
        "⚗️": { ar: "قنينة", en: "Alembic" },
        "🔭": { ar: "تلسكوب", en: "Telescope" },
        "🔬": { ar: "مجهر", en: "Microscope" },
        "🕳️": { ar: "ثقب", en: "Hole" },
        "🩹": { ar: "لاصق", en: "Adhesive Bandage" },
        "🩺": { ar: "سماعة طبيب", en: "Stethoscope" },
        "💊": { ar: "دواء", en: "Pill" },
        "💉": { ar: "حقنة", en: "Syringe" },
        "🩸": { ar: "قطرة دم", en: "Drop of Blood" },
        "🧬": { ar: "DNA", en: "DNA" },
        "🦠": { ar: "ميكروب", en: "Microbe" },
        "🧫": { ar: "طبق بتري", en: "Petri Dish" },
        "🧪": { ar: "قنينة اختبار", en: "Test Tube" },
        "🌡️": { ar: "ميزان حرارة", en: "Thermometer" },
        "🧹": { ar: "مكنسة", en: "Broom" },
        "🧺": { ar: "سلة", en: "Basket" },
        "🧻": { ar: "ورق تواليت", en: "Roll of Paper" },
        "🚽": { ar: "مرحاض", en: "Toilet" },
        "🚰": { ar: "صنبور ماء", en: "Potable Water" },
        "🚿": { ar: "دش", en: "Shower" },
        "🛁": { ar: "حمام", en: "Bathtub" },
        "🛀": { ar: "شخص يأخذ حمام", en: "Person Taking Bath" },
        "🧼": { ar: "صابون", en: "Soap" },
        "🪒": { ar: "شفرات حلاقة", en: "Razor" },
        "🧽": { ar: "إسفنجة", en: "Sponge" },
        "🧴": { ar: "قنينة", en: "Lotion Bottle" },
        "🛎️": { ar: "جرس خدمة", en: "Bellhop Bell" },
        "🔑": { ar: "مفتاح", en: "Key" },
        "🗝️": { ar: "مفتاح قديم", en: "Old Key" },
        "🚪": { ar: "باب", en: "Door" },
        "🪑": { ar: "كرسي", en: "Chair" },
        "🛋️": { ar: "أريكة", en: "Couch and Lamp" },
        "🛏️": { ar: "سرير", en: "Bed" },
        "🛌": { ar: "شخص في السرير", en: "Person in Bed" },
        "🧸": { ar: "دب محشو", en: "Teddy Bear" },
        "🖼️": { ar: "صورة في إطار", en: "Framed Picture" },
        "🖼️": { ar: "صورة في إطار", en: "Framed Picture" },
        "🛍️": { ar: "حقائب تسوق", en: "Shopping Bags" },
        "🎁": { ar: "هدية", en: "Wrapped Gift" },
        "🎈": { ar: "بالون", en: "Balloon" },
        "🎏": { ar: "رسم سمك", en: "Carp Streamer" },
        "🎀": { ar: "شرابة", en: "Ribbon" },
        "🎊": { ar: "مكنسة", en: "Confetti Ball" },
        "🎉": { ar: "بوبوبر", en: "Party Popper" },
        "🎎": { ar: "دمى يابانية", en: "Japanese Dolls" },
        "🏮": { ar: "فانوس ياباني", en: "Red Paper Lantern" },
        "🎐": { ar: "جرس رياح", en: "Wind Chime" },
        "🧧": { ar: "مظروف أحمر", en: "Red Envelope" },
        "✉️": { ar: "رسالة", en: "Envelope" },
        "📩": { ar: "رسالة مع سهم لأسفل", en: "Envelope with Downwards Arrow Above" },
        "📨": { ar: "رسالة واردة", en: "Inbox Tray" },
        "📧": { ar: "بريد إلكتروني", en: "E-Mail Symbol" },
        "💌": { ar: "رسالة حب", en: "Love Letter" },
        "📥": { ar: "صندوق وارد", en: "Inbox Tray" },
        "📤": { ar: "صندوق صادر", en: "Outbox Tray" },
        "📦": { ar: "صندوق", en: "Package" },
        "🏷️": { ar: "علامة", en: "Label" },
        "📪": { ar: "صندوق بريد", en: "Mailbox with Raised Flag" },
        "📫": { ar: "صندوق بريد", en: "Mailbox with Lowered Flag" },
        "📬": { ar: "صندوق بريد", en: "Open Mailbox with Raised Flag" },
        "📭": { ar: "صندوق بريد", en: "Open Mailbox with Lowered Flag" },
        "📮": { ar: "صندوق بريد", en: "Postbox" },
        "📯": { ar: "بوق بريد", en: "Postal Horn" },
        "📜": { ar: "لفافة", en: "Scroll" },
        "📃": { ar: "صفحة", en: "Page with Curl" },
        "📄": { ar: "صفحة", en: "Page Facing Up" },
        "📑": { ar: "صفحات", en: "Bookmark Tabs" },
        "🧾": { ar: "إيصال", en: "Receipt" },
        "📊": { ar: "رسم بياني", en: "Bar Chart" },
        "📈": { ar: "رسم بياني متزايد", en: "Chart Increasing" },
        "📉": { ar: "رسم بياني متناقص", en: "Chart Decreasing" },
        "🗒️": { ar: "مفكرة", en: "Spiral Notepad" },
        "🗓️": { ar: "تقويم صفحة", en: "Spiral Calendar" },
        "📆": { ar: "تقويم صفحة", en: "Tear-Off Calendar" },
        "📅": { ar: "تقويم", en: "Calendar" },
        "🗑️": { ar: "سلة مهملات", en: "Wastebasket" },
        "📇": { ar: "بطاقة عمل", en: "Card Index" },
        "🗃️": { ar: "ملف بطاقة", en: "Card File Box" },
        "🗳️": { ar: "صندوق اقتراع", en: "Ballot Box with Ballot" },
        "🗄️": { ar: "خزانة ملفات", en: "File Cabinet" },
        "📋": { ar: "لوح", en: "Clipboard" },
        "📁": { ar: "مجلد", en: "File Folder" },
        "📂": { ar: "مجلد مفتوح", en: "Open File Folder" },
        "🗂️": { ar: "مجلدات مقسمة", en: "Card Index Dividers" },
        "🗞️": { ar: "جريدة مطوية", en: "Rolled-Up Newspaper" },
        "📰": { ar: "جريدة", en: "Newspaper" },
        "📓": { ar: "دفتر ملاحظات", en: "Notebook with Decorative Cover" },
        "📔": { ar: "دفتر ملاحظات", en: "Notebook with Decorative Cover" },
        "📒": { ar: "دفتر ملاحظات", en: "Ledger" },
        "📕": { ar: "كتاب أحمر", en: "Closed Book" },
        "📗": { ar: "كتاب أخضر", en: "Green Book" },
        "📘": { ar: "كتاب أزرق", en: "Blue Book" },
        "📙": { ar: "كتاب برتقالي", en: "Orange Book" },
        "📚": { ar: "كتب", en: "Books" },
        "📖": { ar: "كتاب مفتوح", en: "Open Book" },
        "🔖": { ar: "علامة مرجعية", en: "Bookmark" },
        "🧷": { ar: "دبوس", en: "Safety Pin" },
        "🔗": { ar: "رابط", en: "Link" },
        "📎": { ar: "مشبك ورق", en: "Paperclip" },
        "🖇️": { ar: "مشابك ورق", en: "Linked Paperclips" },
        "📐": { ar: "مسطرة مثلث", en: "Triangular Ruler" },
        "📏": { ar: "مسطرة", en: "Straight Ruler" },
        "🧮": { ar: "عداد", en: "Abacus" },
        "📌": { ar: "دبوس تثبيت", en: "Pushpin" },
        "📍": { ar: "دبوس", en: "Round Pushpin" },
        "✂️": { ar: "مقص", en: "Scissors" },
        "🖊️": { ar: "قلم حبر", en: "Pen" },
        "🖋️": { ar: "قلم حبر", en: "Fountain Pen" },
        "✒️": { ar: "قلم حبر", en: "Black Nib" },
        "🖌️": { ar: "فرشاة رسم", en: "Paintbrush" },
        "🖍️": { ar: "قلم تلوين", en: "Crayon" },
        "📝": { ar: "ملاحظات", en: "Memo" },
        "✏️": { ar: "قلم رصاص", en: "Pencil" },
        "🔍": { ar: "مكبر", en: "Magnifying Glass Tilted Left" },
        "🔎": { ar: "مكبر", en: "Magnifying Glass Tilted Right" },
        "🔏": { ar: "قفل مع قلم", en: "Lock with Ink Pen" },
        "🔐": { ar: "قفل مع مفتاح", en: "Lock with Key" },
        "🔒": { ar: "قفل", en: "Lock" },
        "🔓": { ar: "قفل مفتوح", en: "Unlock" },
        "❤️": { ar: "قلب أحمر", en: "Red Heart" },
        "🧡": { ar: "قلب برتقالي", en: "Orange Heart" },
        "💛": { ar: "قلب أصفر", en: "Yellow Heart" },
        "💚": { ar: "قلب أخضر", en: "Green Heart" },
        "💙": { ar: "قلب أزرق", en: "Blue Heart" },
        "💜": { ar: "قلب بنفسجي", en: "Purple Heart" },
        "🖤": { ar: "قلب أسود", en: "Black Heart" },
        "🤍": { ar: "قلب أبيض", en: "White Heart" },
        "🤎": { ar: "قلب بني", en: "Brown Heart" },
        "💔": { ar: "قلب مكسور", en: "Broken Heart" },
        "❣️": { ar: "قلب مع زخرفة", en: "Heart Exclamation" },
        "💕": { ar: "قلوب", en: "Two Hearts" },
        "💞": { ar: "قلوب دوارة", en: "Revolving Hearts" },
        "💓": { ar: "قلب نابض", en: "Beating Heart" },
        "💗": { ar: "قلب ينمو", en: "Growing Heart" },
        "💖": { ar: "قلب لامع", en: "Sparkling Heart" },
        "💘": { ar: "قلب مع سهم", en: "Cupid" },
        "💝": { ar: "قلب مع شريط", en: "Heart with Ribbon" },
        "💟": { ar: "قلب مع زخرفة", en: "Heart Decoration" },
        "☮️": { ar: "سلام", en: "Peace Symbol" },
        "✝️": { ar: "صليب لاتيني", en: "Latin Cross" },
        "☪️": { ar: "هلال ونجم", en: "Star and Crescent" },
        "🕉️": { ar: "أوم", en: "Om" },
        "☸️": { ar: "عجلة دارما", en: "Wheel of Dharma" },
        "✡️": { ar: "نجمة داود", en: "Star of David" },
        "🔯": { ar: "نجمة داود", en: "Star of David" },
        "🕎": { ar: "شمعدان", en: "Menorah" },
        "☯️": { ar: "ين ويانغ", en: "Yin Yang" },
        "☦️": { ar: "صليب أرثوذكسي", en: "Orthodox Cross" },
        "🛐": { ar: "سجود", en: "Person in Prayer" },
        "⛎": { ar: "عقرب", en: "Ophiuchus" },
        "♈": { ar: "برج الحمل", en: "Aries" },
        "♉": { ar: "برج الثور", en: "Taurus" },
        "♊": { ar: "برج الجوزاء", en: "Gemini" },
        "♋": { ar: "برج السرطان", en: "Cancer" },
        "♌": { ar: "برج الأسد", en: "Leo" },
        "♍": { ar: "برج العذراء", en: "Virgo" },
        "♎": { ar: "برج الميزان", en: "Libra" },
        "♏": { ar: "برج العقرب", en: "Scorpio" },
        "♐": { ar: "برج القوس", en: "Sagittarius" },
        "♑": { ar: "برج الجدي", en: "Capricorn" },
        "♒": { ar: "برج الدلو", en: "Aquarius" },
        "♓": { ar: "برج الحوت", en: "Pisces" },
        "🆔": { ar: "بطاقة هوية", en: "ID Button" },
        "⚛️": { ar: "رمز الذرة", en: "Atom Symbol" },
        "🉑": { ar: "مقبول", en: "Acceptable" },
        "☢️": { ar: "إشعاع", en: "Radioactive" },
        "☣️": { ar: "خطر بيولوجي", en: "Biohazard" },
        "📴": { ar: "هاتف صامت", en: "Mobile Phone Off" },
        "📳": { ar: "هاتف يهتز", en: "Vibration Mode" },
        "🈶": { ar: "موجود", en: "Japanese 'Here' Button" },
        "🈚️": { ar: "غير موجود", en: "Japanese 'Free of Charge' Button" },
        "🈸": { ar: "تقديم", en: "Japanese 'Application' Button" },
        "🈺": { ar: "مفتوح", en: "Japanese 'Passing Grade' Button" },
        "🈷️": { ar: "شهر", en: "Japanese 'Monthly Amount' Button" },
        "✴️": { ar: "نجمة ثمانية", en: "Eight-Pointed Star" },
        "🆚": { ar: "ضد", en: "VS Button" },
        "💮": { ar: "شعار جميل", en: "White Flower" },
        "🉐": { ar: "فكرة", en: "Japanese 'Idea' Button" },
        "㊙️": { ar: "سر", en: "Japanese 'Secret' Button" },
        "㊗️": { ar: "تهنئة", en: "Japanese 'Congratulations' Button" },
        "🈴": { ar: "مجاني", en: "Japanese 'Free of Charge' Button" },
        "🈵": { ar: "ممتلئ", en: "Japanese 'Full Moon' Button" },
        "🈹": { ar: "خصم", en: "Japanese 'Discount' Button" },
        "🈲": { ar: "ممنوع", en: "Japanese 'Prohibited' Button" },
        "🅰️": { ar: "حرف A", en: "A Button (Blood Type)" },
        "🅱️": { ar: "حرف B", en: "B Button (Blood Type)" },
        "🆎": { ar: "حرف AB", en: "AB Button (Blood Type)" },
        "🆑": { ar: "حرف B", en: "CL Button" },
        "🅾️": { ar: "حرف O", en: "O Button (Blood Type)" },
        "🆘": { ar: "مساعدة", en: "SOS Button" },
        "❌": { ar: "علامة X", en: "Cross Mark" },
        "⭕": { ar: "دائرة", en: "Large Red Circle" },
        "🛑": { ar: "توقف", en: "Stop Sign" },
        "⛔": { ar: "ممنوع", en: "No Entry" },
        "📛": { ar: "شارة", en: "Name Badge" },
        "🚫": { ar: "ممنوع", en: "Prohibited" },
        "💯": { ar: "مئة نقطة", en: "Hundred Points" },
        "💢": { ar: "غضب", en: "Anger Symbol" },
        "♨️": { ar: "بخار", en: "Hot Springs" },
        "🚷": { ar: "ممنوع المشاة", en: "No Pedestrians" },
        "🚯": { ar: "ممنوع رمي القمامة", en: "No Littering" },
        "🚳": { ar: "ممنوع الدراجات", en: "No Bicycles" },
        "🚱": { ar: "ممنوع شرب المياه", en: "Non-Potable Water" },
        "🔞": { ar: "محتوى للبالغين", en: "No One Under Eighteen" },
        "📵": { ar: "ممنوع الهواتف", en: "No Mobile Phones" },
        "🚭": { ar: "ممنوع التدخين", en: "No Smoking" },
        "❗": { ar: "علامة تعجب", en: "Red Exclamation Mark" },
        "❕": { ar: "علامة تعجب بيضاء", en: "White Exclamation Mark" },
        "❓": { ar: "علامة استفهام", en: "Red Question Mark" },
        "❔": { ar: "علامة استفهام بيضاء", en: "White Question Mark" },
        "‼️": { ar: "علامة تعجب مزدوجة", en: "Double Exclamation Mark" },
        "⁉️": { ar: "علامة استفهام وتعجب", en: "Exclamation Question Mark" },
        "🔅": { ar: "شمس خافتة", en: "Dim Button" },
        "🔆": { ar: "شمس ساطعة", en: "Bright Button" },
        "〽️": { ar: "جزء", en: "Part Alternation Mark" },
        "⚠️": { ar: "تحذير", en: "Warning" },
        "🚸": { ar: "تحذير مشاة", en: "Children Crossing" },
        "🔱": { ar: "ترايدنت", en: "Trident Emblem" },
        "⚜️": { ar: "زهرة الزنبق", en: "Fleur-de-lis" },
        "🔰": { ar: "شعار مبتدئ", en: "Japanese Symbol for Beginner" },
        "♻️": { ar: "إعادة تدوير", en: "Recycling Symbol" },
        "✅": { ar: "علامة صح", en: "Check Mark Button" },
        "🈯": { ar: "إشارة", en: "Japanese 'Reserved' Button" },
        "💹": { ar: "زيادة", en: "Chart Increasing with Yen" },
        "❇️": { ar: "وميض", en: "Sparkle" },
        "✳️": { ar: "نجمة ثمانية", en: "Eight-Spoked Asterisk" },
        "❎": { ar: "علامة X", en: "Negative Squared Cross Mark" },
        "🌐": { ar: "كرة أرضية", en: "Globe with Meridians" },
        "💠": { ar: "شكل ماسي", en: "Diamond with a Dot" },
        "Ⓜ️": { ar: "حرف M", en: "Circled M" },
        "🌀": { ar: "دوامة", en: "Cyclone" },
        "💤": { ar: "نوم", en: "Zzz" },
        "🏧": { ar: "ماكينة صراف آلي", en: "ATM Sign" },
        "🚾": { ar: "مرحاض", en: "WC" },
        "♿": { ar: "مكان مخصص للمعاقين", en: "Wheelchair Symbol" },
        "🅿️": { ar: "موقف سيارات", en: "P Button" },
        "🈳": { ar: "فارغ", en: "Japanese 'Vacancy' Button" },
        "🈂️": { ar: "خدمة", en: "Japanese 'Passing Grade' Button" },
        "🛂": { ar: "جواز مرور", en: "Passport Control" },
        "🛃": { ar: "جمارك", en: "Customs" },
        "🛄": { ar: "أمتعة", en: "Baggage Claim" },
        "🛅": { ar: "خزينة", en: "Left Luggage" },
        "🚹": { ar: "رجال", en: "Mens Symbol" },
        "🚺": { ar: "نساء", en: "Womens Symbol" },
        "🚼": { ar: "طفل", en: "Baby Symbol" },
        "🚻": { ar: "مرحاض", en: "Restroom" },
        "🚮": { ar: "مكان لرمي القمامة", en: "Put Litter in Its Place" },
        "🎦": { ar: "سينما", en: "Cinema" },
        "📶": { ar: "إشارة", en: "Antenna Bars" },
        "🈁": { ar: "هنا", en: "Japanese 'Here' Button" },
        "🔣": { ar: "رموز", en: "Input Symbol for Latin Letters" },
        "ℹ️": { ar: "معلومات", en: "Information" },
        "🔤": { ar: "أحرف", en: "Input Symbol for Latin Small Letters" },
        "🔡": { ar: "أحرف صغيرة", en: "Input Symbol for Numbers" },
        "🔠": { ar: "أحرف كبيرة", en: "Input Symbol for Latin Capital Letters" },
        "🆖": { ar: "سيء", en: "Squared NG" },
        "🆗": { ar: "موافق", en: "Squared OK" },
        "🆙": { ar: "لأعلى", en: "Squared Up with Exclamation" },
        "🆒": { ar: "جديد", en: "Squared New" },
        "🆕": { ar: "جديد", en: "Squared New" },
        "🆓": { ar: "مجاني", en: "Squared Free" },
        "0️⃣": { ar: "رقم صفر", en: "Keycap: 0" },
        "1️⃣": { ar: "رقم واحد", en: "Keycap: 1" },
        "2️⃣": { ar: "رقم اثنان", en: "Keycap: 2" },
        "3️⃣": { ar: "رقم ثلاثة", en: "Keycap: 3" },
        "4️⃣": { ar: "رقم أربعة", en: "Keycap: 4" },
        "5️⃣": { ar: "رقم خمسة", en: "Keycap: 5" },
        "6️⃣": { ar: "رقم ستة", en: "Keycap: 6" },
        "7️⃣": { ar: "رقم سبعة", en: "Keycap: 7" },
        "8️⃣": { ar: "رقم ثمانية", en: "Keycap: 8" },
        "9️⃣": { ar: "رقم تسعة", en: "Keycap: 9" },
        "🔟": { ar: "رقم عشرة", en: "Keycap: 10" },
        "🔢": { ar: "أرقام", en: "Input Symbol for Numbers" },
        "#️⃣": { ar: "رمز #", en: "Keycap: #" },
        "*️⃣": { ar: "رمز *", en: "Keycap: *" },
        "⏏️": { ar: "زر إيقاف", en: "Eject Button" },
        "▶️": { ar: "تشغيل", en: "Play Button" },
        "⏸️": { ar: "إيقاف مؤقت", en: "Pause Button" },
        "⏯️": { ar: "تشغيل/إيقاف", en: "Play or Pause Button" },
        "⏹️": { ar: "إيقاف", en: "Stop Button" },
        "⏺️": { ar: "تسجيل", en: "Record Button" },
        "⏭️": { ar: "التالي", en: "Next Track Button" },
        "⏮️": { ar: "السابق", en: "Last Track Button" },
        "⏩": { ar: "تقديم سريع", en: "Fast-Forward Button" },
        "⏪": { ar: "ترجيع سريع", en: "Rewind Button" },
        "⏫": { ar: "زيادة", en: "Double Up Button" },
        "⏬": { ar: "نقصان", en: "Double Down Button" },
        "◀️": { ar: "للخلف", en: "Reverse Button" },
        "🔼": { ar: "لأعلى", en: "Upwards Button" },
        "🔽": { ar: "لأسفل", en: "Downwards Button" },
        "➡️": { ar: "لليمين", en: "Right Arrow" },
        "⬅️": { ar: "لليسار", en: "Left Arrow" },
        "⬆️": { ar: "لأعلى", en: "Up Arrow" },
        "⬇️": { ar: "لأسفل", en: "Down Arrow" },
        "↗️": { ar: "لأعلى لليمين", en: "Up-Right Arrow" },
        "↘️": { ar: "لأسفل لليمين", en: "Down-Right Arrow" },
        "↙️": { ar: "لأسفل لليسار", en: "Down-Left Arrow" },
        "↖️": { ar: "لأعلى لليسار", en: "Up-Left Arrow" },
        "↕️": { ar: "لأعلى ولأسفل", en: "Up-Down Arrow" },
        "↔️": { ar: "لليمين ولليسار", en: "Left-Right Arrow" },
        "↪️": { ar: "انعطاف يمين", en: "Right Arrow Curving Left" },
        "↩️": { ar: "انعطاف يسار", en: "Left Arrow Curving Right" },
        "⤴️": { ar: "لأعلى منحني", en: "Arrow Pointing Rightwards Then Curving Upwards" },
        "⤵️": { ar: "لأسفل منحني", en: "Arrow Pointing Rightwards Then Curving Downwards" },
        "🔀": { ar: "خلط", en: "Shuffle Tracks Button" },
        "🔁": { ar: "تكرار", en: "Repeat Button" },
        "🔂": { ar: "تكرار واحد", en: "Repeat Single Button" },
        "🔄": { ar: "تحديث", en: "Refresh Button" },
        "🔃": { ar: "لأعلى ولأسفل", en: "Sync Button" },
        "🎵": { ar: "ملاحظة موسيقية", en: "Musical Note" },
        "🎶": { ar: "ملاحظات موسيقية", en: "Musical Notes" },
        "➕": { ar: "علامة زائد", en: "Plus Sign" },
        "➖": { ar: "علامة ناقص", en: "Minus Sign" },
        "➗": { ar: "علامة قسمة", en: "Division Sign" },
        "✖️": { ar: "علامة ضرب", en: "Multiplication Sign" },
        "💲": { ar: "دولار", en: "Heavy Dollar Sign" },
        "💱": { ar: "تبديل عملة", en: "Currency Exchange" },
        "™️": { ar: "علامة تجارية", en: "Trade Mark" },
        "©️": { ar: "حقوق الطبع والنشر", en: "Copyright" },
        "®️": { ar: "علامة مسجلة", en: "Registered" },
        "〰️": { ar: "خط متموج", en: "Wavy Dash" },
        "➰": { ar: "دوامة", en: "Curly Loop" },
        "➿": { ar: "دوامة مزدوجة", en: "Double Curly Loop" },
        "🔚": { ar: "نهاية", en: "End Arrow" },
        "🔙": { ar: "للخلف", en: "Back Arrow" },
        "🔛": { ar: "على", en: "On! Arrow" },
        "🔝": { ar: "أعلى", en: "Top Arrow" },
        "🔜": { ar: "قريباً", en: "Soon Arrow" },
        "✔️": { ar: "علامة صح", en: "Check Mark" },
        "☑️": { ar: "مربع مع علامة صح", en: "Check Box with Check" },
        "🔘": { ar: "دائرة راديو", en: "Radio Button" },
        "⚪": { ar: "دائرة بيضاء", en: "White Circle" },
        "⚫": { ar: "دائرة سوداء", en: "Black Circle" },
        "🔴": { ar: "دائرة حمراء", en: "Red Circle" },
        "🔵": { ar: "دائرة زرقاء", en: "Blue Circle" },
        "🔺": { ar: "مثلث أحمر لأعلى", en: "Red Triangle Pointed Up" },
        "🔻": { ar: "مثلث أحمر لأسفل", en: "Red Triangle Pointed Down" },
        "🔸": { ar: "مثلث برتقالي صغير", en: "Orange Diamond" },
        "🔹": { ar: "مثلغ أزرق صغير", en: "Blue Diamond" },
        "🔶": { ar: "مثلث برتقالي كبير", en: "Large Orange Diamond" },
        "🔷": { ar: "مثلغ أزرق كبير", en: "Large Blue Diamond" },
        "🔳": { ar: "مربع أبيض مربع", en: "White Square Button" },
        "🔲": { ar: "مربع أسود مربع", en: "Black Square Button" },
        "▪️": { ar: "مربع أسود صغير", en: "Black Small Square" },
        "▫️": { ar: "مربع أبيض صغير", en: "White Small Square" },
        "◾": { ar: "مربع أسود متوسط", en: "Black Medium Square" },
        "◽": { ar: "مربع أبيض متوسط", en: "White Medium Square" },
        "◼️": { ar: "مربع أسود كبير", en: "Black Medium-Small Square" },
        "◻️": { ar: "مربع أبيض كبير", en: "White Medium-Small Square" },
        "⬛": { ar: "مربع أسود كبير جداً", en: "Black Large Square" },
        "⬜": { ar: "مربع أبيض كبير جداً", en: "White Large Square" },
        "🔈": { ar: "صوت منخفض", en: "Speaker Low Volume" },
        "🔇": { ar: "صامت", en: "Muted Speaker" },
        "🔉": { ar: "صوت متوسط", en: "Speaker Medium Volume" },
        "🔊": { ar: "صوت عالٍ", en: "Speaker High Volume" },
        "🔔": { ar: "جرس", en: "Bell" },
        "🔕": { ar: "جرس صامت", en: "Bell with Slash" },
        "📣": { ar: "مكبر صوت", en: "Megaphone" },
        "📢": { ar: "مكبر صوت", en: "Loudspeaker" },
        "👁️‍🗨️": { ar: "عين في فقاعة كلام", en: "Eye in Speech Bubble" },
        "💬": { ar: "فقاعة كلام", en: "Speech Balloon" },
        "💭": { ar: "فقاعة تفكير", en: "Thought Balloon" },
        "🗯️": { ar: "فقاعة كلام", en: "Right Anger Bubble" },
        "♠️": { ar: "بستوني", en: "Spade Suit" },
        "♣️": { ar: "كلوفي", en: "Club Suit" },
        "♥️": { ar: "قلب", en: "Heart Suit" },
        "♦️": { ar: "ديناري", en: "Diamond Suit" },
        "🃏": { ar: "جوكير", en: "Joker" },
        "🎴": { ar: "بطاقة هانافودا", en: "Flower Playing Cards" },
        "🀄": { ar: "ماهجونغ", en: "Mahjong Red Dragon" },
        "🕐": { ar: "ساعة 12:30", en: "Twelve-Thirty" },
        "🕑": { ar: "ساعة 1:00", en: "One-Oclock" },
        "🕒": { ar: "ساعة 2:00", en: "Two-Oclock" },
        "🕓": { ar: "ساعة 3:00", en: "Three-Oclock" },
        "🕔": { ar: "ساعة 4:00", en: "Four-Oclock" },
        "🕕": { ar: "ساعة 5:00", en: "Five-Oclock" },
        "🕖": { ar: "ساعة 6:00", en: "Six-Oclock" },
        "🕗": { ar: "ساعة 7:00", en: "Seven-Oclock" },
        "🕘": { ar: "ساعة 8:00", en: "Eight-Oclock" },
        "🕙": { ar: "ساعة 9:00", en: "Nine-Oclock" },
        "🕚": { ar: "ساعة 10:00", en: "Ten-Oclock" },
        "🕛": { ar: "ساعة 11:00", en: "Eleven-Oclock" },
        "🕜": { ar: "ساعة 12:30", en: "Twelve-Thirty" },
        "🕝": { ar: "ساعة 1:30", en: "One-Thirty" },
        "🕞": { ar: "ساعة 2:30", en: "Two-Thirty" },
        "🕟": { ar: "ساعة 3:30", en: "Three-Thirty" },
        "🕠": { ar: "ساعة 4:30", en: "Four-Thirty" },
        "🕡": { ar: "ساعة 5:30", en: "Five-Thirty" },
        "🕢": { ar: "ساعة 6:30", en: "Six-Thirty" },
        "🕣": { ar: "ساعة 7:30", en: "Seven-Thirty" },
        "🕤": { ar: "ساعة 8:30", en: "Eight-Thirty" },
        "🕥": { ar: "ساعة 9:30", en: "Nine-Thirty" },
        "🕦": { ar: "ساعة 10:30", en: "Ten-Thirty" },
        "🕧": { ar: "ساعة 11:30", en: "Eleven-Thirty" },
        "🏳️": { ar: "علم أبيض", en: "White Flag" },
        "🏴": { ar: "علم أسود", en: "Black Flag" },
        "🏁": { ar: "علم شطرنج", en: "Checkered Flag" },
        "🚩": { ar: "علم أحمر", en: "Triangular Flag" },
        "🏴‍☠️": { ar: "علم القراصنة", en: "Pirate Flag" },
        "🇦🇫": { ar: "أفغانستان", en: "Afghanistan" },
        "🇦🇽": { ar: "جزر آلاند", en: "Aland Islands" },
        "🇦🇱": { ar: "ألبانيا", en: "Albania" },
        "🇩🇿": { ar: "الجزائر", en: "Algeria" },
        "🇦🇸": { ar: "ساموا الأمريكية", en: "American Samoa" },
        "🇦🇩": { ar: "أندورا", en: "Andorra" },
        "🇦🇴": { ar: "أنغولا", en: "Angola" },
        "🇦🇮": { ar: "أنغويلا", en: "Anguilla" },
        "🇦🇶": { ar: "القارة القطبية الجنوبية", en: "Antarctica" },
        "🇦🇬": { ar: "أنتيغوا وبربودا", en: "Antigua & Barbuda" },
        "🇦🇷": { ar: "الأرجنتين", en: "Argentina" },
        "🇦🇲": { ar: "أرمينيا", en: "Armenia" },
        "🇦🇼": { ar: "أروبا", en: "Aruba" },
        "🇦🇺": { ar: "أستراليا", en: "Australia" },
        "🇦🇹": { ar: "النمسا", en: "Austria" },
        "🇦🇿": { ar: "أذربيجان", en: "Azerbaijan" },
        "🇧🇸": { ar: "باهاماس", en: "Bahamas" },
        "🇧🇭": { ar: "البحرين", en: "Bahrain" },
        "🇧🇩": { ar: "بنغلاديش", en: "Bangladesh" },
        "🇧🇧": { ar: "بربادوس", en: "Barbados" },
        "🇧🇾": { ar: "بيلاروسيا", en: "Belarus" },
        "🇧🇪": { ar: "بلجيكا", en: "Belgium" },
        "🇧🇿": { ar: "بليز", en: "Belize" },
        "🇧🇯": { ar: "بنين", en: "Benin" },
        "🇧🇲": { ar: "برمودا", en: "Bermuda" },
        "🇧🇹": { ar: "بوتان", en: "Bhutan" },
        "🇧🇴": { ar: "بوليفيا", en: "Bolivia" },
        "🇧🇦": { ar: "البوسنة والهرسك", en: "Bosnia & Herzegovina" },
        "🇧🇼": { ar: "بوتسوانا", en: "Botswana" },
        "🇧🇷": { ar: "البرازيل", en: "Brazil" },
        "🇮🇴": { ar: "إقليم المحيط الهندي البريطاني", en: "British Indian Ocean Territory" },
        "🇻🇬": { ar: "جزر فيرجن البريطانية", en: "British Virgin Islands" },
        "🇧🇳": { ar: "بروناي", en: "Brunei" },
        "🇧🇬": { ar: "بلغاريا", en: "Bulgaria" },
        "🇧🇫": { ar: "بوركينا فاسو", en: "Burkina Faso" },
        "🇧🇮": { ar: "بوروندي", en: "Burundi" },
        "🇰🇭": { ar: "كمبوديا", en: "Cambodia" },
        "🇨🇲": { ar: "الكاميرون", en: "Cameroon" },
        "🇨🇦": { ar: "كندا", en: "Canada" },
        "🇮🇨": { ar: "جزر كاناري", en: "Canary Islands" },
        "🇨🇻": { ar: "الرأس الأخضر", en: "Cape Verde" },
        "🇧🇶": { ar: "سان بارتيلمي", en: "St. Barthélemy" },
        "🇰🇾": { ar: "جزر كايمان", en: "Cayman Islands" },
        "🇨🇫": { ar: "جمهورية أفريقيا الوسطى", en: "Central African Republic" },
        "🇹🇩": { ar: "تشاد", en: "Chad" },
        "🇨🇱": { ar: "تشيلي", en: "Chile" },
        "🇨🇳": { ar: "الصين", en: "China" },
        "🇨🇽": { ar: "جزيرة عيد الميلاد", en: "Christmas Island" },
        "🇨🇨": { ar: "جزر كوكوس", en: "Cocos (Keeling) Islands" },
        "🇨🇴": { ar: "كولومبيا", en: "Colombia" },
        "🇰🇲": { ar: "جزر القمر", en: "Comoros" },
        "🇨🇬": { ar: "الكونغو - برازافيل", en: "Congo - Brazzaville" },
        "🇨🇩": { ar: "الكونغو - كينشاسا", en: "Congo - Kinshasa" },
        "🇨🇰": { ar: "جزر كوك", en: "Cook Islands" },
        "🇨🇷": { ar: "كوستاريكا", en: "Costa Rica" },
        "🇨🇮": { ar: "ساحل العاج", en: "Côte d'Ivoire" },
        "🇭🇷": { ar: "كرواتيا", en: "Croatia" },
        "🇨🇺": { ar: "كوبا", en: "Cuba" },
        "🇨🇼": { ar: "كوراساو", en: "Curaçao" },
        "🇨🇾": { ar: "قبرص", en: "Cyprus" },
        "🇨🇿": { ar: "جمهورية التشيك", en: "Czechia" },
        "🇩🇰": { ar: "الدنمارك", en: "Denmark" },
        "🇩🇯": { ar: "جيبوتي", en: "Djibouti" },
        "🇩🇲": { ar: "دومينيكا", en: "Dominica" },
        "🇩🇴": { ar: "جمهورية الدومينيكان", en: "Dominican Republic" },
        "🇪🇨": { ar: "الإكوادور", en: "Ecuador" },
        "🇪🇬": { ar: "مصر", en: "Egypt" },
        "🇸🇻": { ar: "السلفادور", en: "El Salvador" },
        "🇬🇶": { ar: "غينيا الاستوائية", en: "Equatorial Guinea" },
        "🇪🇷": { ar: "إريتريا", en: "Eritrea" },
        "🇪🇪": { ar: "إستونيا", en: "Estonia" },
        "🇪🇹": { ar: "إثيوبيا", en: "Ethiopia" },
        "🇪🇺": { ar: "الاتحاد الأوروبي", en: "European Union" },
        "🇫🇰": { ar: "جزر فوكلاند", en: "Falkland Islands" },
        "🇫🇴": { ar: "جزر فارو", en: "Faroe Islands" },
        "🇫🇯": { ar: "فيجي", en: "Fiji" },
        "🇫🇴": { ar: "فنلندا", en: "Finland" },
        "🇫🇷": { ar: "فرنسا", en: "France" },
        "🇬🇫": { ar: "غيانا الفرنسية", en: "French Guiana" },
        "🇵🇫": { ar: "بولينيزيا الفرنسية", en: "French Polynesia" },
        "🇹🇫": { ar: "أراضي فرنسية جنوبية", en: "French Southern Territories" },
        "🇬🇦": { ar: "الغابون", en: "Gabon" },
        "🇬🇲": { ar: "غامبيا", en: "Gambia" },
        "🇬🇪": { ar: "جورجيا", en: "Georgia" },
        "🇩🇪": { ar: "ألمانيا", en: "Germany" },
        "🇬🇭": { ar: "غانا", en: "Ghana" },
        "🇬🇮": { ar: "جبل طارق", en: "Gibraltar" },
        "🇬🇷": { ar: "اليونان", en: "Greece" },
        "🇬🇱": { ar: "جرينلاند", en: "Greenland" },
        "🇬🇩": { ar: "غرينادا", en: "Grenada" },
        "🇬🇵": { ar: "غوادلوب", en: "Guadeloupe" },
        "🇬🇺": { ar: "غوام", en: "Guam" },
        "🇬🇹": { ar: "غواتيمالا", en: "Guatemala" },
        "🇬🇬": { ar: "جيرنزي", en: "Guernsey" },
        "🇬🇳": { ar: "غينيا", en: "Guinea" },
        "🇬🇼": { ar: "غينيا بيساو", en: "Guinea-Bissau" },
        "🇬🇾": { ar: "غيانا", en: "Guyana" },
        "🇭🇹": { ar: "هايتي", en: "Haiti" },
        "🇭🇳": { ar: "هندوراس", en: "Honduras" },
        "🇭🇰": { ar: "هونغ كونغ", en: "Hong Kong SAR China" },
        "🇭🇺": { ar: "المجر", en: "Hungary" },
        "🇮🇸": { ar: "آيسلندا", en: "Iceland" },
        "🇮🇳": { ar: "الهند", en: "India" },
        "🇮🇩": { ar: "إندونيسيا", en: "Indonesia" },
        "🇮🇷": { ar: "إيران", en: "Iran" },
        "🇮🇶": { ar: "العراق", en: "Iraq" },
        "🇮🇪": { ar: "أيرلندا", en: "Ireland" },
        "🇮🇲": { ar: "جزيرة مان", en: "Isle of Man" },
        "🇮🇹": { ar: "إيطاليا", en: "Italy" },
        "🇯🇲": { ar: "جامايكا", en: "Jamaica" },
        "🇯🇵": { ar: "اليابان", en: "Japan" },
        "🎌": { ar: "علم اليابان", en: "Crossed Flags" },
        "🇯🇪": { ar: "جيرسي", en: "Jersey" },
        "🇯🇴": { ar: "الأردن", en: "Jordan" },
        "🇰🇿": { ar: "كازاخستان", en: "Kazakhstan" },
        "🇰🇪": { ar: "كينيا", en: "Kenya" },
        "🇰🇮": { ar: "كيريباتي", en: "Kiribati" },
        "🇽🇰": { ar: "كوسوفو", en: "Kosovo" },
        "🇰🇼": { ar: "الكويت", en: "Kuwait" },
        "🇰🇬": { ar: "قيرغيزستان", en: "Kyrgyzstan" },
        "🇱🇦": { ar: "لاوس", en: "Laos" },
        "🇱🇻": { ar: "لاتفيا", en: "Latvia" },
        "🇱🇧": { ar: "لبنان", en: "Lebanon" },
        "🇱🇸": { ar: "ليسوتو", en: "Lesotho" },
        "🇱🇷": { ar: "ليبيريا", en: "Liberia" },
        "🇱🇾": { ar: "ليبيا", en: "Libya" },
        "🇱🇮": { ar: "ليختنشتاين", en: "Liechtenstein" },
        "🇱🇹": { ar: "ليتوانيا", en: "Lithuania" },
        "🇱🇺": { ar: "لوكسمبورغ", en: "Luxembourg" },
        "🇲🇴": { ar: "ماكاو", en: "Macao SAR China" },
        "🇲🇰": { ar: "مقدونيا الشمالية", en: "North Macedonia" },
        "🇲🇬": { ar: "مدغشقر", en: "Madagascar" },
        "🇲🇼": { ar: "مالاوي", en: "Malawi" },
        "🇲🇾": { ar: "ماليزيا", en: "Malaysia" },
        "🇲🇻": { ar: "جزر المالديف", en: "Maldives" },
        "🇲🇱": { ar: "مالي", en: "Mali" },
        "🇲🇹": { ar: "مالطا", en: "Malta" },
        "🇲🇭": { ar: "جزر المارشال", en: "Marshall Islands" },
        "🇲🇶": { ar: "مارتينيك", en: "Martinique" },
        "🇲🇷": { ar: "موريتانيا", en: "Mauritania" },
        "🇲🇺": { ar: "موريشيوس", en: "Mauritius" },
        "🇾🇹": { ar: "مايوت", en: "Mayotte" },
        "🇲🇽": { ar: "المكسيك", en: "Mexico" },
        "🇫🇲": { ar: "ولايات ميكرونيسيا المتحدة", en: "Micronesia" },
        "🇲🇸": { ar: "مولدوفا", en: "Moldova" },
        "🇲🇸": { ar: "موناكو", en: "Monaco" },
        "🇲🇨": { ar: "منغوليا", en: "Mongolia" },
        "🇲🇪": { ar: "الجبل الأسود", en: "Montenegro" },
        "🇲🇸": { ar: "مونتسرات", en: "Montserrat" },
        "🇲🇦": { ar: "المغرب", en: "Morocco" },
        "🇲🇸": { ar: "موزمبيق", en: "Mozambique" },
        "🇲🇲": { ar: "ميانمار", en: "Myanmar (Burma)" },
        "🇳🇦": { ar: "ناميبيا", en: "Namibia" },
        "🇳🇷": { ar: "ناورو", en: "Nauru" },
        "🇳🇵": { ar: "نيبال", en: "Nepal" },
        "🇳🇱": { ar: "هولندا", en: "Netherlands" },
        "🇳🇨": { ar: "جزر كورال البحرية", en: "New Caledonia" },
        "🇳🇿": { ar: "نيوزيلندا", en: "New Zealand" },
        "🇳🇮": { ar: "نيكاراغوا", en: "Nicaragua" },
        "🇳🇪": { ar: "النيجر", en: "Niger" },
        "🇳🇬": { ar: "نيجيريا", en: "Nigeria" },
        "🇳🇺": { ar: "نيوي", en: "Niue" },
        "🇳🇫": { ar: "جزيرة نورفولك", en: "Norfolk Island" },
        "🇰🇵": { ar: "كوريا الشمالية", en: "North Korea" },
        "🇲🇵": { ar: "جزر الماريانا الشمالية", en: "Northern Mariana Islands" },
        "🇳🇴": { ar: "النرويج", en: "Norway" },
        "🇴🇲": { ar: "عُمان", en: "Oman" },
        "🇵🇰": { ar: "باكستان", en: "Pakistan" },
        "🇵🇼": { ar: "بالو", en: "Palau" },
        "🇵🇸": { ar: "فلسطين", en: "Palestinian Territories" },
        "🇵🇦": { ar: "بنما", en: "Panama" },
        "🇵🇸": { ar: "بابوا غينيا الجديدة", en: "Papua New Guinea" },
        "🇵🇬": { ar: "براغواي", en: "Paraguay" },
        "🇵🇾": { ar: "بيرو", en: "Peru" },
        "🇵🇭": { ar: "الفلبين", en: "Philippines" },
        "🇵🇭": { ar: "بيتكيرن", en: "Pitcairn Islands" },
        "🇵🇺": { ar: "بولندا", en: "Poland" },
        "🇵🇱": { ar: "البرتغال", en: "Portugal" },
        "🇵🇹": { ar: "بورتوريكو", en: "Puerto Rico" },
        "🇵🇷": { ar: "قطر", en: "Qatar" },
        "🇶🇦": { ar: "ريونيون", en: "Réunion" },
        "🇷🇪": { ar: "رومانيا", en: "Romania" },
        "🇷🇴": { ar: "روسيا", en: "Russia" },
        "🇷🇼": { ar: "رواندا", en: "Rwanda" },
        "🇷🇼": { ar: "ساموا", en: "Samoa" },
        "🇼🇸": { ar: "سان مارينو", en: "San Marino" },
        "🇸🇲": { ar: "ساو تومي وبرينسيبي", en: "São Tomé & Príncipe" },
        "🇸🇹": { ar: "السعودية", en: "Saudi Arabia" },
        "🇸🇦": { ar: "السنغال", en: "Senegal" },
        "🇸🇳": { ar: "صربيا", en: "Serbia" },
        "🇷🇸": { ar: "سيشل", en: "Seychelles" },
        "🇸🇨": { ar: "سيراليون", en: "Sierra Leone" },
        "🇸🇱": { ar: "سنغافورة", en: "Singapore" },
        "🇸🇬": { ar: "سانت مارتن", en: "Sint Maarten" },
        "🇸🇽": { ar: "سلوفاكيا", en: "Slovakia" },
        "🇸🇰": { ar: "سلوفينيا", en: "Slovenia" },
        "🇸🇮": { ar: "جورجيا الجنوبية وجزر ساندويتش الجنوبية", en: "South Georgia & South Sandwich Islands" },
        "🇬🇸": { ar: "جزر سليمان", en: "Solomon Islands" },
        "🇸🇧": { ar: "الصومال", en: "Somalia" },
        "🇸🇴": { ar: "جنوب أفريقيا", en: "South Africa" },
        "🇿🇦": { ar: "كوريا الجنوبية", en: "South Korea" },
        "🇰🇷": { ar: "جنوب السودان", en: "South Sudan" },
        "🇸🇸": { ar: "إسبانيا", en: "Spain" },
        "🇪🇸": { ar: "سريلانكا", en: "Sri Lanka" },
        "🇱🇰": { ar: "سانت بارتيلمي", en: "St. Barthélemy" },
        "🇧🇱": { ar: "سانت هيلينا", en: "St. Helena" },
        "🇸🇭": { ar: "سانت كيتس ونيفيس", en: "St. Kitts & Nevis" },
        "🇰🇳": { ar: "سانت لوسيا", en: "St. Lucia" },
        "🇱🇨": { ar: "سانت بيير وميكلون", en: "St. Pierre & Miquelon" },
        "🇵🇲": { ar: "سانت فنسنت وجزر غرينادين", en: "St. Vincent & Grenadines" },
        "🇻🇨": { ar: "السودان", en: "Sudan" },
        "🇸🇩": { ar: "سورينام", en: "Suriname" },
        "🇸🇷": { ar: "إسواتيني", en: "Eswatini" },
        "🇸🇿": { ar: "السويد", en: "Sweden" },
        "🇸🇪": { ar: "سويسرا", en: "Switzerland" },
        "🇨🇭": { ar: "سوريا", en: "Syria" },
        "🇸🇾": { ar: "طاجيكستان", en: "Tajikistan" },
        "🇹🇾": { ar: "تنزانيا", en: "Tanzania" },
        "🇹🇿": { ar: "تنزانيا", en: "Tanzania" },
        "🇹🇭": { ar: "تايلاند", en: "Thailand" },
        "🇹🇱": { ar: "تيمور الشرقية", en: "Timor-Leste" },
        "🇹🇬": { ar: "توجو", en: "Togo" },
        "🇹🇰": { ar: "جزر كوك", en: "Tokelau" },
        "🇹🇴": { ar: "تونغا", en: "Tonga" },
        "🇹🇹": { ar: "ترينيداد وتوباغو", en: "Trinidad & Tobago" },
        "🇹🇹": { ar: "تونس", en: "Tunisia" },
        "🇹🇽": { ar: "تركيا", en: "Turkey" },
        "🇹🇷": { ar: "تركمانستان", en: "Turkmenistan" },
        "🇹🇲": { ar: "جزر تركيا وكايكوس", en: "Turks & Caicos Islands" },
        "🇹🇨": { ar: "جزر فيرجن الأمريكية", en: "U.S. Virgin Islands" },
        "🇻🇮": { ar: "توفالو", en: "Tuvalu" },
        "🇹🇻": { ar: "أوغندا", en: "Uganda" },
        "🇺🇬": { ar: "أوغندا", en: "Uganda" },
        "🇺🇦": { ar: "أوكرانيا", en: "Ukraine" },
        "🇦🇪": { ar: "الإمارات العربية المتحدة", en: "United Arab Emirates" },
        "🇬🇧": { ar: "المملكة المتحدة", en: "United Kingdom" },
        "🏴󠁧󠁢󠁥󠁮󠁧󠁿": { ar: "إنجلترا", en: "England" },
        "🏴󠁧󠁢󠁳󠁣󠁴󠁿": { ar: "اسكتلندا", en: "Scotland" },
        "🏴󠁧󠁢󠁷󠁬󠁳󠁿": { ar: "ويلز", en: "Wales" },
        "🇺🇸": { ar: "الولايات المتحدة", en: "United States" },
        "🇺🇾": { ar: "أوروغواي", en: "Uruguay" },
        "🇺🇿": { ar: "أوزبكستان", en: "Uzbekistan" },
        "🇻🇺": { ar: "فانواتو", en: "Vanuatu" },
        "🇻🇦": { ar: "الفاتيكان", en: "Vatican City" },
        "🇻🇪": { ar: "فنزويلا", en: "Venezuela" },
        "🇻🇳": { ar: "فيتنام", en: "Vietnam" },
        "🇼🇫": { ar: "واليس وفوتونا", en: "Wallis & Futuna" },
        "🇼🇫": { ar: "الصحراء الغربية", en: "Western Sahara" },
        "🇪🇭": { ar: "اليمن", en: "Yemen" },
        "🇾🇪": { ar: "اليمن", en: "Yemen" },
        "🇿🇲": { ar: "زامبيا", en: "Zambia" },
        "🇿🇼": { ar: "زيمبابوي", en: "Zimbabwe" },
        "🇿🇼": { ar: "جزيرة أسينشين", en: "Ascension Island" },
        "🇦🇨": { ar: "جزيرة أسينشين", en: "Ascension Island" },
        "🇧🇻": { ar: "جزيرة بوفيه", en: "Bouvet Island" },
        "🇨🇵": { ar: "يوتا", en: "Ceuta & Melilla" },
        "🇪🇦": { ar: "دييغو غارسيا", en: "Diego Garcia" },
        "🇩🇬": { ar: "جزيرة هيرد وجزر ماكدونالد", en: "Heard & McDonald Islands" },
        "🇭🇲": { ar: "جزيرة مايوت", en: "Mayotte" },
        "🇲🇫": { ar: "سفالبارد وجان ماين", en: "Svalbard & Jan Mayen" },
        "🇸🇯": { ar: "تريستان دا كونا", en: "Tristan da Cunha" },
        "🇹🇦": { ar: "جزر الولايات المتحدة الصغيرة النائية", en: "U.S. Outlying Islands" },
        "🇺🇲": { ar: "الأمم المتحدة", en: "United Nations" }
    };

    // --- 2. إضافة أنماط CSS (Adding CSS Styles) ---
    // يتم حقن أنماط CSS مباشرة في الصفحة لتجنب الحاجة لملف منفصل.
    const styles = `
        .emoji-picker-btn {
            position: fixed !important;
            background: #fff !important;
            fill: #393d42ff !important;
            color: #393d42ff !important;
            border: 1px solid #ccc !important;
            border-radius: 25px !important;
            padding: 5px 5px !important;
            cursor: pointer !important;
            font-size: 20px !important;
            line-height: 1 !important;
            z-index: 1000 !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
            opacity: 0 !important;
            visibility: hidden !important;
            display: block !important;
            pointer-events: none !important;
            transition: opacity 0.2s ease, visibility 0.2s ease, 0.2s ease;
        }
        .emoji-picker-btn.visible {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
        }
        .emoji-picker-btn:hover {
            background: #ebebebff !important;
        }
        .emoji-picker-btn svg {
            height: 24px !important;
            display: flex !important;
        }
        .emoji-picker-btn:hover {
            fill: #007aff !important;
            color: #007aff !important;
        }
        .emoji-picker-container {
            position: fixed !important;
            background: #fff !important;
            overflow: hidden !important;
            border: 1px solid #ccc !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
            z-index: 10000 !important;
            width: 350px !important;
            max-height: 427px !important;
            display: none;
            flex-direction: column !important;
            font-size: 14px !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
            user-select: none !important;
            /* التعديل: إضافة قيود لضمان بقاء القائمة داخل إطار الموقع */
            max-width: calc(100vw - 20px) !important;
            max-height: calc(100vh - 20px) !important;
        }
        .emoji-picker-container.dragging {
            cursor: move !important;
        }
        .emoji-picker-container::after {
            position: absolute !important;
            z-index: 50 !important;
            content: '1,543 different emojis' !important;
            bottom: -41px !important;
            padding: 10px !important;
            font-size: 16px !important;
            color: #576571 !important;
            opacity: .5 !important;
            text-shadow: 0px -41px 0px !important;
        }
        .emoji-picker-search {
            margin: 10px !important;
            padding: 8px !important;
            outline-color: #007aff !important;
            border: 1px solid #ddd !important;
            border-radius: 5px !important;
            font-size: 14px !important;
        }
        .emoji-picker-search.loading {
            opacity: 0.5 !important;
            pointer-events: none !important;
        }
        .emoji-picker-categories {
            cursor: context-menu !important;
            display: flex !important;
            border-bottom: 1px solid #eee !important;
            background: #f8f8f8 !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
            user-select: none !important; /* منع تحديد النص أثناء السحب */
        }
        .emoji-picker-categories::-webkit-scrollbar {
            display: none !important;
        }
        .emoji-picker-category {
            position: relative !important;
            background: #0000 !important;
            padding: 2px 12px !important;
            cursor: pointer !important;
            margin-left: 10px !important;
            margin: 7.5px 0;
            color: #00000052 !important;
            border-radius: 25px !important;
            white-space: nowrap !important;
            font-size: 16px !important;
            transition: all 0.2s ease !important;
        }
        .emoji-picker-category:hover {
            color: #000000a2 !important;
        }
        .emoji-picker-category.active {
            // position: sticky !important;
            // left: 0 !important;
            // right: 41px !important;
            // z-index: 5 !important;
            opacity: 1 !important;
            color: #000 !important;
            background: #fff !important;
            box-shadow: 0px 1px 10px #2c3e5024 !important;
        }
        .emoji-picker-category.active::after {
            position: absolute !important;
            left: 50% !important;
            transform: translate(-50%) !important;
            content: '' !important;
            bottom: -7px !important;
            height: 2px !important;
            width: 50% !important;
            border-radius: 5px !important;
            background: #007aff !important;
        }
        .emoji-picker-content {
            flex-grow: 1 !important;
            overflow-y: auto !important;
            padding: 10px !important;
            height: 312px !important;
            scrollbar-width: thin !important;
            scrollbar-color: #ccc #f0f0f0 !important;
        }
        .emoji-picker-content::-webkit-scrollbar {
            width: 6px !important;
        }
        .emoji-picker-content::-webkit-scrollbar-track {
            background: #f0f0f0 !important;
        }
        .emoji-picker-content::-webkit-scrollbar-thumb {
            background-color: #ccc !important;
            border-radius: 3px !important;
        }
        .emoji-picker-section {
            display: none !important;
            padding-bottom: 30px !important;
        }
        .emoji-picker-section.active {
            display: block !important;
        }
        .emoji-picker-emoji {
            line-height: 1.9999999 !important;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 45px !important;
            height: 45px !important;
            cursor: pointer !important;
            font-size: 24px !important;
            border-radius: 25px !important;
            background: #0000 !important;
            transition: background 0.2s ease !important;
            border: none !important;
        }
        .emoji-picker-emoji:hover {
            background: #eee !important;
        }
        .backspace {
            background: white !important;
            position: sticky !important;
            cursor: pointer !important;
            z-index: 5 !important; 
            right: 0 !important;
            padding: 0 9px !important;
            display: flex !important;
            align-items: center !important;
            border-left: solid 1px #eeeeee !important;
        }
        .backspace svg {
            width: 24px !important;
            height: 24px !important;
        }
        .backspace:active svg {
            opacity: .5 !important;
        }
        .language-toggle {
            position: absolute !important;
            border-radius: 25px !important;
            opacity: .5 !important;
            top: 5px !important;
            right: 5px !important;
            display: flex !important;
            align-items: center !important;
            z-index: 10001 !important;
            transition: 0.3s ease;
        }
        .language-toggle:hover {
            opacity: 1 !important;
        }
        .language-toggle input[type="checkbox"] {
            display: none !important;
        }
        .language-toggle label {
            display: flex !important;
            align-items: center !important;
            cursor: pointer !important;
            background: #f0f0f0 !important;
            border-radius: 20px !important;
            padding: 5px 10px !important;
            font-size: 12px !important;
            transition: background 0.3s ease !important;
        }
        .language-toggle label:hover {
            background: #eeeeeeff !important;
        }
        .language-toggle label span {
            margin: 0 5px !important;
            transition: opacity 0.3s ease !important;
        }
        .language-toggle label span.active {
            font-weight: bold !important;
        }
        .language-toggle label span:first-child {
            opacity: 0.5 !important;
        }
        .language-toggle label span:last-child {
            opacity: 0.5 !important;
        }
        .language-toggle input[type="checkbox"]:checked + label span:first-child {
            opacity: 0.5 !important;
        }
        .language-toggle input[type="checkbox"]:checked + label span:last-child {
            opacity: 1 !important;
        }
        .language-toggle input[type="checkbox"]:not(:checked) + label span:first-child {
            opacity: 1 !important;
        }
        .language-toggle input[type="checkbox"]:not(:checked) + label span:last-child {
            opacity: 0.5 !important;
        }
        .drag-handle {
            position: absolute !important;
            transform: translate(-50%) !important;
            top: 0 !important;
            left: 50% !important;
            right: 0 !important;
            height: 25px !important;
            cursor: move !important;
            z-index: 10000 !important;
            width: 80px !important;
            border-radius: 8px 8px 0 0 !important;
        }
        .drag-handle::after {
            transition: 0.3s ease;
            content: '⋮⋮⋮⋮' !important;
            position: absolute !important;
            top: 41% !important;
            left: 50% !important;
            font-weight: 600;
            transform: translate(-50%, -50%) !important;
            color: #ccc !important;
            font-size: 18px !important;
            background: white;
            box-shadow: 5px 0px 0px #fff, -5px 0px 0px #fff;
        }
        .drag-handle:hover:after {
            color: #4586ff !important;
        }
        .recent-emoji-clear {
            position: absolute !important;
            top: 5px !important;
            left: 5px !important;
            background: #f0f0f0 !important;
            border: none !important;
            border-radius: 4px !important;
            padding: 2px 6px !important;
            font-size: 10px !important;
            cursor: pointer !important;
            opacity: 0.7 !important;
            transition: opacity 0.2s ease !important;
        }
        .recent-emoji-clear:hover {
            opacity: 1 !important;
        }
        .recent-emoji-timer {
            position: absolute !important;
            top: 5px !important;
            left: 35px !important;
            font-size: 10px !important;
            color: #666 !important;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // --- 3. المتغيرات العامة (Global Variables) ---
    let picker = null;
    let activeInput = null;
    let activeButton = null;
    let currentCategory = null; // تخزين الفئة الحالية
    let isCategoryLoading = false; // متغير لتتبع حالة التحميل
    let isDragging = false; // متغير لتتبع حالة السحب
    let dragOffset = { x: 0, y: 0 }; // إزاحة السحب
    
    // --- 4. إدارة اللغة ---
    // الحصول على اللغة الحالية من localStorage أو تحديدها بناءً على لغة المتصفح
    let isArabic = localStorage.getItem('emoji-picker-language') === 'ar' || 
                   (localStorage.getItem('emoji-picker-language') === null && navigator.language.includes('ar'));
    
    // حفظ اللغة في localStorage
    function saveLanguagePreference() {
        localStorage.setItem('emoji-picker-language', isArabic ? 'ar' : 'en');
    }
    
    // تبديل اللغة
    function toggleLanguage() {
        isArabic = !isArabic;
        saveLanguagePreference();
        updateLanguageToggle();
        updatePickerLanguage();
        
        // إذا كان المنتقي مفتوحًا، أعد تحميل الفئة الحالية
        if (picker && picker.style.display === 'flex' && currentCategory) {
            showCategory(currentCategory, true);
        }
    }
    
    // تحديث واجهة المنتقي بناءً على اللغة
    function updatePickerLanguage() {
        if (!picker) return;
        
        const searchInput = picker.querySelector('.emoji-picker-search');
        if (searchInput) {
            searchInput.placeholder = isArabic ? 'ابحث عن إيموجي...' : 'Search for emoji...';
        }
        
        // تحديث أسماء الفئات
        const categoryNames = {
            'الأخيرة': isArabic ? 'الأخيرة' : 'Recent',
            'Smileys & People': isArabic ? 'وجوه وأشخاص' : 'Smileys & People',
            'Animals & Nature': isArabic ? 'حيوانات وطبيعة' : 'Animals & Nature',
            'Food & Drink': isArabic ? 'طعام وشراب' : 'Food & Drink',
            'Activities': isArabic ? 'أنشطة' : 'Activities',
            'Travel & Places': isArabic ? 'سفر وأماكن' : 'Travel & Places',
            'Objects': isArabic ? 'أشياء' : 'Objects',
            'Symbols': isArabic ? 'رموز' : 'Symbols',
            'Flags': isArabic ? 'أعلام' : 'Flags'
        };
        
        picker.querySelectorAll('.emoji-picker-category').forEach(btn => {
            const categoryName = btn.dataset.category;
            if (categoryNames[categoryName]) {
                btn.textContent = categoryNames[categoryName].split(' ')[0];
            }
        });
        
        // تحديث تلميحات الأدوات للإيموجي
        picker.querySelectorAll('.emoji-picker-emoji').forEach(emoji => {
            const emojiChar = emoji.textContent;
            const name = getEmojiName(emojiChar);
            emoji.title = name;
        });
    }
    
    // تحديث زر تبديل اللغة
    function updateLanguageToggle() {
        const toggle = document.querySelector('.language-toggle');
        if (!toggle) return;
        
        const checkbox = toggle.querySelector('input[type="checkbox"]');
        const arLabel = toggle.querySelector('span:first-child');
        const enLabel = toggle.querySelector('span:last-child');
        
        if (checkbox) {
            checkbox.checked = !isArabic;
        }
        
        if (arLabel) {
            arLabel.textContent = 'ABC';
            arLabel.classList.toggle('active', isArabic);
        }
        
        if (enLabel) {
            enLabel.textContent = 'ENG';
            enLabel.classList.toggle('active', !isArabic);
        }
    }
    
    // إنشاء زر تبديل اللغة
    function createLanguageToggle() {
        const toggle = document.createElement('div');
        toggle.className = 'language-toggle Wave-cloud';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'language-checkbox';
        checkbox.checked = !isArabic;
        
        const label = document.createElement('label');
        label.htmlFor = 'language-checkbox';
        
        const arLabel = document.createElement('span');
        arLabel.textContent = 'ABC';
        arLabel.classList.toggle('active', isArabic);
        
        const enLabel = document.createElement('span');
        enLabel.textContent = 'ENG';
        enLabel.classList.toggle('active', !isArabic);
        
        label.appendChild(arLabel);
        label.appendChild(enLabel);
        
        toggle.appendChild(checkbox);
        toggle.appendChild(label);
        
        checkbox.addEventListener('change', toggleLanguage);
        
        return toggle;
    }

    // --- 5. دوال مساعدة (Helper Functions) ---

    /**
     * الحصول على اسم الإيموجي حسب اللغة
     */
    function getEmojiName(emoji) {
        if (emojiNames[emoji]) {
            return isArabic ? emojiNames[emoji].ar : emojiNames[emoji].en;
        }
        return emoji; // للبحث، سنستخدم الرمز نفسه إذا لم يكن هناك اسم
    }

    /**
     * حفظ الإيموجي المستخدم حديثاً
     */
    function saveRecentEmoji(emoji) {
        // الحصول على الإيموجي الحالية من localStorage
        let recentEmojis = JSON.parse(localStorage.getItem('recent-emojis') || '[]');
        
        // إزالة الإيموجي إذا كان موجودًا بالفعل
        recentEmojis = recentEmojis.filter(e => e !== emoji);
        
        // إضافة الإيموجي في البداية
        recentEmojis.unshift(emoji);
        
        // الحفاظ على آخر 20 إيموجي فقط
        if (recentEmojis.length > 20) {
            recentEmojis = recentEmojis.slice(0, 20);
        }
        
        // حفظ الطابع الزمني الحالي
        const timestamp = Date.now();
        localStorage.setItem('recent-emojis-timestamp', timestamp.toString());
        
        // حفظ الإيموجي المحدثة
        localStorage.setItem('recent-emojis', JSON.stringify(recentEmojis));
        
        // تحديث قسم "الأخيرة" إذا كان المنتقي مفتوحًا
        if (picker && picker.style.display === 'flex' && currentCategory === 'الأخيرة') {
            showCategory('الأخيرة', true);
        }
    }

    /**
     * التحقق مما إذا كان يجب مسح الإيموجي الحديثة (مرور 48 ساعة)
     */
    function checkAndClearRecentEmojis() {
        const timestamp = localStorage.getItem('recent-emojis-timestamp');
        
        if (!timestamp) {
            // لا يوجد طابع زمني، لا حاجة للمسح
            return false;
        }
        
        const currentTime = Date.now();
        const timeDiff = currentTime - parseInt(timestamp);
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        // إذا مرت 48 ساعة أو أكثر، قم بمسح الإيموجي
        if (hoursDiff >= 48) {
            localStorage.removeItem('recent-emojis');
            localStorage.removeItem('recent-emojis-timestamp');
            return true;
        }
        
        return false;
    }

    /**
     * الحصول على الإيموجي الحديثة مع التحقق من انتهاء صلاحيتها
     */
    function getRecentEmojis() {
        // التحقق مما إذا كان يجب مسح الإيموجي
        checkAndClearRecentEmojis();
        
        // الحصول على الإيموجي من localStorage
        return JSON.parse(localStorage.getItem('recent-emojis') || '[]');
    }

    /**
     * حساب الوقت المتبقي قبل مسح الإيموجي
     */
    function getTimeUntilClear() {
        const timestamp = localStorage.getItem('recent-emojis-timestamp');
        
        if (!timestamp) {
            return null;
        }
        
        const currentTime = Date.now();
        const timeDiff = currentTime - parseInt(timestamp);
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        // حساب الوقت المتبقي بالساعات
        const remainingHours = Math.max(0, 48 - hoursDiff);
        
        // تحويل إلى ساعات ودقائق
        const hours = Math.floor(remainingHours);
        const minutes = Math.floor((remainingHours - hours) * 60);
        
        return { hours, minutes };
    }

    /**
     * تحديث مؤقت المسح
     */
    function updateClearTimer() {
        const timerElement = document.querySelector('.recent-emoji-timer');
        if (!timerElement) return;
        
        const timeLeft = getTimeUntilClear();
        
        if (!timeLeft) {
            timerElement.textContent = '';
            return;
        }
        
        if (isArabic) {
            timerElement.textContent = `${timeLeft.hours}س ${timeLeft.minutes}د`;
        } else {
            timerElement.textContent = `${timeLeft.hours}h ${timeLeft.minutes}m`;
        }
    }

    /**
     * إنشاء منتقي الإيموجي وإضافته إلى الصفحة مرة واحدة فقط
     */
    function createPicker() {
        if (document.getElementById('emoji-picker-container')) return;

        picker = document.createElement('div');
        picker.id = 'emoji-picker-container';
        picker.className = 'emoji-picker-container';
        picker.setAttribute('data-emoji-picker', 'true');

        // إضافة مقبض السحب في الأعلى
        const dragHandle = document.createElement('div');
        dragHandle.className = 'drag-handle';
        picker.appendChild(dragHandle);

        // بناء محتوى المنتقي باستخدام innerHTML
        let categoriesHTML = '';
        let firstCategoryName = null;
        
        // أسماء الفئات حسب اللغة
        const categoryNames = {
            'الأخيرة': isArabic ? 'الأخيرة' : 'Recent',
            'Smileys & People': isArabic ? 'وجوه وأشخاص' : 'Smileys & People',
            'Animals & Nature': isArabic ? 'حيوانات وطبيعة' : 'Animals & Nature',
            'Food & Drink': isArabic ? 'طعام وشراب' : 'Food & Drink',
            'Activities': isArabic ? 'أنشطة' : 'Activities',
            'Travel & Places': isArabic ? 'سفر وأماكن' : 'Travel & Places',
            'Objects': isArabic ? 'أشياء' : 'Objects',
            'Symbols': isArabic ? 'رموز' : 'Symbols',
            'Flags': isArabic ? 'أعلام' : 'Flags'
        };

        for (const categoryName in emojiData) {
            if (!firstCategoryName) firstCategoryName = categoryName;

            // زر الفئة
            const displayName = categoryNames[categoryName] || categoryName;
            categoriesHTML += `<div class="emoji-picker-category" data-category="${categoryName}">
                ${displayName.split(' ')[0]}
            </div>`;
        }

        picker.innerHTML += `
            <input type="text" class="emoji-picker-search" placeholder="${isArabic ? 'ابحث عن إيموجي...' : 'Search for emoji...'}" data-emoji-search="true">
            <div class="emoji-picker-categories">
                <div style="display: flex !important;margin-right: 10px !important;cursor: context-menu !important;">${categoriesHTML}</div>
                <div class="backspace" title="${isArabic ? 'حذف' : 'Delete'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33"/></svg>
                </div>
            </div>
            <div class="emoji-picker-content">
                <!-- سيتم إضافة الأقسام ديناميكيًا -->
            </div>
        `;

        // إضافة زر تبديل اللغة
        const languageToggle = createLanguageToggle();
        picker.appendChild(languageToggle);

        document.body.appendChild(picker);

        // --- بداية الكود المضاف للتمرير بالسحب ---
        const categoriesContainer = picker.querySelector('.emoji-picker-categories');
        let isDown = false;
        let startX;
        let scrollLeft;

        categoriesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            categoriesContainer.style.cursor = 'grabbing';
            startX = e.pageX - categoriesContainer.offsetLeft;
            scrollLeft = categoriesContainer.scrollLeft;
            e.preventDefault(); // منع تحديد النص
        });

        categoriesContainer.addEventListener('mouseleave', () => {
            isDown = false;
            categoriesContainer.style.cursor = 'grab';
        });

        categoriesContainer.addEventListener('mouseup', () => {
            isDown = false;
            categoriesContainer.style.cursor = 'grab';
        });

        categoriesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - categoriesContainer.offsetLeft;
            const walk = (x - startX) * 2; // سرعة التمرير
            categoriesContainer.scrollLeft = scrollLeft - walk;
        });
        // --- نهاية الكود المضاف ---

        // إضافة مستمعين للأحداث بعد الإنشاء
        picker.querySelector('[data-emoji-search]').addEventListener('input', handleSearch);
        picker.querySelectorAll('.emoji-picker-category').forEach(btn => {
            btn.addEventListener('click', () => showCategory(btn.dataset.category));
        });
        
        // إضافة مستمع حدث لزر مسافة للخلف
        const backspaceBtn = picker.querySelector('.backspace');
        if (backspaceBtn) {
            backspaceBtn.addEventListener('click', handleBackspace);
        }

        // إضافة مستمعي أحداث السحب والإفلات
        setupDragAndDrop();

        // تحميل الفئة الأولى فقط عند بدء تشغيل المنتقي
        showCategory(firstCategoryName);
        console.log('Emoji picker created with dynamic loading');
    }

    /**
     * إعداد وظيفة السحب والإفلات للقائمة
     */
    function setupDragAndDrop() {
        const dragHandle = picker.querySelector('.drag-handle');
        
        // بدء السحب عند الضغط على مقبض السحب
        dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            picker.classList.add('dragging');
            
            // حساب إزاحة الماوس من أعلى يسار المنتقي
            const rect = picker.getBoundingClientRect();
            dragOffset.x = e.clientX - rect.left;
            dragOffset.y = e.clientY - rect.top;
            
            e.preventDefault();
        });
        
        // تحريك المنتقي أثناء السحب
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            let newLeft = e.clientX - dragOffset.x;
            let newTop = e.clientY - dragOffset.y;
            
            // الحصول على أبعاد المنتقي والشاشة
            const pickerWidth = picker.offsetWidth;
            const pickerHeight = picker.offsetHeight;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // التأكد من أن المنتقي لا يخرج من حدود الشاشة
            newLeft = Math.max(0, Math.min(newLeft, viewportWidth - pickerWidth));
            newTop = Math.max(0, Math.min(newTop, viewportHeight - pickerHeight));
            
            // تحديث موقع المنتقي
            picker.style.left = `${newLeft}px`;
            picker.style.top = `${newTop}px`;
        });
        
        // إنهاء السحب عند تحرير الماوس
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                picker.classList.remove('dragging');
            }
        });
    }

    /**
     * إنشاء قسم الإيموجي ديناميكيًا مع التحميل التدريجي
     */
    function createEmojiSection(categoryName) {
        const content = picker.querySelector('.emoji-picker-content');
        
        // إنشاء قسم جديد
        const section = document.createElement('div');
        section.className = 'emoji-picker-section';
        section.setAttribute('data-category', categoryName);
        
        // إضافة زر مسح للفئة "الأخيرة" فقط
        if (categoryName === 'الأخيرة') {
            const clearButton = document.createElement('button');
            clearButton.className = 'recent-emoji-clear';
            clearButton.textContent = isArabic ? 'مسح' : 'Clear';
            clearButton.addEventListener('click', () => {
                localStorage.removeItem('recent-emojis');
                localStorage.removeItem('recent-emojis-timestamp');
                showCategory('الأخيرة', true);
            });
            section.appendChild(clearButton);
            
            const timerElement = document.createElement('div');
            timerElement.className = 'recent-emoji-timer';
            section.appendChild(timerElement);
            
            // تحديث المؤقت كل دقيقة
            setInterval(updateClearTimer, 60000);
            updateClearTimer();
        }
        
        // إضافة الإيموجي للقسم بشكل تدريجي
        const searchInput = picker.querySelector('.emoji-picker-search');
        searchInput.classList.add('loading'); // تعطيل البحث أثناء التحميل
        
        let index = 0;
        let emojis = [];
        
        // إذا كانت الفئة "الأخيرة"، احصل على الإيموجي من localStorage
        if (categoryName === 'الأخيرة') {
            emojis = getRecentEmojis();
        } else {
            emojis = emojiData[categoryName];
        }
        
        function addNextEmoji() {
            if (index >= emojis.length) {
                // تم تحميل جميع الإيموجي
                searchInput.classList.remove('loading'); // تمكين البحث بعد التحميل
                isCategoryLoading = false;
                return;
            }
            
            const emojiChar = emojis[index];
            const emojiName = getEmojiName(emojiChar);
            
            // إنشاء عنصر الإيموجي
            const emojiElement = document.createElement('button');
            emojiElement.className = 'emoji-picker-emoji Wave-center';
            emojiElement.title = emojiName;
            emojiElement.textContent = emojiChar;
            
            // إضافة مستمع حدث للنقر
            emojiElement.addEventListener('click', () => insertEmoji(emojiChar));
            
            // إضافة الإيموجي للقسم
            section.appendChild(emojiElement);
            
            index++;
            
            // جدولة الإيموجي التالي
            setTimeout(addNextEmoji, 2); // 2 ملي ثانية بين كل إيموجي
        }
        
        // بدء تحميل الإيموجي
        isCategoryLoading = true;
        addNextEmoji();
        
        return section;
    }

    /**
     * التعامل مع النقر على زر مسافة للخلف
     */
    function handleBackspace() {
        if (!activeInput) return;
        
        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;
        const value = activeInput.value;
        
        // إذا كان هناك نص محدد، قم بحذفه
        if (start !== end) {
            const textBefore = value.substring(0, start);
            const textAfter = value.substring(end);
            activeInput.value = textBefore + textAfter;
            activeInput.selectionStart = activeInput.selectionEnd = start;
        } 
        // إذا لم يكن هناك نص محدد، احذف الحرف الأخير
        else if (start > 0) {
            // استخراج آخر 4 أحرف للتحقق من الإيموجي المركب
            const lastChars = value.substring(Math.max(0, start - 4), start);
            
            // التحقق مما إذا كان الحرف الأخير هو إيموجي
            let emojiLength = 1;
            
            // استخدام Intl.Segmenter إذا كان متاحًا
            if (typeof Intl !== 'undefined' && Intl.Segmenter) {
                try {
                    const segmenter = new Intl.Segmenter();
                    const segments = Array.from(segmenter.segment(lastChars));
                    if (segments.length > 0) {
                        emojiLength = segments[segments.length - 1].segment.length;
                    }
                } catch (e) {
                    console.error('Error using Intl.Segmenter:', e);
                    // استخدام الطريقة البديلة إذا فشلت Intl.Segmenter
                    emojiLength = getEmojiLength(lastChars);
                }
            } else {
                // استخدام الطريقة البديلة إذا لم يكن Intl.Segmenter متاحًا
                emojiLength = getEmojiLength(lastChars);
            }
            
            const textBefore = value.substring(0, start - emojiLength);
            const textAfter = value.substring(start);
            activeInput.value = textBefore + textAfter;
            activeInput.selectionStart = activeInput.selectionEnd = start - emojiLength;
        }
        
        // إطلاق حدث 'input' ليتمكن أطراف العمل الأخرى (مثل React, Vue) من ملاحظة التغيير
        activeInput.dispatchEvent(new Event('input', { bubbles: true }));
        activeInput.focus();
    }

    /**
     * الحصول على طول الإيموجي (طريقة بديلة لـ Intl.Segmenter)
     */
    function getEmojiLength(text) {
        // التحقق من آخر 4 أحرف (للإيموجي المركب من 4 أحرف)
        if (text.length >= 4 && isEmoji(text.substring(text.length - 4))) {
            return 4;
        }
        // التحقق من آخر 3 أحرف (للإيموجي المركب من 3 أحرف)
        else if (text.length >= 3 && isEmoji(text.substring(text.length - 3))) {
            return 3;
        }
        // التحقق من آخر حرفين (للإيموجي المركب من حرفين)
        else if (text.length >= 2 && isEmoji(text.substring(text.length - 2))) {
            return 2;
        }
        // الافتراضي: حرف واحد
        return 1;
    }

    /**
     * التحقق مما إذا كان النص هو إيموجي
     */
    function isEmoji(text) {
        const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return regex.test(text);
    }

    /**
     * عرض قسم معين من الإيموجي مع التحميل الديناميكي
     */
    function showCategory(categoryName, forceReload = false) {
        // التعديل: إضافة معلمة forceReload للسماح بإعادة تحميل الفئة عند مسح البحث
        // إذا كانت هذه هي الفئة الحالية ولم يتم فرض إعادة التحميل، لا تفعل شيئًا
        if (currentCategory === categoryName && !forceReload) return;
        
        // تحديث أزرار الفئات
        document.querySelectorAll('.emoji-picker-category').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === categoryName);
        });
        
        // الحصول على حاوية المحتوى
        const content = picker.querySelector('.emoji-picker-content');
        
        // إذا كان هناك قسم حالي، قم بإزالته
        const currentSection = content.querySelector('.emoji-picker-section.active');
        if (currentSection) {
            currentSection.remove();
        }
        
        // إنشاء وإضافة القسم الجديد
        const newSection = createEmojiSection(categoryName);
        content.appendChild(newSection);
        
        // تحديث الفئة الحالية
        currentCategory = categoryName;
        
        // جعل القسم الجديد نشطًا
        setTimeout(() => {
            newSection.classList.add('active');
        }, 10);
    }

    /**
     * التعامل مع البحث في الإيموجي
     */
    function handleSearch(e) {
        // منع البحث أثناء تحميل الفئة
        if (isCategoryLoading) {
            e.preventDefault();
            return;
        }
        
        const searchTerm = e.target.value.toLowerCase();
        
        // إذا كان البحث فارغًا، أظهر الفئة الحالية مع فرض إعادة التحميل
        if (!searchTerm) {
            if (currentCategory) {
                showCategory(currentCategory, true); // التعديل: فرض إعادة تحميل الفئة
            }
            return;
        }
        
        // البحث في جميع الفئات
        const content = picker.querySelector('.emoji-picker-content');
        
        // إزالة القسم الحالي
        const currentSection = content.querySelector('.emoji-picker-section');
        if (currentSection) {
            currentSection.remove();
        }
        
        // إنشاء قسم للنتائج
        const resultsSection = document.createElement('div');
        resultsSection.className = 'emoji-picker-section active';
        
        // استخدام Set لتجنب تكرار الإيموجي
        const uniqueEmojis = new Set();
        let resultsHTML = '';
        
        // البحث عن الإيموجي المطابقة
        for (const categoryName in emojiData) {
            // تخطي فئة "الأخيرة" في البحث
            if (categoryName === 'الأخيرة') continue;
            
            emojiData[categoryName].forEach(emojiChar => {
                const name = getEmojiName(emojiChar);
                if (name.toLowerCase().includes(searchTerm) && !uniqueEmojis.has(emojiChar)) {
                    uniqueEmojis.add(emojiChar);
                    resultsHTML += `<button class="emoji-picker-emoji Wave-cloud" title="${name}">${emojiChar}</button>`;
                }
            });
        }
        
        resultsSection.innerHTML = resultsHTML;
        
        // إضافة مستمعي الأحداث للإيموجي
        resultsSection.querySelectorAll('.emoji-picker-emoji').forEach(span => {
            span.addEventListener('click', () => insertEmoji(span.textContent));
        });
        
        // إضافة قسم النتائج
        content.appendChild(resultsSection);
    }

    /**
     * إدراج الإيموجي في حقل الإدخال النشط
     */
    function insertEmoji(emoji) {
        if (!activeInput) return;

        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;
        const value = activeInput.value;
        const textBefore = value.substring(0, start);
        const textAfter = value.substring(end);

        activeInput.value = textBefore + emoji + textAfter;
        activeInput.selectionStart = activeInput.selectionEnd = start + emoji.length;

        // إطلاق حدث 'input' ليتمكن أطراف العمل الأخرى (مثل React, Vue) من ملاحظة التغيير
        activeInput.dispatchEvent(new Event('input', { bubbles: true }));

        // حفظ الإيموجي في قسم "الأخيرة"
        saveRecentEmoji(emoji);

        // التعديل: لا نخفي المنتقي بعد إدراج إيموجي
        // keep picker open after inserting emoji
        activeInput.focus();
    }

    /**
     * تحديث موقع زر الإيموجي
     */
    function updateButtonPosition(input, button = input.emojiButton) {
        if (!input || !button) return;
        
        try {
            const rect = input.getBoundingClientRect();
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const scrollX = window.scrollX || document.documentElement.scrollLeft;
            
            // التعديل: ضبط موقع الزر بعيدًا قليلاً عن الحقل
            button.style.top = `${rect.top + scrollY}px`;
            button.style.left = `${rect.right + scrollX - 35}px`;
            
            // التأكد من أن الزر لا يخرج عن حدود الشاشة
            const buttonWidth = 35;
            const buttonHeight = 35;
            
            if (rect.right + scrollX - buttonWidth < 0) {
                button.style.left = `${rect.left + scrollX}px`;
            }
            
            // التأكد من أن الزر لا يخرج من الأعلى
            if (rect.top + scrollY < 0) {
                button.style.top = `${scrollY + 10}px`;
            }
            
            console.log('Button positioned at:', button.style.top, button.style.left);
        } catch (error) {
            console.error('Error updating button position:', error);
        }
    }

    /**
     * التحقق مما إذا كان يجب إضافة زر لعنصر
     * تم تعديل هذه الدالة لإضافة شرط وجود كلاس emoji-input
     */
    function shouldAddButton(element) {
        // استبعاد حقل البحث الخاص بمنتقي الإيموجي نفسه
        if (element.hasAttribute('data-emoji-search') || 
            element.closest('[data-emoji-picker]')) {
            return false;
        }
        
        // الشرط المضاف: يجب أن يحتوي العنصر على كلاس "emoji-input"
        if (!element.classList.contains('emoji-input')) {
            return false;
        }
        
        return (
            (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search' || !element.type)) ||
            (element.tagName === 'TEXTAREA') ||
            (element.isContentEditable && !element.closest('[data-emoji-picker]')) ||
            (element.getAttribute('contenteditable') === 'true' && !element.closest('[data-emoji-picker]'))
        );
    }

    /**
     * عرض زر الإيموجي بجانب حقل الإدخال
     */
    function showButton(input) {
        // التحقق أولاً إذا كان هذا العنصر جزءاً من منتقي الإيموجي
        if (input.hasAttribute('data-emoji-search') || input.closest('[data-emoji-picker]')) {
            console.log('Skipping emoji button for emoji picker search input');
            return;
        }
        
        // التحقق من الشرط المضاف: يجب أن يحتوي العنصر على كلاس "emoji-input"
        if (!input.classList.contains('emoji-input')) {
            console.log('Input element does not have emoji-input class, skipping');
            return;
        }
        
        console.log('showButton called for:', input.tagName, input.id || input.className);
        
        // التحقق من أن العنصر مرئي وممكن الوصول إليه
        if (!input || input.offsetParent === null) {
            console.log('Input element not visible');
            return;
        }

        // التعديل: إخفاء جميع الأزرار الأخرى قبل إظهار الزر الجديد
        document.querySelectorAll('.emoji-picker-btn.visible').forEach(btn => {
            if (btn !== input.emojiButton) {
                btn.classList.remove('visible');
            }
        });

        // إذا كان الزر موجودًا بالفعل، فقط أظهره
        if (input.emojiButton && input.emojiButton.parentNode) {
            console.log('Reusing existing button');
            input.emojiButton.classList.add('visible');
            updateButtonPosition(input);
            activeButton = input.emojiButton;
            return;
        }

        console.log('Creating new button');
        
        try {
            const button = document.createElement('button');
            button.className = 'emoji-picker-btn Wave-center';
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="184" cy="232" r="24"/><path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 007.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z"/><circle cx="328" cy="232" r="24"/><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>';
            button.type = 'button';
            button.title = isArabic ? 'أضف إيموجي' : 'Add emoji';

            // تحديث الموقع
            updateButtonPosition(input, button);
            
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Emoji button clicked');
                togglePicker(input);
            });

            document.body.appendChild(button);
            input.emojiButton = button;
            activeButton = button;
            activeInput = input;
            
            // إظهار الزر بشكل تدريجي
            setTimeout(() => {
                button.classList.add('visible');
            }, 10);
            
            console.log('Button created successfully');
            
            // إعادة حساب الموضع بعد إضافة الزر إلى DOM
            setTimeout(() => updateButtonPosition(input, button), 10);
            
        } catch (error) {
            console.error('Error creating emoji button:', error);
        }
    }

    /**
     * إخفاء زر الإيموجي
     */
    function hideButton(input) {
        if (input.emojiButton) {
            console.log('Hiding button for:', input.tagName);
            input.emojiButton.classList.remove('visible');
        }
    }

    /**
     * إظهار أو إخفاء منتقي الإيموجي
     */
    function togglePicker(input) {
        if (activeInput === input && picker.style.display === 'flex') {
            hidePicker();
        } else {
            showPicker(input);
        }
    }

    /**
     * عرض منتقي الإيموجي وتحديد موضعه
     */
    function showPicker(input) {
        activeInput = input;
        picker.style.display = 'flex';

        const inputRect = input.getBoundingClientRect();
        const pickerRect = picker.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        let top = inputRect.bottom + window.scrollY;
        let left = inputRect.left + window.scrollX;

        // التحقق من المساحة العمودية (فوق/تحت)
        // التعديل: إذا لم يكن هناك مساحة كافية في الأسفل، اعرض في الأعلى
        if (inputRect.bottom + pickerRect.height > viewportHeight && inputRect.top > pickerRect.height) {
            top = inputRect.top + window.scrollY - pickerRect.height;
        }

        // التحقق من المساحة الأفقية (يمين/يسار)
        if (inputRect.left + pickerRect.width > viewportWidth) {
            left = (inputRect.right + window.scrollX) - pickerRect.width;
        }
        
        // التعديل: التأكد من أن القائمة لا تخرج من حدود الموقع
        // التأكد من عدم خروج المنتقي من يسار الشاشة
        if (left < 10) {
            left = 10; // هامش بسيط من الحافة
        }
        
        // التأكد من عدم خروج المنتقي من يمين الشاشة
        if (left + pickerRect.width > viewportWidth - 10) {
            left = viewportWidth - pickerRect.width - 10; // هامش بسيط من الحافة
        }
        
        // التأكد من عدم خروج المنتقي من أعلى الشاشة
        if (top < 10) {
            top = 10;
        }
        
        // التأكد من عدم خروج المنتقي من أسفل الشاشة
        if (top + pickerRect.height > viewportHeight - 10) {
            top = viewportHeight - pickerRect.height - 10;
        }

        picker.style.top = `${top}px`;
        picker.style.left = `${left}px`;
        
        // التعديل: التأكد من أن القائمة لا تظهر فوق خانة الكتابة
        // إذا كان المنتقي يغطي حقل الإدخال، اضبط الموضع
        const pickerTop = parseInt(picker.style.top);
        const pickerHeight = picker.offsetHeight;
        const inputTop = inputRect.top + window.scrollY;
        
        if (pickerTop < inputTop && pickerTop + pickerHeight > inputTop) {
            // المنتقي يغطي حقل الإدخال، اضبط الموضع
            picker.style.top = `${inputTop + inputRect.height}px`;
        }
        
        // التعديل: دائماً عرض فئة "الأخيرة" عند فتح المنتقي
        showCategory('الأخيرة');
        
        // تحديث موقع الزر
        if (input.emojiButton) {
            updateButtonPosition(input);
        }
    }

    /**
     * إخفاء منتقي الإيموجي
     */
    function hidePicker() {
        if (picker) {
            picker.style.display = 'none';
        }
        // التعديل: لا نضبط activeInput على null
        // نبقيه كما هو للحفاظ على حالة التركيز
    }

    /**
     * دالة التهيئة الرئيسية
     */
    function init() {
        console.log('Initializing emoji picker...');
        
        createPicker();
        
        // تحديث واجهة المنتقي بناءً على اللغة الحالية
        updatePickerLanguage();
        updateLanguageToggle();
        
        console.log('Picker created successfully');

        // إضافة مستمعي الأحداث لجميع حقول الإدخال المناسبة
        document.addEventListener('focusin', (e) => {
            const target = e.target;
            console.log('Focusin event on:', target.tagName, target.type);
            
            if (shouldAddButton(target)) {
                console.log('Showing button for element');
                setTimeout(() => showButton(target), 50); // تأخير بسيط
            }
        }, true);

        document.addEventListener('focusout', (e) => {
            const target = e.target;
            setTimeout(() => {
                // التعديل: إخفاء الزر فقط إذا لم يكن المنتقي مفتوحًا
                if (shouldAddButton(target) && (!picker || picker.style.display !== 'flex')) {
                    hideButton(target);
                    // لا نضبط activeInput على null هنا
                }
            }, 200);
        }, true);

        // أيضًا أضف مستمع للنقر للعناصر contenteditable
        document.addEventListener('click', (e) => {
            if ((e.target.isContentEditable || e.target.getAttribute('contenteditable') === 'true') && shouldAddButton(e.target)) {
                setTimeout(() => showButton(e.target), 50);
            }
        });

        // التعديل: إخفاء المنتقي عند النقر خارج أو عند الكتابة بالكيبورد
        document.addEventListener('click', (e) => {
            if (picker && picker.style.display === 'flex') {
                // إذا كان النقر ليس داخل المنتقي ولا على زر الإيموجي
                if (!picker.contains(e.target) && !e.target.classList.contains('emoji-picker-btn')) {
                    hidePicker();
                    // إذا كان هناك حقل إدخال نشط، نخفي زر الإيموجي الخاص به
                    if (activeInput && activeInput.emojiButton) {
                        hideButton(activeInput);
                    }
                }
            }
        });

        // التعديل: إخفاء المنتقي عند الكتابة بالكيبورد
        document.addEventListener('keydown', (e) => {
            if (picker && picker.style.display === 'flex' && activeInput) {
                // إذا كان المستخدم يكتب (مفاتيح غير خاصة بالإيموجي أو التنقل)
                const isTypingKey = (
                    e.key.length === 1 || // حرف عادي
                    e.key === 'Backspace' ||
                    e.key === 'Delete' ||
                    e.key === 'Space' ||
                    e.key === ' '
                );
                
                // إذا لم يكن المستخدم يضغط على مفتاح للإيموجي أو للبحث في المنتقي
                const isEmojiPickerInteraction = (
                    e.key === 'Enter' ||
                    e.key === 'Escape' ||
                    e.key === 'Tab' ||
                    e.target.closest('[data-emoji-picker]')
                );
                
                if (isTypingKey && !isEmojiPickerInteraction && e.target !== picker.querySelector('[data-emoji-search]')) {
                    hidePicker();
                }
            }
        });

        // تحديث موقع الأزرار عند التمرير
        window.addEventListener('scroll', () => {
            if (activeButton && activeInput) {
                updateButtonPosition(activeInput);
            }
            // تحديث موقع المنتقي إذا كان مفتوحًا
            if (picker && picker.style.display === 'flex' && activeInput) {
                showPicker(activeInput);
            }
        }, { passive: true });

        // تحديث موقع الأزرار عند تغيير حجم النافذة
        window.addEventListener('resize', () => {
            if (activeButton && activeInput) {
                updateButtonPosition(activeInput);
            }
            // تحديث موقع المنتقي إذا كان مفتوحًا
            if (picker && picker.style.display === 'flex' && activeInput) {
                showPicker(activeInput);
            }
        }, { passive: true });

        console.log('Event listeners added');
        
        // اختيار مباشر على بعض العناصر الموجودة
        setTimeout(() => {
            const testInputs = document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');
            const filteredInputs = Array.from(testInputs).filter(input => shouldAddButton(input));
            console.log(`Found ${filteredInputs.length} eligible input/textarea/contenteditable elements with emoji-input class`);
            
            // إضافة الأزرار للعناصر النشطة حالياً
            filteredInputs.forEach(input => {
                if (document.activeElement === input) {
                    showButton(input);
                }
            });
        }, 1000);

        // مراقبة التغييرات في DOM (للعناصر الديناميكية)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        // التحقق من العناصر الجديدة
                        if (node.matches && shouldAddButton(node)) {
                            console.log('New eligible input element added:', node);
                        }
                        // التحقق من العناصر داخل العقدة المضافة
                        if (node.querySelectorAll) {
                            node.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]').forEach(el => {
                                if (shouldAddButton(el) && document.activeElement === el) {
                                    setTimeout(() => showButton(el), 100);
                                }
                            });
                        }
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // تشغيل التهيئة عند تحميل محتوى الصفحة بالكامل
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();