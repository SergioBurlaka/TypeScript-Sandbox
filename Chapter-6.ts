///////////////////////////

// tsс Chapter-6.ts 
// команда для створення index.js щоб запустити через html документ  

//   <script src="Chapter-6.js"></script>

///////////////////


console.log('hello copyright ')



const year = document.getElementById('year') as HTMLSpanElement

const thisYear: string = new Date().getFullYear().toString()

if (year) {
    year.setAttribute('datetime', thisYear)
    year.textContent = thisYear
    console.log(' thisYear 1', thisYear)
}

const changeColor = (newColor: string): void => {
    const elem: HTMLElement | null = document.getElementById("para");
    if (elem) {
        elem.style.color = newColor;
    }
}



console.log(' thisYear ', thisYear)



