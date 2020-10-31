console.log("Story Generator Module Loaded!");

var names = [];
var descriptions = [];
var mainCharacters = [];
var locations = [];
var secondCharacters = [];
var secondCharacterNames = [];
var giftGiversNames = [];
var giftGivers = [];
var tools = [];
var problems = [];
var villains = [];
var travelsTo = [];
var travelsHow = [];
var travelConflict = [];
var villainWeakness = [];
var solutions = [];
var prize = [];

var nameContainer = document.querySelector("#js-name");
var descriptionContainer = document.querySelector("#js-description");
var mainCharacterContainer = document.querySelector("#js-main-character");
var locationContainer = document.querySelector("#js-location");
var secondCharacterNameContainer = document.querySelector("#js-second-character-name");
var secondCharacterContainer = document.querySelector("#js-second-character");
var giftGiverNameContainer = document.querySelector("#js-gift-giver-name");
var giftGiverContainer = document.querySelector("#js-gift-giver");
var toolContainer = document.querySelector("#js-tool");
var problemContainer = document.querySelector("#js-problem");
var villainContainer = document.querySelector("#js-villain");
var whereTravelContainer = document.querySelector("#js-where-travel");
var howTravelContainer = document.querySelector("#js-how-travel");
var smallTravelConflictContainer = document.querySelector("#js-small-travel-conflict");
var villainWeaknessContainer = document.querySelector("#js-villain-weakness");
var solutionContainer = document.querySelector("#js-solution");
var prizeContainer = document.querySelector("#js-prize");

function loadStory () {
    nameContainer.innerHTML = names[Math.floor(Math.random()*names.length)];
    descriptionContainer.innerHTML = descriptions[Math.floor(Math.random()*descriptions.length)];

    mainCharacterContainer.innerHTML = mainCharacters[Math.floor(Math.random()*mainCharacters.length)];
    locationContainer.innerHTML = locations[Math.floor(Math.random()*locations.length)];
    secondCharacterNameContainer.innerHTML = secondCharacterNames[Math.floor(Math.random()*secondCharacterNames.length)];
    secondCharacterContainer.innerHTML = secondCharacters[Math.floor(Math.random()*secondCharacters.length)];
    giftGiverNameContainer.innerHTML = giftGiversNames[Math.floor(Math.random()*giftGiversNames.length)];
    giftGiverContainer.innerHTML = giftGivers[Math.floor(Math.random()*giftGivers.length)];
    toolContainer.innerHTML = tools[Math.floor(Math.random()*tools.length)];
    problemContainer.innerHTML = problems[Math.floor(Math.random()*problems.length)];
    villainContainer.innerHTML = villains[Math.floor(Math.random()*villains.length)];
    whereTravelContainer.innerHTML = travelsTo[Math.floor(Math.random()*travelsTo.length)];
    howTravelContainer.innerHTML = travelsHow[Math.floor(Math.random()*travelsHow.length)];
    smallTravelConflictContainer.innerHTML = travelConflict[Math.floor(Math.random()*travelConflict.length)];
    villainWeaknessContainer.innerHTML = villainWeakness[Math.floor(Math.random()*villainWeakness.length)];
    solutionContainer.innerHTML = solutions[Math.floor(Math.random()*solutions.length)];
    prizeContainer.innerHTML = prize[Math.floor(Math.random()*prize.length)];
}

document.querySelector(".Main-Button").addEventListener("click", loadStory);

let json = [
    {
      "Name": "Lucy",
      "Description of Character": "Cowardly",
      "Main Character": "Lion",
      "Location": "a pirate ship",
      "Second Character Name": "Lucy",
      "Second Character": "and their army of fish",
      "Gift giver name/Wise guide": "Cool Cat Mcgee",
      "Gift Giver": "the wise old tree",
      "Problem": "The water has stopped running",
      "Villain": "Evil B'Wevil",
      "Gift": "a bat",
      "Where You Travel": "a deep dark cave",
      "How You Travel": "a tandem bicycle",
      "Something that happens while you travel": "A kid's balloon is stuck in a tree",
      "Villain Weakness": "butter",
      "Solution": "A big battle that you win",
      "Prize": "a trophy"
    },
    {
      "Name": "Larry",
      "Description of Character": "Brave",
      "Main Character": "Bear",
      "Location": "an ancient castle",
      "Second Character Name": "Larry",
      "Second Character": "The eagle",
      "Gift giver name/Wise guide": "Randall",
      "Gift Giver": "the semi hibernating grumpy bear",
      "Problem": "A great fire threatens the town",
      "Villain": "Seamus the menace",
      "Gift": "a swiss army knife",
      "Where You Travel": "the highest mountain ever",
      "How You Travel": "a great white shark with a saddle",
      "Something that happens while you travel": "The road is blocked by bandits",
      "Villain Weakness": "the words \"I love you",
      "Solution": "A game",
      "Prize": "a big delicious cake"
    },
    {
      "Name": "Bob",
      "Description of Character": "Shy",
      "Main Character": "Princess",
      "Location": "dark forest",
      "Second Character Name": "Bob",
      "Second Character": "The toothless beaver",
      "Gift giver name/Wise guide": "Greg",
      "Gift Giver": "the small secret cave",
      "Problem": "Someone stole a precious item",
      "Villain": "Lionel the loathsome",
      "Gift": "cornbread",
      "Where You Travel": "a mighty ship out on the bay",
      "How You Travel": "rollerskates",
      "Something that happens while you travel": "A dragon guarding an entrance",
      "Villain Weakness": "a hug",
      "Solution": "A riddle",
      "Prize": "300 million high fives"
    },
    {
      "Name": "Phil",
      "Description of Character": "Sly",
      "Main Character": "Butterfly",
      "Location": "a farm",
      "Second Character Name": "Phil",
      "Second Character": "The guitar playing walrus",
      "Gift giver name/Wise guide": "Terry",
      "Gift Giver": "the lake",
      "Problem": "Someones been kidnapped",
      "Villain": "Mary the masked mistress",
      "Gift": "a sword",
      "Where You Travel": "a haunted castle",
      "How You Travel": "magic fast running shoes",
      "Something that happens while you travel": "Some ants challenge you to a card game",
      "Villain Weakness": "water",
      "Solution": "A race",
      "Prize": "you become the King/Queen"
    },
    {
      "Name": "Penelope",
      "Description of Character": "Pink haired",
      "Main Character": "Pirate",
      "Location": "your favorite restaurant",
      "Second Character Name": "Penelope",
      "Second Character": "The firefighter",
      "Gift giver name/Wise guide": "Ribity Rabit",
      "Gift Giver": "the fountain",
      "Problem": "Someone stole the sun",
      "Villain": "Evelyn the Evil",
      "Gift": "an axe",
      "Where You Travel": "the aquarium",
      "How You Travel": "a magic broom",
      "Something that happens while you travel": "A butterfly asks you to help his friend that can't get out of his cocoon",
      "Villain Weakness": "singing",
      "Solution": "A dance battle",
      "Prize": "Your very own concert"
    },
    {
      "Name": "Alex",
      "Description of Character": "Nimble",
      "Main Character": "Tree",
      "Location": "a fancy hotel",
      "Second Character Name": "Alex",
      "Second Character": "The talking tooth",
      "Gift giver name/Wise guide": "Gary Indiana",
      "Gift Giver": "the rubiks cube",
      "Problem": "A giant in the sky is talking too loud",
      "Villain": "Bees",
      "Gift": "bees",
      "Where You Travel": "a church",
      "How You Travel": "a pegasus",
      "Something that happens while you travel": "A giant asks you to reclaim his golden egg",
      "Villain Weakness": "3 million high fives",
      "Solution": "Rock paper scissors",
      "Prize": "You get every popscicle ever"
    },
    {
      "Name": "Trevor",
      "Description of Character": "Tiny",
      "Main Character": "Baseball Player",
      "Location": "elementary school",
      "Second Character Name": "Trevor",
      "Second Character": "The Jack-o-lantern",
      "Gift giver name/Wise guide": "Madam Marvelous",
      "Gift Giver": "the time traveler",
      "Problem": "Penguins are invading",
      "Villain": "Alberto the grumpy garbage pail",
      "Gift": "excalibur",
      "Where You Travel": "an ancient temple",
      "How You Travel": "a gigantic Dog",
      "Something that happens while you travel": "A spider asks you to help weave its web",
      "Villain Weakness": "really hot peppers",
      "Solution": "Guessing a number between 1 and 20",
      "Prize": "Your very own bear"
    },
    {
      "Name": "Beatrice",
      "Description of Character": "Gigantic",
      "Main Character": "Basketball Player",
      "Location": "middle school",
      "Second Character Name": "Beatrice",
      "Second Character": "Cloudly",
      "Gift giver name/Wise guide": "Burt",
      "Gift Giver": "the crystal ball",
      "Problem": "A lion has a thorn in its paw",
      "Villain": "Ned the lead head",
      "Gift": "a blueberry pie",
      "Where You Travel": "the really smelly cave of Dragoon",
      "How You Travel": "300 million ants",
      "Something that happens while you travel": "A pack of wolves is racing and they need a judge",
      "Villain Weakness": "big trucks",
      "Solution": "Flip a coin",
      "Prize": "the coolest magic power you can think of"
    },
    {
      "Name": "Gladice",
      "Description of Character": "Goofy",
      "Main Character": "Tennis Player",
      "Location": "high school",
      "Second Character Name": "Gladice",
      "Second Character": "The Lightning bolt",
      "Gift giver name/Wise guide": "Willard",
      "Gift Giver": "the singer at a concert",
      "Problem": "Someone keeps stealing your favorite toy",
      "Villain": "Terry the homesick dragon",
      "Gift": "three pickles",
      "Where You Travel": "where they started",
      "How You Travel": "a magic Carpet",
      "Something that happens while you travel": "A wizard needs help on their magic test",
      "Villain Weakness": "stinky seafood",
      "Solution": "An epic battle",
      "Prize": "300 pieces of gold"
    },
    {
      "Name": "Maggie",
      "Description of Character": "Silly",
      "Main Character": "Coder",
      "Location": "college",
      "Second Character Name": "Maggie",
      "Second Character": "The Just",
      "Gift giver name/Wise guide": "Bart",
      "Gift Giver": "the ancient chest",
      "Problem": "There is not enough butter in the town",
      "Villain": "Brock O'lee",
      "Gift": "a bow that shoots zappy arrows",
      "Where You Travel": "inside a gigantic clam",
      "How You Travel": "a truck",
      "Something that happens while you travel": "A prince needs rescuing from a tall tower",
      "Villain Weakness": "boogers",
      "Solution": "The coolest handshake competition",
      "Prize": "a very pretty painting"
    },
    {
      "Name": "Greg",
      "Description of Character": "Happy",
      "Main Character": "Superhero",
      "Location": "a mushroom forest",
      "Second Character Name": "George",
      "Second Character": "The noble dragon",
      "Gift giver name/Wise guide": "Elonious Munk",
      "Gift Giver": "the great one",
      "Problem": "All of the food tastes like broccoli",
      "Villain": "Harper the angry tomato",
      "Gift": "a magical map",
      "Where You Travel": "your favorite storybook world",
      "How You Travel": "a dump truck",
      "Something that happens while you travel": "A princess needs rescuing from a tall tower",
      "Villain Weakness": "lobster pinchers",
      "Solution": "A game of who can count to ten the fastest",
      "Prize": "a day off of school"
    },
    {
      "Name": "Margeret",
      "Description of Character": "Sad",
      "Main Character": "Mermaid",
      "Location": "a park",
      "Second Character Name": "Margeret",
      "Second Character": "The just",
      "Gift giver name/Wise guide": "Brock O Lee",
      "Gift Giver": "the baseball player",
      "Problem": "Nobody can find their keys",
      "Villain": "Wes the musical weasel",
      "Gift": "a mysterious potion",
      "Where You Travel": "a three mile long pickle",
      "How You Travel": "a bulldozer",
      "Something that happens while you travel": "A school bus has spun out of control",
      "Villain Weakness": "salt and pepper",
      "Solution": "Last one to run to the front door and back loses",
      "Prize": "never-ending playtime"
    },
    {
      "Name": "Buck",
      "Description of Character": "Scared",
      "Main Character": "Balloon",
      "Location": "a skate park",
      "Second Character Name": "Buck",
      "Second Character": "the duck",
      "Gift giver name/Wise guide": "Thor",
      "Gift Giver": "the kickball",
      "Problem": "Everyone has fallen into a deep slumber",
      "Villain": "The Judge",
      "Gift": "a really cool hat",
      "Where You Travel": "a lighthouse",
      "How You Travel": "a semi truck",
      "Something that happens while you travel": "A shark has a toothache and needs your help",
      "Villain Weakness": "mustard",
      "Solution": "Baking competition",
      "Prize": "you become a pirate captain and sail the seven seas"
    },
    {
      "Name": "Bud",
      "Description of Character": "Upset",
      "Main Character": "Coffee Bean",
      "Location": "inside a computer",
      "Second Character Name": "Bud",
      "Second Character": "Pig",
      "Gift giver name/Wise guide": "Emerald clear",
      "Gift Giver": "the great Tahini",
      "Problem": "The hero is slowly shrinking",
      "Villain": "Java Man",
      "Gift": "Pablo, the all-knowing parakeet",
      "Where You Travel": "a courtroom",
      "How You Travel": "a pidgeon",
      "Something that happens while you travel": "A maple tree is crying. You ask whats wrong",
      "Villain Weakness": "pollen",
      "Solution": "Eating competition",
      "Prize": "the villain becomes your new sidekick"
    },
    {
      "Name": "Soltar",
      "Description of Character": "Buzzing",
      "Main Character": "Cloud",
      "Location": "a thunderstorm",
      "Second Character Name": "Soltar",
      "Second Character": "The one foot tall bear",
      "Gift giver name/Wise guide": "Fisherman Joe",
      "Gift Giver": "the incredible",
      "Problem": "Everyone has forgotten how to smile",
      "Villain": "Big Belly Long Step",
      "Gift": "a glow-in-the-dark yoyo",
      "Where You Travel": "the place where the sky is painted all sorts of colors",
      "How You Travel": "a race car",
      "Something that happens while you travel": "A bird doesn't know how to finish its song",
      "Villain Weakness": "Christmas carols",
      "Solution": "The villain hides in their lair and you must find them",
      "Prize": "Ice Cream!"
    },
    {
      "Name": "Bartholomeow",
      "Description of Character": "Mellow",
      "Main Character": "Bee",
      "Location": "The Amazon",
      "Second Character Name": "Gordy",
      "Second Character": "The Salamander",
      "Gift giver name/Wise guide": "Fisherman Jane",
      "Gift Giver": "the really excellent fisher",
      "Problem": "A faraway kingdom asks for help",
      "Villain": "The Drummer",
      "Gift": "an ancient scepter",
      "Where You Travel": "the Empire State Building",
      "How You Travel": "a kangaroo",
      "Something that happens while you travel": "Another kid needs help with their math homework",
      "Villain Weakness": "yelling math equations",
      "Solution": "Play a game of tennis",
      "Prize": "a very colorful trophy"
    },
    {
      "Name": "Thor",
      "Description of Character": "Hyper",
      "Main Character": "Cat",
      "Location": "sunken ship",
      "Second Character Name": "Thor",
      "Second Character": "The shy hedgehog",
      "Gift giver name/Wise guide": "Princess Ratattoullie",
      "Gift Giver": "the whistler",
      "Problem": "The internet has been down for days",
      "Villain": "Cactus Draccus",
      "Gift": "a shovel",
      "Where You Travel": "Paris",
      "How You Travel": "a shooting star",
      "Something that happens while you travel": "Some lizards are having a pushup competition and challenge you",
      "Villain Weakness": "silly noises",
      "Solution": "Fashion competition",
      "Prize": "the ability to talk to animals"
    },
    {
      "Name": "Loki",
      "Description of Character": "Reading",
      "Main Character": "Sorcerer",
      "Location": "The Grand Canyon",
      "Second Character Name": "Sir Lancelot",
      "Second Character": "The hyper crocodile",
      "Gift giver name/Wise guide": "King Doodlebug",
      "Gift Giver": "the fairy friend",
      "Problem": "Dragons invade and demand a treasure",
      "Villain": "Peregrinning Falcon",
      "Gift": "a magic lamp",
      "Where You Travel": "a cowboy town in Arizona",
      "How You Travel": "an Airplane",
      "Something that happens while you travel": "A puppy challenges you to see who can blink the fastest in thrity seconds",
      "Villain Weakness": "whistling",
      "Solution": "Jump rope endurance contest",
      "Prize": "a lifetime supply of pudding"
    },
    {
      "Name": "Curly",
      "Description of Character": "Blue",
      "Main Character": "Brave knight",
      "Location": "in a really big tree",
      "Second Character Name": "Silly Pants",
      "Second Character": "The Bashefull",
      "Gift giver name/Wise guide": "Jerry Jester",
      "Gift Giver": "the richest in all the land",
      "Problem": "A spaceship has broken down, needs parts",
      "Villain": "Merk The Magical",
      "Gift": "a satchel that can store anything",
      "Where You Travel": "Mars",
      "How You Travel": "a wave",
      "Something that happens while you travel": "Some aliens start attacking",
      "Villain Weakness": "pretending to be asleep",
      "Solution": "You need to unplug their doomsday device",
      "Prize": "a big fluffy bed that always gives you good dreams"
    },
    {
      "Name": "Zev",
      "Description of Character": "Orange",
      "Main Character": "Lad",
      "Location": "at your favorite band's concert",
      "Second Character Name": "Deb",
      "Second Character": "The huge turtle",
      "Gift giver name/Wise guide": "Marko Polo",
      "Gift Giver": "the singer in a band",
      "Problem": "There's a shortage of shampoo",
      "Villain": "Monster Mike",
      "Gift": "a color-changing pen",
      "Where You Travel": "a space ship",
      "How You Travel": "a sword airplane",
      "Something that happens while you travel": "Someone lost their train ticket and the trains about to leave",
      "Villain Weakness": "falling asleep",
      "Solution": "Defeat their two scary bodyguards",
      "Prize": "a magic cloud that can take you anywhere"
    },
    {
      "Name": "Deb",
      "Description of Character": "Grumpy",
      "Main Character": "Girl",
      "Location": "Yosemite",
      "Second Character Name": "Whisp",
      "Second Character": "The leafless tree",
      "Gift giver name/Wise guide": "Kerri",
      "Gift Giver": "the leader of the jungle",
      "Problem": "All the bees have become very angry",
      "Villain": "Killip the Kelp King",
      "Gift": "a box filled with clams",
      "Where You Travel": "the moon",
      "How You Travel": "a giant slingshot shoots you to your destination",
      "Something that happens while you travel": "A duck has lost its voice and needs you to teach him how to quack again",
      "Villain Weakness": "funny faces",
      "Solution": "A contest to come up with the funniest joke",
      "Prize": "a pet alligator"
    },
    {
      "Name": "Jerry",
      "Description of Character": "Rocking",
      "Main Character": "Shark",
      "Location": "The Atlantic Ocean",
      "Second Character Name": "Mary",
      "Second Character": "The Broken bicycle",
      "Gift giver name/Wise guide": "Woofe Hudson",
      "Gift Giver": "the car",
      "Problem": "The hero's family has been kidnapped",
      "Villain": "Lamy the Llama",
      "Gift": "a book filled with secret wisdom",
      "Where You Travel": "the back of a giant turtle",
      "How You Travel": "a train",
      "Something that happens while you travel": "A sailor want to go somewhere on vacation. They need ideas",
      "Villain Weakness": "your best friend",
      "Solution": "A game of \"I spy",
      "Prize": "a 300 pound wheel of cheese"
    },
    {
      "Name": "Amanda",
      "Description of Character": "Grey",
      "Main Character": "Hedgehog",
      "Location": "The Pacific Ocean",
      "Second Character Name": "Luis",
      "Second Character": "The singing guitar",
      "Gift giver name/Wise guide": "Silly pants",
      "Gift Giver": "the 100 foot tall basketball",
      "Problem": "The mountains are melting",
      "Villain": "Craig the Sad Cliff",
      "Gift": "hearing aids",
      "Where You Travel": "inside a big glass bottle",
      "How You Travel": "a taxi",
      "Something that happens while you travel": "Two witches are having an argument and ask you to settle it",
      "Villain Weakness": "taking photos of them",
      "Solution": "You must survive their labyrinth of terror",
      "Prize": "a door to a magical realm that only you can open"
    },
    {
      "Name": "Silly pants",
      "Description of Character": "Old",
      "Main Character": "Bunny",
      "Location": "a wintery forest",
      "Second Character Name": "Doodle face",
      "Second Character": "The hopskotch master",
      "Gift giver name/Wise guide": "Esmerelda",
      "Gift Giver": "the uncatchable jackal",
      "Problem": "There's a bubble fire in the next town over",
      "Villain": "Lucy the Lighthouse",
      "Gift": "dragonscale armor",
      "Where You Travel": "never ending sand dunes",
      "How You Travel": "pixie dust to fly",
      "Something that happens while you travel": "You come to a river of molasses that runs across your path",
      "Villain Weakness": "braiding their hair",
      "Solution": "Rap battle",
      "Prize": "you become a knight at King Arthurs table"
    },
    {
      "Name": "Joseph",
      "Description of Character": "Blinking",
      "Main Character": "Bat",
      "Location": "The Himalayas",
      "Second Character Name": "Theodore",
      "Second Character": "batteries not included",
      "Gift giver name/Wise guide": "Clearance",
      "Gift Giver": "the crab",
      "Problem": "Everyones going bald",
      "Villain": "Baltore the Bald",
      "Gift": "the pipe of peace",
      "Where You Travel": "the center of the galaxy",
      "How You Travel": "a rocket ship powered by fun",
      "Something that happens while you travel": "A marching band loses their trumpet player. They need you to fill in.",
      "Villain Weakness": "bad breath",
      "Solution": "You draw a piece that fixes the issue",
      "Prize": "whipped cream jet pack"
    }
  ]

for (const object in json) {
    names.push(json[object]["Name"]);
    descriptions.push(json[object]["Description of Character"]);
    mainCharacters.push(json[object]["Main Character"]);
    locations.push(json[object]["Location"]);
    secondCharacters.push(json[object]["Second Character"]);
    secondCharacterNames.push(json[object]["Second Character Name"]);
    giftGiversNames.push(json[object]["Gift giver name/Wise guide"]);
    giftGivers.push(json[object]["Gift Giver"]);
    tools.push(json[object]["Gift"]);
    problems.push(json[object]["Problem"]);
    villains.push(json[object]["Villain"]);
    travelsTo.push(json[object]["Where You Travel"]);
    travelsHow.push(json[object]["How You Travel"]);
    travelConflict.push(json[object]["Something that happens while you travel"]);
    villainWeakness.push(json[object]["Villain Weakness"]);
    solutions.push(json[object]["Solution"]);
    prize.push(json[object]["Prize"]);
}

loadStory();
