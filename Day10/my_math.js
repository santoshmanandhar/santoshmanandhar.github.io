// function add(x,y){
//     return x+y;
// }

module.exports.add = function(x,y){
    let sum = parseInt(x,y);
    console.log("The sum of " + `${x}` + " and " + `${y}` + " is: " + sum);
}
function substract(x, y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

const pi = 3.14;

// module.exports = {
//     // add,
//     substract,
//     multiply,
//     divide,
//     pi,
// }