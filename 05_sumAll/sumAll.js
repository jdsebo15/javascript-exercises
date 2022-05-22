const sumAll = function(first,last) {
    if (first > last){
        let sort = first;
        first = last;
        last = sort;
    }
    if( typeof(first) != 'number' || typeof(last) != 'number' || first < 0 || last < 0){
        return "ERROR"
    } else {
        let result = 0;
        for (let i = first; i <= last; i++){
            result = i + result;
        }
        return result;
    }
};
sumAll(1,"90");
// Do not edit below this line
module.exports = sumAll;
 