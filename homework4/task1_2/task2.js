function remember(str) {
    var arr = [];
    var newStr = str.slice(1, str.length);
    var element = str.charAt(0);
    var reg = new RegExp(element, 'g');
    while (newStr.length > 0) {
        if (newStr.indexOf(element) != -1){
            arr[arr.length] = element;
        }
        newStr = newStr.replace(reg, "");
        reg = new RegExp(element, 'g');
        element = newStr.charAt(0);
        newStr = newStr.slice(1, newStr.length);
    }
    return arr;
}
var incomingStr = "24kdsa da sdlad34477";
console.log("task 2.1\n" + incomingStr);
console.log(remember(incomingStr));