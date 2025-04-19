
// Create a representation of cards here


// Create a representation of a deck or “stack” containing multiple cards here
let deck = [];

// Implement shuffling logic here


// Implement a function to print "drew a card" to the console
function drawCard(){
  if (deck.length === 0) {
    console.log("Please Shuffle!");
    return null;
  }

  const card = deck.pop();
  console.log('Drew a card!');
  return card;
}
  

// Implement a function to print "shuffled the deck" to the console
function shuffleDeck(){
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

  deck = [];

  for (const i of suits){
    for (const j of values){
      deck.push('${value} of $suit');
    }
  }

  for (let i = 51; i > 0; i--( {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j] = [deck[j], deck[i]];
}

console.log("Shuffled the deck!");
return deck;
}


// Implement a functions to animate the cards here
