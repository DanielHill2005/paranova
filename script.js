var modified = 0;
var modifier = 1;
const story = {
    one: 
    {
        text: `text1`,
        oldManText: '', 
        variable: [modified, modifier],               
        choices: [
            [`two`,`choice1`],
            [`three`,`choice2`],
            [`four`,`choice3`]
        ]
    },
    two: 
    {
        text: `text2`,
        oldManText: 'hi lol', 
        variable: 0,               
        choices: [
            [`three`,`choice 1`],
            [`four`,`choice 2`],
        ]
    },
    three: 
    {
        text: `text 3`,
        oldManText: 0,
        variable: 0,
        choices: [
            [`four`,`choice 1`],
        ]
    },
    four:
    {
        text: 'text 4',
        oldManText: 0,
        variable: 0,
        choices: 0,
    }
};
let choiceList = document.getElementById('choices'), choices = [];

function storyLoop (number){
        let currentAddedText = story[number].text + story[number].oldManText;
        document.getElementById('storyText').textContent += `\n ${currentAddedText}`;
        for(i = 0; i < story[number].variable.length; i+= 2){
            story[number].variable[i] += story[number].variable[(i+1)]
        }
}
function choicesAvailable (number){
    if (story[number].choices.length > 0) {
        for (let i = 0; i < story[number].choices.length; i++) {
            choiceList += `<button ${onclick=console.log("Hello")}>${story[number].choices[i][1]}</button>`;
        }
        return document.getElementById(`choices`).innerHTML += choiceList.replace(`[object HTMLElement]`, ``);
    } else {
        return document.getElementById(`choices`).innerHTML += `You've reached one of the various endings!\nPlay again to get another one!`;
    }
}
