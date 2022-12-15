module.exports.drive = function() {
    console.log("This car moves forward");
}

module.exports.turn = function(degree) {
    console.log(`This car turns ${degree} degree`);
}

module.exports.break = function(){
    console.log("The car stops");
}