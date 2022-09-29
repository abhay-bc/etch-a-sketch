const container = document.querySelector('.container');
let child;
let darkcount = 0;

window.onload = ()=> {
    newlayout();
}

function bgWhite() {
    for(let i = 0; i < child.length; i++) {
        child[i].style['background-color'] =  'white';
    }
}

function removelayout() {
    for(let i = 0; i < child.length; i++) {
        container.removeChild(child[i]);
    }
}

function newSize() {
    let square = prompt('Number of square (range 64 to 100)');
    let val = parseInt(square);
    removelayout();
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
            e.target.style['background-color'] = randColor();
        });
    }     
    child = document.querySelectorAll('.sq-div');
}

function randColor(){
    let color = `rgb(${darkness(darkcount)}, ${darkness(darkcount)}, ${darkness(darkcount)})`;
    if(darkcount >= 100) {
        darkcount = 0;
    }
    darkcount++;
    return color;
}

function darkness(count) {
    let remainder = count % 10;
    remainder++;

    let num = 100 - (remainder * 10);

    let result = num * 2.55;
    result = Math.floor(result);
    return result;
}