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

function swap(obj) {
    const res = {};
    Object.keys(letterEquivalent).forEach(function (value) {
        let key = obj[value];
        res[key] = value;
    });
    return res;
}

function findAndReplace(inputText, characterObj) {
    let outputText = "";

    String.prototype.replaceAt = function (index, character) {
        return this.substring(0, index) + character + this.substring(index + character.length);
    }

    Object.values(characterObj).forEach((item, index) => {
        for (let i = 0; i <= inputText.length; i++) {
            if (inputText[i] === item) {
                inputText = inputText.replaceAt(i, Object.keys(characterObj)[index])
            }
        }
    })

    outputText = inputText;

    console.log(russianText);
    console.log(outputText);
}

findAndReplace(russianText, letterEquivalent);
