const story = {
    one: 
    {
        text: `text1`,
        oldManText: 0, 
        variable: ['name', 1],               
        choices: [
            [`two`,`choice 1`],
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
function storyLoop (number){
    console.log(story[number].text);
    document.getElementById('storyText').textContent += `\n ${story[number].text}`;
}