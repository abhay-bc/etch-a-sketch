const container = document.querySelector('.container');

let sqDiv;
for(let i = 0; i < 256; i++) {
    sqDiv = document.createElement('div');
    sqDiv.setAttribute('class', 'sq-div');
    container.appendChild(sqDiv);
    sqDiv.addEventListener('mouseover', (e)=>{
        e.target.style['background-color'] = randColor();
    })
}

function rand(a) {
    let c = Math.floor(Math.random()*a)
    return c;
}

function randColor(){
    let color = `rgb(${rand(255)}, ${rand(255)}, ${rand(255) })`
    return color;
}

