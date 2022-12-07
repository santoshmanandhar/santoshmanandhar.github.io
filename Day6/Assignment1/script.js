let arr=[2,3,5];
let longWord = ["Google", "Yahoo", "Tesla", "Apple", "Amazon", "Microsoft"];

// max(5,6);
// maxOfThree(2,100,90);
// isVowel('u');
// sum(arr);
// multiply(arr);
// reverse("!dlroW olleH");
// findLongestWord(longWord);
// filterLongWords(longWord, 5);

function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

//SUM ARRAY ELEMENTS
function sum(add){
    return add.reduce((accumulator, elem) => accumulator+elem,0);

}
console.log("Expected output of sum [2,3,5] is 10  " + myFunctionTest(10, sum([2,3,5])));


//MULTIPLY ARRAY ELEMENTS
function multiply(mult){
    return mult.reduce((prod, elem)=> prod*elem,1);
}
console.log("Expected output of multiply[2,3,5] is 30  " + myFunctionTest(30, multiply([2, 3,5])));


//REVERSE STRING
function reverse(str){
    return str.split('').reduce((prev, next)=>next + prev);
}
console.log("Expected output of reverse(!dlroW olleH) is Hello World!  " + myFunctionTest("Hello World!", reverse("!dlroW olleH")));


//FIND LONGEST WORD AND RETURN THE LENGTH OF IT
function findLongestWord(word){
    let longestword=word.reduce(function(longest, currentWord){
        return currentWord.length > longest.length ? currentWord:longest;
    },"");
    return longestword.length;
   
}
console.log("Expected output of findLongestWord[Google, Yahoo, Tesla, Apple, Amazon, Microsoft] is 9  " + myFunctionTest(9, findLongestWord(["Google", "Yahoo", "Tesla", "Apple", "Amazon", "Microsoft"])));


//FILTER LONG WORDS -- IT TAKES AN ARRAY OF WORDS AND AN INTEGER i AND RETURNS THE ARRAY OF WORDS THAT ARE LONGER THAN i
function filterLongWords(word, i){
    return word.filter((w)=>w.length>i);
}
console.log("Expected output of filterLongWords['Google', 'Yahoo', 'Tesla', 'Apple', 'Amazon', 'Microsoft'] is ['Google', 'Amazon', 'Microsoft']  " + myFunctionTest(JSON.stringify(['Google', 'Amazon', 'Microsoft']), JSON.stringify(filterLongWords(['Google', 'Yahoo', 'Tesla', 'Apple', 'Amazon', 'Microsoft'], 5))));
