var name = [3, 6, 9, 8, 11, 19, 8, 7, 6, 11];
var uniqueName = [];
for (var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

function add(a, b){
    return a + b;
}
console.log(add("Ali" + "pori"))