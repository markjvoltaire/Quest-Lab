// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should show the user objects', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        happiness: 50,
        gameCheck: 100,
        coachName: 'Mark',
        player: 'ronaldo'
    };


    const formData = new FormData();
    formData.set('coachName', 'Mark');
    formData.set('player', 'ronaldo');

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
