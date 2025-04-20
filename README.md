# BeeZee 24/7 warmup-exercise

Link to our SWOT: [Click here](/SWOT.md)

## How to Contribute

In order to contribute to this project:

- Find an Issue you would like to focus on.
- Create a new branch with the name: `[team number]-[issue number]`
- Your team number can be found [here](https://docs.google.com/document/d/1f9ZLMGJCS6-3FiUDJU-ifnQMtGt3XDVBmZI8NAr7wgM/edit?tab=t.0)
  - Example branch name: team1-11
- Push to this new branch and make a PR!

## Our Team

We have four teams.

- Team 1: Eric, Yilong, Chris
- Team 2: Aruthan, TL, Vincent
- Team 3: Noeh, Myat, Phiroze
- Team 4: Alexis, Widjaja

## Planning

Focusing on: #1 Card Deck and Playing Card Web Components complete with animation of flip and/or shuffle (HTML, CSS, and very light JS)

- Deck in the middle
- Upon the user “flipping a card”
  - Put the current card in front of the user (if not the first card in the deck) face down in the “discard pile”
  - Pull the next card from the shuffled deck and “flip it over”
- If the deck is empty, reshuffle automatically and put the deck back
- If the user clicks a button to “Shuffle” it should flip all the cards into the discard pile, then start the shuffle process.

### HTML

- Create a container for a card
- Create placeholder cards (when deleting a placeholder, the next placeholder under it should pop up for example)
  - [https://rawgit.com/richardschneider/cardsJS/master/hello.html]
- Create a non-functional Shuffle button
- Create a non-functional Draw button
- Put this all together for overall game
  - Create a container for the deck
  - Create container for where the decks/shuffle button will go'

### CSS

- Style the cards
- Style the card backing
- Style the buttons
- Style the whole screen

### JavaScript

- Create a representation of cards
- Create a representation of a deck or “stack” containing multiple cards
- Implement shuffle logic
  - If shuffle button is clicked, shuffle the deck
  - If deck is empty and shuffle/flip button are clicked, shuffle the deck
- To shuffle the deck
  - put all the cards back in the “unflipped” deck data structure and shuffle them randomly
- Add animations - js
  - Flip
  - Shuffle
