
// Create a representation of cards here
const ref_deck = ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', '10C', '10D', '10H', '10S', 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'KC', 'KD', 'KH', 'KS', 'QC', 'QD', 'QH', 'QS']

// Create a representation of a deck or “stack” containing multiple cards here
deck = ref_deck.slice()
top_card = "" // don't need a whole new array if we have a reference, only have to display the top one 


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
  

// Implement shuffling logic here
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
