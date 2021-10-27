

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
                
        }
    ]
};

const seasons = [
    liverpool,
    //bayern,
    //barcelona,
];

export default seasons; 


