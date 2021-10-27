//import seasons from '../Data/season-data.js';
//import { getUser } from '../utils.js';

import season from '../Data/season-data.js';
import { getUser } from '../utils.js';

const maps = document.getElementById('maps');
const player1 = getUser();



for (let seasons of season){
    if (player1.completed[season.id]){
        
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
    a.href = `../season/?id=${seasons.id}`;
    a.textContent = seasons.title;

    maps.appendChild(a);
}


console.log();