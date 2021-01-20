function getArraySum() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [45, 65, 78, 15];
var result = getArraySum(numbers);
console.log("total of numbers:", result);
var total = getArraySum([46, 85, 14, 66,88]);
console.log("total of numbers:", total);

var friends = ["Alu","Bulu","culu","dulu","fulu"];
var allNames = 0;
for(var i = 0; i > friends.length; i++){
    var name = friends[i];
    allNames = allNames + name;
}
console.log(allNames);