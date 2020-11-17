console.log("Story Generator Module Loaded!");

var names = [];
var descriptions = [];
var mainCharacters = [];
var locations = [];
var secondCharacters = [];
var secondCharacterNames = [];
var problems = [];
var villains = [];
var travelsTo = [];
var travelsHow = [];
var travelConflict = [];
var villainWeakness = [];
var prize = [];

var nameContainer = document.querySelector("#js-name");
var descriptionContainer = document.querySelector("#js-description");
var mainCharacterContainer = document.querySelector("#js-main-character");
var locationContainer = document.querySelector("#js-location");
var secondCharacterNameContainer = document.querySelector("#js-second-character-name");
var secondCharacterContainer = document.querySelector("#js-second-character");
var problemContainer = document.querySelector("#js-problem");
var villainContainer = document.querySelector("#js-villain");
var whereTravelContainer = document.querySelector("#js-where-travel");
var howTravelContainer = document.querySelector("#js-how-travel");
var smallTravelConflictContainer = document.querySelector("#js-small-travel-conflict");
var villainWeaknessContainer = document.querySelector("#js-villain-weakness");
var prizeContainer = document.querySelector("#js-prize");

function loadStory () {
    nameContainer.innerHTML = names[Math.floor(Math.random()*names.length)];
    descriptionContainer.innerHTML = descriptions[Math.floor(Math.random()*descriptions.length)];

    mainCharacterContainer.innerHTML = mainCharacters[Math.floor(Math.random()*mainCharacters.length)];
    locationContainer.innerHTML = locations[Math.floor(Math.random()*locations.length)];
    secondCharacterNameContainer.innerHTML = secondCharacterNames[Math.floor(Math.random()*secondCharacterNames.length)];
    secondCharacterContainer.innerHTML = secondCharacters[Math.floor(Math.random()*secondCharacters.length)];
    problemContainer.innerHTML = problems[Math.floor(Math.random()*problems.length)];
    villainContainer.innerHTML = villains[Math.floor(Math.random()*villains.length)];
    whereTravelContainer.innerHTML = travelsTo[Math.floor(Math.random()*travelsTo.length)];
    howTravelContainer.innerHTML = travelsHow[Math.floor(Math.random()*travelsHow.length)];
    smallTravelConflictContainer.innerHTML = travelConflict[Math.floor(Math.random()*travelConflict.length)];
    villainWeaknessContainer.innerHTML = villainWeakness[Math.floor(Math.random()*villainWeakness.length)];
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
    "Problem": "The water has stopped running",
    "Villain": "Evil B'Wevil",
    "Where You Travel": "a deep dark cave",
    "How You Travel": "a tandem bicycle",
    "Something that happens while you travel": "A kid's balloon is stuck in a tree",
    "Villain Weakness": "butter",
    "Prize": "a trophy"
  },
  {
    "Name": "Larry",
    "Description of Character": "Brave",
    "Main Character": "Bear",
    "Location": "an ancient castle",
    "Second Character Name": "Larry",
    "Second Character": "The eagle",
    "Problem": "A great fire threatens the town",
    "Villain": "Seamus the menace",
    "Where You Travel": "the highest mountain ever",
    "How You Travel": "a great white shark with a saddle",
    "Something that happens while you travel": "The road is blocked by bandits",
    "Villain Weakness": "the words \"I love you",
    "Prize": "a big delicious cake"
  },
  {
    "Name": "Bob",
    "Description of Character": "Shy",
    "Main Character": "Princess",
    "Location": "dark forest",
    "Second Character Name": "Bob",
    "Second Character": "The toothless beaver",
    "Problem": "Someone stole a precious item",
    "Villain": "Lionel the loathsome",
    "Where You Travel": "a mighty ship out on the bay",
    "How You Travel": "rollerskates",
    "Something that happens while you travel": "A dragon guarding an entrance",
    "Villain Weakness": "a hug",
    "Prize": "300 million high fives"
  },
  {
    "Name": "Phil",
    "Description of Character": "Sly",
    "Main Character": "Butterfly",
    "Location": "a farm",
    "Second Character Name": "Phil",
    "Second Character": "The guitar playing walrus",
    "Problem": "Someones been kidnapped",
    "Villain": "Mary the masked mistress",
    "Where You Travel": "a haunted castle",
    "How You Travel": "magic fast running shoes",
    "Something that happens while you travel": "Some ants challenge you to a card game",
    "Villain Weakness": "water",
    "Prize": "you become the King/Queen"
  },
  {
    "Name": "Penelope",
    "Description of Character": "Pink haired",
    "Main Character": "Pirate",
    "Location": "your favorite restaurant",
    "Second Character Name": "Penelope",
    "Second Character": "The firefighter",
    "Problem": "Someone stole the sun",
    "Villain": "Evelyn the Evil",
    "Where You Travel": "the aquarium",
    "How You Travel": "a magic broom",
    "Something that happens while you travel": "A butterfly asks you to help his friend that can't get out of his cocoon",
    "Villain Weakness": "singing",
    "Prize": "Your very own concert"
  },
  {
    "Name": "Alex",
    "Description of Character": "Nimble",
    "Main Character": "Tree",
    "Location": "a fancy hotel",
    "Second Character Name": "Alex",
    "Second Character": "The talking tooth",
    "Problem": "A giant in the sky is talking too loud",
    "Villain": "Bees",
    "Where You Travel": "a church",
    "How You Travel": "a pegasus",
    "Something that happens while you travel": "A giant asks you to reclaim his golden egg",
    "Villain Weakness": "3 million high fives",
    "Prize": "You get every popscicle ever"
  },
  {
    "Name": "Trevor",
    "Description of Character": "Tiny",
    "Main Character": "Baseball Player",
    "Location": "elementary school",
    "Second Character Name": "Trevor",
    "Second Character": "The Jack-o-lantern",
    "Problem": "Penguins are invading",
    "Villain": "Alberto the grumpy garbage pail",
    "Where You Travel": "an ancient temple",
    "How You Travel": "a gigantic Dog",
    "Something that happens while you travel": "A spider asks you to help weave its web",
    "Villain Weakness": "really hot peppers",
    "Prize": "Your very own bear"
  },
  {
    "Name": "Beatrice",
    "Description of Character": "Gigantic",
    "Main Character": "Basketball Player",
    "Location": "middle school",
    "Second Character Name": "Beatrice",
    "Second Character": "Cloudly",
    "Problem": "A lion has a thorn in its paw",
    "Villain": "Ned the lead head",
    "Where You Travel": "the really smelly cave of Dragoon",
    "How You Travel": "300 million ants",
    "Something that happens while you travel": "A pack of wolves is racing and they need a judge",
    "Villain Weakness": "big trucks",
    "Prize": "the coolest magic power you can think of"
  },
  {
    "Name": "Gladice",
    "Description of Character": "Goofy",
    "Main Character": "Tennis Player",
    "Location": "high school",
    "Second Character Name": "Gladice",
    "Second Character": "The Lightning bolt",
    "Problem": "Someone keeps stealing your favorite toy",
    "Villain": "Terry the homesick dragon",
    "Where You Travel": "where they started",
    "How You Travel": "a magic Carpet",
    "Something that happens while you travel": "A wizard needs help on their magic test",
    "Villain Weakness": "stinky seafood",
    "Prize": "300 pieces of gold"
  },
  {
    "Name": "Maggie",
    "Description of Character": "Silly",
    "Main Character": "Coder",
    "Location": "college",
    "Second Character Name": "Maggie",
    "Second Character": "The Just",
    "Problem": "There is not enough butter in the town",
    "Villain": "Brock O'lee",
    "Where You Travel": "inside a gigantic clam",
    "How You Travel": "a truck",
    "Something that happens while you travel": "A prince needs rescuing from a tall tower",
    "Villain Weakness": "boogers",
    "Prize": "a very pretty painting"
  },
  {
    "Name": "Greg",
    "Description of Character": "Happy",
    "Main Character": "Superhero",
    "Location": "a mushroom forest",
    "Second Character Name": "George",
    "Second Character": "The noble dragon",
    "Problem": "All of the food tastes like broccoli",
    "Villain": "Harper the angry tomato",
    "Where You Travel": "your favorite storybook world",
    "How You Travel": "a dump truck",
    "Something that happens while you travel": "A princess needs rescuing from a tall tower",
    "Villain Weakness": "lobster pinchers",
    "Prize": "a day off of school"
  },
  {
    "Name": "Margeret",
    "Description of Character": "Sad",
    "Main Character": "Mermaid",
    "Location": "a park",
    "Second Character Name": "Margeret",
    "Second Character": "The just",
    "Problem": "Nobody can find their keys",
    "Villain": "Wes the musical weasel",
    "Where You Travel": "a three mile long pickle",
    "How You Travel": "a bulldozer",
    "Something that happens while you travel": "A school bus has spun out of control",
    "Villain Weakness": "salt and pepper",
    "Prize": "never-ending playtime"
  },
  {
    "Name": "Buck",
    "Description of Character": "Scared",
    "Main Character": "Balloon",
    "Location": "a skate park",
    "Second Character Name": "Buck",
    "Second Character": "the duck",
    "Problem": "Everyone has fallen into a deep slumber",
    "Villain": "The Judge",
    "Where You Travel": "a lighthouse",
    "How You Travel": "a semi truck",
    "Something that happens while you travel": "A shark has a toothache and needs your help",
    "Villain Weakness": "mustard",
    "Prize": "you become a pirate captain and sail the seven seas"
  },
  {
    "Name": "Bud",
    "Description of Character": "Upset",
    "Main Character": "Coffee Bean",
    "Location": "inside a computer",
    "Second Character Name": "Bud",
    "Second Character": "Pig",
    "Problem": "The hero is slowly shrinking",
    "Villain": "Java Man",
    "Where You Travel": "a courtroom",
    "How You Travel": "a pidgeon",
    "Something that happens while you travel": "A maple tree is crying. You ask whats wrong",
    "Villain Weakness": "pollen",
    "Prize": "the villain becomes your new sidekick"
  },
  {
    "Name": "Soltar",
    "Description of Character": "Buzzing",
    "Main Character": "Cloud",
    "Location": "a thunderstorm",
    "Second Character Name": "Soltar",
    "Second Character": "The one foot tall bear",
    "Problem": "Everyone has forgotten how to smile",
    "Villain": "Big Belly Long Step",
    "Where You Travel": "the place where the sky is painted all sorts of colors",
    "How You Travel": "a race car",
    "Something that happens while you travel": "A bird doesn't know how to finish its song",
    "Villain Weakness": "Christmas carols",
    "Prize": "Ice Cream!"
  },
  {
    "Name": "Bartholomeow",
    "Description of Character": "Mellow",
    "Main Character": "Bee",
    "Location": "The Amazon",
    "Second Character Name": "Gordy",
    "Second Character": "The Salamander",
    "Problem": "A faraway kingdom asks for help",
    "Villain": "The Drummer",
    "Where You Travel": "the Empire State Building",
    "How You Travel": "a kangaroo",
    "Something that happens while you travel": "Another kid needs help with their math homework",
    "Villain Weakness": "yelling math equations",
    "Prize": "a very colorful trophy"
  },
  {
    "Name": "Thor",
    "Description of Character": "Hyper",
    "Main Character": "Cat",
    "Location": "sunken ship",
    "Second Character Name": "Thor",
    "Second Character": "The shy hedgehog",
    "Problem": "The internet has been down for days",
    "Villain": "Cactus Draccus",
    "Where You Travel": "Paris",
    "How You Travel": "a shooting star",
    "Something that happens while you travel": "Some lizards are having a pushup competition and challenge you",
    "Villain Weakness": "silly noises",
    "Prize": "the ability to talk to animals"
  },
  {
    "Name": "Loki",
    "Description of Character": "Reading",
    "Main Character": "Sorcerer",
    "Location": "The Grand Canyon",
    "Second Character Name": "Sir Lancelot",
    "Second Character": "The hyper crocodile",
    "Problem": "Dragons invade and demand a treasure",
    "Villain": "Peregrinning Falcon",
    "Where You Travel": "a cowboy town in Arizona",
    "How You Travel": "an Airplane",
    "Something that happens while you travel": "A puppy challenges you to see who can blink the fastest in thrity seconds",
    "Villain Weakness": "whistling",
    "Prize": "a lifetime supply of pudding"
  },
  {
    "Name": "Curly",
    "Description of Character": "Blue",
    "Main Character": "Knight",
    "Location": "in a really big tree",
    "Second Character Name": "Silly Pants",
    "Second Character": "The Bashefull",
    "Problem": "A spaceship has broken down, needs parts",
    "Villain": "Merk The Magical",
    "Where You Travel": "Mars",
    "How You Travel": "a wave",
    "Something that happens while you travel": "Some aliens start attacking",
    "Villain Weakness": "pretending to be asleep",
    "Prize": "a big fluffy bed that always gives you good dreams"
  },
  {
    "Name": "Zev",
    "Description of Character": "Orange",
    "Main Character": "Lad",
    "Location": "at your favorite band's concert",
    "Second Character Name": "Deb",
    "Second Character": "The huge turtle",
    "Problem": "There's a shortage of shampoo",
    "Villain": "Monster Mike",
    "Where You Travel": "a space ship",
    "How You Travel": "a sword airplane",
    "Something that happens while you travel": "Someone lost their train ticket and the trains about to leave",
    "Villain Weakness": "falling asleep",
    "Prize": "a magic cloud that can take you anywhere"
  },
  {
    "Name": "Deb",
    "Description of Character": "Grumpy",
    "Main Character": "Girl",
    "Location": "Yosemite",
    "Second Character Name": "Whisp",
    "Second Character": "The leafless tree",
    "Problem": "All the bees have become very angry",
    "Villain": "Killip the Kelp King",
    "Where You Travel": "the moon",
    "How You Travel": "a giant slingshot shoots you to your destination",
    "Something that happens while you travel": "A duck has lost its voice and needs you to teach him how to quack again",
    "Villain Weakness": "funny faces",
    "Prize": "a pet alligator"
  },
  {
    "Name": "Jerry",
    "Description of Character": "Rocking",
    "Main Character": "Shark",
    "Location": "The Atlantic Ocean",
    "Second Character Name": "Mary",
    "Second Character": "The Broken bicycle",
    "Problem": "The hero's family has been kidnapped",
    "Villain": "Lamy the Llama",
    "Where You Travel": "the back of a giant turtle",
    "How You Travel": "a train",
    "Something that happens while you travel": "A sailor want to go somewhere on vacation. They need ideas",
    "Villain Weakness": "your best friend",
    "Prize": "a 300 pound wheel of cheese"
  },
  {
    "Name": "Amanda",
    "Description of Character": "Grey",
    "Main Character": "Hedgehog",
    "Location": "The Pacific Ocean",
    "Second Character Name": "Luis",
    "Second Character": "The singing guitar",
    "Problem": "The mountains are melting",
    "Villain": "Craig the Sad Cliff",
    "Where You Travel": "inside a big glass bottle",
    "How You Travel": "a taxi",
    "Something that happens while you travel": "Two witches are having an argument and ask you to settle it",
    "Villain Weakness": "taking photos of them",
    "Prize": "a door to a magical realm that only you can open"
  },
  {
    "Name": "Silly pants",
    "Description of Character": "Old",
    "Main Character": "Bunny",
    "Location": "A Wintery Forest",
    "Second Character Name": "Doodle face",
    "Second Character": "The hopskotch master",
    "Problem": "There's a bubble fire in the next town over",
    "Villain": "Lucy the Lighthouse",
    "Where You Travel": "never ending sand dunes",
    "How You Travel": "pixie dust to fly",
    "Something that happens while you travel": "You come to a river of molasses that runs across your path",
    "Villain Weakness": "braiding their hair",
    "Prize": "you become a knight at King Arthurs table"
  },
  {
    "Name": "Joseph",
    "Description of Character": "Blinking",
    "Main Character": "Bat",
    "Location": "The Himalayas",
    "Second Character Name": "Theodore",
    "Second Character": "batteries not included",
    "Problem": "Everyones going bald",
    "Villain": "Baltore the Bald",
    "Where You Travel": "the center of the galaxy",
    "How You Travel": "a rocket ship powered by fun",
    "Something that happens while you travel": "A marching band loses their trumpet player. They need you to fill in.",
    "Villain Weakness": "bad breath",
    "Prize": "whipped cream jet pack"
  },
  {
    "Name": "Gray",
    "Description of Character": "Flat",
    "Main Character": "Street Light",
    "Location": "Kathmandu",
    "Second Character Name": "Harmony",
    "Second Character": "The Face on the Mountain",
    "Problem": "Everyones covered in piles of grass",
    "Villain": "The Poly-tick",
    "Where You Travel": "A restaurant on saturns rings",
    "How You Travel": "a rhino",
    "Something that happens while you travel": "a whale thinks its a cheetah and chases you",
    "Villain Weakness": "coffeecoffeecoffeecoffee",
    "Prize": ""
  },
  {
    "Name": "Ace",
    "Description of Character": "Graceful",
    "Main Character": "Apple",
    "Location": "San Antonio",
    "Second Character Name": "Mary",
    "Second Character": "The Stinky",
    "Problem": "The power has gone out",
    "Villain": "Gasseous Goose",
    "Where You Travel": "an ice palace",
    "How You Travel": "a frog on each foot",
    "Something that happens while you travel": "a cow is stuck in a pie",
    "Villain Weakness": "stinky feet",
    "Prize": ""
  },
  {
    "Name": "Armie",
    "Description of Character": "Faithful",
    "Main Character": "Rubber Duck",
    "Location": "Rome",
    "Second Character Name": "Catalina",
    "Second Character": "The palm tree",
    "Problem": "There are nothing but left shoes everywhere",
    "Villain": "Three Beans",
    "Where You Travel": "a tiny town inside a campfire",
    "How You Travel": "wings built from cardboard boxes",
    "Something that happens while you travel": "a badger fell into a deep hole",
    "Villain Weakness": "complicated handshakes",
    "Prize": ""
  },
  {
    "Name": "Shane",
    "Description of Character": "Eager",
    "Main Character": "Desk",
    "Location": "The Badlands",
    "Second Character Name": "Alaina",
    "Second Character": "The robotic goose",
    "Problem": "A rhino keeps sledding through the town and stealing the bread",
    "Villain": "Hope the Undefeated Gladiator",
    "Where You Travel": "an art museum",
    "How You Travel": "the back of a T-Rex",
    "Something that happens while you travel": "the world starts going in reverse",
    "Villain Weakness": "bagpipe music",
    "Prize": ""
  },
  {
    "Name": "Wilder",
    "Description of Character": "Merry",
    "Main Character": "Chalk Stick",
    "Location": "Gunnison Canyon",
    "Second Character Name": "Maryam",
    "Second Character": "The Bubly Bot",
    "Problem": "The iceberg the town is on top of is melting into the sea",
    "Villain": "Larry the Refrigerator Repairman",
    "Where You Travel": "a pizza place",
    "How You Travel": "a PoGo stick",
    "Something that happens while you travel": "an army of chairs has waged war on cats. You must navigate their battlefield",
    "Villain Weakness": "ideas for movies",
    "Prize": ""
  },
  {
    "Name": "Eason",
    "Description of Character": "Powerful",
    "Main Character": "Button",
    "Location": "Everglades",
    "Second Character Name": "Ximena",
    "Second Character": "The walking painting",
    "Problem": "A yellow fog has rolled in and no one can see.",
    "Villain": "20 fingers the pianist",
    "Where You Travel": "a lumber mill",
    "How You Travel": "a race car",
    "Something that happens while you travel": "a group of flying rats is pestering an eagle",
    "Villain Weakness": "mispronouncing quinoa",
    "Prize": ""
  },
  {
    "Name": "Kadon",
    "Description of Character": "Warm",
    "Main Character": "Cinder Block",
    "Location": "Grand Canyon",
    "Second Character Name": "Evie",
    "Second Character": "The code surfer",
    "Problem": "All the horses have started Christmas Carolling really badly and won't stop",
    "Villain": "Carnival Carry",
    "Where You Travel": "a power plant",
    "How You Travel": "a chariot pulled by lobsters",
    "Something that happens while you travel": "a groundhog cant find its home.",
    "Villain Weakness": "poking their big toe",
    "Prize": ""
  },
  {
    "Name": "Omar",
    "Description of Character": "Lazy",
    "Main Character": "Fork",
    "Location": "Petrified Forest",
    "Second Character Name": "Cecilia",
    "Second Character": "The corn surfer",
    "Problem": "Its raining slime",
    "Villain": "Snooze Bear",
    "Where You Travel": "a carnival on a pier",
    "How You Travel": "a hover car",
    "Something that happens while you travel": "",
    "Villain Weakness": "reading your favorite bedtime story",
    "Prize": ""
  },
  {
    "Name": "Bennett",
    "Description of Character": "Rude",
    "Main Character": "Lamp Shade",
    "Location": "Sand Dunes",
    "Second Character Name": "Ember",
    "Second Character": "The pile of rocks",
    "Problem": "All the animals are making the wrong noises",
    "Villain": "Leopold the Ex-leopard",
    "Where You Travel": "a theater",
    "How You Travel": "the code in a video game",
    "Something that happens while you travel": "",
    "Villain Weakness": "hitting metal spoons on butterscotch candies",
    "Prize": ""
  },
  {
    "Name": "Kye",
    "Description of Character": "Irratible",
    "Main Character": "Playing Card",
    "Location": "Grand Tetons",
    "Second Character Name": "Freya",
    "Second Character": "The overly polite snake",
    "Problem": "All the fruit tastes like different fruit, and its very confusing",
    "Villain": "Clyde the Computer",
    "Where You Travel": "big red cliffs",
    "How You Travel": "a pizza delivery service disguised as a pizza",
    "Something that happens while you travel": "",
    "Villain Weakness": "compliments",
    "Prize": ""
  },
  {
    "Name": "Weston",
    "Description of Character": "Boastful",
    "Main Character": "Credit Card",
    "Location": "Kerry, Ireland",
    "Second Character Name": "Londyn",
    "Second Character": "the candle",
    "Problem": "Men in suits are chopping down all the tree houses",
    "Villain": "CC the Calculator",
    "Where You Travel": "a temple deep in the jungle",
    "How You Travel": "a teleportation song",
    "Something that happens while you travel": "",
    "Villain Weakness": "condiments",
    "Prize": ""
  },
  {
    "Name": "Reynolds",
    "Description of Character": "Anxious",
    "Main Character": "Magnet",
    "Location": "Casablanca",
    "Second Character Name": "Summer",
    "Second Character": "the flame",
    "Problem": "All the flags in the town are protesting so they don't have to hang all day",
    "Villain": "Fiero the Green Flame",
    "Where You Travel": "a space station",
    "How You Travel": "a paper airplane",
    "Something that happens while you travel": "",
    "Villain Weakness": "late library books",
    "Prize": ""
  },
  {
    "Name": "Melody",
    "Description of Character": "Dutifull",
    "Main Character": "Puddle",
    "Location": "Eifel Tower",
    "Second Character Name": "Ollie",
    "Second Character": "The concierge",
    "Problem": "Jellyfish are trying to steal you're halloween candy",
    "Villain": "Ropety Rabbit",
    "Where You Travel": "the kingdom of the exhiled on pluto",
    "How You Travel": "a trash bag parachute",
    "Something that happens while you travel": "",
    "Villain Weakness": "playing the violin really badly",
    "Prize": ""
  },
  {
    "Name": "Lyla",
    "Description of Character": "Curious",
    "Main Character": "Painting",
    "Location": "New York",
    "Second Character Name": "Wesley",
    "Second Character": "The Dresser",
    "Problem": "Jellyfish want hugs. You have to figure out how to not get stung",
    "Villain": "An out of control soccer ball",
    "Where You Travel": "a mountain named Kevin",
    "How You Travel": "only your hands",
    "Something that happens while you travel": "",
    "Villain Weakness": "pineapple on pizza",
    "Prize": ""
  },
  {
    "Name": "Lydia",
    "Description of Character": "Wild",
    "Main Character": "Helmet",
    "Location": "Venice, Italy",
    "Second Character Name": "Marion",
    "Second Character": "The dinosaur",
    "Problem": "The books are flying and attacking libraries",
    "Villain": "Captain Tooth",
    "Where You Travel": "the ghost town in the clouds",
    "How You Travel": "miles and miles of monkey bars",
    "Something that happens while you travel": "",
    "Villain Weakness": "trash",
    "Prize": ""
  },
  {
    "Name": "Sara",
    "Description of Character": "Mysterious",
    "Main Character": "Tire Swing",
    "Location": "Venice Beach",
    "Second Character Name": "Lonnie",
    "Second Character": "of green canyon",
    "Problem": "Everyone cant stop singing",
    "Villain": "Joe the Janitor",
    "Where You Travel": "a dairy farm",
    "How You Travel": "a bike with wheels made of cheese",
    "Something that happens while you travel": "",
    "Villain Weakness": "any color other than green, blue, and red",
    "Prize": ""
  },
  {
    "Name": "Glennda",
    "Description of Character": "Wild",
    "Main Character": "Ice Cube",
    "Location": "The Amazon River",
    "Second Character Name": "Hubert",
    "Second Character": "the feather",
    "Problem": "everything is flipped upside down",
    "Villain": "Tape man",
    "Where You Travel": "a hut in the verglades",
    "How You Travel": "coffecoffeecoffeecoffee!!",
    "Something that happens while you travel": "",
    "Villain Weakness": "pumpkin pie",
    "Prize": ""
  },
  {
    "Name": "Kaylee",
    "Description of Character": "Stern",
    "Main Character": "Bottle",
    "Location": "The Pyramids of Egypt",
    "Second Character Name": "Amos",
    "Second Character": "the stapler",
    "Problem": "The water in the lake is gone",
    "Villain": "Lucy Llama",
    "Where You Travel": "back in time to 1800's England",
    "How You Travel": "an old photograph an jumping into it",
    "Something that happens while you travel": "",
    "Villain Weakness": "magic spells",
    "Prize": ""
  },
  {
    "Name": "Jasmine",
    "Description of Character": "Stoic",
    "Main Character": "Chocolate Chip",
    "Location": "Las Vegas",
    "Second Character Name": "Perry",
    "Second Character": "the ukelele",
    "Problem": "There are no more spiders, and now there are so many flies.",
    "Villain": "Baldur the Bad",
    "Where You Travel": "inside a ham sandwich",
    "How You Travel": "your transforming abilities to become Mayonaise",
    "Something that happens while you travel": "",
    "Villain Weakness": "drumming really fast",
    "Prize": ""
  },
  {
    "Name": "Hadley",
    "Description of Character": "Shaky",
    "Main Character": "Rusty Nail",
    "Location": "The Matterhorn",
    "Second Character Name": "Roland",
    "Second Character": "the floating mask",
    "Problem": "Couches keep eating people",
    "Villain": "Cannery Can Sam",
    "Where You Travel": "the math building at a college",
    "How You Travel": "the one and only muffin powered motorcycle",
    "Something that happens while you travel": "",
    "Villain Weakness": "combing their hair",
    "Prize": ""
  },
  {
    "Name": "Isabel",
    "Description of Character": "Serious",
    "Main Character": "Drill Press",
    "Location": "Mt. Everest",
    "Second Character Name": "Franklin",
    "Second Character": "the tunneling bottle",
    "Problem": "There is a monster made of soda cans walking around town",
    "Villain": "Tangled Heath",
    "Where You Travel": "Captain Codes house",
    "How You Travel": "a really long slide",
    "Something that happens while you travel": "",
    "Villain Weakness": "brushing their teeth",
    "Prize": ""
  },
  {
    "Name": "Zara",
    "Description of Character": "Only",
    "Main Character": "Watch",
    "Location": "A Lighthouse",
    "Second Character Name": "Otis",
    "Second Character": "the singing microphone",
    "Problem": "The game controllers have starteed controlling people",
    "Villain": "Frozen Dina",
    "Where You Travel": "Fostywally's arcade",
    "How You Travel": "brick shoes",
    "Something that happens while you travel": "",
    "Villain Weakness": "limericks",
    "Prize": ""
  },
  {
    "Name": "Josie",
    "Description of Character": "Glass",
    "Main Character": "High Heel",
    "Location": "In a Giant Cave",
    "Second Character Name": "Clyde",
    "Second Character": "whose always in trouble",
    "Problem": "Theres a giant noodle snake underground",
    "Villain": "Fosty Wally",
    "Where You Travel": "Mt. Everest",
    "How You Travel": "ice skates",
    "Something that happens while you travel": "",
    "Villain Weakness": "haikus",
    "Prize": ""
  },
  {
    "Name": "Bonnie",
    "Description of Character": "Frail",
    "Main Character": "Can of Soda",
    "Location": "Near a Shoe Factory",
    "Second Character Name": "Alvin",
    "Second Character": "the liver and onions wizard",
    "Problem": "Rugs won't stop giving hugs",
    "Villain": "Faerlyn Heavyfoot",
    "Where You Travel": "Trash Island",
    "How You Travel": "a bobsled",
    "Something that happens while you travel": "",
    "Villain Weakness": "sneezing",
    "Prize": ""
  }
]

for (const object in json) {
    names.push(json[object]["Name"]);
    descriptions.push(json[object]["Description of Character"]);
    mainCharacters.push(json[object]["Main Character"]);
    locations.push(json[object]["Location"]);
    secondCharacters.push(json[object]["Second Character"]);
    secondCharacterNames.push(json[object]["Second Character Name"]);
    problems.push(json[object]["Problem"]);
    villains.push(json[object]["Villain"]);
    travelsTo.push(json[object]["Where You Travel"]);
    travelsHow.push(json[object]["How You Travel"]);
    if (json[object]["Something that happens while you travel"]) {
      travelConflict.push(json[object]["Something that happens while you travel"]);
    }
    villainWeakness.push(json[object]["Villain Weakness"]);
    if (json[object]["Prize"]) {
      prize.push(json[object]["Prize"]);
    }
}

loadStory();
