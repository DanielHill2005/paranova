var timeLeft = 31; //defines all the variables
var oldMan = 0;
var knowChief = 0;
var convinceLeaders = 0;
var artifactInfo = 0;
var artifactDoor = 'closed';
var trueEnding = 0;
var storyArray = [];
var death = 0;
const story = { //holds the entire story
    one: {
        text: `It’s the staryear 193-08793. The Milky Way galaxy’s unexplored mysteries didn’t last long after humanity finally discovered the secrets of space travel. I was born in an age of space pirates and war. With the entire galaxy conquered, humanity had nothing to do but fight over what we already had. All I ever wanted to do was be an old school explorer. But with this galaxy completely explored and the endless space between other galaxies untraversable, I was stuck as a bounty hunter. 
        I’m on a frigid ice planet. The howling wind means I can only use my eyes, but visibility is so low I barely have that. I creep forward while crouching until I’m over the ridge. There he is, Jean-Luc Pélissier. Wanted dead or alive for stealing and espionage. I throw a smoke bomb and run in with my thermal glasses. I knock him down and arrest him. He tries to run but that’s a mistake. Now he’s with the others I’ve taken down. I search his body and find an ancient relic.`,  //main text
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
        text: `I say “Good effort on the run, you almost lost me”. I grab his identification chip and begin to go to my ship.`,
        oldManText: '', 
        variable: 0,               
        choices: [
            [`five`,`Continue`]
        ],
        time:0
    }, 
    three: {
        text: `“Ha! Look at this goofy goober of a criminal” I say insultingly. I grab his identification chip and head to my ship.`,
        oldManText: '',
        variable: 0,
        choices: [
            [`five`,`Continue`]
        ],
        time:0
    },
    four: {
        text: `I look at him and sigh because I know I'm going to be doing this for a long time. I grab his identification chip and go to my ship.`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`five`,`Continue`]
        ],
        time: 0
    },
    five: {
        text: `My ship's computer scans the relic but can’t translate it. It looks like some sort of map. For a precious few minutes I had hope that I could finally live my dream as an explorer. 
        Now I’m back at this old bar like always, drinking away my sorrows. I’m sitting in the corner examining the map. There’s an old man sitting on the other side of the bar by himself and a group of obnoxious men that look to be my age but act like they’ve never left their home world before. I’m getting sick of these guys, what should I do?`,
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
        text: `These hooligans need to be taught a lesson. I get up like I’m leaving but the moment I pass them I whip out my laser pistol and start firing. Once the smoke clears three of the four hooligans are dead and the last is begging for his life.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seven`,`Let him go`],
            [`eight`,`Kill him`]
        ],
        time: 0
    },
    seven: {
        text: `I don’t have the heart to kill a man begging for his life so I let him scramble out of the bar without a word. The old man looks shocked but then he says, “Thanks, I was about to do something about them myself, but you beat me to it. Let me buy you a drink.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`nine`,`Accept the drink`],
            [`ten`,`Decline the drink`]
        ],
        time: 0
    },
    eight: {
        text: `This guy disgusts me, I pull the trigger and he collapses on the floor. The old man looks scared but then says, “Thanks, I was about to do something about them myself, but you beat me to it. Let me buy you a drink.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`nine`,`Accept the drink`],
            [`ten`,`Decline the drink`]
        ],
        time: 0
    },
    nine: {
        text: `We sit and talk for another hour. I almost forget why I was even at the bar until he mentions he is an archaeologist. 
        “Wait, so can you decipher old languages and codes or are you just the diggy kind?” I ask.
        He chuckles and says, “I knew you would ask that. I saw you staring at that map earlier. But to answer your question, yeah, a little of both. My skills are hardly ever useful now. Let me take a look.”`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twentyThree`,`Continue`]
        ],
        time: 0
    },
    ten: {
        text: `The old man looks a little dejected by the rejection but he takes it in stride and says, “Well at least let me help you.”
        He must have seen the confused look on my face because then he explains, “I saw you looking at that map earlier. I’m an archaeologist, let me see it.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyThree`,`Continue`]
        ],
        time: 0
    },
    eleven: {
        text: `“Why don't you kick rocks and leave us alone” one of the hooligans says. 
        “Oh yeah you would want that, huh,” I say angrily. 
        As soon as I say that, the old man appears and says, “They’re not worth your time”.`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twelve`,`Keep trying`],
            [`fourteen`,`Give up`]
        ],
        time: 0
    },
    twelve: {
        text: `“Why should I even trust you, I don’t even know you. I’m going to keep on trying"`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirteen`,`Continue`]
        ],
        time: 0
    },
    thirteen: {
        text: `“Hey”, I call out to the hooligans in desperation. 
        “I thought we told you to kick rocks, now why don’t you?”, the hooligans say irritatedly. 
        “Because I got no other place to go”
        “Oh boo freaking hoo, we told you two times already to leave, this is your last warning”
        “But please”
        “That was your last chance” they say angrily. They proceed to get up out of their chairs and jump me, I lose (of course) because I am unprepared and there are multiple of them.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyThree`,`Continue`]
        ],
        time: 0
    },
    fourteen: {
        text: `“Yeah you’re probably right” I say`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fifteen`,`Continue`]
        ],
        time: 0
    },
    fifteen: {
        text: `“I should probably get going,” I say.
        “Wait! I think I can help you,” the old man says. 
       He must have seen the confused look on my face because then he explains, “I saw you looking at that map earlier. I’m an archaeologist, let me see it.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyOne`,`Continue`]
        ],
        time: 0
    },
    sixteen: {
        text: `Whatever. I’ll let it go. Not my problem. Or at least it wasn’t until the old man suddenly threw his glass at the wall near the hooligans and then kindly said, “Please keep it down.”
        The hooligans were shocked by his outburst and sudden kind attitude but one managed to squeak out, “What’s it matter to you?”
        With surprising speed the old man grabbed the more confident hooligan by his collar and then slammed him into the table.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventeen`,`Confront the old man`],
            [`eighteen`,`Try to leave`]
        ],
        time: 0
    },
    seventeen: {
        text: `I walk up to the old man and try to break up the fight. When he lets go of the hooligan they all run out and the old man turns to me.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`nineteen`,`Continue`]
        ],
        time: 0
    },
    eighteen: {
        text: `I should get out of here. I go for the door, but the hooligans push me out of the way to get away from the old man. He comes up to me and stops me from leaving.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twenty`,`Continue`]
        ],
        time: 0
    },
    nineteen: {
        text: `“Wait,” the old man said, “Before you go, I might be able to help you.” 
        He must have seen the confused look on my face because then he explains, “I saw you looking at that map earlier. I’m an archaeologist, let me see it.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyOne`,`Continue`]
        ],
        time: 0
    },
    twenty: {
        text: `The old man stops me forcefully and grabs the map from me. I try to take it back but he stops me and explains, “I saw you reading this earlier. I’m an archaeologist, I can help you.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyOne`,`Continue`]
        ],
        time: 0
    },
    twentyOne: {
        text: `“Okay this thing says that you must go to the jungle planet, Vortex” he says.
        “Vortex huh, okay then I guess I’m going to Vortex”
        “Yeah, I guess you are. Well listen I gotta leave soon, but good luck on your quest.” The old man says, “and I’ll send you a cipher for the language. I think I’ve gotten it pretty much figured out now.”
        “Thanks! It means a lot” I say knowing I’m in for an adventure!`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twentySix`,`Continue`]
        ],
        time: 0
    },
    twentyTwo: {
        text: `“Thanks for your help, but I’m doing this alone. Sorry.”
        The old man tries to convince me but I shut him down and walk to my ship. When I’m taking off he sends me a hastily drawn cipher on a napkin through interlink. It could be useful if I ever need to translate more of the language.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentySix`,`Continue`]
        ],
        time: 0
    },
    twentyThree: {
        text: `“Okay, let’s see what we got here.” he mutters.
        “Well?” I say impatiently.
        “Okay so it appears that this thing that you’re looking for is located on the jungle planet Vortex” he says.
        “Okay then, I guess I’m going to Vortex”
        “I guess WE are, because you wouldn’t even know where to go without me,'' he says.`,
        oldManText: ``,
        variable: 0,
        choices: [
            [`twentyFour`,`Let him come with`],
            [`twentyTwo`,`Don't let him come with`]
        ],
        time: 0
    },    
    twentyFour: {
        text: `“Alright, but we are leaving right now. Let’s go!”`,
        oldManText: ``,
        variable: ["oldMan",1],       
        choices: [
            [`twentyFive`,`Continue`]
        ],
        time: 0
    },    
    twentyFive: {
        text: `We start to head to Vortex after quite a bit of traveling. When we’re about to land, the old man notices that we're about to land inside of a trap. There are a bunch of what look like primitive locals waiting in ambush. They are probably hunting some kind of flying beast. So we fly away from that location and we spot some plausible locations according to the relic.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 0
    },    
    twentySix: {
        text: `After a long month of traveling I finally made it. I’m at Vortex. The planet is covered in dense jungle with about half of the surface area being ocean. It reminds me of the old pictures of earth before humanity left it as a dry ball of radiated dust. 
        When I entered the system I got a worrying alert. My ship’s computer flashed huge danger signals at me. I read the report in horror. This solar system orbits the star Areps. Areps is a star at the end of its lifetime. At the very end of its lifetime. My computer calculates that I have x imperial time units left before the star blows up in a massive supernova. 
        It’s fine. I’ll just be in and out, as long as nothing goes wrong. I land my ship in the first good spot I see so I can start looking soon. As soon as I step out of my ship I hear a loud guttural war cry from several humans running towards me. I’m too busy wondering why there were no logs of human civilization on this planet to notice the answer fly right by my face in the form of several ancient looking spears that deflect off my shield. They must be too primitive to be noticed. Still, it’s strange, we should have detected any life on this planet at all.
        My headset translates the warcry as, “FOR THE ARTIFACT!”. It seems that they speak a different language than was written on the map.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentySeven`,`Spare them`],
            [`fortyFive`,`Kill them`],
            [`fortySix`,`Run away`]
        ],
        time: 0
    },    
    twentySeven: {
        text: `These are just primitive locals. There’s no reason to kill them and they might know something about the artifact. I wait until they are close enough to me and then I incapacitate them with a gadget that wraps itself around the target and locks their joints together.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyEight`,`Continue`]
        ],
        time: 0
    },    
    twentyEight: {
        text: `Once I had them all rounded up I spoke in my own language but they heard it as theirs. “Who are you?” I ask.
        The obvious leader says “I am Khaa. You have bested me and my men, so by honor we are indebted to you. Thank you.”
        I’m taken aback by this very large man thanking me for beating him, but the brief curiosity fades away when I remember my time limit.
        “Earlier you yelled, ‘for the artifact’, what does that mean?” I ask.
        “Many generations ago, our people were visited by great people called the akias. It is said that they possessed actual magic beyond our greatest imaginations. Their time here was short but they left us with a gift. The artifact.” While he is explaining, the other men chant some kind of prayer.
        He is going to say more but I interrupt him by asking, “Where is it?”
        “No one knows.”
        This could have been easy, but of course not. It doesn’t matter. I have plenty of time left. I’m about to leave but the men insist on joining me. Should I let them?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`twentyNine`,`Yes`],
            [`fortyThree`,`No`]
        ],
        time: 0
    },    
    twentyNine: {
        text: `I need all the help I can get. Plus they might have some useful information even if they don’t know exactly where the artifact is.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirty`,`Continue`]
        ],
        time: 0
    },    
    thirty: {
        text: `Khaa stops me before I start walking and says, “Let us take you to our home.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyOne`,`Yes`],
            [`thirtyTwo`,`No`]
        ],
        time: 0
    },    
    thirtyOne: {
        text: `Fine, maybe I can learn something. I follow them through the dense jungle until I come upon a great city. Houses and other buildings are built into the stone and the mountains. Some of the city seems to have been carved out of the ground, almost like the city is the natural geography. There were people bustling around everywhere. I would guess a total of a couple hundred people live here. I followed the squad into the city. Now that we are in the city they leave without a word. I really don’t understand this culture. What about their debt?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyTwo`,`Continue`]
        ],
        time: 0
    },
    thirtyTwo: {
        text: `I don’t have time for that. There’s only so much time left. I need to get the artifact and get out of here.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyThree`,`Continue`]
        ],
        time: 0
    },
    thirtyThree: {
        text: `“Alright where should I go?”, I ask myself. A few locations stand out: this ancient looking cave, a volcano, and a whole jungle. Although I could look for the civilization that lives here and try to save them from their doom. I listed the options to my new squad but they had some problems with my assessment.
        “You must not go to the Volcano,” Khaa explains, “There is a beast there, and nothing else. We have made many expeditions into that hell hole to mine the volcanic rock, but they have always been dangerous and we have found nothing else.”
        “Fine, but if I find out that the artifact is actually there I’ll throw you into that beast myself.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyFour`,`Look in the cave`],
            [`thirtyEight`,`Look in the jungle`],
            [`sixtyTwo`,`Search for the civilization`]
        ],
        time: 0
    },
    thirtyFour: {
        text: `As I went into the cave, something in my head shouts “Get out!”, in an evil spirit voice. I think nothing of it and proceed to work my way through the cave to come across potentially my hardest battle ever. “Okay calm down. Calm down.”, I whisper to myself. I was up against a beast with three glowing red eyes, with the horns of a bull and a wooly mammoth, the body of a lion, and razor sharp teeth stretching three rows back. So I knew I only had two options. Fight and die to this beast. Or try to run and possibly die from the beast.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyFive`,`Fight`],
            [`fortyTwo`,`Run`]
        ],
        time: 0
    },
    thirtyFive: {
        text: `So I know I have to fight wisely. Either I draw my chain sword and activate its fire ability or draw my blasters with my rocket boots. If I choose my sword I will have to fight up close but if I choose my blasters I will have to fight from a distance.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtySix`,`Fight with chain sword with fire ability`],
            [`thirtySeven`,`Fight with rocket boots`]
        ],
        time: 0
    },
    thirtySix: {
        text: `I draw my sword and get into a fierce fight with this beast. I activate the swords’ fire ability which does some damage but not enough to get the beast to yield. I attacked and attacked but after a long and tiring battle with every strike I blow to the beast, it damages my armor with its rows of teeth and grueling hits till it no longer protects me. My armor took its final blow and broke, meaning I had to make every strike worth it. I grab the sword tightly and charge at the beast, raining down strikes on its back and trying to hit its head, but the beast waits for the best opportunity and pierces my chest plate and stabs its horn into my heart. I had just lost the most important fight in my life, as it was to get this artifact and for my life.`,
        oldManText: ``,
        variable: ['death', 1],       
        choices: [
        ],
        time: 0
    },
    thirtySeven: {
        text: `I activate my rocket boots and draw my blasters. I charge towards the beast and it charges back at me, but I have no intention to get too close to the beast so before it hits me I launch myself into the air and send down loads of bullets from my blasters. These to my advantage pierced through its thick scales. After a long fight of wearing out the beast’s energy and scales, I’m able to strike the final blow with my blaster in hand and my rocket boots activated. I launch into the air and as I’m descending I shoot the beast dead.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyTwo`,`Continue`]
        ],
        time: 0
    },
    thirtyEight: {
        text: `I begin my search for the artifact in this never ending jungle. This jungle is dense, consists of sky high trees and is rich in life. I manage to maneuver through the dense jungle on a discrete path made by someone or something, which is barely visible. Eventually I stumble across something that looks promising. I find what looks to be eight boulders that form a circle with each boulder being equidistant to the ones next to it. But in the middle there is a large rafflesia. So I begin to walk forward and to the center. I touch it and as soon as I do I hear a rumble. I look around and draw my chain sword. This rumble then turns into a voice and says in an extremely loud and deep voice “Why are you here?”. 
        I am shocked and ask “Who said that?”
        Then the boulders roll and transform into equally large golems. I know I have two options, which are to fight or run.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyNine`,`Fight`],
            [`fortyTwo`,`Run`]
        ],
        time: 0
    },
    thirtyNine: {
        text: `I think to myself that I have to fight in order to escape this. I say “I’m just here to find an artifact.” 
        “Artifact? That doesn’t answer my question on why you’re here”, the largest golem says.
        I gulp and say “Well that’s why I’m here, for an artifact”. 
        “So you’ve come to steal, punishable of… death!” the main golem says angrily. 
        I know they too are going to fight. I have two options: fighting with my explosive round blasters or my lightning sword.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`forty`,`Fight with explosive round blasters`],
            [`fortyOne`,`Fight with lightning sword`]
        ],
        time: 0
    },
    forty: {
        text: `I grab my blasters from the holster and  get a little bit of distance. They all move towards me like how a gorilla crawls, I shoot at them and manage to strike two of them. They look back at their knocked down friends and now the six left golems all get angry and charge at me. I use the surrounding trees to my advantage, climbing them and going from tree to tree to be stealthy. From the trees I manage to take out many of the golems and only have the main golem left, the strongest and biggest golem there. 
        The golem says “You think those trees are in your favor, hiding in the shadows? I am the shadows, forged from fire and stone, being kept away from anyone and anything else alive.”
        I shoot my blaster at his feet from the trees and quickly rush down to the ground. I sneak up behind the golem and say “If you’re the shadows then you would know all about them, then how come I’m behind you?” 
        The golem smirks and says “Take the shot, you deserve it.” 
        “Really? That’s how this is going to go?” 
        “No!” the golem says as it quickly backhands me. This fight is going to be heavy for my body so I need to make quick decisions. We begin to fight and with my rocket boots I travel around it and begin to unload every last bullet I have, causing a really large explosion like how a nuke had just gone off. As the explosion finishes, I look and the golem is down. It says “Well, I guess this is the end of the line for me”. We both nod at each other as a sign of respect for each other in the fight.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyTwo`,`Continue`]
        ],
        time: 0
    },
    fortyOne: {
        text: `I power on my rocket boots and quickly draw my sword. I grab the sword knowing that I am going to have a long and grueling fight. The golems charge at me while I am in the middle of all of them. They begin to attack me as I point my sword towards the air and summon lightning from the sky, causing an explosion pushing them all back. I am constantly moving erratically to avoid being hit but some of the time I’m not fast enough to dodge the hits. My armor starts to fully diminish, to the point where it is fully coming off of my body in scraps. All my strikes with the lightning aren’t doing as much damage as I had hoped and I am quickly running out of time to get the artifact and leave. I see a final chance with the lightning by bringing the largest lightning bolt I’ve ever produced. So I point my sword to the sky and before I could send it to the main golem, I am struck by the golem with enough force that the sword falls out of my hand. The main golem catches it and points it at me, pushing it through my chest. Before I know it the largest lightning bolt I’ve ever seen strikes me. Once the lightning goes away I can’t even speak. I just simply look at the main golem and nod out of respect for the fight. The golem nods back and simply says “Good fight, and goodbye.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 0
    },
    fortyTwo: {
        text: `Where should I be looking?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`thirtyFour`,`Look in the cave`],
            [`thirtyEight`,`Look in the jungle`],
            [`sixtyTwo`,`Search for the civilization`]
        ],
        time: 0
    },
    fortyThree: {
        text: `I don’t need these primitives. They’d just slow me down. I power on my rocket boots and fly away before they have a chance to stop me.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 0
    },
    fortyFour: {
        text: `“Alright where should I go?” I ask myself looking at a few locations: this ancient looking cave, a volcano, and a whole jungle. Although I can also look for the civilization that lives here and try to save them from their doom.`,
        oldManText: `“Okay what's the relic say?” I ask the old man. 
        “Not sure, it just says what it looks like and what planets it’s on.” the old man says shockingly. 
        “Okay well we’ve gotta go through the locations.”
        “Well we have a few options: that ancient looking cave, the volcano, or the whole jungle.”
        “Well great, any other options,” I say sarcastically. 
        “Well if we were about to enter a trap, that means there must be a civilization somewhere, and they can help us,” he answered, “But hey, I have to tell you something, this star is going to die.” 
        “What? Seriously! This star, Areps?” I am horrified. 
        “Yeah, when we were approaching I noticed something was off about it and it began to click in my mind that Areps is going to become a supernova,” he says, “It’s bad. By my calculations we have ${timeLeft} imperial time units before we are obliterated.”`,
        variable: 0,       
        choices: [
            [`fortySeven`,`Look in the cave`],
            [`fiftyOne`,`Look in the volcano`],
            [`fiftySix`,`Look in the jungle`],
            [`sixtyOne`,`Search for the civilization`]
        ],
        time: 0
    },
    fortyFive: {
        text: `I don’t have time for this. I pull out my power gauntlets and pick up the spears they threw at me. I threw them back with more power than they could ever imagine. When none were left I started looking around for where I should go next.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 0
    },
    fortySix: {
        text: `I have no reason to fight these primitives. I kick my heels together to power on my rocket boots and fly away.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyFour`,`Continue`]
        ],
        time: 0
    },
    fortySeven: {
        text: `As I went into the cave, something in my head shouts “Get out!”, in an evil spirit voice. I think nothing of it and proceed to work my way through the cave to come across potentially my hardest battle ever. “Okay calm down. Calm down.”, I whisper to myself. I was up against a beast with three glowing red eyes, with the horns of a bull and a wooly mammoth, the body of a lion, and razor sharp teeth stretching three rows back. So I knew I only had two options. Fight and die to this beast. Or try to run and possibly die from the beast.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyEight`,`Fight`],
            [`sixty`,`Run`]
        ],
        time: 0
    },
    fortyEight: {
        text: `So I know I have to fight wisely. Either I draw my chain sword and activate its fire ability or draw my blasters with my rocket boots. If I choose my sword I will have to fight up close but if I choose my blasters I will have to fight from a distance.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortyNine`,`Fight with chain sword with fire ability`],
            [`fifty`,`Fight with blasters with rocket boots`]
        ],
        time: 0
    },
    fortyNine: {
        text: `I draw my sword and get into a fierce fight with this beast. I activate the swords’ fire ability which does some damage but not enough to get the beast to yield. I attacked and attacked but after a long and tiring battle with every strike I blow to the beast, it damages my armor with its rows of teeth and grueling hits till it no longer protects me. My armor took its final blow and broke, meaning I had to make every strike worth it. I grab the sword tightly and charge at the beast, raining down strikes on its back and trying to hit its head, but the beast waits for the best opportunity and pierces my chest plate and stabs its horn into my heart. I had just lost the most important fight in my life, as it was to get this artifact and for my life.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 0
    },
    fifty: {
        text: `I activate my rocket boots and draw my blasters. I charge towards the beast and it charges back at me, but I have no intention to get too close to the beast so before it hits me I launch myself into the air and send down loads of bullets from my blasters. These to my advantage pierced through its thick scales. After a long fight of wearing out the beast’s energy and scales, I’m able to strike the final blow with my blaster in hand and my rocket boots activated. I launch into the air and as I’m descending I shoot the beast dead.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 0
    },
    fiftyOne: {
        text: `I begin searching in and around the volcano. I know I’m in for a test of my abilities. With the heat I have to act fast because if I mess up I will die. On my journey I stumble across a demon with fiery eyes and skin of scorching red hot rock. It is able to grow to whatever size the lava would let it, and wears a crown. I have to speak wisely and concisely, it’s apparently royalty. This demon rises from the lava and says “Who are you and why are you here?” I say that I am just looking for an artifact, but he doesn’t buy it so he slowly begins to approach. I put my hand to my weapon, but he notices and yells, “You dare challenge me?” in a frightening tone. I gulp and know I have two options, to fight or run.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftyTwo`,`Fight`],
            [`sixty`,`Run`]
        ],
        time: 0
    },
    fiftyTwo: {
        text: `I understand that I have a few options of fighting: fighting with my ice blasters, a lightning sword, or my lightning arrows all paired with my rocket boots.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftyThree`,`Fight wth ice blasters and rocket boots`],
            [`fiftyFour`,`Fight with lightning sword and rocket boots`],
            [`fiftyFive`,`Fight with lightning arrows and rocket boots`]
        ],
        time: 0
    },
    fiftyThree: {
        text: `With my ice blasters I have to fight from a distance since it wouldn't be smart to fight up close. This demon is scorching hot and seems to be capable of throwing lava. I shoot at the demon and I begin to notice that it’s not able to leave the lava. With that I fly around and around the circumference of the volcano using my rocket boots. As I fly around and around I keep on pummeling it with shots on its head eventually tilting the crown. The demon quickly readjusts the crown and gets extremely angry. So I know that the crown had something to do with its health. I only focus my shots at the crown, eventually knocking it off of it and the demon yells “No!” as it falls into the lava. I quickly fly towards the crown before it can hit the lava and activate the demon again. I fly back to the ground and inspect the crown to quickly realize that it won’t help me in my quest for the artifact, so I left the volcano and tossed it back so I could preserve the long standing balance of the wildlife.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 0
    },
    fiftyFour: {
        text: `With the sword I know I will have to fight extremely carefully since I would have to fight up close with the demon. I clench the sword in my hands and charge at it dodging all the lava that was being thrown at me. I fight it up close, moving upward starting from the chest. I see a clear shot to sink my blade into the head, so I take it. I get my boots to move me upward, but before I can get the blade into the head, I feel a burning sensation all over my body. My armor was no longer protecting me and the heat and lava that was thrown at me finally began to fully diminish my health. I’m dead before I could sink my blade into its head and defeat the demon.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 0
    },
    fiftyFive: {
        text: `I pull out my bow and get out my lightning arrows. I’m not sure how strong these things are, but hopefully it's enough. I shoot some arrows, but the demon blocks and dodges every arrow by throwing lava at them. I see an opening. I take a deep breath and pull the arrow back and align my shot. I let it go and its full power was unleashed, breaking the sound barrier with a loud boom. The arrow goes in, the sheer speed and power knocking the demon back and knocking its crown off its head. I quickly go for the crown thinking that it would help me in the quest. As I examine it I find it won’t so I leave. As I do I throw the crown back into the lava to keep the natural balance of the wildlife.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 0
    },
    fiftySix: {
        text: `I begin my search for the artifact in this never ending jungle. This jungle is dense, consists of sky high trees and is rich in life. I manage to maneuver through the dense jungle on a discrete path made by someone or something, which is barely visible. Eventually I stumble across something that looks promising. I find what looks to be eight boulders that form a circle with each boulder being equidistant to the ones next to it. But in the middle there is a large rafflesia. So I begin to walk forward and to the center. I touch it and as soon as I do I hear a rumble. I look around and draw my chain sword. This rumble then turns into a voice and says in an extremely loud and deep voice “Why are you here?”. 
        I am shocked and ask “Who said that?”
        Then the boulders roll and transform into equally large golems. I know I have two options, which are to fight or run.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftySeven`,`Fight`],
            [`sixty`,`Run`]
        ],
        time: 0
    },
    fiftySeven: {
        text: `I think to myself that I have to fight in order to escape this. I say “I’m just here to find an artifact.” 
        “Artifact? That doesn’t answer my question on why you’re here”, the largest golem says.
        I gulp and say “Well that’s why I’m here, for an artifact”. 
        “So you’ve come to steal, punishable of… death!” the main golem says angrily. 
        I know they too are going to fight. I have two options: fighting with my explosive round blasters or my lightning sword.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fiftyEight`,`Fight with explosive round blasters`],
            [`fiftyNine`,`Fight with lightning sword`]
        ],
        time: 0
    },
    fiftyEight: {
        text: `I grab my blasters from the holster and  get a little bit of distance. They all move towards me like how a gorilla crawls, I shoot at them and manage to strike two of them. They look back at their knocked down friends and now the six left golems all get angry and charge at me. I use the surrounding trees to my advantage, climbing them and going from tree to tree to be stealthy. From the trees I manage to take out many of the golems and only have the main golem left, the strongest and biggest golem there. 
        The golem says “You think those trees are in your favor, hiding in the shadows? I am the shadows, forged from fire and stone, being kept away from anyone and anything else alive.”
        I shoot my blaster at his feet from the trees and quickly rush down to the ground. I sneak up behind the golem and say “If you’re the shadows then you would know all about them, then how come I’m behind you?” 
        The golem smirks and says “Take the shot, you deserve it.” 
        “Really? That’s how this is going to go?” 
        “No!” the golem says as it quickly backhands me. This fight is going to be heavy for my body so I need to make quick decisions. We begin to fight and with my rocket boots I travel around it and begin to unload every last bullet I have, causing a really large explosion like how a nuke had just gone off. As the explosion finishes, I look and the golem is down. It says “Well, I guess this is the end of the line for me”. We both nod at each other as a sign of respect for each other in the fight.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 0
    },
    fiftyNine: {
        text: `I power on my rocket boots and quickly draw my sword. I grab the sword knowing that I am going to have a long and grueling fight. The golems charge at me while I am in the middle of all of them. They begin to attack me as I point my sword towards the air and summon lightning from the sky, causing an explosion pushing them all back. I am constantly moving erratically to avoid being hit but some of the time I’m not fast enough to dodge the hits. My armor starts to fully diminish, to the point where it is fully coming off of my body in scraps. All my strikes with the lightning aren’t doing as much damage as I had hoped and I am quickly running out of time to get the artifact and leave. I see a final chance with the lightning by bringing the largest lightning bolt I’ve ever produced. So I point my sword to the sky and before I could send it to the main golem, I am struck by the golem with enough force that the sword falls out of my hand. The main golem catches it and points it at me, pushing it through my chest. Before I know it the largest lightning bolt I’ve ever seen strikes me. Once the lightning goes away I can’t even speak. I just simply look at the main golem and nod out of respect for the fight. The golem nods back and simply says “Good fight, and goodbye.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixty`,`Continue`]
        ],
        time: 0
    },
    sixty: {
        text: `Where should I be looking?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`fortySeven`,`Look in the cave`],
            [`fiftyOne`,`Look in the volcano`],
            [`fiftySix`,`Look in the jungle`],
            [`sixtyOne`,`Search for the civilization`]
        ],
        time: 0
    },
    sixtyOne: {
        text: `Those locals I saw earlier must be a part of some civilization. Maybe I should look for that. I stumble through the jungle until I find evidence of a civilized people. It’s a very faint trail that leads around the easiest paths on the dense jungle floor. I pick a direction and walk, following the path. Finally I move aside a big leaf and see it. 
        Houses and other buildings are built into the stone and the mountains. Some of the city seems to have been carved out of the ground, almost like the city is the natural geography. There are people bustling around everywhere. I make my way in.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyTwo`,`Continue`]
        ],
        time: 0
    },
    sixtyTwo: {
        text: `Walking into the city I instantly draw attention. People don’t draw their weapons at me but they do look ready to. I end up at the main square where I can see a couple different things. There is a huge structure that is most definitely the capital building. I’m sure I could find something good there. There is a path that leads into a very decorated building with beautiful stained glass windows that seems to be some kind of church. There’s potential there, especially since these people seem to worship the artifact. I could also just talk to someone in these crowds and see what they know.`,
        oldManText: `“Woah” The old man says while looking around, “This is literally an archaeologist's dream.”
        “I can’t believe that all this went undiscovered.” I say.`,
        variable: 0,
        choices: [
            [`sixtyThree`,`Talk to the leader`],
            [`seventyFour`,`Talk to the prophet`],
            [`eightySeven`,`Talk to civilian`]
        ],
        time: 0
    },
    sixtyThree: {
        text: `I maneuver throughout the city and see a large building like some sort of council building. I walk up the grand steps and get greeted by a bunch of kids. I greet them and walk into the building and in an instant everyone looks at me and the chatter comes a minimum. Whispers are the only sound in the room. Then after a few seconds I walk forward and people look at someone in the distance. I look at this person who I thought was just some guy with a little authority. After overhearing people's whispers, I figured out it was the leader of the city. I know this conversation will be spoken about so I decide to speak highly formal and respectful. I walk up to the leader, shake his hand, and greet him. I ask him about what he is and what he does for the city. He responds with discipline and respect to me, even though he just barely met me.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyFour`,`Ask about artifact`],
            [`sixtyFive`,`Ask about civilization`],
            [`sixtySix`,`Tell him about star`]
        ],
        time: 0
    },
    sixtyFour: {
        text: `I ask “Do you know about the artifact or where it may be?” 
        “No, I don't know its whereabouts, though I do know something about it,” he says. I asked him to explain what he knows about the artifact. He says “I do know of this one saying that may help you. ‘Praecipio tibi, ut ne desinas.’” I ask what it means. He says “It’s an ancient saying passed down from leader to leader. I have no idea what it means.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 0
    },
    sixtyFive: {
        text: `I ask about their civilization. He laughs and invites me to sit.
        “Our ‘civilization’ is not much more than a large family where everyone has a part to play. The jungle forces us to stay together to survive. Only the strong survive. That’s how I was elected. When the previous leader dies, candidates come together and have a tournament where we fight till the other surrenders. I am the strongest fighter in the tribe. But only by a little bit,” He says with a chuckle, “I almost lost the fight because of the shock of finding out that the final opponent was my wife!”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 0
    },
    sixtySix: {
        text: `“Hey there’s something you should know,” I say.
        “What is it?” he asks in a concerned tone.
        “The star it’s going to explode, meaning it’s going to become a supernova,” I tell him.
        “Really? Why don’t I believe you?”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtySeven`,`Be honest`],
            [`sixtyEight`,`Try to trick him into believing you`]
        ],
        time: 0
    },
    sixtySeven: {
        text: `“Look, I'm being completely honest with you. I’m not from here, which you could probably guess. I have advanced technology that allows me to see that the star is at the end of its life cycle. That means it’s going to explode in a massive supernova.” I tell him.
        “Look I told people to not mess or lie to me, now skedaddle and leave me alone.”
        “Look I'm telling the truth, you’re only failing yourself!” I plead.
        “Hah, okay” he says sarcastically, “Now leave me alone and stop lying to me.”
        “Alright, alright. I’ll skedaddle and leave you alone,” I say.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 0
    },
    sixtyEight: {
        text: `“I’m serious. The star’s going to blow” I say.
        “Still not believing it,” he responds.
        I know I won’t get to him with the truth so I make up a lie, “The prophet said so!” 
        He freezes and just says “You talked to the prophet?”
        “Yeah, he was the one that told me the sun is going to explode” I say.
        “You know how I know you’re lying? It’s because he discloses all of his teachings to me so that I am always in the know,” he says, “Now why don’t you skedaddle and leave me alone!”
        “Alright fine I’ll leave you alone” I say.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 0
    },
    sixtyNine: {//this onr is locked unless you talk to civilian
        text: `“Look I don’t know why you don’t believe me, but if you’re that stubborn, I guess I’ll have to show you through a fight,” I say nervously.
        “A fight aye?” he says with a smirk.
        “Yeah, a fight to convince you that what I’m saying is true,” I add.
        “Okay fine. Your fight is accepted,” he says eagerly.
        He grabs two swords from the wall that form an x shape, and hands me one of them. He then takes me down the hall into a massive room with a big pit.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventy`,`Fight offensively`],
            [`seventyOne`,`Fight defensively`],
            [`seventyTwo`,`Try to cheat in the fight`]
        ],
        time: 0
    },
    seventy: {
        text: `So we begin our fight with the swords pointed at each other. I grip the sword strongly and charge at him. He quickly dodges the strike attacks decisively. He slices my shoulder and says “watch all your angles.” I quickly get up and swing and swing but he counters all of my attacks. I get closer to him but he quickly hits his sword against mine, parrying the blow, and in one swift motion he manages to cut me. We continue fighting for a little while until we both feel exhausted. He grips his sword hard and does his finishing strike where in one swift motion hits my hand. It tosses my sword into the air and he catches it. Then leading to him having two swords with me left defenseless. Before I know it I lose and I’m dead, for nothing and with no artifact.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 0
    },
    seventyOne: {
        text: `I grab the sword and grip it tight. I can tell from his stance that he is going to be aggressive, so I decide to stay on the defense. I weave and counter every strike that he attempts. A little into the fight he doesn’t know what to do when I fight defensively so I just have to fight defensively the whole time. After a little while of fighting we both get fatigued. If I want to survive I will have to make my next play extremely well. So because I don’t have the energy to fight for too much longer, I grip my sword tighter than I already am. I roll close to him and hit his hand so he loses his grip and then I hit his sword, launching it into the air. Before he can grab it, I manage to get behind him and get my sword against his neck. As the sword is coming down I grab it, ultimately having both swords against his neck. I then say, “Do you want this to be the end or do you want to believe me?”
        He sighs and says, “Okay fine, now I’ll believe you.” I release my swords and we both get up.
        “Hey, good fight,” he says as he nods to me.
        “Thank you,” I say nodding to him out of respect for one another.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyThree`,`Continue`]
        ],
        time: 0
    },
    seventyTwo: {
        text: `I grab the sword and some smoke bombs. These work in a similar way to poppers, but produce a lot of smoke. I grab a popper, but begin fighting only with my sword. The fight was challenging and fun, but I know if I lost I will most likely be dead. I throw the popper to the floor, surprising him. I manage to hit him until he’s bloodied. I fight only with my sword for a little bit. We are both getting tired and so I know I will have the element of surprise on him, but he is just waiting for me to throw another bomb. I throw one down and attack him but in a split second he disappears. I grip my sword and start swinging toward his direction, but he uses the smoke to his advantage and sneaks up behind me. He strikes the final blow. He walks in front of me and says, “Good fight kid,” as he nods out of respect. Before I can actually convince him, he strikes me dead.`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 0
    },
    seventyThree: {
        text: `What do I do next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyFour`,`Ask about artifact`],
            [`sixtyFive`,`Ask about civilization`],
            [`sixtySix`,`Tell him about star`],
            [`ninetySix`,`Reenter main city`]
        ],
        time: 0
    },
    seventyFour: {
        text: `I walk along the path to the church-like building. It’s a tall tower with a bell at the top. Inside there is a small podium in the center where a man is standing and talking to the various people around him. The room could comfortably fit around 50 people with extra in some galleries above the man. 
        As I walk in he is talking. He seems to be reciting some kind of scripture saying “-does that, will the hero have completed his true quest.” It seems to be some kind of conclusion because as soon as he says that, the quiet room becomes loud with the buzz of conversation about whatever he was talking about before I came in. 
        Once enough people leave I feel comfortable enough to go up and ask some questions. At this point it becomes obvious that he is blind.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyFive`,`Ask about the artifact`],
            [`seventyNine`,`Ask about the civilization`],
            [`eighty`,`Tell him about the star`]
        ],
        time: 0
    },
    seventyFive: {
        text: `“Excuse me sir, can I ask you a question?” I ask.
        “Yes, of course, my child.” He says.
        “The artifact that everyone worships, where is it?”
        “That’s not something for the average person to know.”
        “Well I’m not the average person.”
        “Then who are you?”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventySix`,`A curious citizen`],
            [`seventySeven`,`Tell the truth`],
            [`seventyEight`,`Beat it out of him`]
        ],
        time: 0
    },
    seventySix: {
        text: `“I'm just a normal guy wanting to get closer to my faith.” I say hopefully.
        “You must have duties to attend to, please leave.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 0
    },
    seventySeven: {
        text: `“I’m not from here. I am a human from a society far more advanced than yours. I want to find the artifact to-”
        I was going to say more because I thought he would want more convincing but he cut me off by saying, “It’s in the ocean about just off the nearest coast to this city. You will be able to find it easily because it’s in the eye of a massive whirlpool. I would not go now though, there is a beast defending the entrance that can only be calmed by the special words only the chief knows. In fact, this beast is the thing generating the whirlpool”
        I’m kind of shocked for a moment at all that information but I eventually manage to say, “Why would you tell me all this so easily?”
        “That I can’t tell you, but soon you will know.” He says before leaving me alone in the room.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 0
    },
    seventyEight: {
        text: `I start to grab him and hit him but before I can do anything, a dozen guards jump out of hiding places I didn’t know were there. They impale me with spears before I know what happened. As death slowly comes over me the last thing I hear is the prophet saying, “So close, but you weren’t him.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
        ],
        time: 0
    },
    seventyNine: {
        text: `“Can you tell me some of the history of this place?” I ask.
        He looks kind of confused at why I would ask that question but continues on anyway, “A long time ago the akias visited our ancestors. The akias weren’t like us. They are some kind of extremely advanced alien species. Some say they even had magic.”
        I still don’t really believe this akias story. As much as we have looked, humanity has never found another advanced race like we always hoped. Most people have given up on the idea by now. I could sit here and ponder the existence of aliens for as long as I want, but I have a big blue deadline so I need to get back on topic.
        “This stuff about aliens is all very interesting, but what does all this have to do with the artifact you people worship?” I ask.
        “When the akias people left us, they took all of their influence on this planet with them. Except for two things. They left an artifact and a prophecy connected to it-”
        Prophecy? That’s exactly what I need. I stop him and say, “Tell me the prophecy.”
        “Ok, fine, it goes like this. ‘Upon the dawn of a dying star, the last rays will shine on our hero. The hero casts a single shadow, before others join him. Once the shadows join together the hero will be complete. The hero will use the galaxy’s last prize to save the people of the dying star. Only when the hero does that, will the hero have completed his true quest.’”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 0
    },
    eighty: {
        text: `These people deserve to know what’s about to happen. I might even be able to help them. I would have to give up finding the artifact but I can at least try.
        I go up to him and I say “Excuse me, I have something I need to tell you.” Before I can say anything else he starts talking to me, well, more like he began talking at me. He’s rambling on about me and their religion and whatever else.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyOne`,`Listen and pretend to be a normal citizen`],
            [`eightyTwo`,`Listen and bring it up`],
            [`eightyFour`,`Tell him to shut up and listen`]
        ],
        time: 0
    },
    eightyOne: {
        text: `Once he’s done I say, “Something really bad is about to happen. You need to hear about it. Areps is about to blow!”
        He looks a bit suspicious but then asks, “What is Areps?”
        I’m an idiot. Of course they don’t use the imperial name for the star. “Uhhh, that’s what I call our star.” I tried to explain.
        “Ohhh… run along now,” He said dismissively.
        That was dumb, I have to try something else.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyThree`,`Continue`]
        ],
        time: 0
    },
    eightyTwo: {
        text: `Once he’s finished I say, “Look, something really bad is about to happen. Your star is about to go supernova. That means explode. I can help you.”He laughs and says, “What did I tell you about pranking your elders, Tair.”As much as I tried to convince him, he just kept thinking it was a prank. I’ll have to try something else later.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyThree`,`Continue`]
        ],
        time: 0
    },
    eightyThree: {
        text: `He’s blind so if I leave the church and come back later I can try again. I feel a little bad for exploiting that but you do what you have to.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 0
    },
    eightyFour: {
        text: `Before he can start I cut him off and say, “Shut up! This is more important! The sun is about to EXPLODE!” At first he looks shocked at the disrespect but it got his attention so he listens when I say, “I can help your people. Your star is at the end of its lifetime. You might have noticed it’s gotten bigger and redder, and down here it’s gotten hotter. We don’t have any time left. My ship is probably big enough to fit your entire population inside. You need to tell your people to follow me.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyFive`,`Continue`]
        ],
        time: 0
    },
    eightyFive: {
        text: `He looks at me with almost a sense of satisfaction. It’s almost like he’s proud of me. Strange. 
        Eventually he says, “Alright, I’ll let everyone know. Thank you.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightySix`,`Continue`]
        ],
        time: 0
    },
    eightySix: {
        text: `What do I do next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`seventyFive`,`Ask about the artifact`],
            [`seventyNine`,`Ask about the civilization`],
            [`eighty`,`Tell him about the star`],
            [`ninetySix`,`Reenter main city`]
        ],
        time: 0
    },
    eightySeven: {
        text: `“Hey, can I speak with you?” I said to a random motherly looking woman. 
        “Uhhh, sure?” She answered.
       She looks a little put off by me but hopefully that doesn’t stop her from giving me any info I can use.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyEight`,`Ask about the artifact`],
            [`eightyNine`,`Ask about the prophet`],
            [`ninety`,`Ask about the leader`]
        ],
        time: 0
    },
    eightyEighty: {
        text: `What do you know about the artifact? I’m trying to find it.” 
        “The artifact is a gift from the akias people who visited us long ago.”
        “Okay yeah, but where is it?”
        “I have no idea, I have never seen it. But we worship this thing, what do you intend to do with it once you find it?” She says accusingly.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyOne`,`Sell it`],
            [`ninetyTwo`,`Use it`],
            [`ninetyThree`,`Hide it`]
        ],
        time: 0
    },
    eightyNine: {
        text: `“What do you know about this prophet guy?” I ask.“The prophet is a great man, not just some ‘guy’. They say his blindness gave him the ability to see the truth. But I guess if you wanted to pass yourself off as a local you could. I don’t know if he would appreciate the dishonesty though.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 0
    },
    ninety: {
        text: `“Tell me about the big guy in the palace. What’s the leader of you weirdos like?” I ask.
        “What makes you think we are weirdos?! The leader could crush you with his pinky finger! He is the strongest out of all of us. But the only way to get him to change his mind is to beat it into him. He knows how to fight in many ways, but from what I hear he needs to get better at fighting against a defensive opponent. Good luck!” She says with a laugh.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 0
    },
    ninetyOne: {
        text: `“I’m going to sell it to the highest bidder. It will make me rich and famous. The last great mystery solved by me. To be honest I really don’t care about the thing.” I say before I can stop myself.
        She looks horrified and then slaps me and walks away without a word.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 0
    },
    ninetyTwo: {
        text: `“When I find it I will study it and find out how to use it myself. I don’t know what I’ll do with it but I promise I will do something great.” 
        She looks shocked. She must have got something special out of those two sentences because she acts like she made some great revelation. These people are so weird.`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 0
    },
    ninetyThree: {
        text: `“Once I find it I’m going to hide it to make sure it doesn’t fall into the wrong hands.”
        She looks at me like I’m an idiot and says, “Don’t you think it might be pretty well hidden here already?”
        I get flustered and say, “Shut up! I’ll figure it out when I get there.”`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`ninetyFour`,`Continue`]
        ],
        time: 0
    },
    ninetyFour: {
        text: `What should I do next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`eightyEight`,`Ask about the Artifact`],
            [`eightyNine`,`Ask about the prophet`],
            [`ninety`,`Ask about the leader`]
        ],
        time: 0
    },
    ninetyFive: {
        text: `I aboard my ship and begin to enter the location to get the artifact. Something about it feels off because I know I essentially have two choices: save the people or get the artifact. Do I go search for the artifact or save the people?`,
        oldManText: `The old man says to me, “You know if you do this you are abandoning an entire civilization to die.” “What would you have me do?” I ask
        “Well, the archaeologist in me wants to find and study this artifact, but the human in me wants to save the people. It’s up to you.”`,
        variable: ["oldMan",1],       
        choices: [
            [`ninetySix`,`No, reenter main city`],
            [`ninetySeven`,`Yes`]
        ],
        time: 0
    },
    ninetySix: {
        text: `I reenter the main city. Where to next?`,
        oldManText: ``,
        variable: 0,       
        choices: [
            [`sixtyThree`,`Talk to the leader`],
            [`seventyFour`,`Talk to the prophet`],
            [`eightySeven`,`Talk to civilian`]
            //[`ninetyFive`,`Search for artifact?`] could possibly be locked, bring it up tmrw
            //[`oneHundredTwentySix`,`Save the people`] locked off until you've convinced both leader and prophet
        ],
        time: 0
    },
    ninetySeven: {
        text: `I finally have enough information to get the artifact. After looking at how much time I have left I know I have to hurry. I can hear the whirlpool before I can see it. It sounds like a thousand waves crashing against another thousand waves at the same time. Somehow all that noise isn’t enough to cover up the sound of the monster breathing. I can literally see its slow breath heaving up and down. There was also a strange creaking noise that popped every once in a while. I assumed that it had something to do with how it generates the whirlpool.
        Once I was close enough I set my ship to stay idle 50 feet above the water. I can see all the way down the massive whirlpool into the beast’s mouth. The whirlpool itself is probably 100s of feet across and about a 100 feet down. There was heavy mist in the air from the crashing waves and whatever else.I stepped out onto the deck and felt the cool mist. I thought it was refreshing until I realized it’s probably more of that beast’s saliva than anything else. I bellowed the words, “PRAECIPIO TIBI, UT NE DESINAS!”Somehow it heard me because suddenly the loud creaking from before turned into a light buzz as the raging whirlpool changed into a smooth tunnel. Apparently the monster can keep the water rotating at such a slow pace it almost looks frozen, all while the structural integrity of the tunnel remains intact. I went back into my ship and started the descent.`,
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
    oneHundredFive: {
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
    oneHundredSix: {
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
    oneHundredSeven: {
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
    oneHundredEight: {
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
    oneHundredNine: {
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
    oneHundredTen: {
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
    oneHundredEleven: {
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
    oneHundredTwelve: {
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
    oneHundredThirteen: {
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
    oneHundredFourteen: {
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
    oneHundredFifteen: {
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
    oneHundredSixteen: {
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
    oneHundredSeventeen: {
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
    oneHundredEighteen: {
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
    oneHundredNineteen: {
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
    oneHundredTwenty: {
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
    oneHundredTwentyOne: {
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
    oneHundredTwentyTwo: {
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
    oneHundredTwentyThree: {
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
    oneHundredTwentyFour: {
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
    oneHundredTwentyFive: {
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
    oneHundredTwentySix: {
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
    oneHundredTwentySeven: {
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
    oneHundredTwentyEight: {
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
    oneHundredTwentyNine: {
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
    oneHundredThirty: {
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
    oneHundredThirtyOne: {
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
    oneHundredThirtyTwo: {
        text: ` `,
        oldManText: ``,
        variable: 0,       
        choices: [
            [``,``],
            [``,``],
            [``,``]
        ],
        time: 0
    }
};

function storyLoop (number){ //all of the mechanics
    storyArray.push(number);
    timeLeft -= story[number].time; //subtracts time     
    if (timeLeft <= 10 && artifactDoor == 'closed'){ //special events
        document.getElementById('storyText').innerHTML += '<i><br><br>Suddenly a loud rumbling can be heard all across the entire planet. A huge beacon of light shoots out from the ocean. Something important must be happening there</i></br></br> ';
        story['ninetySeven'].choices = [['oneHundredTwentyTwo', 'Continue']];
        artifactDoor = 'open';
    } else if (timeLeft <= 5 && artifactDoor == 'open'){
        document.getElementById('storyText').innerHTML += "<i><br><br>The beacon of light vanishes</i></br></br> ";
        story['ninetySeven'].choices = [['placeholder', 'placeholder'], ['placeholder', 'placeholder'], ['placeholder', 'placeholder']];
        artifactDoor = 'closed forever';
    } else if (timeLeft <= 0){
        timeLeft = 0;
        document.getElementById('storyText').innerHTML += "<br><br>I’m out of time. I need to get back to my ship. I start running hoping that I have enough time to escape. I finally reach my ship and get in. As I’m flying away I look back at the star. It looks giant and red. Then there’s a flash of light. I should have enough time to get away. I start flying away but something weird happens. Even though I’m powering up the engines I’m slowing down. Then the ship stops and starts going backwards. The star’s gravity is enough to pull me in. I give up. I turn around and watch as the beautiful and massive explosion turns me into nothing in an instant.";
    }
    if(timeLeft <= 30){
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
            case 'conviceLeaders':
                convinceLeaders += story[number].variable[i+1];
                break;
            case 'artifactInfo':
                artifactInfo += story[number].variable[i+1];
                break;
            case 'trueEnding':
                trueEnding += story[number].variable[i+1];
                break;
            case 'death':
                death += story[number].variable[i+1];
                break;
            default:
                alert('something broke lol, try restarting'); //debugging tool
        }
    }    
    document.getElementById('choiceMenu').innerHTML = ''; //clears all of the old choices
    if(timeLeft > 0){
    let currentAddedText = ''; //holds the new text to be added
    if(oldMan == 0){ //adds the main text and optional text if needed
        currentAddedText = story[number].text;
    } else if (oldMan == 1) {
    currentAddedText = story[number].text + story[number].oldManText;
    }
    document.getElementById('storyText').innerHTML += `<br><br>${currentAddedText}`; //adds the text to the main story
    if (death == 1){
        document.getElementById('menu').innerHTML = 'GAME OVER! Maybe try another path?';
    }
    if (knowChief == 1){
        story['oneHundred'].choices.push(['placeholder', 'placeholder']);
        knowChief = -1000000;
    }
    if (convinceLeaders = 2){
        story['oneHundred'].choices.push(['placeholder', 'placeholder']);
        convinceLeaders = -1000000;
    }
    if (artifactInfo == 2){
        story['oneHundred'].choices.push(['placeholder', 'placeholder']);
        artifactInfo = -1000000;
    }    
    if (trueEnding == 9){
        story['oneHundred'].choices.push(['placeholder', 'Continue']);
        trueEnding = -10000000;
    }
    for(i = 0; i < story[number].choices.length; i++){ //loops for how many choices there are
        let btn = document.createElement('button'); //creates a button HTML tag inside of a variable
        btn.setAttribute('onclick', `storyLoop('${story[number].choices[i][0]}')`); //adds an onclick attribute to the button with the specific pointer needed
        btn.innerHTML = story[number].choices[i][1]; //adds the button text
        document.getElementById('choiceMenu').appendChild(btn); //adds the button to the UI
    } 
}  
}