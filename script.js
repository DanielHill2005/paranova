var timeLeft = 31; //defines all the variables
var oldMan = 0;
var knowChief = 0;
var convinceLeader = 0;
var convinceProphet = 0;
var artifactInfoLeader = 0;
var artifactInfoProphet = 0;
var artifactDoor = 'closed';
var trueEnding = 0;
var storyArray = [];
var death = 0;
var puzzleStart = 0;
var wait = 0;
const story = { //holds the entire story
    one: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's the staryear 193-08793. The Milky Way galaxy's unexplored mysteries didn't last long after humanity finally discovered the secrets of space travel. I was born in an age of space pirates and war. With the entire galaxy conquered, humanity had nothing to do but fight over what we already had. All I ever wanted to do was be an old school explorer. But with this galaxy completely explored and the endless space between other galaxies untraversable, I was stuck as a bounty hunter.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm on a frigid ice planet. The howling wind means I can only use my eyes, but visibility is so low I barely have that. I creep forward while crouching until I'm over the ridge. There he is, Jean-Luc Pélissier. Wanted dead or alive for stealing and espionage. I throw a smoke bomb and run in with my thermal glasses. I knock him down and arrest him. He tries to run but that's a mistake. Now he's with the others I've taken down. I search his body and find an ancient relic.`,  //main text
        oldManText: '',  //optional text
        variable: 0, //holds what variables will be changed         
        choices: [
            [`two`,`Respect his efforts`],
            [`three`,`Insult him`],
            [`four`,`Ignore the body`]
        ], //holds all the choices
        time: 0 //holds how much time is subtracted to get to this choice
    },
    two: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I say "Good effort on the run, you almost lost me". I grab his identification chip and begin to go to my ship.`,
        oldManText: '', 
        variable: 0,               
        choices: [
            [`five`,`Continue`]
        ],
        time:0
    }, 
    three: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Ha! Look at this goofy goober of a criminal" I say insultingly. I grab his identification chip and head to my ship.`,
        oldManText: '',
        variable: 0,
        choices: [
            [`five`,`Continue`]
        ],
        time:0
    },
    four: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I look at him and sigh because I know I'm going to be doing this for a long time. I grab his identification chip and go to my ship.`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`five`,`Continue`]
        ],
        time: 0
    },
    five: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My ship's computer scans the relic but can't translate it. It looks like some sort of map. For a precious few minutes I had hope that I could finally live my dream as an explorer. 
        <br>Now I'm back at this old bar like always, drinking away my sorrows. I'm sitting in the corner examining the map. There's an old man sitting on the other side of the bar by himself and a group of obnoxious men that look to be my age but act like they've never left their home world before. I'm getting sick of these guys, what should I do?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`six`,`Fight the hooligans`],
            [`eleven`,`Join hooligans`],
            [`sixteen`,`Ignore hooligans`]
        ],
        time: 0
    },
    six: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These hooligans need to be taught a lesson. I get up like I'm leaving but the moment I pass them I whip out my laser pistol and start firing. Once the smoke clears three of the four hooligans are dead and the last is begging for his life.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seven`,`Let him go`],
            [`eight`,`Kill him`]
        ],
        time: 0
    },
    seven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I don't have the heart to kill a man begging for his life so I let him scramble out of the bar without a word. The old man looks shocked but then he says, "Thanks, I was about to do something about them myself, but you beat me to it. Let me buy you a drink."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`nine`,`Accept the drink`],
            [`ten`,`Decline the drink`]
        ],
        time: 0
    },
    eight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This guy disgusts me, I pull the trigger and he collapses on the floor. The old man looks scared but then says, "Thanks, I was about to do something about them myself, but you beat me to it. Let me buy you a drink."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`nine`,`Accept the drink`],
            [`ten`,`Decline the drink`]
        ],
        time: 0
    },
    nine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We sit and talk for another hour. I almost forget why I was even at the bar until he mentions he is an archaeologist. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Wait, so can you decipher old languages and codes or are you just the diggy kind?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He chuckles and says, "I knew you would ask that. I saw you staring at that map earlier. But to answer your question, yeah, a little of both. My skills are hardly ever useful now. Let me take a look."`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twentyThree`,`Continue`]
        ],
        time: 0
    },
    ten: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The old man looks a little dejected by the rejection but he takes it in stride and says, "Well at least let me help you."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He must have seen the confused look on my face because then he explains, "I saw you looking at that map earlier. I'm an archaeologist, let me see it."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyThree`,`Continue`]
        ],
        time: 0
    },
    eleven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Why don't you kick rocks and leave us alone" one of the hooligans says. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Oh yeah you would want that, huh," I say angrily. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As soon as I say that, the old man appears and says, "They're not worth your time".`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twelve`,`Keep trying`],
            [`fourteen`,`Give up`]
        ],
        time: 0
    },
    twelve: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Why should I even trust you, I don't even know you. I'm going to keep on trying"`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirteen`,`Continue`]
        ],
        time: 0
    },
    thirteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hey", I call out to the hooligans in desperation. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I thought we told you to kick rocks, now why don't you?", the hooligans say irritatedly. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Because I got no other place to go"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Oh boo freaking hoo, we told you two times already to leave, this is your last warning"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"But please"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"That was your last chance" they say angrily. They proceed to get up out of their chairs and jump me, I lose (of course) because I am unprepared and there are multiple of them.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyThree`,`Continue`]
        ],
        time: 0
    },
    fourteen: {
        text: `"Yeah you're probably right" I say`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fifteen`,`Continue`]
        ],
        time: 0
    },
    fifteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I should probably get going," I say.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Wait! I think I can help you," the old man says. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He must have seen the confused look on my face because then he explains, "I saw you looking at that map earlier. I'm an archaeologist, let me see it."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyOne`,`Continue`]
        ],
        time: 0
    },
    sixteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whatever. I'll let it go. Not my problem. Or at least it wasn't until the old man suddenly threw his glass at the wall near the hooligans and then kindly said, "Please keep it down."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The hooligans were shocked by his outburst and sudden kind attitude but one managed to squeak out, "What's it matter to you?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With surprising speed the old man grabbed the more confident hooligan by his collar and then slammed him into the table.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventeen`,`Confront the old man`],
            [`eighteen`,`Try to leave`]
        ],
        time: 0
    },
    seventeen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I walk up to the old man and try to break up the fight. When he lets go of the hooligan they all run out and the old man turns to me.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`nineteen`,`Continue`]
        ],
        time: 0
    },
    eighteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I should get out of here. I go for the door, but the hooligans push me out of the way to get away from the old man. He comes up to me and stops me from leaving.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twenty`,`Continue`]
        ],
        time: 0
    },
    nineteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Wait," the old man says, "Before you go, I might be able to help you." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He must see the confused look on my face because he explains, "I saw you looking at that map earlier. I'm an archaeologist, let me see it."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyOne`,`Continue`]
        ],
        time: 0
    },
    twenty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The old man stops me forcefully and grabs the map from me. I try to take it back but he stops me and explains, "I saw you reading this earlier. I'm an archaeologist, I can help you."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyOne`,`Continue`]
        ],
        time: 0
    },
    twentyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay this thing says that you must go to the jungle planet, Vortex" he says.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Vortex huh, okay then I guess I'm going to Vortex"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Yeah, I guess you are. Well listen I gotta leave soon, but good luck on your quest." The old man says, "and I'll send you a cipher for the language. I think I've gotten it pretty much figured out now."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Thanks! It means a lot" I say knowing I'm in for an adventure!`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twentySix`,`Continue`]
        ],
        time: 0
    },
    twentyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Thanks for your help, but I'm doing this alone. Sorry."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The old man tries to convince me but I shut him down and walk to my ship. When I'm taking off he sends me a hastily drawn cipher on a napkin through interlink. It could be useful if I ever need to translate more of the language.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentySix`,`Continue`]
        ],
        time: 0
    },
    twentyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay, let's see what we got here." he mutters.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well?" I say impatiently.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay so it appears that this thing that you're looking for is located on the jungle planet Vortex" he says.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay then, I guess I'm going to Vortex"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I guess WE are, because you wouldn't even know where to go without me,'' he says.`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twentyFour`,`Let him come with`],
            [`twentyTwo`,`Don't let him come with`]
        ],
        time: 0
    },    
    twentyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Alright, but we are leaving right now. Let's go!"`,
        oldManText: ``,
        variable: ["oldMan",1],       
        choices: [
            [`twentyFive`,`Continue`]
        ],
        time: 0
    },    
    twentyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We start to head to Vortex after quite a bit of traveling. When we're about to land, the old man notices that we're about to land inside of a trap. There are a bunch of what look like primitive locals waiting in ambush. They are probably hunting some kind of flying beast. So we fly away from that location and we spot some plausible locations according to the relic.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 0
    },    
    twentySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After a long month of traveling I finally made it. I'm at Vortex. The planet is covered in dense jungle with about half of the surface area being ocean. It reminds me of the old pictures of earth before humanity left it as a dry ball of radiated dust. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When I entered the system I got a worrying alert. My ship's computer flashed huge danger signals at me. I read the report in horror. This solar system orbits the star Areps. Areps is a star at the end of its lifetime. At the very end of its lifetime. My computer calculates that I have ${timeLeft} Prath Time Units left before the star blows up in a massive supernova. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's fine. I'll just be in and out, as long as nothing goes wrong. I land my ship in the first good spot I see so I can start looking soon. As soon as I step out of my ship I hear a loud guttural war cry from several humans running towards me. I'm too busy wondering why there were no logs of human civilization on this planet to notice the answer fly right by my face in the form of several ancient looking spears that deflect off my shield. They must be too primitive to be noticed. Still, it's strange, we should have detected any life on this planet at all.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My headset translates the warcry as, "FOR THE ARTIFACT!". It seems that they speak a different language than was written on the map.`,
        oldManText: ``,
        variable: ['trueEnding',1],       
        choices: [
            [`twentySeven`,`Spare them`],
            [`fortyFive`,`Kill them`],
            [`fortySix`,`Run away`]
        ],
        time: 1
    },    
    twentySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These are just primitive locals. There's no reason to kill them and they might know something about the artifact. I wait until they are close enough to me and then I incapacitate them with a gadget that wraps itself around the target and locks their joints together.`,
        oldManText: ``,
        variable: ['trueEnding',1],       
        choices: [
            [`twentyEight`,`Continue`]
        ],
        time: 1
    },    
    twentyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once I had them all rounded up I spoke in my own language but they heard it as theirs. "Who are you?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The obvious leader says "I am Khaa. You have bested me and my men, so by honor we are indebted to you. Thank you."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm taken aback by this very large man thanking me for beating him, but the brief curiosity fades away when I remember my time limit.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Earlier you yelled, ‘for the artifact', what does that mean?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Many generations ago, our people were visited by great people called the akias. It is said that they possessed actual magic beyond our greatest imaginations. Their time here was short but they left us with a gift. The artifact." While he is explaining, the other men chant some kind of prayer.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He is going to say more but I interrupt him by asking, "Where is it?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"No one knows."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This could have been easy, but of course not. It doesn't matter. I have plenty of time left. I'm about to leave but the men insist on joining me. Should I let them?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyNine`,`Yes`],
            [`fortyThree`,`No`]
        ],
        time: 1
    },    
    twentyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I need all the help I can get. Plus they might have some useful information even if they don't know exactly where the artifact is.`,
        oldManText: ``,
        variable: ['trueEnding',1],       
        choices: [
            [`thirty`,`Continue`]
        ],
        time: 1
    },    
    thirty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Khaa stops me before I start walking and says, "Let us take you to our home."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyOne`,`Yes`],
            [`thirtyTwo`,`No`]
        ],
        time: 1
    },    
    thirtyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fine, maybe I can learn something. I follow them through the dense jungle until I come upon a great city. Houses and other buildings are built into the stone and the mountains. Some of the city seems to have been carved out of the ground, almost like the city is the natural geography. There were people bustling around everywhere. I would guess a total of a couple hundred people live here. I followed the squad into the city. Now that we are in the city they leave without a word. I really don't understand this culture. What about their debt?`,
        oldManText: ``,
        variable: ['trueEnding',1],       
        choices: [
            [`sixtyTwo`,`Continue`]
        ],
        time: 1
    },
    thirtyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I don't have time for that. There's only so much time left. I need to get the artifact and get out of here.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyThree`,`Continue`]
        ],
        time: 1
    },
    thirtyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Alright where should I go?", I ask myself. A few locations stand out: this ancient looking cave, a volcano, and a whole jungle. Although I could look for the civilization that lives here and try to save them from their doom. I listed the options to my new squad but they had some problems with my assessment.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"You must not go to the Volcano," Khaa explains, "There is a beast there, and nothing else. We have made many expeditions into that hell hole to mine the volcanic rock, but they have always been dangerous and we have found nothing else."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fine, but if I find out that the artifact is actually there I'll throw you into that beast myself."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyFour`,`Look in the cave`],
            [`thirtyEight`,`Look in the jungle`],
            [`sixtyTwo`,`Search for the civilization`]
        ],
        time: 1
    },
    thirtyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As I went into the cave, something in my head shouts "Get out!", in an evil spirit voice. I think nothing of it and proceed to work my way through the cave to come across potentially my hardest battle ever. "Okay calm down. Calm down.", I whisper to myself. I was up against a beast with three glowing red eyes, with the horns of a bull and a wooly mammoth, the body of a lion, and razor sharp teeth stretching three rows back. So I knew I only had two options. Fight and die to this beast. Or try to run and possibly die from the beast.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyFive`,`Fight`],
            [`fortyTwo`,`Run`]
        ],
        time: 1
    },
    thirtyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So I know I have to fight wisely. Either I draw my chain sword and activate its fire ability or draw my blasters with my rocket boots. If I choose my sword I will have to fight up close but if I choose my blasters I will have to fight from a distance.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtySix`,`Fight with chain sword with fire ability`],
            [`thirtySeven`,`Fight with rocket boots`]
        ],
        time: 1
    },
    thirtySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I draw my sword and get into a fierce fight with this beast. I activate the swords' fire ability which does some damage but not enough to get the beast to yield. I attacked and attacked but after a long and tiring battle with every strike I blow to the beast, it damages my armor with its rows of teeth and grueling hits till it no longer protects me. My armor took its final blow and broke, meaning I had to make every strike worth it. I grab the sword tightly and charge at the beast, raining down strikes on its back and trying to hit its head, but the beast waits for the best opportunity and pierces my chest plate and stabs its horn into my heart. I had just lost the most important fight in my life, as it was to get this artifact and for my life.`,
        oldManText: ``,
        variable: ['death', 1],       
        choices: [
        ],
        time: 1
    },
    thirtySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I activate my rocket boots and draw my blasters. I charge towards the beast and it charges back at me, but I have no intention to get too close to the beast so before it hits me I launch myself into the air and send down loads of bullets from my blasters. These to my advantage pierced through its thick scales. After a long fight of wearing out the beast's energy and scales, I'm able to strike the final blow with my blaster in hand and my rocket boots activated. I launch into the air and as I'm descending I shoot the beast dead.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyTwo`,`Continue`]
        ],
        time: 1
    },
    thirtyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I begin my search for the artifact in this never ending jungle. This jungle is dense, consists of sky high trees and is rich in life. I manage to maneuver through the dense jungle on a discrete path made by someone or something, which is barely visible. Eventually I stumble across something that looks promising. I find what looks to be eight boulders that form a circle with each boulder being equidistant to the ones next to it. But in the middle there is a large rafflesia. So I begin to walk forward and to the center. I touch it and as soon as I do I hear a rumble. I look around and draw my chain sword. This rumble then turns into a voice and says in an extremely loud and deep voice "Why are you here?". 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am shocked and ask "Who said that?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then the boulders roll and transform into equally large golems. I know I have two options, which are to fight or run.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyNine`,`Fight`],
            [`fortyTwo`,`Run`]
        ],
        time: 1
    },
    thirtyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I think to myself that I have to fight in order to escape this. I say "I'm just here to find an artifact." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Artifact? That doesn't answer my question on why you're here", the largest golem says.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I gulp and say "Well that's why I'm here, for an artifact". 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"So you've come to steal, punishable of… death!" the main golem says angrily. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I know they too are going to fight. I have two options: fighting with my explosive round blasters or my lightning sword.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`forty`,`Fight with explosive round blasters`],
            [`fortyOne`,`Fight with lightning sword`]
        ],
        time: 1
    },
    forty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I grab my blasters from the holster and  get a little bit of distance. They all move towards me like how a gorilla crawls, I shoot at them and manage to strike two of them. They look back at their knocked down friends and now the six left golems all get angry and charge at me. I use the surrounding trees to my advantage, climbing them and going from tree to tree to be stealthy. From the trees I manage to take out many of the golems and only have the main golem left, the strongest and biggest golem there. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The golem says "You think those trees are in your favor, hiding in the shadows? I am the shadows, forged from fire and stone, being kept away from anyone and anything else alive."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I shoot my blaster at his feet from the trees and quickly rush down to the ground. I sneak up behind the golem and say "If you're the shadows then you would know all about them, then how come I'm behind you?" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The golem smirks and says "Take the shot, you deserve it." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Really? That's how this is going to go?" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"No!" the golem says as it quickly backhands me. This fight is going to be heavy for my body so I need to make quick decisions. We begin to fight and with my rocket boots I travel around it and begin to unload every last bullet I have, causing a really large explosion like how a nuke had just gone off. As the explosion finishes, I look and the golem is down. It says "Well, I guess this is the end of the line for me". We both nod at each other as a sign of respect for each other in the fight.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyTwo`,`Continue`]
        ],
        time: 1
    },
    fortyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I power on my rocket boots and quickly draw my sword. I grab the sword knowing that I am going to have a long and grueling fight. The golems charge at me while I am in the middle of all of them. They begin to attack me as I point my sword towards the air and summon lightning from the sky, causing an explosion pushing them all back. I am constantly moving erratically to avoid being hit but some of the time I'm not fast enough to dodge the hits. My armor starts to fully diminish, to the point where it is fully coming off of my body in scraps. All my strikes with the lightning aren't doing as much damage as I had hoped and I am quickly running out of time to get the artifact and leave. I see a final chance with the lightning by bringing the largest lightning bolt I've ever produced. So I point my sword to the sky and before I could send it to the main golem, I am struck by the golem with enough force that the sword falls out of my hand. The main golem catches it and points it at me, pushing it through my chest. Before I know it the largest lightning bolt I've ever seen strikes me. Once the lightning goes away I can't even speak. I just simply look at the main golem and nod out of respect for the fight. The golem nods back and simply says "Good fight, and goodbye."`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    fortyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Where should I be looking?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyFour`,`Look in the cave`],
            [`thirtyEight`,`Look in the jungle`],
            [`sixtyTwo`,`Search for the civilization`]
        ],
        time: 1
    },
    fortyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I don't need these primitives. They'd just slow me down. I power on my rocket boots and fly away before they have a chance to stop me.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 1
    },
    fortyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Alright where should I go?" I ask myself looking at a few locations: this ancient looking cave, a volcano, and a whole jungle. Although I can also look for the civilization that lives here and try to save them from their doom.`,
        oldManText: `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay what's the relic say?" I ask the old man. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Not sure, it just says what it looks like and what planets it's on." the old man says shockingly. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay well we've gotta go through the locations."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well we have a few options: that ancient looking cave, the volcano, or the whole jungle."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well great, any other options," I say sarcastically. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well if we were about to enter a trap, that means there must be a civilization somewhere, and they can help us," he answered, "But hey, I have to tell you something, this star is going to die." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"What? Seriously! This star, Areps?" I am horrified. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Yeah, when we were approaching I noticed something was off about it and it began to click in my mind that Areps is going to become a supernova," he says, "It's bad. By my calculations we have ${timeLeft} Prath Time Units before we are obliterated."`,
        variable: 0,       
        choices: [
            [`fortySeven`,`Look in the cave`],
            [`fiftyOne`,`Look in the volcano`],
            [`fiftySix`,`Look in the jungle`],
            [`sixtyOne`,`Search for the civilization`]
        ],
        time: 1
    },
    fortyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I don't have time for this. I pull out my power gauntlets and pick up the spears they threw at me. I threw them back with more power than they could ever imagine. When none were left I started looking around for where I should go next.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 1
    },
    fortySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have no reason to fight these primitives. I kick my heels together to power on my rocket boots and fly away.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 1
    },
    fortySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As I went into the cave, something in my head shouts "Get out!", in an evil spirit voice. I think nothing of it and proceed to work my way through the cave to come across potentially my hardest battle ever. "Okay calm down. Calm down.", I whisper to myself. I was up against a beast with three glowing red eyes, with the horns of a bull and a wooly mammoth, the body of a lion, and razor sharp teeth stretching three rows back. So I knew I only had two options. Fight and die to this beast. Or try to run and possibly die from the beast.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyEight`,`Fight`],
            [`sixty`,`Run`]
        ],
        time: 1
    },
    fortyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So I know I have to fight wisely. Either I draw my chain sword and activate its fire ability or draw my blasters with my rocket boots. If I choose my sword I will have to fight up close but if I choose my blasters I will have to fight from a distance.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyNine`,`Fight with chain sword with fire ability`],
            [`fifty`,`Fight with blasters with rocket boots`]
        ],
        time: 1
    },
    fortyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I draw my sword and get into a fierce fight with this beast. I activate the swords' fire ability which does some damage but not enough to get the beast to yield. I attacked and attacked but after a long and tiring battle with every strike I blow to the beast, it damages my armor with its rows of teeth and grueling hits till it no longer protects me. My armor took its final blow and broke, meaning I had to make every strike worth it. I grab the sword tightly and charge at the beast, raining down strikes on its back and trying to hit its head, but the beast waits for the best opportunity and pierces my chest plate and stabs its horn into my heart. I had just lost the most important fight in my life, as it was to get this artifact and for my life.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    fifty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I activate my rocket boots and draw my blasters. I charge towards the beast and it charges back at me, but I have no intention to get too close to the beast so before it hits me I launch myself into the air and send down loads of bullets from my blasters. These to my advantage pierced through its thick scales. After a long fight of wearing out the beast's energy and scales, I'm able to strike the final blow with my blaster in hand and my rocket boots activated. I launch into the air and as I'm descending I shoot the beast dead.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 1
    },
    fiftyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I begin searching in and around the volcano. I know I'm in for a test of my abilities. With the heat I have to act fast because if I mess up I will die. On my journey I stumble across a demon with fiery eyes and skin of scorching red hot rock. It is able to grow to whatever size the lava would let it, and wears a crown. I have to speak wisely and concisely, it's apparently royalty. This demon rises from the lava and says "Who are you and why are you here?" I say that I am just looking for an artifact, but he doesn't buy it so he slowly begins to approach. I put my hand to my weapon, but he notices and yells, "You dare challenge me?" in a frightening tone. I gulp and know I have two options, to fight or run.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftyTwo`,`Fight`],
            [`sixty`,`Run`]
        ],
        time: 1
    },
    fiftyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I understand that I have a few options of fighting: fighting with my ice blasters, a lightning sword, or my lightning arrows all paired with my rocket boots.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftyThree`,`Fight wth ice blasters and rocket boots`],
            [`fiftyFour`,`Fight with lightning sword and rocket boots`],
            [`fiftyFive`,`Fight with lightning arrows and rocket boots`]
        ],
        time: 1
    },
    fiftyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With my ice blasters I have to fight from a distance since it wouldn't be smart to fight up close. This demon is scorching hot and seems to be capable of throwing lava. I shoot at the demon and I begin to notice that it's not able to leave the lava. With that I fly around and around the circumference of the volcano using my rocket boots. As I fly around and around I keep on pummeling it with shots on its head eventually tilting the crown. The demon quickly readjusts the crown and gets extremely angry. So I know that the crown had something to do with its health. I only focus my shots at the crown, eventually knocking it off of it and the demon yells "No!" as it falls into the lava. I quickly fly towards the crown before it can hit the lava and activate the demon again. I fly back to the ground and inspect the crown to quickly realize that it won't help me in my quest for the artifact, so I left the volcano and tossed it back so I could preserve the long standing balance of the wildlife.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 1
    },
    fiftyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the sword I know I will have to fight extremely carefully since I would have to fight up close with the demon. I clench the sword in my hands and charge at it dodging all the lava that was being thrown at me. I fight it up close, moving upward starting from the chest. I see a clear shot to sink my blade into the head, so I take it. I get my boots to move me upward, but before I can get the blade into the head, I feel a burning sensation all over my body. My armor was no longer protecting me and the heat and lava that was thrown at me finally began to fully diminish my health. I'm dead before I could sink my blade into its head and defeat the demon.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    fiftyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I pull out my bow and get out my lightning arrows. I'm not sure how strong these things are, but hopefully it's enough. I shoot some arrows, but the demon blocks and dodges every arrow by throwing lava at them. I see an opening. I take a deep breath and pull the arrow back and align my shot. I let it go and its full power was unleashed, breaking the sound barrier with a loud boom. The arrow goes in, the sheer speed and power knocking the demon back and knocking its crown off its head. I quickly go for the crown thinking that it would help me in the quest. As I examine it I find it won't so I leave. As I do I throw the crown back into the lava to keep the natural balance of the wildlife.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 1
    },
    fiftySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I begin my search for the artifact in this never ending jungle. This jungle is dense, consists of sky high trees and is rich in life. I manage to maneuver through the dense jungle on a discrete path made by someone or something, which is barely visible. Eventually I stumble across something that looks promising. I find what looks to be eight boulders that form a circle with each boulder being equidistant to the ones next to it. But in the middle there is a large rafflesia. So I begin to walk forward and to the center. I touch it and as soon as I do I hear a rumble. I look around and draw my chain sword. This rumble then turns into a voice and says in an extremely loud and deep voice "Why are you here?". 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am shocked and ask "Who said that?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then the boulders roll and transform into equally large golems. I know I have two options, which are to fight or run.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftySeven`,`Fight`],
            [`sixty`,`Run`]
        ],
        time: 1
    },
    fiftySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I think to myself that I have to fight in order to escape this. I say "I'm just here to find an artifact." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Artifact? That doesn't answer my question on why you're here", the largest golem says.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I gulp and say "Well that's why I'm here, for an artifact". 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"So you've come to steal, punishable of… death!" the main golem says angrily. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I know they too are going to fight. I have two options: fighting with my explosive round blasters or my lightning sword.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftyEight`,`Fight with explosive round blasters`],
            [`fiftyNine`,`Fight with lightning sword`]
        ],
        time: 1
    },
    fiftyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I grab my blasters from the holster and  get a little bit of distance. They all move towards me like how a gorilla crawls, I shoot at them and manage to strike two of them. They look back at their knocked down friends and now the six left golems all get angry and charge at me. I use the surrounding trees to my advantage, climbing them and going from tree to tree to be stealthy. From the trees I manage to take out many of the golems and only have the main golem left, the strongest and biggest golem there. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The golem says "You think those trees are in your favor, hiding in the shadows? I am the shadows, forged from fire and stone, being kept away from anyone and anything else alive."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I shoot my blaster at his feet from the trees and quickly rush down to the ground. I sneak up behind the golem and say "If you're the shadows then you would know all about them, then how come I'm behind you?" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The golem smirks and says "Take the shot, you deserve it." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Really? That's how this is going to go?" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"No!" the golem says as it quickly backhands me. This fight is going to be heavy for my body so I need to make quick decisions. We begin to fight and with my rocket boots I travel around it and begin to unload every last bullet I have, causing a really large explosion like how a nuke had just gone off. As the explosion finishes, I look and the golem is down. It says "Well, I guess this is the end of the line for me". We both nod at each other as a sign of respect for each other in the fight.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 1
    },
    fiftyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I power on my rocket boots and quickly draw my sword. I grab the sword knowing that I am going to have a long and grueling fight. The golems charge at me while I am in the middle of all of them. They begin to attack me as I point my sword towards the air and summon lightning from the sky, causing an explosion pushing them all back. I am constantly moving erratically to avoid being hit but some of the time I'm not fast enough to dodge the hits. My armor starts to fully diminish, to the point where it is fully coming off of my body in scraps. All my strikes with the lightning aren't doing as much damage as I had hoped and I am quickly running out of time to get the artifact and leave. I see a final chance with the lightning by bringing the largest lightning bolt I've ever produced. So I point my sword to the sky and before I could send it to the main golem, I am struck by the golem with enough force that the sword falls out of my hand. The main golem catches it and points it at me, pushing it through my chest. Before I know it the largest lightning bolt I've ever seen strikes me. Once the lightning goes away I can't even speak. I just simply look at the main golem and nod out of respect for the fight. The golem nods back and simply says "Good fight, and goodbye."`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 1
    },
    sixty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Where should I be looking?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortySeven`,`Look in the cave`],
            [`fiftyOne`,`Look in the volcano`],
            [`fiftySix`,`Look in the jungle`],
            [`sixtyOne`,`Search for the civilization`]
        ],
        time: 1
    },
    sixtyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Those locals I saw earlier must be a part of some civilization. Maybe I should look for that. I stumble through the jungle until I find evidence of a civilized people. It's a very faint trail that leads around the easiest paths on the dense jungle floor. I pick a direction and walk, following the path. Finally I move aside a big leaf and see it. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and other buildings are built into the stone and the mountains. Some of the city seems to have been carved out of the ground, almost like the city is the natural geography. There are people bustling around everywhere. I make my way in.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyTwo`,`Continue`]
        ],
        time: 1
    },
    sixtyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walking into the city I instantly draw attention. People don't draw their weapons at me but they do look ready to. I end up at the main square where I can see a couple different things. There is a huge structure that is most definitely the capital building. I'm sure I could find something good there. There is a path that leads into a very decorated building with beautiful stained glass windows that seems to be some kind of church. There's potential there, especially since these people seem to worship the artifact. I could also just talk to someone in these crowds and see what they know. Okay I need to find information on the civilization or the artifact.`,
        oldManText: `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Woah" The old man says while looking around, "This is literally an archaeologist's dream."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I can't believe that all this went undiscovered." I say.`,
        variable: 0,
        choices: [
            [`sixtyThree`,`Talk to the leader`],
            [`seventyFour`,`Talk to the prophet`],
            [`eightySeven`,`Talk to civilian`]
        ],
        time: 1
    },
    sixtyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I maneuver throughout the city and see a large building like some sort of council building. I walk up the grand steps and get greeted by a bunch of kids. I greet them and walk into the building and in an instant everyone looks at me and the chatter comes a minimum. Whispers are the only sound in the room. Then after a few seconds I walk forward and people look at someone in the distance. I look at this person who I thought was just some guy with a little authority. After overhearing people's whispers, I figured out it was the leader of the city. I know this conversation will be spoken about so I decide to speak highly formal and respectful. I walk up to the leader, shake his hand, and greet him. I ask him about what he is and what he does for the city. He responds with discipline and respect to me, even though he just barely met me.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyFour`,`Ask about artifact`],
            [`sixtyFive`,`Ask about civilization`],
            [`sixtySix`,`Tell him about star`]
        ],
        time: 1
    },
    sixtyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I ask "Do you know about the artifact or where it may be?" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"No, I don't know its whereabouts, though I do know something about it," he says. I asked him to explain what he knows about the artifact. He says "I do know of this one saying that may help you. ‘Praecipio tibi, ut ne desinas.'" I ask what it means. He says "It's an ancient saying passed down from leader to leader. I have no idea what it means."`,
        oldManText: ``,
        variable: ['artifactInfoLeader',1],       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 1
    },
    sixtyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I ask about their civilization. He laughs and invites me to sit.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Our ‘civilization' is not much more than a large family where everyone has a part to play. The jungle forces us to stay together to survive. Only the strong survive. That's how I was elected. When the previous leader dies, candidates come together and have a tournament where we fight till the other surrenders. I am the strongest fighter in the tribe. But only by a little bit," He says with a chuckle, "I almost lost the fight because of the shock of finding out that the final opponent was my wife!"`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 1
    },
    sixtySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hey there's something you should know," I say.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"What is it?" he asks in a concerned tone.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"The star it's going to explode, meaning it's going to become a supernova," I tell him.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Really? Why don't I believe you?"`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtySeven`,`Be honest`],
            [`sixtyEight`,`Try to trick him into believing you`]
        ],
        time: 1
    },
    sixtySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Look, I'm being completely honest with you. I'm not from here, which you could probably guess. I have advanced technology that allows me to see that the star is at the end of its life cycle. That means it's going to explode in a massive supernova." I tell him.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Look I told people to not mess or lie to me, now skedaddle and leave me alone."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Look I'm telling the truth, you're only failing yourself!" I plead.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hah, okay" he says sarcastically, "Now leave me alone and stop lying to me."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Alright, alright. I'll skedaddle and leave you alone," I say.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dang, maybe I can learn something about this guy from someone who knows him, then I can try to convince him again later.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 1
    },
    sixtyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I'm serious. The star's going to blow" I say.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Still not believing it," he responds.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I know I won't get to him with the truth so I make up a lie, "The prophet said so!" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He freezes and just says "You talked to the prophet?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Yeah, he was the one that told me the sun is going to explode" I say.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"You know how I know you're lying? It's because he discloses all of his teachings to me so that I am always in the know," he says, "Now why don't you skedaddle and leave me alone!"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Alright fine I'll leave you alone" I say.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dang, maybe I can learn something about this guy from someone who knows him, then I can try to convince him again later.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 1
    },
    sixtyNine: {//this onr is locked unless you talk to civilian
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Look I don't know why you don't believe me, but if you're that stubborn, I guess I'll have to show you through a fight," I say nervously.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A fight aye?" he says with a smirk.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Yeah, a fight to convince you that what I'm saying is true," I add.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay fine. Your fight is accepted," he says eagerly.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He grabs two swords from the wall that form an x shape, and hands me one of them. He then takes me down the hall into a massive room with a big pit.`,
        oldManText: ``,
        variable: ['trueEnding',1],       
        choices: [
            [`seventy`,`Fight offensively`],
            [`seventyOne`,`Fight defensively`],
            [`seventyTwo`,`Try to cheat in the fight`]
        ],
        time: 1
    },
    seventy: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So we begin our fight with the swords pointed at each other. I grip the sword strongly and charge at him. He quickly dodges the strike attacks decisively. He slices my shoulder and says "watch all your angles." I quickly get up and swing and swing but he counters all of my attacks. I get closer to him but he quickly hits his sword against mine, parrying the blow, and in one swift motion he manages to cut me. We continue fighting for a little while until we both feel exhausted. He grips his sword hard and does his finishing strike where in one swift motion hits my hand. It tosses my sword into the air and he catches it. Then leading to him having two swords with me left defenseless. Before I know it I lose and I'm dead, for nothing and with no artifact.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    seventyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I grab the sword and grip it tight. I can tell from his stance that he is going to be aggressive, so I decide to stay on the defense. I weave and counter every strike that he attempts. A little into the fight he doesn't know what to do when I fight defensively so I just have to fight defensively the whole time. After a little while of fighting we both get fatigued. If I want to survive I will have to make my next play extremely well. So because I don't have the energy to fight for too much longer, I grip my sword tighter than I already am. I roll close to him and hit his hand so he loses his grip and then I hit his sword, launching it into the air. Before he can grab it, I manage to get behind him and get my sword against his neck. As the sword is coming down I grab it, ultimately having both swords against his neck. I then say, "Do you want this to be the end or do you want to believe me?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He sighs and says, "Okay fine, now I'll believe you." I release my swords and we both get up.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hey, good fight," he says as he nods to me.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Thank you," I say nodding to him out of respect for one another.`,
        oldManText: ``,
        variable: ['convinceLeader',1],       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 1
    },
    seventyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I grab the sword and some smoke bombs. These work in a similar way to poppers, but produce a lot of smoke. I grab a popper, but begin fighting only with my sword. The fight was challenging and fun, but I know if I lost I will most likely be dead. I throw the popper to the floor, surprising him. I manage to hit him until he's bloodied. I fight only with my sword for a little bit. We are both getting tired and so I know I will have the element of surprise on him, but he is just waiting for me to throw another bomb. I throw one down and attack him but in a split second he disappears. I grip my sword and start swinging toward his direction, but he uses the smoke to his advantage and sneaks up behind me. He strikes the final blow. He walks in front of me and says, "Good fight kid," as he nods out of respect. Before I can actually convince him, he strikes me dead.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    seventyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What do I do next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyFour`,`Ask about artifact`],
            [`sixtyFive`,`Ask about civilization`],
            [`sixtySix`,`Tell him about star`],
            [`ninetySix`,`Reenter main city`]
        ],
        time: 1
    },
    seventyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I walk along the path to the church-like building. It's a tall tower with a bell at the top. Inside there is a small podium in the center where a man is standing and talking to the various people around him. The room could comfortably fit around 50 people with extra in some galleries above the man. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As I walk in he is talking. He seems to be reciting some kind of scripture saying "-does that, will the hero have completed his true quest." It seems to be some kind of conclusion because as soon as he says that, the quiet room becomes loud with the buzz of conversation about whatever he was talking about before I came in. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once enough people leave I feel comfortable enough to go up and ask some questions. At this point it becomes obvious that he is blind.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyFive`,`Ask about the artifact`],
            [`seventyNine`,`Ask about the civilization`],
            [`eighty`,`Tell him about the star`]
        ],
        time: 1
    },
    seventyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Excuse me sir, can I ask you a question?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Yes, of course, my child." He says.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"The artifact that everyone worships, where is it?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"That's not something for the average person to know."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well I'm not the average person."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Then who are you?"`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventySix`,`A curious citizen`],
            [`seventySeven`,`Tell the truth`],
            [`seventyEight`,`Beat it out of him`]
        ],
        time: 1
    },
    seventySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I'm just a normal guy wanting to get closer to my faith." I say hopefully.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"You must have duties to attend to, please leave."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 1
    },
    seventySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I'm not from here. I am a human from a society far more advanced than yours. I want to find the artifact to-"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was going to say more because I thought he would want more convincing but he cut me off by saying, "It's in the ocean about just off the nearest coast to this city. You will be able to find it easily because it's in the eye of a massive whirlpool. I would not go now though, there is a beast defending the entrance that can only be calmed by the special words only the chief knows. In fact, this beast is the thing generating the whirlpool"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm kind of shocked for a moment at all that information but I eventually manage to say, "Why would you tell me all this so easily?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"That I can't tell you, but soon you will know." He says before leaving me alone in the room.`,
        oldManText: ``,
        variable: ['artifactInfoProphet',1],       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 1
    },
    seventyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I start to grab him and hit him but before I can do anything, a dozen guards jump out of hiding places I didn't know were there. They impale me with spears before I know what happened. As death slowly comes over me the last thing I hear is the prophet saying, "So close, but you weren't him."`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    seventyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Can you tell me some of the history of this place?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He looks kind of confused at why I would ask that question but continues on anyway, "A long time ago the akias visited our ancestors. The akias weren't like us. They are some kind of extremely advanced alien species. Some say they even had magic."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I still don't really believe this akias story. As much as we have looked, humanity has never found another advanced race like we always hoped. Most people have given up on the idea by now. I could sit here and ponder the existence of aliens for as long as I want, but I have a big blue deadline so I need to get back on topic.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This stuff about aliens is all very interesting, but what does all this have to do with the artifact you people worship?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"When the akias people left us, they took all of their influence on this planet with them. Except for two things. They left an artifact and a prophecy connected to it-"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prophecy? That's exactly what I need. I stop him and say, "Tell me the prophecy."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Ok, fine, it goes like this. ‘Upon the dawn of a dying star, the last rays will shine on our hero. The hero casts a single shadow, before others join him. Once the shadows join together the hero will be complete. The hero will use the galaxy's last prize to save the people of the dying star. Only when the hero does that, will the hero have completed his true quest.'"`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 1
    },
    eighty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These people deserve to know what's about to happen. I might even be able to help them. I would have to give up finding the artifact but I can at least try.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I go up to him and I say "Excuse me, I have something I need to tell you." Before I can say anything else he starts talking to me, well, more like he began talking at me. He's rambling on about me and their religion and whatever else.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyOne`,`Listen and pretend to be a normal citizen`],
            [`eightyTwo`,`Listen and bring it up`],
            [`eightyFour`,`Tell him to shut up and listen`]
        ],
        time: 1
    },
    eightyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once he's done I say, "Something really bad is about to happen. You need to hear about it. Areps is about to blow!"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He looks a bit suspicious but then asks, "What is Areps?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm an idiot. Of course they don't use the imperial name for the star. "Uhhh, that's what I call our star." I tried to explain.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Ohhh… run along now," He said dismissively.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That was dumb, I have to try something else.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyThree`,`Continue`]
        ],
        time: 1
    },
    eightyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once he's finished I say, "Look, something really bad is about to happen. Your star is about to go supernova. That means explode. I can help you."He laughs and says, "What did I tell you about pranking your elders, Tair."As much as I tried to convince him, he just kept thinking it was a prank. I'll have to try something else later.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyThree`,`Continue`]
        ],
        time: 1
    },
    eightyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He's blind so if I leave the church and come back later I can try again. I feel a little bad for exploiting that but you do what you have to.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 1
    },
    eightyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before he can start I cut him off and say, "Shut up! This is more important! The sun is about to EXPLODE!" At first he looks shocked at the disrespect but it got his attention so he listens when I say, "I can help your people. Your star is at the end of its lifetime. You might have noticed it's gotten bigger and redder, and down here it's gotten hotter. We don't have any time left. My ship is probably big enough to fit your entire population inside. You need to tell your people to follow me."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyFive`,`Continue`]
        ],
        time: 1
    },
    eightyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He looks at me with almost a sense of satisfaction. It's almost like he's proud of me. Strange. 
        Eventually he says, "Alright, I'll let everyone know. Thank you."`,
        oldManText: ``,
        variable: ['convinceProphet',1,'trueEnding',1],
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 1
    },
    eightySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What do I do next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyFive`,`Ask about the artifact`],
            [`seventyNine`,`Ask about the civilization`],
            [`eighty`,`Tell him about the star`],
            [`ninetySix`,`Reenter main city`]
        ],
        time: 1
    },
    eightySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hey, can I speak with you?" I said to a random motherly looking woman. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Uhhh, sure?" She answered.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She looks a little put off by me but hopefully that doesn't stop her from giving me any info I can use.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyEight`,`Ask about the artifact`],
            [`eightyNine`,`Ask about the prophet`],
            [`ninety`,`Ask about the leader`]
        ],
        time: 1
    },
    eightyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What do you know about the artifact? I'm trying to find it." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"The artifact is a gift from the akias people who visited us long ago."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay yeah, but where is it?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I have no idea, I have never seen it. But we worship this thing, what do you intend to do with it once you find it?" She says accusingly.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyOne`,`Sell it`],
            [`ninetyTwo`,`Use it`],
            [`ninetyThree`,`Hide it`]
        ],
        time: 1
    },
    eightyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"What do you know about this prophet guy?" I ask."The prophet is a great man, not just some ‘guy'. They say his blindness gave him the ability to see the truth. But I guess if you wanted to pass yourself off as a local you could. I don't know if he would appreciate the dishonesty though."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 1
    },
    ninety: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Tell me about the big guy in the palace. What's the leader of you weirdos like?" I ask.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"What makes you think we are weirdos?! The leader could crush you with his pinky finger! He is the strongest out of all of us. But the only way to get him to change his mind is to beat it into him. He knows how to fight in many ways, but from what I hear he needs to get better at fighting against a defensive opponent. Good luck!" She says with a laugh.`,
        oldManText: ``,
        variable: ['knowChief', 1],       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 1
    },
    ninetyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I'm going to sell it to the highest bidder. It will make me rich and famous. The last great mystery solved by me. To be honest I really don't care about the thing." I say before I can stop myself.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She looks horrified and then slaps me and walks away without a word.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 1
    },
    ninetyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"When I find it I will study it and find out how to use it myself. I don't know what I'll do with it but I promise I will do something great." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She looks shocked. She must have got something special out of those two sentences because she acts like she made some great revelation. These people are so weird.`,
        oldManText: ``,
        variable: ['trueEnding',1],       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 1
    },
    ninetyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Once I find it I'm going to hide it to make sure it doesn't fall into the wrong hands."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She looks at me like I'm an idiot and says, "Don't you think it might be pretty well hidden here already?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I get flustered and say, "Shut up! I'll figure it out when I get there."`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 1
    },
    ninetyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What should I do next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyEight`,`Ask about the Artifact`],
            [`eightyNine`,`Ask about the prophet`],
            [`ninety`,`Ask about the leader`],
            [`ninetySix`,`Reenter main city`]
        ],
        time: 1
    },
    ninetyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I aboard my ship and begin to enter the location to get the artifact. Something about it feels off because I know I essentially have two choices: save the people or get the artifact. Do I go search for the artifact or save the people?`,
        oldManText: `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The old man says to me, "You know if you do this you are abandoning an entire civilization to die." "What would you have me do?" I ask
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well, the archaeologist in me wants to find and study this artifact, but the human in me wants to save the people. It's up to you."`,
        variable: 0,       
        choices: [
            [`ninetySix`,`No, reenter main city`],
            [`ninetySeven`,`Yes`]
        ],
        time: 1
    },
    ninetySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I reenter the main city. Where to next? Okay I need to find information on the civilization or the artifact.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyThree`,`Talk to the leader`],
            [`seventyFour`,`Talk to the prophet`],
            [`eightySeven`,`Talk to civilian`]
            //[`ninetyFive`,`Search for artifact?`] could possibly be locked, bring it up tmrw
            //[`oneHundredTwentySix`,`Save the people`] locked off until you've convinced both leader and prophet
        ],
        time: 1
    },
    ninetySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I finally have enough information to get the artifact. After looking at how much time I have left I know I have to hurry. I can hear the whirlpool before I can see it. It sounds like a thousand waves crashing against another thousand waves at the same time. Somehow all that noise isn't enough to cover up the sound of the monster breathing. I can literally see its slow breath heaving up and down. There was also a strange creaking noise that popped every once in a while. I assumed that it had something to do with how it generates the whirlpool.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once I was close enough I set my ship to stay idle 50 feet above the water. I can see all the way down the massive whirlpool into the beast's mouth. The whirlpool itself is probably 100s of feet across and about a 100 feet down. There was heavy mist in the air from the crashing waves and whatever else.I stepped out onto the deck and felt the cool mist. I thought it was refreshing until I realized it's probably more of that beast's saliva than anything else. I bellowed the words, "PRAECIPIO TIBI, UT NE DESINAS!"Somehow it heard me because suddenly the loud creaking from before turned into a light buzz as the raging whirlpool changed into a smooth tunnel. Apparently the monster can keep the water rotating at such a slow pace it almost looks frozen, all while the structural integrity of the tunnel remains intact. I went back into my ship and started the descent.`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`ninetyEight`,`Continue`]
        ],
        time: 1
    },
    ninetyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It quickly became obvious that there was a problem. At the bottom of the whirlpool I can see the entrance. Sealed. The door has text on it that matches the map I used to get here. I can use the cipher that the old man sent me. The handwriting is very different from what's on the engraving. Did that old fart actually know what he was talking about?\nℸ ̣ ⍑╎ᓭ       ℸ ̣ 7ᒲʖ      ∴╎ꖎꖎ      7!¡ᒷリ     7リ     ℸ ̣ ⍑ᒷ      ᒷ⍊ᒷ 7⎓       ℸ ̣ ⍑ᒷ       ⎓╎リᔑꖎ       ↸ᔑ||,     ʖ⚍ℸ ̣     ᓵꖎ7ᓭᒷ    ʖᒷ⎓7∷ᒷ リ╎⊣⍑ℸ ̣         ℸ ̣ ᔑꖌᒷᓭ       7⍊ᒷ∷`,
        oldManText: `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or I could just ask him. "Hey old man! Take a look at this," I yell over the sound of the water."You know I have a name," He says, sounding a little hurt, "It's Colmãn.""Alright, Colmãn, take a look at this."It only takes him a few seconds of looking at it for him to translate it back to me as, "This tomb will open on the eve of the final day, but close before night takes over." "That must mean tonight. With how much time is left I doubt the sun will rise again before it blows," I say."I think it should open right as we have ${timeLeft} Prath Time Units left," Colmãn says, "But we need to get in there right after because it will close in another 1 or 2 time units. Should we just wait here for it to open or try to go do something else before it opens?"`,
        variable: ['puzzleStart', 1],       
        choices: 0,
        time: 1
    },
    ninetyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I wait until something finally happens. The door rumbles open and I walk in.`,
        oldManText: ``,
        variable: ['wait', 1],       
        choices: [
            [`oneHundredTen`,`Continue`]
        ],
        time: 0
    },

    oneHundred: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So this means that tonight it will open. When I have x time units left should be right when this thing opens. But it will close soon after. Either I wait here or try to do something else real quick and come back.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyNine`,`Wait`],
            [`ninetySix`,`Go back to main city`]
        ],
        time: 1
    },
   
    oneHundredOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So this means that tonight it will open. When I have x time units left should be right when this thing opens. But it will close soon after. I get ready to hunker down and wait until I check my watch. No… What?! There's no way! I missed it. That explains the sound I heard earlier.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredFour`,`Blast my way in`],
            [`oneHundredFive`,`Go back to the people`],
            [`oneHundredSix`,`Give up`]
        ],
        time: 1
    },     
    oneHundredTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I fly down and see the door wide open. This was the spot that that huge beacon came from. I have to assume that all that noise was this door opening. I land and walk into the door.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTen`,`Continue`]
        ],
        time: 1
    },
    oneHundredThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It quickly became obvious that there was a problem. At the bottom of the whirlpool I can see the entrance. Sealed. The door has text on it that matches the map I used to get here. I can use the cipher that the old man sent me. The handwriting is very different from what's on the engraving. Did that old fart actually know what he was talking about?\nℸ ̣ ⍑╎ᓭ       ℸ ̣ 7ᒲʖ      ∴╎ꖎꖎ      7!¡ᒷリ     7リ     ℸ ̣ ⍑ᒷ      ᒷ⍊ᒷ 7⎓       ℸ ̣ ⍑ᒷ       ⎓╎リᔑꖎ       ↸ᔑ||,     ʖ⚍ℸ ̣     ᓵꖎ7ᓭᒷ    ʖᒷ⎓7∷ᒷ リ╎⊣⍑ℸ ̣         ℸ ̣ ᔑꖌᒷᓭ       7⍊ᒷ∷`,
        oldManText: `Or I could just ask him. "Hey old man! Take a look at this," I yell over the sound of the water. "You know I have a name," He says, sounding a little hurt, "It's Colmãn.""Alright, Colmãn, take a look at this."It only takes him a few seconds of looking at it for him to translate it back to me as, "This tomb will open on the eve of the final day, but close before night takes over." "That must mean tonight. With how much time is left I doubt the sun will rise again before it blows," I say."I think it should open right as we have ${timeLeft} Prath Time Units left," Colmãn says, "But we need to get in there right after because it will close in another 1 or 2 time units. Should we just wait here for it to open or try to go do something else before it opens?"`,
        variable: ['puzzleStart', 2],       
        choices: 0,
        time: 1
    },
    oneHundredFour: {//user dies
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I get into my ship in a fit of rage and start blasting. I don't care about ammo, I don't care about this planet, I don't care about this stupid artifact, I don't care ab- The sea monster lunges at my ship with its mouth wide open. It crunches my ship with me inside it. I don't care.`,
        oldManText: `Colmãn and I look at each other and simply nod.`,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    oneHundredFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've got no chance of getting the artifact, but I might have a chance to save the people. I'm going to go back to the city and make sure they aren't killed by their own star.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetySix`,`Continue`]
        ],
        time: 1
    },
    oneHundredSix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There's nothing I can do. I barely have any time left. No reason to continue. I'll just leave this stupid planet. I walk to my ship dejected. I fly off with no artifact and leave all these people to die. My life fades back into obscurity.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    /*This was an oopsy and numbers oneHundredSeven to oneHundredNine are to be discarded
    oneHundredSeven: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 1
    },
    oneHundredEight: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 1
    },
    oneHundredNine: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 1
    },
    */
    oneHundredTen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walking in I am taken aback by the room I'm in. It's very small, about the size of a fighter ship. Now that I think about it, it might actually be some kind of fighter ship. All of the tech is like nothing I've ever seen before but I can recognize places where thrusters and controls would go. It has the ideal shape and weight placement for space travel. It's also completely airtight or it wouldn't be completely clean under all this water and dirt.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everything that I might find useful is completely scrapped except for something at the very back. There's some kind of canister made out of some kind of very tough black metal. This must be the artifact. I have to find some way to open it up.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredEleven`,`Try and break it open`],
            [`oneHundredTwelve`,`Examine the canister`],
            [`oneHundredThirteen`,`Examine the ship`]
        ],
        time: 1
    },
    oneHundredEleven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I took out my blunt force maximizers and hit the canister as hard as I could. It barely made a dent. What it did was make me feel like I punched a brick wall with my bare fists. Ow.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTwentyOne`,`Continue`]
        ],
        time: 1
    },
    oneHundredTwelve: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The longer I look at it, the more obvious it becomes that there is nothing to look at. It's all made out of the same metal and it has some pretty intricate detail but there's nothing apart from that.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTwentyOne`,`Continue`]
        ],
        time: 1
    },
    oneHundredThirteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On closer examination I can see some more personal aspects of the ship. I'm pretty sure that the one who owns this ship is the one this tomb was memorializing. Once I look closely at the front console I realize that it's been modified. There is a large box that I thought was part of the weird alien tech but seems to be added on. This box covers where the controls are. It's welded on at the base so I have no hope of even budging it. I hope it's not a bomb.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredFourteen`,`Try and break open the box`],
            [`oneHundredFifteen`,`Look for any buttons`],
            [`oneHundredSixteen`,`Leave it alone`]
        ],
        time: 1
    },
    oneHundredFourteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I take my blunt force maximizers from earlier and prepare to hit it with 100% power. Before I made contact with the box it made a lot of sound like it was trying to stop me, but it was not enough. Because I set my maxers to 100% I couldn't stop the punch until after it completely shattered the box. With the box destroyed it reveals more of the center console. I can see what each button and switch goes to, even if I don't understand the text. There's a lever under a glass box that has a line leading to the canister. This must be how I get the artifact. I smash the glass and pull the lever. With a hiss the canister slides open. I turn around and there it is.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredSeventeen`,`Continue`]
        ],
        time: 1
    },
    oneHundredFifteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I run my hands around the box trying to find something I can press until I hear it say, "Stop it."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This box must be the ship's AI. I'm screwed. I raise my blunt force maximizers to stop the AI before it can retaliate but it yells. "NO NO NO WAIT. I'm not hostile. Hold on!"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fine, I'll give you a chance, but you have to give me whatever is in that canister," I say pointing to it, "And tell me what is going on with this planet!"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay maybe I will, but first I need to tell you the full story," it says. It talks using thousands of little chirps that end up sounding like human speech somehow. "I am Zäki, I was one of the akias species. I am the one that this demeaning ‘tomb' was made for. More like prison. They turned me into AI and locked me in this box to punish me. You see, we akias have evolved past dying, I was killed."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hold on, Hold on, you're getting ahead of yourself. Start at the beginning. Why did the akias people come to this planet?"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Well, we have always been more advanced than your race in most ways, except one. You have always been much better at AI. A computer can imitate a human mind much easier than it can do with an akias. So we decided that we would study how humans can make such good AI. We chose a good planet that was civilized but still primitive enough to be easily manipulated. That was Vortex. When we arrived it didn't take long for the humans to worship us as gods."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"If you keep talking trash about humans I'm gonna smash you to bits."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"If you would just listen you would know that I'm sympathetic towards humans. The akias tricked the humans into giving themselves up for study through a sacrificial ritual. Soon we were able to create our own version of AI, but it was different than how you humans do it. While we couldn't create AI from scratch advanced enough to be useful, we did figure out how to transfer consciousness into AI. They started trapping human minds inside boxes like these as AI. This is when I started to have issues with how we were treating humans. Everyone else saw humans the same way you see a dairy cow, but I couldn't look past the fact that your species had an intelligent life that we were taking advantage of. I tried to stop it, but it was just one of me versus all of them. They caught me and stopped me. But they have a cruel sense of humor so instead of just killing me they trapped me with the same fate I tried so hard to stop. Then they locked me down here. I can feel my energy source barely giving me enough energy to keep me alive but I'd need a lot of energy to break through the barrier and actually access it."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Wow. That's a lot… I can end it for you. I think the artifact that I'm looking for is your energy source."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Okay. I can physically open it, but I will warn you. The limitations that my own kind have put on me mean that I can't calm it, and as soon as I lose my power source I die. If I'm being honest, I could have ended it all a long time ago, but I have been too scared. But I'll do it for you. 3.. 2.. 1.."
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Wait, calm it??"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a hiss the canister slides open. I turn around and there it is.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredSeventeen`,`Continue`]
        ],
        time: 1
    },
    oneHundredSixteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I look around for a bit and find nothing. Maybe there's something more with that box?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTwentyOne`,`Continue`]
        ],
        time: 1
    },
    oneHundredSeventeen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inside the canister I can see a liquid looking object. The color is constantly shifting from blue to pink to colors I have never seen before. It's kind of hard to look out. Almost as soon as it touches the air it starts expanding. Several tendrils shoot out and latch themselves on to the hull of the ship with a crunch. The main mass slowly lurches out of the canister as it gets bigger. It's not inflating, it's like it's generating more mass out of nothing. The "skin" starts bubbling and popping. The tendrils pull back bringing part of the metal of the ship into the main mass like armor. More tendrils start shooting at me and I jump out of the way. Time to find a way to contain this monster.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredEighteen`,`Use an electro net ball to capture the artifact`],
            [`oneHundredNineteen`,`Use my railgun`],
            [`oneHundredTwenty`,`Freeze it`]
        ],
        time: 1
    },
    oneHundredEighteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I grab the ball from my chest and then throw it. When the ball hits the artifact several ropes made out of pure electricity wrapped around it. For a moment the artifact was entangled and it stopped attacking me. Then it became still. I stopped jumping around to inspect the artifact. Then the electro ropes are absorbed and the artifact activates once again. I'm caught off guard so I'm not able to jump away in time. One of the tendrils strikes me directly in the chest. Before I die I can feel myself being sucked into whatever this thing is.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    oneHundredNineteen: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Something like this is gonna need a lot of power. I pull out my railgun and start charging it up. This is still pretty short range so I won't use full power, but I'll use as much as I can. Once the color of the light coming from the chamber turns red then I can shoot. But until then I can't get hit. I switch my boots into frenzy mode so I get random bursts of speed to throw the artifact off. As soon as I see the light turn red I switch my boots into anchor mode to get the most stability. I kneel down and take the shot aiming in between the armor. In a flash of blinding light I hear the round puncture the artifact. At the impact point it became solid. Cracks splitted out from the hole. The artifact started crumbling apart, but slowly it became liquid. The hole filled back in and the artifact was whole again. I know what is about to happen so I try to jump away. But since my boots are in anchor mode my feet never leave the ground. One of the tendrils strikes me directly in the chest. Before I die I can feel myself being sucked into whatever this thing is.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    oneHundredTwenty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Luckily the artifact is staying stationary so that means I can set up an artificial atmosphere. While avoiding the revolving tentacles I set up several small boxes around the artifact. These create a small force field and inject certain atmospheric conditions inside. Used on such a small scale the effect should be instantly powerful. I crank the temperature down as low as it can go. The artifact slows down and stops expanding. Then it starts getting smaller. The pieces of metal it's using as armor fall off. Then it hardens into a small perfect sphere. I set the atmosphere back to normal but stay ready to crank it down again. The sphere stays still even when it's not cold anymore. It must be safe for now. I pick it up carefully and walk out. I get on my ship and start it up. While flying away I pass over the city. All of the people here are going to die soon, whether they know about it or not. The only emotion I feel is pity, and maybe a little bit of shame for not helping them. Well it was either the people or the artifact, and I made my decision.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTwentyTwo`,`Continue`]
        ],
        time: 1
    },
    oneHundredTwentyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current location: room. What should I do?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredEleven`,`Try and break it open`],
            [`oneHundredTwelve`,`Examine the canister`],
            [`oneHundredThirteen`,`Examine the ship`]
        ],
        time: 1
    },
    oneHundredTwentyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm out, I'm finally out. I place the artifact on the table to fully examine it, but before I can place it down my ship gets hit, making me fall and drop the artifact. I check the monitors and other equipment to see what is going on. I see that the hit came from another ship trying to attack me. I turn on the gunships and other weapons to prepare for battle. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The opposing ship says, "I'm a fellow bounty hunter and I'm here for that artifact, now hand it over or else." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I turn on my microphone and say, "What are you talking about?" just trying to play dumb.
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then the ship said "I know you have it. I saw you leave with it." 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I continue to act dumb but then the opposing ship powers on their fireball cannon. So I turn on my plasma cannon and we begin to fight. I have a few options of playing this: try to run, fight, and use the artifact.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTwentyThree`,`Try to run`],
            [`oneHundredTwentyFour`,`Fight normally`],
            [`oneHundredTwentyFive`,`Use the artifact`]
        ],
        time: 1
    },
    oneHundredTwentyThree: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I power on my ship's turbo engines to attempt to get away. I begin my fight with this bum and so I'm just weaving all their shots to not lose the artifact that I spent so long to get. I shoot my plasma cannon and at the same time they shoot their fireball resulting in a large explosion. Some of the particles flew out and made the star speed up a lot from the sheer amount of energy the explosion produced. I look over and see that the supernova just went off and because there's no air in space there was no sound, only light. The artifact began to vibrate rigorously prior to the supernova going off. I look to see what happened as the artifact powers on the engine and makes its way into the fuel tank. The ship then speaks to me saying that it's ready to enter light speed just as the supernova goes off. I enter lightspeed, now knowing that I am one of the most powerful people in the universe.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 1
    },
    oneHundredTwentyFour: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're at a stalemate with my plasma cannon and their fireball cannon. We shoot at the same time resulting in an explosion between us. I put my ship's blasters into combat mode and they do the samel. We chase each other like kids in a park playing tag. I power on my ship's turbo engines to get a higher speed chase going, leaving it up to the better pilot. I press the button that makes me 15 times faster than I've ever gone, thinking I lost him. I am suddenly hit in the back where the engines turbo jets are located with a fireball. Before I know it my ship and I am gone. The artifact is now out of my possession and belongs to some bum of a bounty hunter.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    oneHundredTwentyFive: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I should use the artifact in some way. I spent too long trying to get it to lose it because of some bum of a bounty hunter. I think for a second that this thing can be used as a fuel since it's fluid like. I place the container with the fluid in it next to the engine. In front of my eyes the fluid pushes its way out and begins to shapeshift to get inside the fuel tank. I check the monitors to see my fuel and diagnostics of the ship. The ship now says that it's preparing to go lightspeed and that it now has unlimited fuel. I think to myself that maybe because it's an energy source, I can use it for my plasma cannon to make it become the most powerful in the universe. I power the cannon back on and wait for the opposing ship to start their next attack in order for me to get a good shot when they're more vulnerable. The opposing ship begins their attack but leaves an opening for my attack. I line up the cannon to get a clean shot. I took it and in a matter of a second a bright white light shines from the ship. The ship blows up and just turns into a large ball of white light. I think to myself that I'm now one of the most powerful people in the universe. My ship asks to enter lightspeed and I agree and so I enter lightspeed.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 1
    },
    oneHundredTwentySix: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I'm going to save these people!"
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I go to the city and round everyone up. I tell them that they don't have much time left. Most of them don't believe me until the prophet himself comes out to preach that everyone should follow me. Most of them gasp and begin to trust me. Those that don't are just influenced by their peers so they simply joined too.`,
        oldManText: `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I think you made a good decision," Colmãn says."Yeah I think so too"`,
        variable: ['trueEnding',1],       
        choices: [
            [`oneHundredTwentyEight`,`Continue`]
        ],
        time: 1
    },
    oneHundredTwentySeven: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I fly down and see the door wide open. This was the spot that that huge beacon came from. I have to assume that all that noise was this door opening. I land and walk into the door.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTen`,`Continue`]
        ],
        time: 1
    },
    oneHundredTwentyEight: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I begin to load everyone onto the ship. People are starting to understand the situation enough that they were thanking me for saving them. Once everyone is on we leave and my mind is calm. The ship is so packed I would not be able to fit an artifact of any size even if I had the time. Only a small part of me feels regret for the lost artifact. We take off and are a good distance away to be safe from the blast. I turn my ship around so that people can say their goodbyes to their home. As they did the star explodes. The supernova provides a split second of blinding levels of light. I can't do anything but admire its beauty, until I notice something is wrong with the planet. Or at least the area of space where the planet used to be. There was a tiny light that was quickly growing to be not so tiny. Then I realize the light is not growing, it's getting closer. When the light emitting from the object dwindles down slightly, it suddenly stops mid-flight in front of me. I use my ship to scan the object from afar. An error appears on the monitor. I check the monitor to see what was wrong. The moment I check the monitor my ship gets hit by something big. I turn on the defenses and check what it was. I see that it's another bounty hunter. 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I turn on the speakers and say, "Who are you and why are you attacking me!" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After a moment of no sound I hear, "I'm another bounty hunter and I saw you enter this place. I knew you were after something and now I know exactly what, the artifact. So how about you hand it o–" 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From the window I watch as the other hunter's ship gets completely destroyed into a spew of rubble. In the middle of all the rubble was the artifact. It's beginning to glow brighter and look like it is heading straight for me. I have a few options of getting out of this alive: try to weave all attacks, try to run away, and try to fight it with my ship.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`oneHundredTwentyNine`,`All power to weaving`],
            [`oneHundredThirty`,`Try to run away`],
            [`oneHundredThirtyOne`,`All power to weapons`]
        ],
        time: 1
    },
    oneHundredTwentyNine: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I power up my ship and get into the driving chair. I swerve out of the way from every attack that's thrown at me. I'm running low on fuel. Someone yells, "The energy is so bright!" I think to myself that because the energy is so bright that it might be capable of reflection. I might as well try it. I turn my ship to face the artifact and place my finger on the button that will turn the windows into mirrors. I wait till it shoots a beam of energy. The wait is excruciating but it finally shoots. I wait a split second before it hits my windows so I can get the perfect angle and push the button. Once the energy hits I start thinking that this must be what death feels like. Turns out it was just a little bit of shaking. After a moment someone asks, "Is that it?" At that moment I switch the windows back to normal and look at the artifact. It starts cracking like an egg shell. The artifact rattles and cracks bursting into an immense amount of energy. Then the light fades away, revealing nothing but a bunch of scrap. I must have obliterated anything that could have been useful. Well at least we survived.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 1
    },
    oneHundredThirty: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I power on my engines in an attempt to outrun this artifact. I take off, in the beginning the artifact matches my speed, staying in the same relative position next to my ship. I then hover my hand over the button that will boost me to three times my max speed. I wait for the artifact to try to hit my ship so I can hit the button that will make my engines enter turbo mode. It will make my ship go 15 times faster than it ever had before, but it will destroy the engines. Before the artifact hits my ship I press it. Before I know it I'm traveling so fast that my ship's about to fall apart. I check my mirrors and shout "Hey I think we los–" the ship is hit by the artifact's beam of pure energy causing one of the engines to fail. I don't know what to do so I look up from the monitor telling me that the engine is down. The artifact is there right above me, hovering in space. The artifact then shoots a beam of pure energy directly inside the ship causing the ship to fail and everyone inside the ship to perish.`,
        oldManText: ``,
        variable: ['death',1],       
        choices: [
        ],
        time: 1
    },
    oneHundredThirtyOne: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I turn on all my weapons I have on board my ship, pointing all of them at the artifact. Everything unloads all of my ammo on the artifact leading to a massive boom thus creating a bright light. Once the explosions are all over I look to see what the damage is. I see that nothing has happened except for the artifact growing brighter and brighter. I have one last option to take this thing out. I have to launch a nuke at it to try to destroy it. I power on my cannon that launches a 20 ton nuke. I hit the button launching it and in a split second the nuke goes off resulting in a large ball of energy spanning so wide that I would have to turn my head to even see the end. After the ball disappears, at the center is the artifact undamaged. This artifact doesn't even have a scratch on it. All the nuke did to the artifact was make it glow brighter, almost as if it absorbed the energy. It heads towards the ship while glowing brighter. It charges up and shoots multiple beams of energy directly at the defenseless ship. The ship completely shatters like glass and begins to completely shine in white light, which from neighboring solar systems looks like a second supernova just occurred.`,
        oldManText: ``,
        variable: ['death',1],
        choices: [
        ],
        time: 1
    },
    oneHundredThirtyTwo: {
        text: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have a strange feeling. Something about that wreckage is affecting my mind. Maybe there is actually something in there. I go out in my spacesuit to inspect it. I find that the true artifact is inside. It's a fluid that is kept in a sphere. The fluid is pure energy that acts like oobleck. It hardens when something hits it and acts like fluid at normal conditions.I walk into the ship and place it next to the fuel tank and some sort of magic occurs. The sphere shifts the matter of my ship creating a hemisphere shape. I look at my ship's conditions and my fuel shows an infinite amount of energy. As the sphere creates a hemisphere shape in my ship, the people begin to pray and they tell me that I fulfilled their prophecy. They say I am the prophecised hero.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 1
    }
};

function storyLoop (number){ //all of the mechanics
    storyArray.push(number); //adds the selected choice to the story array
    document.getElementById('selectedChoices').innerHTML += `, ${number}`; //displays current path
    if (wait == 1){ //special "wait" option that changes how much time is subtracted depending on what time it is
        wait = -100000;
        timeLeft -= (timeLeft - 10);
    }    
    timeLeft -= story[number].time; //subtracts time     
    if (timeLeft <= 10 && artifactDoor == 'closed'){ //when the door to the artifact opens
        document.getElementById('storyText').innerHTML += '<i><br><br>Suddenly a loud rumbling can be heard all across the entire planet. A huge beacon of light shoots out from the ocean. Something important must be happening there</i></br></br> ';
        story['ninetySeven'].choices = [['oneHundredTwo', 'Continue']];
        artifactDoor = 'open';
    } else if (timeLeft <= 5 && artifactDoor == 'open'){ //when the door to the artifact closes
        document.getElementById('storyText').innerHTML += "<i><br><br>The beacon of light vanishes</i></br></br> ";
        story['ninetySeven'].choices = [['oneHundredTwentySeven', 'Continue']];
        artifactDoor = 'closed forever';
    } else if (timeLeft <= 0){ //when time completely runs out
        timeLeft = 0;
        death = 1;
        document.getElementById('storyText').innerHTML += "<br><br>I'm out of time. I need to get back to my ship. I start running hoping that I have enough time to escape. I finally reach my ship and get in. As I'm flying away I look back at the star. It looks giant and red. Then there's a flash of light. I should have enough time to get away. I start flying away but something weird happens. Even though I'm powering up the engines I'm slowing down. Then the ship stops and starts going backwards. The star's gravity is enough to pull me in. I give up. I turn around and watch as the beautiful and massive explosion turns me into nothing in an instant.";
    }
    if(timeLeft <= 30){ //shows how much time is left
    document.getElementById(`clock`).innerHTML = `Time left = ${timeLeft}`;
    }        
    for(i = 0; i < story[number].variable.length; i+=2){ //updates all variables
        switch (story[number].variable[i]){ //uses the first value in a set to point to which variable to update
            case 'oldMan': 
                oldMan += story[number].variable[i+1]; //updates variable by the second value in a set
                break;
            case 'knowChief':
                knowChief += story[number].variable[i+1];
                break;
            case 'convinceLeader':
                convinceLeader += story[number].variable[i+1];
                break;
            case 'convinceProphet':
                convinceProphet += story[number].variable[i+1];
                break;
            case 'artifactInfoLeader':
                artifactInfoLeader += story[number].variable[i+1];
                break;
            case 'artifactInfoProphet':
                artifactInfoProphet += story[number].variable[i+1];
                break;
            case 'trueEnding':
                trueEnding += story[number].variable[i+1];
                break;
            case 'death':
                death += story[number].variable[i+1];
                break;
            case 'puzzleStart':
                puzzleStart += story[number].variable[i+1];
                break;
            case 'wait':
                wait += story[number].variable[i+1];
                break;
            default:
                alert('something broke lol, try restarting'); //debugging tool
        }
    }    
    document.getElementById('choiceMenu').innerHTML = ''; //clears all of the old choices
    if(timeLeft > 0){ //doesn't let the code run if the story is done
    let currentAddedText = ''; //holds the new text to be added
    if(oldMan == 0){ //adds the main text and optional text if needed
        currentAddedText = story[number].text;
    } else if (oldMan == 1) {
    currentAddedText = story[number].text + story[number].oldManText;
    }
    document.getElementById('storyText').innerHTML += `<br><br>${currentAddedText}`; //adds the text to the main story
    document.getElementById('bottom').scrollIntoView(); //scrolls to the bottom of the text box automatically
    if (death == 1){ //death condition
        document.getElementById('menu').innerHTML = 'GAME OVER! Maybe try another path?';
    }
    if (knowChief == 1){ //once you get enough information new options appear
        story['sixtySix'].choices.push(['sixtyNine', 'Fight him']);
        knowChief = -1000000;
    }
    if ((convinceLeader >= 1) && (convinceProphet >= 1)){
        story['ninetySix'].choices.push(['oneHundredTwentySix', 'Save the people']);
        convinceLeader = -1000000;
        convinceProphet = -100000;
    }
    if ((artifactInfoLeader >= 1) && (artifactInfoProphet >= 1)){
        story['ninetySix'].choices.push(['ninetyFive', 'Search for the artifact']);
        artifactInfoLeader = -1000000;
        artifactInfoProphet = -100000;
    }    
    if (trueEnding == 8){
        story['oneHundredTwentyNine'].choices = [['oneHundredThirtyTwo', 'Continue']];
        trueEnding = -10000000;
    }
    if (puzzleStart >= 1){ //when the player starts the puzzle
        document.getElementById('puzzleBox').classList.remove('puzzleOff'); //takes off the CSS making the puzzle invisible
        document.getElementById('puzzleBox').classList.add('puzzleOn'); //gives the puzzle CSS
    }
    for(i = 0; i < story[number].choices.length; i++){ //loops for how many choices there are
        let btn = document.createElement('button'); //creates a button HTML tag inside of a variable
        btn.setAttribute('onclick', (`storyLoop('${story[number].choices[i][0]}')`)); //adds an onclick attribute to the button with the specific pointer needed
        btn.innerHTML = story[number].choices[i][1]; //adds the button text
        document.getElementById('choiceMenu').appendChild(btn); //adds the button to the UI
    } 
}  
}
function puzzleCode() { //holds the puzzle
    if((document.getElementById('puzzleInput').value.toLowerCase()) == 'this tomb will open on the eve of the final day but close before night takes over'){ //if the user types the right answer
        if(puzzleStart == 1){ //if you enter the puzzle from before or after the door is closed
            document.getElementById('puzzleBox').classList.add('puzzleOff'); //turn off puzzle
            document.getElementById('puzzleBox').classList.remove('puzzleOn');  
            puzzleStart = -100000;          
            storyLoop('oneHundred'); //move forward to before door is open
        } else {
            document.getElementById('puzzleBox').classList.add('puzzleOff');
            document.getElementById('puzzleBox').classList.remove('puzzleOn');
            puzzleStart = -10000;
            storyLoop('oneHundredOne'); //move forward to after door is open     
        }
    } else {
        document.getElementById('storyText').innerHTML += `<br><br>That can't be it, that's nonsense! Let me try something else.`; //incorrect answer
    }
}
function restart() { //when player clicks restart
    let text = "Are you sure you want to restart?";
    if (confirm(text) == true) { //gives player chance to not restart
        window.location.reload()
    }
}