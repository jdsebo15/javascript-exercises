const repeatString = function(str, num) {
    let newStr = '';
    while(num > 0){
        newStr = newStr + str;
        num--;
    }
    if (num < 0){
        return "ERROR"
    } else {
        return newStr;
    }
};
//repeatString('hey',3) for debugging
// Do not edit below this line
module.exports = repeatString;
