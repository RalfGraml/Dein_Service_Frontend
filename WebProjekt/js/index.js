const elements = document.querySelectorAll('#to_hide');

const firstElement = elements[0]; // Das zweite Element (Index 1)
const secondElement = elements[1]; // Das zweite Element (Index 1)


function toggleVisible1() {//erstes Element
    firstElement.classList.toggle('not_visible');
    secondElement.classList.add('not_visible');
   
    
}
function toggleVisible2() {//zweites element
    secondElement.classList.toggle('not_visible');
    firstElement.classList.add('not_visible');
}



