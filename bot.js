console.log('bot started');

var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = [
"It doesn't matter how much you push the envelope. It'll still be stationery.",
"What did the Confederate soldiers use to eat off of? Civil ware... What did they use to drink with? Cups. Dixie Cups.",
"I walked into my sister's room and tripped on a bra - it was a booby-trap.",
"A book just fell on my head... I only have my self to blame. Oh, wait! I said it wrong! Hold on, let me read it again. A book just fell on my head. I only have my shelf to blame.",
"What is the leading cause of divorce in long-term marriages? A stalemate.",
"Bakers trade bread recipes on a knead-to-know basis... Knead.",
"A moon rock tastes better than an earth rock because it's meteor.",
"A backwards poet writes inverse.",
"I used to be addicted to soap, but I'm clean now.",
"3.14% of sailors are Pi-Rates.",
"I stayed up all night wondering where the sun went. Then it dawned on me.",
"What did the mermaid wear to her math class? An algae bra.",
"Why did the scarecrow get a promotion? Because he was out standing in his field.",
"I tried to catch some fog earlier. I mist.",
"Do you know what's not right? Left.",
"What does a pirate say while eating sushi? Ahoy! Pass me some soy...! I don't get it.",
"People are making apocalypse jokes like there's no tomorrow... Too soon.",
"Oh man, I love this book."
"You wanna hear a joke about pizza? Never mind, it was too cheesy.",
"What did the green grape say to the purple grape? Breathe, you idiot!",
"A boiled egg in the morning is really hard to beat.",
"I'm reading a book about anti-gravity. It's impossible to put down.",
"I'm glad I know sign language. It's become quite handy.",
"I forgot how to throw a boomerang. But it came back to me.",
"When a clock is hungry... It goes back four seconds... Oh! Get it? It goes back... for seconds.",
"I once heard a joke about amnesia... But I forget how it goes.",
"When the power went out at the school... The children... were de-lighted.",
"Those fish were shy. They were obviously coy.",
"The frustrated cannibal threw up his hands. Oh, I get it! 'Cause he ate his hands and then he threw them up!",
"I didn't have the faintest idea... as to why I passed out.",
"There was once a crossed-eyed teacher... who had issues controlling his pupils.",
"Diarrhea is hereditary... It runs in your genes. Agh, that's gross! But awesome.",
"I heard two peanuts walk into a park... One was as-salted.",
"What is a pirate's favorite letter? Tis' the C... Oh! 'Cause the sea! 'Cause the water, the ocean.",
"Those two men drinking battery acid will soon be charged. That's kinda... Kinda dark.",
"The midget psychic escaped prison. He was a small medium at large.",
"I'm inclined...to be laid back. That's true. I actually feel like that's true about myself.",
"Newspaper headline reads: Cartoonist found dead at home, details are sketchy.",
"The Magician got frustrated and pulled his hare out. Oh, like a rabbit. Lame.",
"A criminal`s best asset... is his lie-ability. Oh, brother.",
"I heard about the guy who got hit in the head with a can of soda. He is lucky it was a soft drink.",
"It's not that the guy didn't know how to juggle... He just didn't have the balls to do it."
];

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[Math.floor(Math.random()*messages.length)]
    }, function(err, data, response) {
        console.log("it's working!")
    });
}

writeTweet()

setInterval(writeTweet, 43200000)