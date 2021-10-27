import { generateUser, setUser } from './utils.js';

// import functions and grab DOM elements
const userForm = document.getElementById('playerForm');
// initialize global state

// For Form Submit
userForm.addEventListener('submit', (e)=>{
  // So That A User Must Select something
    e.preventDefault();

  // Creating a Formdata Object
    const formData = new FormData(userForm);

    // Passing formData into our generate User Function
    const userObj = generateUser(formData);

    //saving it to local storage
    setUser(userObj);
    window.location.replace('./map');
  
});
