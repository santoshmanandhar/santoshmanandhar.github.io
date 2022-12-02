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
  

//MAX FUNCTION
function max(x, y){
    if(x>y){
        return x;
    }
    else
        return y;
} 
console.log("Expected output of max(5,6) is 6  " + myFunctionTest(6, max(5,6)));


//MAX OF THREE FUNCTION
function maxOfThree(x, y, z){
    if(x>y && x >z){
        return x;
        
    }
    else if(y>z){
       return y;
    }
    else{
        return z;
    }

}
console.log("Expected output of maxOfThree(2,100,90) is 100  " + myFunctionTest(100, maxOfThree(2, 100,90)));


//IS VOWEL FUNCTION
function isVowel(c){
    if(c=='a'|| c == 'e'|| c == 'i'|| c == 'o'|| c == 'u'){
        return true;
    }
    else
        return false;
}
console.log("Expected output of isVowel(u) is true" + myFunctionTest(true, isVowel('u')));


//SUM ARRAY ELEMENTS
function sum(add){
    let result = 0;
    for(let i = 0; i <add.length; i++){
        result = result + add[i];
    }
    return result;
}
console.log("Expected output of sum [2,3,5] is 10  " + myFunctionTest(10, sum([2,3,5])));


//MULTIPLY ARRAY ELEMENTS
function multiply(mult){
    let result = 1;
    for(let i = 0; i < mult.length; i++){
        result = result*mult[i];
    }
    return result;
}
console.log("Expected output of multiply[2,3,5] is 30  " + myFunctionTest(30, multiply([2, 3,5])));


//REVERSE STRING
function reverse(str){

    let result="";
    for(let i = str.length-1; i>= 0;i--){
        result = result+str[i];
    }
    return result;
}
console.log("Expected output of reverse(!dlroW olleH) is Hello World!  " + myFunctionTest("Hello World!", reverse("!dlroW olleH")));


//FIND LONGEST WORD AND RETURN THE LENGTH OF IT
function findLongestWord(word){
    let len1=0;
    for(let i = 0 ; i < word.length; i++){
         let len2 = word[i].length;

        if(len2 > len1){
            len1 = len2;
        }
    }
    return len1;
}
console.log("Expected output of findLongestWord[Google, Yahoo, Tesla, Apple, Amazon, Microsoft] is 9  " + myFunctionTest(9, findLongestWord(["Google", "Yahoo", "Tesla", "Apple", "Amazon", "Microsoft"])));


//FILTER LONG WORDS -- IT TAKES AN ARRAY OF WORDS AND AN INTEGER i AND RETURNS THE ARRAY OF WORDS THAT ARE LONGER THAN i
function filterLongWords(word, i){
    let arr = [];
    for(let j = 0 ; j < word.length ; j++)
    {
        if(word[j].length > i){
           arr.push(word[j]);
        }
    }
    return arr;
}
console.log("Expected output of filterLongWords['Google', 'Yahoo', 'Tesla', 'Apple', 'Amazon', 'Microsoft'] is ['Google', 'Amazon', 'Microsoft']  " + myFunctionTest(JSON.stringify(['Google', 'Amazon', 'Microsoft']), JSON.stringify(filterLongWords(['Google', 'Yahoo', 'Tesla', 'Apple', 'Amazon', 'Microsoft'], 5))));
