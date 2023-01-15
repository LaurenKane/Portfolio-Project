// array of messages
let messages = ["I just wanna be me.", 
"You ain’t ever gonna get this candy.", 
"I might just become like Bear Grylls, you never know.", 
"I’m a massive fan of the dictionary", 
"I think this book is bigger than the Bible and do you know why? Because this is going to spread cheer like the Bible.",
"I've had enough of playing games. Fucking hell! It’s like having a job, working 24/7 for two days on the trot.",
"My hair is fucking frazzled because you’ve only got straighteners in here, you’ve haven’t got heated rollers",
"No one’s ever peed on me, they wouldn’t have the cheek to do it.",
"Get that fire exit door, I’m off.",
"There is only one GC, so whoever does end up with me in the end is a very lucky person." ]

function generateGCMessage() {
    let i = Math.floor(Math.random() * messages.length);
    console.log(messages[i])
}

generateGCMessage()

// array of drinks
let liquors = ["blur69", "absolut", "smirnoff", "pink gin", "gin"]
let mixers = ["blu wkd", "peach schnapps", "dragon soup", "smirnoff red", "smirnoff ice", "prosecco"]
let soda = ["tonic", "sprite", "fanta", "irn bru", "7up", "cola"]

function whatDrink() {
    let a = Math.floor(Math.random() * liquors.length)
    let b = Math.floor(Math.random() * mixers.length)
    let c = Math.floor(Math.random() * soda.length)
    console.log(`So for pre's tonight let me show ya what we're drinking. ${liquors[a]} mixed with ${mixers[b]}, because ${mixers[b]} is a mixer, it's not a drink! And top it off with ${soda[c]}. Absolutely DELIGHTFUL!`)
}

whatDrink()