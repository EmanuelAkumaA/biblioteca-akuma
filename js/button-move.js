function calculateDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

document.addEventListener('mousemove', (event) => {
const hoverMe = document.getElementById('hover_me');
const hoverMeRect = hoverMe.getBoundingClientRect();
const cursorX = event.clientX;
const cursorY = event.clientY;

const distance = calculateDistance(
    cursorX,
    cursorY,
    hoverMeRect.left + hoverMeRect.width / 2,
    hoverMeRect.top + hoverMeRect.height / 2
);

const threshold = 30;

if (distance <= threshold) {
    myFunction();
}
});


function inputChange(valueHere) {
    const element = document.getElementById('hover_me');
    if(valueHere.length === 10){
        element.style.left = '0%';
        element.style.backgroundColor = 'green';
        element.style.color = '#fff';
    }else{
        element.style.backgroundColor = 'initial';
        element.style.color = '#000';
    }
}


function myFunction() {

    const element = document.getElementById('hover_me');
    const computedStyle = window.getComputedStyle(element);
    const position = computedStyle.getPropertyValue('left');
    const password = document.getElementById('password');

    if(password.value.length !== 10){
        if (position === '0px') {
            element.style.left = '100%';
            
        } 
        if(position === '200px'){
            element.style.left = '0%';
        }
    }else{
        element.style.left = '0%';
        
    }
    
}