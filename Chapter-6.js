///////////////////////////
// tsс Chapter-6.ts 
// команда для створення index.js щоб запустити через html документ  
//   <script src="Chapter-6.js"></script>
///////////////////
console.log('hello copyright ');
var year = document.getElementById('year');
var thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear;
    console.log(' thisYear 1', thisYear);
}
var changeColor = function (newColor) {
    var elem = document.getElementById("para");
    if (elem) {
        elem.style.color = newColor;
    }
};
console.log(' thisYear ', thisYear);
