const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}!`);
    readline.question('What is your age? ', age =>{
        if(`${age}` > 0 && `${age}` <= 16){
            console.log(`Sorry, ${name} you are not allowed to drive in Iowa.`);
        }
        else if(`${age}` <= 0)
        {
            console.log(`${name}, please enter a valid age.`);
        }
        else
        {
            console.log(`Congratulations ${name} you are allowed to apply for drivers license in Iowa.`)
        }
        readline.close();
})});
