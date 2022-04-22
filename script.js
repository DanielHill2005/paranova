var timeLeft = 30;
var oldMan = 0;
const story = {
    one: 
    {
        text: `tavern `,
        oldManText: '', 
        variable: 0,               
        choices: [
            [`two`,`outside`],
            [`three`,`dungeon`],
            [`four`,`castle`]
        ],
        time: 0
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
let choiceList = document.getElementById('choices'), choices = [];

// const newButton = document.createElement("button");
function storyLoop (number){
    alert(timeLeft);
    document.getElementById('choiceMenu').innerHTML = '';
    let currentAddedText = '';
    if(oldMan == 0){
        currentAddedText = story[number].text;
    } else if (oldMan == 1) {
    currentAddedText = story[number].text + story[number].oldManText;
    }
    document.getElementById('storyText').textContent += `\n ${currentAddedText}`;
    for(i = 0; i < story[number].choices.length; i++){
        let btn = document.createElement('button');
        btn.setAttribute('onclick', `varUpdater('${story[number].choices[i][0]}'), storyLoop('${story[number].choices[i][0]}')`);
        btn.innerHTML = story[number].choices[i][1];
        document.getElementById('choiceMenu').appendChild(btn);
    }
    
}

function varUpdater (number) {
    timeLeft -= story[number].time;
    for(i = 0; i < story[number].variable.length; i+=2){
        switch (story[number].variable[i]){
            case 'oldMan':
                oldMan += story[number].variable[i+1];
                break;
            default:
                alert('something broke lol');
        }
    }
}