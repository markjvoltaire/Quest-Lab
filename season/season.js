import season from '../Data/season-data.js';
import { getUser, findById, careerTrack } from '../utils.js';


const params = new URLSearchParams(window.location.search);

const seasonData = findById(season, params.get('id'));

console.log(seasonData);


const title = document.getElementById('season-title');
title.textContent = seasonData.title;
const img = document.getElementById('season-image');
img.src = `../players/${seasonData.image}`;
const description = document.getElementById('season-description');
description.textContent = seasonData.description;


const seasonChoices = document.getElementById('season-choices');
for (let choice of seasonData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;
    
    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    seasonChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose My Choice';
seasonChoices.append(button);


seasonChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(seasonData.choices, selectedRadio.value);
    
    // get userdata from local Storage (getUser)
    const user = getUser();
    // update the user (scoreQuest(choice, questId, user))
    //   update the gold, hp, completed
    careerTrack(choice, seasonData.id, user);
    // reset to localstorage (setUser)
    //setUser(user);
    
    // display the result
    // display a link to go back to the map
    const seasonDetails = document.getElementById('season-details');
    seasonDetails.classList.add('hidden');
    const seasonResults = document.getElementById('results');
    const seasonParagraph = document.createElement('p');
    seasonParagraph.textContent = careerTrack.result;
    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to Map';

    seasonResults.append(seasonParagraph, backLink);

    seasonResults.classList.remove('hidden');

});

