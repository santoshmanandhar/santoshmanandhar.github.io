Question: 

For each of the following, write at least one test case for each function.  They should all be nicely formatted. See the further instructions below, if you follow those instructions you can create an html page with your JavaScript in that page and then post it to your web site.

As always your assignment report should include a comment on how long it took, and describe something that you learned from the exercise or some problem you encountered, etc.

These are the functions you should write:

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

a) multiply each element by 10; 

b) return array with all elements equal to 3; 

c) return the product of all elements;

​After you finish, make sure all your functions are in ONE JS file .
How to make tests:

See the attached JSintroLab.html for an example of using the myFunctionTest
For each function you write you should show some test output.  E.g., you should have a series of console.log statements such as the following:
console.log("Expected output of max(20,10) is 10 and  " +
   myFunctionTest(10, function(){return max( 20, 10); ); 
the first argument to myFunctionTest should be the expected value for the test
the second argument to myFunctionTest should be an anonymous function expression containing a single return statement, which returns the result of the function call with the test arguments
myFunctionTest should return "TEST SUCCEEDED" or "TEST FAILED"
in addition to myFunctionTest you should use console.assert for the same inputs and expected values for each myFunctionTest
This is somewhat repetitive to myFunctionTest.  It is another means of testing and validating your code. 
For example, your output might look like the following:

