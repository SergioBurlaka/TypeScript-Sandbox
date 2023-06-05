// Лінк на туторіал
var a = 'Hello';
var b = a; // less specific 
var c = a; // more specific 
var world = 'some string';
var helloWorld = 'some string';
console.log('helloWorld', helloWorld);
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// проблема у тому що в такому випадку ts не бачить проблеми але насправді  в цьому випадку він повертає непрпавильний тип бо насправді тут число
var sum = addOrConcat(4, 9, 'add');
var resConcat = addOrConcat(4, 9, 'concat');
// the DOM
var img = document.getElementById('img');
var myImage = document.getElementById('#myId');
var nextImg = document.getElementById('#myId');
img.src;
myImage.src;
nextImg.src;
