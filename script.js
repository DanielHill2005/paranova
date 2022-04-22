var timeLeft = 30; //defines all the variables
var oldMan = 0;
const story = { //holds the entire story
    one: 
    {
        text: `tavern `,  //main text
        oldManText: '',  //optional text
        variable: 0, //holds what variables will be changed         
        choices: [
            [`two`,`outside`],
            [`three`,`dungeon`],
            [`four`,`castle`]
        ], //holds all the choices
        time: 0 //holds how much time is subtracted to get to this choice
    },
    two: 
    {
        text: `outside `,
        oldManText: '', 
        variable: 0,               
        choices: [
            [`three`,`dungeon`],
            [`four`,`castle`],
        ],
        time:1
    }, 
    three: 
    {
        text: `dungeon `,
        oldManText: '',
        variable: ['oldMan', 1],
        choices: [
            [`four`,`castle`],
        ],
        time:2
    },
    four:
    {
        text: 'castle',
        oldManText: ' hi ',
        variable: 0,
        choices: 0,
        time: 3
    }
};

function storyLoop (number){ //all of the mechanics
    timeLeft -= story[number].time; //subtracts time 
    for(i = 0; i < story[number].variable.length; i+=2){ //updates all variables
        switch (story[number].variable[i]){ //uses the first value in a set to point to which variable to update
            case 'oldMan': 
                oldMan += story[number].variable[i+1]; //updates variable by the second value in a set
                break;
            default:
                alert('something broke lol, try restarting'); //debugging tool
        }
    }    
    document.getElementById('choiceMenu').innerHTML = ''; //clears all of the old choices
    let currentAddedText = ''; //holds the new text to be added
    if(oldMan == 0){ //adds the main text and optional text if needed
        currentAddedText = story[number].text;
    } else if (oldMan == 1) {
    currentAddedText = story[number].text + story[number].oldManText;
    }
    document.getElementById('storyText').textContent += `\n ${currentAddedText}`; //adds the text to the main story
    for(i = 0; i < story[number].choices.length; i++){ //loops for how many choices there are
        let btn = document.createElement('button'); //creates a button HTML tag inside of a variable
        btn.setAttribute('onclick', `storyLoop('${story[number].choices[i][0]}')`); //adds an onclick attribute to the button with the specific pointer needed
        btn.innerHTML = story[number].choices[i][1]; //adds the button text
        document.getElementById('choiceMenu').appendChild(btn); //adds the button to the UI
    }   
}