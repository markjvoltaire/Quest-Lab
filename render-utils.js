import { getUser } from './utils.js';

export function loadProfile(){

    const user = getUser();

    const img = document.getElementById('season-image');

    img.src = `../players/${user.player}.png`;

    const name = document.getElementById('user-name');






}

