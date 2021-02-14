document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'bear',
      img: 'images/bear.png'
    },
    {
      name: 'crab',
      img: 'images/crab.png'
    },
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'fox',
      img: 'images/fox.png'
    },
    {
      name: 'monkey',
      img: 'images/monkey.png'
    },
    {
      name: 'duck',
      img: 'images/duck.png'
    },
    {
      name: 'bear',
      img: 'images/bear.png'
    },
    {
      name: 'crab',
      img: 'images/crab.png'
    },
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'fox',
      img: 'images/fox.png'
    },
    {
      name: 'monkey',
      img: 'images/monkey.png'
    },
    {
      name: 'duck',
      img: 'images/duck.png'
    }
  ];

  // randomize the cards
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const gameEndMessage = document.querySelector('#game-end-message');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a matching pair!');
      cards[optionOneId].setAttribute('src', 'images/found.png');
      cards[optionTwoId].setAttribute('src', 'images/found.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, please try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      gameEndMessage.textContent = 'Congratulations! You found them all!';
    }
  }

  // flip the card over
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
