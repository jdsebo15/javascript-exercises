const removeFromArray = function(nmbrs) {
    let result = [];
    for (let i = 0; i < nmbrs.length; i++){
        for(let z = 1; z < (arguments.length); z++){
            if (nmbrs[i] === arguments[z]){
                break;
            } else if (z == arguments.length - 1){
            result.push(nmbrs[i]);
            }
        }

    }
    return result;
}


//removeFromArray([1,2,3], '1', 3)
// Do not edit below this line
module.exports = removeFromArray;
 