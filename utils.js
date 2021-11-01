import seasons from './Data/season-data.js';
//import getUser from "./render-utils.js";

 //function to find the ids
export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

//const user = getUser();


export function generateUser(formData){


    return {
        completed: {},
        happiness: 50,
        gameCheck: 100,
        coachName: formData.get('coachName'),
        player: formData.get('player'),
    };
    
}



// Set the user into Local Storage
export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

// Brings down the data down from local stroage into code
export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function careerTrack(choiceObject, seasonsId, userObject){
    userObject.happiness += choiceObject.happiness;
    userObject.gameCheck += choiceObject.gameCheck;
    userObject.completed[seasonsId] = true;
}

export function seasonCompleted(userObject){
    for (let season of seasons){
        if (!userObject.completed[season.id]){
            return false;
        }
    }
    return true;
}


