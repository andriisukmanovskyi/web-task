var startNumber = 2, endNumber = 20;
var isPrime = true;
for (var i = startNumber; i <= endNumber; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("id").innerHTML += i + " ";
    }
    isPrime = true;
}