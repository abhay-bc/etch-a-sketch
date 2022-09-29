window.onload = ()=> {
    newlayout();
}

const container = document.querySelector('.container');

function rand(a) {
    let c = Math.floor(Math.random()*a)
    return c;
}

function randColor(){
    let color = `rgb(${rand(255)}, ${rand(255)}, ${rand(255) })`
    return color;
}

function removelayout() {
    let child = document.querySelectorAll('.sq-div')
    for(let i = 0; i < child.length; i++) {
        child[i].style['background-color'] =  'white';
    }
}

function newSize() {
    let square = prompt('Number of square (range 64 to 100)');
    let val = parseInt(square);
    if (isNaN(val)) {
        newlayout();
    } else {
        if (val < 16 || val > 100) {
            alert('Invalid Selection');
            newSize();
        } else {
            newlayout(val);
        }
    }
}

function newlayout(numOfsq=16) { 
    const contWidth = 600;
    let childWidth = contWidth / numOfsq;
    let squared = numOfsq * numOfsq;

    for(let i = 0; i < squared; i++) {
        let sqDiv = document.createElement('div');
            sqDiv.setAttribute('class', 'sq-div');
            sqDiv.style.height = `${childWidth}px`;
            sqDiv.style.width = `${childWidth}px`;

        container.appendChild(sqDiv);
        sqDiv.addEventListener('mouseover', (e)=>{
            e.target.style['background-color'] = 'black';
        });}  
}