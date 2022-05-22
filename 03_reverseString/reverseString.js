const reverseString = function(str) {
    let text = str.split("");
    let howMany = text.length;
    let i = 0;
    let newText = [];
    while (i < howMany){
        newText[i] = text[howMany-i-1];   
        i++;
    }
    let newWord = newText.join("");
    return newWord;
};
//reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
 