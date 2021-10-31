//import seasons from '../Data/season-data.js';
//import { getUser } from '../utils.js';

import season from '../Data/season-data.js';
import { getUser, seasonCompleted } from '../utils.js';

const maps = document.getElementById('maps');


let user = getUser();

if (user.happiness <= 0 || seasonCompleted(user)){
    window.location.replace('../gameover');
}



for (let seasons of season){
    if (user.completed[seasons.id]){
        
        displaySpan(seasons);
    } else {
        displayLink(seasons);
        
    }
}
function displaySpan(seasons){
    const span = document.createElement('span');
    span.textContent = seasons.title;
    maps.appendChild(span);
}


function displayLink(seasons){
    const a = document.createElement('a');
    a.classList.add('seasons');
    a.href = `../season/?id=${seasons.id}`;
    a.textContent = seasons.title;
    

    maps.appendChild(a);
}


