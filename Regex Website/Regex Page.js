hljs.highlightAll();
const header = document.querySelector('.header');
let string = 'Learn Regular Expressions (RegExp)';
let toShow = '';
let i=0;
const id = setInterval(function () {
    toShow+= string[i];
    i++;
    header.innerHTML = toShow;
    if(i==string.length){
         clearInterval(id);
    }
},100)

const background = document.querySelector('.animatedBall');
setInterval(()=>{
    background.style.background = randomColor();
},5000);
function randomColor() {
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;
    return `rgba(${r},${g},${b})`;
}