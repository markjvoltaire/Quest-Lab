//import seasons from '../Data/season-data.js';
//import { getUser } from '../utils.js';

import season from '../Data/season-data.js';
import { getUser } from '../utils.js';

const maps = document.getElementById('maps');
const player1 = getUser();



function displaySpan(season){
    const span = document.createElement('span');
    span.textContent = season.title;
    maps.appendChild(span);
}


function displayLink(season){
    const a = document.createElement('a');
    a.href = `../maps/?id=${season.id}`;
    a.textContent = season.title;

    maps.appendChild(a);
}







for (let seasons of season){
    if (player1.completed[season.id]){
        
        displaySpan(season);
    } else {
        displayLink(season);
        
    }
}
