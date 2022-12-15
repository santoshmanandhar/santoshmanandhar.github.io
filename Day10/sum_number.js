const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

function getNumber(){
    readline.question("Enter number: " , num => {
        if(num === "stop") {
            console.log("The sum of number entered is: ", sum);
            return readline.close();
        }
        sum += parseInt(num);
        getNumber();
    });
}
getNumber();