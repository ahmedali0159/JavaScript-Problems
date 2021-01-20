function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++);{
    var char = str[i];
    reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Alien bhai brother";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodBlog = reverseString("ki khawa jay khuda lagse");
console.log(foodBlog);