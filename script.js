const georgianAlphabet = [];
const russianAlphabet = [];

const letterEquivalent = {
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

const russianText = `Это текст, в котором нужно будет заменять русские буквы на грузинский эквивалент. Здесь есть запятые, точки, заглавные буквы`;
const georgianCharacters = {
    "ა": "а",
    "ბ": "б",
    "გ": "г",
    "დ": "д",
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
    }

    Object.values(characterObj).forEach((item, index) => {
        for (let i = 0; i <= inputText.length; i++) {
            if (inputText[i] === item) {
                inputText = inputText.toLowerCase().replaceAt(i, Object.keys(characterObj)[index])
            }
        }
    })
    return outputText = inputText;
}

findAndReplace(russianText, letterEquivalent);

console.log(russianText)
console.log(findAndReplace(russianText, letterEquivalent));