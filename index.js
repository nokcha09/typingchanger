const Hangul = require("hangul-js");

exports.typingchanger = (input) => {
  const english = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "O",
    "P",
  ];
  const korean = [
    "ㅂ",
    "ㅈ",
    "ㄷ",
    "ㄱ",
    "ㅅ",
    "ㅛ",
    "ㅕ",
    "ㅑ",
    "ㅐ",
    "ㅔ",
    "ㅁ",
    "ㄴ",
    "ㅇ",
    "ㄹ",
    "ㅎ",
    "ㅗ",
    "ㅓ",
    "ㅏ",
    "ㅣ",
    "ㅋ",
    "ㅌ",
    "ㅊ",
    "ㅍ",
    "ㅠ",
    "ㅜ",
    "ㅡ",
    "ㅃ",
    "ㅉ",
    "ㄸ",
    "ㄲ",
    "ㅆ",
    "ㅒ",
    "ㅖ",
  ];
  let output = [];
  for (let x = 0; x < input.length; x++) {
    for (let i = 0; i < 32; i++) {
      var input = input.replace(english[i], korean[i]);
    }
    output.push(input.charAt(x));
  }
  return Hangul.assemble(output);
};
