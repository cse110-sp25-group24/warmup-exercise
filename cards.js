
deck = [];
top_card = ""


/**
 * Draws a card from the deck.
 * @returns {string} - The drawn card.
 */
function drawCard(){
  if (deck.length === 0) {
    shuffleDeck();
    return deck.pop();
  }

  const card = deck.pop();
  return card;
}
  

/**
 * Shuffles the deck of cards.
 * @returns {Array} - The shuffled deck of cards.
 */
function shuffleDeck() {
    const suits = ['H', 'D', 'C', 'S'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    deck = [];

    for (const i of suits){
      for (const j of values){
        deck.push(`${j} of ${i}`);
      }
    }
    for (let i = 51; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  console.log("Shuffled the deck!");
  return deck;
}


// Implement a functions to animate the cards here
