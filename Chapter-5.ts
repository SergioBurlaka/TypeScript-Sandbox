

// Лінк на туторіал

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=5s&ab_channel=DaveGray
// ts-node ./Chapter-5.ts


///

// команда для створення index.js щоб запустити через html документ  

//   <script src="Chapter-6.js"></script>

///////////////////






// the DOM

const img = document.getElementById('img') as HTMLImageElement
const myImage = document.getElementById('#myId') as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('#myId')

img.src
myImage.src
nextImg.src



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

