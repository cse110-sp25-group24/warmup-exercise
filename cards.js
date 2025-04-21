let deck = [];
let top_card = "";
const deckBack = document.getElementById("deck");
const pile = document.getElementById("pile");
const drawButton = document.getElementById("draw");
const number  = document.getElementById("number")
const suit = document.getElementById("suit")

shuffleDeck();

/**
 * Draws a card from the deck.
 * @returns {string} - The drawn card.
 */
function drawCard() {
  const card = deck.pop();
  document.getElementById("pile").style.backgroundColor = "#ffffff";

  /* Functionality for showing that the deck is empty*/
  if (deck.length == 0) {
    deckBack.classList.replace('back-card', 'no-card');
    drawButton.disabled = true;
  }

  if (pile.classList.contains('no-card')) {
    pile.classList.replace('no-card', 'card-front');
  }

  /* Add 3D flip and movement animation to the pile */
  pile.classList.add('animate-draw-flip');

  /* Remove the animation class after it completes */
  pile.addEventListener('animationend', () => {
    pile.classList.remove('animate-draw-flip');
  }, { once: true });

  /* Functionality for showing what the top card is */
  console.log(card);
  number.textContent = card[0] + card[1];
  suit.textContent = card[card.length - 1];

  if (suit.textContent == "♥" || suit.textContent == "♦") {
    number.style.color = "red";
    suit.style.color = "red";
  }
  else {
    number.style.color = "black";
    suit.style.color = "black";
  }

  return card;
}

/**
 * Handles the shuffling animation for the deck and disables buttons during the animation.
 */
function animateShuffle() {
  number.textContent = "";
  suit.textContent = "";
  document.getElementById("pile").style.backgroundColor = "#b83939";
  if (deck.length == 0) {
    deckBack.classList.replace('no-card', 'back-card');
  }

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.disabled = true);

  deckBack.classList.add('animate-shuffle');

  setTimeout(() => {
    deckBack.classList.remove('animate-shuffle');
    buttons.forEach(button => button.disabled = false);
    shuffleDeck();
  }, 600);
}
  

/**
 * Shuffles the deck of cards.
 * @returns {Array} - The shuffled deck of cards.
 */
function shuffleDeck() {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    deck = [];

    for (const i of suits) {
      for (const j of values) {
        deck.push(`${j} of ${i}`);
      }
    }
    for (let i = 51; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    console.log("Shuffled the deck!");
    if (deckBack.classList.contains('no-card')) {
      deckBack.classList.replace('no-card', 'back-card');
      drawButton.disabled = false;
    }

    if (pile.classList.contains('card-front')) {
      pile.classList.replace('card-front', 'no-card');
      /* Integrate better w/ CSS next time*/
      number.textContent = "";
      suit.textContent = "";
  }

  return deck;
}
