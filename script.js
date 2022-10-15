const checkboxInputs = document.querySelectorAll('.alphabet__character-checkbox-input');
const text = document.querySelector('.transliteration__text');
const textDone = document.querySelector('.transliteration__transliterated-text');
const buttonTransliteration = document.querySelector('.transliteration__button-transliteration');
const buttonReset = document.querySelector('.transliteration__button-reset');

// checkboxInputs.forEach((item) => {
//     if (item.checked) {
//         console.log(item.value)
//     }
// });

function resetText() {
    text.value = "";
    textDone.value = "";
};

const characterEquivalent = {
    "ა": "а",
    "ბ": "б",
    "გ": "г",
    "დ": "д",
    "ე": "е",
    "ვ": "в",
    "ზ": "з",
    "თ": "тэ",
    "ი": "и",
    "კ": "кэ",
    "ლ": "л",
    "მ": "м",
    "ნ": "н",
    "ო": "о",
    "პ": "п",
    "ჟ": "ж",
    "რ": "р",
    "ს": "с",
    "ტ": "т",
    "უ": "у",
    "ფ": "пэ",
    "ქ": "к",
    "ღ": "гэ",
    "ყ": "кʼ",
    "შ": "ш",
    "ჩ": "ч",
    "ც": "тс",
    "ძ": "дз",
    "წ": "ц",
    "ჭ": "чʼ",
    "ხ": "х",
    "ჯ": "дж",
    "ჰ": "хʼ",
};

// Функция для замены ключей и значений местами
function swap(obj) {
    const res = {};
    Object.keys(obj).forEach(function (value) {
        let key = obj[value];
        res[key] = value;
    });
    return res;
}


// Функция поиска и замены
function findAndReplace(inputText, characterObj) {
    let outputText = "";

    String.prototype.replaceAt = function (index, character) {
        return this.substring(0, index) + character + this.substring(index + character.length);
    };

    characterObj.forEach((item) => {
        for (let i = 0; i <= inputText.length; i++) {
            if (inputText[i] === item.value && item.checked) {
                inputText = inputText.replaceAt(i, item.name)
            };
        };
    });
    outputText = inputText;
    return outputText;
}







// // Функция поиска и замены
// function findAndReplace(inputText, characterObj) {
//     let outputText = "";

//     String.prototype.replaceAt = function (index, character) {
//         return this.substring(0, index) + character + this.substring(index + character.length);
//     }

//     Object.values(characterObj).forEach((item, index) => {
//         for (let i = 0; i <= inputText.length; i++) {
//             if (inputText[i] === item) {
//                 inputText = inputText.toLowerCase().replaceAt(i, Object.keys(characterObj)[index])
//             }
//         }
//     })
//     outputText = inputText;
//     return outputText;
// }

// const transliteratedText = findAndReplace(text.textContent, checkboxInputs);

// console.log(transliteratedText)

// function replaceText () {
//     textDone.value = transliteratedText;
// }

buttonReset.addEventListener('click', resetText);
buttonTransliteration.addEventListener('click', () => {
    const transliteratedText = findAndReplace(text.value, checkboxInputs);
    textDone.value = transliteratedText;
});