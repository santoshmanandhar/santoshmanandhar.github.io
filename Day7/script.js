/**
1. Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
 */
String.prototype.filter = function(bannedWords) {
    let splitted = this.split(" ");
    return splitted
    .filter(x => !bannedWords.includes(x))
    .reduce((a,b) => a + " " + b);
}

/**
2. Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
 */
Array.prototype.bubbleSort = function() {
  
    for(let i = 0; i<this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if(this[i] < this[j]) {
                let temp = this[j];
                this[j] = this[i];
                this[i] = temp;
            }
        }
    }
    return this;
}

/**
3. Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns:
[teacher's name] is now teaching [subject]
 */

var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " year old.";
}

var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
 return (this.name + " just learned " + subject);
}
