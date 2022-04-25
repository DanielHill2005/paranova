var timeLeft = 30; //defines all the variables
var oldMan = 0;
const story = { //holds the entire story
    one: {
        text: `     It’s the staryear 193-08793. The Milky Way galaxy’s unexplored mysteries didn’t last long after humanity finally discovered the secrets of space travel. I was born in an age of space pirates and war. With the entire galaxy conquered, humanity had nothing to do but fight over what we already had. All I ever wanted to do was be an old school explorer. But with this galaxy completely explored and the endless space between other galaxies untraversable, I was stuck as a bounty hunter.\n     I’m on a frigid ice planet. The howling wind means I can only use my eyes, but visibility is so low I barely have that. I creep forward while crouching until I’m over the ridge. There he is, Jean-Luc Pélissier. Wanted dead or alive for stealing and espionage. I throw a smoke bomb and run in with my thermal glasses. I knock him down and arrest him. He tries to run but that’s a mistake. Now he’s with the others I’ve taken down. I search his body and find an ancient relic.\n`,  //main text
        oldManText: '',  //optional text
        variable: 0, //holds what variables will be changed         
        choices: [
            [`two`,`Fight Them`],
            [`three`,`Join Them`],
            [`four`,`Ignore Them`]
        ], //holds all the choices
        time: 0 //holds how much time is subtracted to get to this choice
    },
    two: {
        text: `These hooligans need to be taught a lesson. I get up like I’m leaving but the moment I pass them I whip out my laser pistol and start firing. Once the smoke clears three of the four hooligans are dead and the last is begging for his life.`,
        oldManText: '', 
        variable: 0,               
        choices: [
            [`five`,``],
            [`six`,``]
        ],
        time:1
    }, 
    three: {
        text: `“Why don't you kick rocks and leave us alone” one of the hooligans says. 
        “Oh yeah you would want that, huh,” I say angrily. 
        As soon as I say that, the old man appears and says, “They’re not worth your time”`,
        oldManText: '',
        variable: ['oldMan', 1],
        choices: [
            [`seven`,``],
            [`eight`,``]
        ],
        time:2
    },
    four: {
        text: `Whatever. I’ll let it go. Not my problem. Or at least it wasn’t until the old man suddenly threw his glass at the wall near the hooligans and then kindly said, “Please keep it down.”
        The hooligans were shocked by his outburst and sudden kind attitude but one managed to squeak out, “What’s it matter to you?”
        With surprising speed the old man grabbed the more confident hooligan by his collar and then slammed him into the table.
        `,
        oldManText: ' hi ',
        variable: 0,
        choices: [
            [`nine`,``],
            [`ten`,``]
        ],
        time: 3
    },
    five: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    six: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    nine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ten: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eleven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    twelve: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirteen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fourteen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fifteen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixteen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventeen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eighteen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    nineteen: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    twenty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    twentyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    twentyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    twentyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    twentyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    twentyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    twentySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    twewntySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    twentyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    twentyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    thirty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },    
    thirtyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    thirtyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    forty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fortyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fifty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    fiftyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    sixtyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventy: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    seventyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eighty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyEighty: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    eightyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninety: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyFive: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetySix: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetySeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    ninetyNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    oneHundred: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    oneHundredOne: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    oneHundredTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    oneHundredThree: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
    oneHundredFour: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    },
};

function storyLoop (number){ //all of the mechanics
    timeLeft -= story[number].time; //subtracts time 
    document.getElementById(`clock`).innerHTML = timeLeft;
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