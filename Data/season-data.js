

const liverpool = {
    id: 'liverpool',
    title: 'Battle At Anfield',
    Map: {
        top: '89%',
        left: '50%'
    },

    image: 'liverpool.jpeg',
    description: ` It's a big game against one of the top teams in England......Liverpool
    the game is tied and we have a penalty kick to give a victory. Choose a direction to kick
    the ball to score.
    `,
    choices: [
        {
            id: 'Top Right',
            description: 'Kick to the right',
            result: ` During your kick you slipped and the ball hit the cross bar resulting in a miss
        the match ended in a draw.
        `,
            happiness: -40,
            gameCheck: 100,
        }, {
            id: 'Bottom Left',
            description: 'Kick to the bottom left',
            result: `GOOOOOOOOOOOOOAAAAAAAAAAAAAALLLLLLLLLL`,
            happiness: 100,
            gameCheck: 250,

        }, {

            id: 'Middle',
            description: 'Kick down the middle',
            result: `blockkkkkked`,
            happiness: -40,
            gameCheck: 50,
                
        }
    ]
};


const bayern = {
    id: 'bayern',
    title: 'Champions Leauge Showdown',
    Map: {
        top: '89%',
        left: '50%'
    },

    image: 'bayern.jpeg',
    description: ` You travel to Germany to face-off against the well stacked Bayern Munich squad. 
    Make this penalty to win the game.
    `,
    choices: [
        {
            id: 'Top Left',
            description: 'Kick to the top left',
            result: ` You missed and the balled hit a camera man.
        `,
            happiness: -50,
            gameCheck: -85,
        }, {
            id: 'Bottom Right',
            description: 'Kick to the bottom Right',
            result: `Blocked by the goal keeper!`,
            happiness: -20,
            gameCheck: -50,

        }, {

            id: 'Middle',
            description: 'Kick down the middle',
            result: `GOOOOOOOOOOOAAAAAAAAAAALLLLLL`,
            happiness: 80,
            gameCheck: 100,
                
        }
    ]
};


const barcelona = {
    id: 'barcelona',
    title: 'Shootout in spain',
    Map: {
        top: '89%',
        left: '50%'
    },

    image: 'barcelona.jpeg',
    description: ` This is a big and we travel to Spain to compete with high-class Barcelona FC Good luck
    `,
    choices: [
        {
            id: 'Bottom Left',
            description: 'Kick to the bottom left',
            result: ` GOOOOOOOOOOOOOAAAAAAAAALLLLLLLLLLLL!!!!!!!
        `,
            happiness: 100,
            gameCheck: 250,
        }, {
            id: 'Bottom Right',
            description: 'Kick to the bottom Right',
            result: `Blocked by the goal keeper!`,
            happiness: -20,
            gameCheck: -50,

        }, {

            id: 'Middle',
            description: 'Kick down the middle',
            result: `GOOOOOOOOOOOAAAAAAAAAAALLLLLL`,
            happiness: 80,
            gameCheck: 100,
                
        }
    ]
};









const seasons = [
    liverpool,
    bayern,
    barcelona,
];

export default seasons; 


