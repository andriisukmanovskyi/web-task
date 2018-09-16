// task_1.1
function truncate(str, maxLength) {
    return str.slice(0, maxLength) + "...";
}
console.log("task 1.1\n" + truncate("andriy sukmanovskyi", 10));

// task_1.2
function findLetterAmout(str, letter) {
    var counter = 0;
    var startIndex = str.indexOf(letter);
    while (startIndex >= 0) {
        startIndex = str.indexOf(letter, startIndex + 1);
        counter++;
    }
    return counter;
}
console.log("task 1.2\n" + findLetterAmout("Назва Львів дана місту на честь князя Лева Даниловича, сина засновника Львова Данила Галицького.", "а"));

// task_1.3  given word should be deleted only when it is a single unit of sentense
function filterStr(str) {
    var newStr = str.replace(/[^a-zA-Z]polityka[^a-zA-Z]/g, " ");
    return newStr.replace(/[^a-zA-Z]xxxx[^a-zA-Z]/g, " ");
}
console.log("task 1.3\n" + filterStr("sdjf s; sd politykaxxxx das polityka xxxx asd politykanb"));

// task_1.4
function filterStrOnlyNumbers(str) {
    return str.replace(/[^0-9]/g, "");
}
console.log("task 1.4\n" + filterStrOnlyNumbers("sdjf123 2134s; sd4 politykaxxxx das p23olityka xxxx asd 2poli1tykanb"));