/**
 * Creating cards
 */
QUnit.test('Creating card', function(assert) {
   var card = new JSCardDealer.Card('myvalue');
   
   assert.notEqual(card, null, 'not null');
   assert.notEqual(card, undefined, 'not undefined');   
});

/**
 * Setting and getting card values
 */
QUnit.test('Setting and getting card values', function(assert) {
   var card = new JSCardDealer.Card('myvalue');
   var card2 = new JSCardDealer.Card(1245);
   
   assert.equal(card.getValue(), 'myvalue', 'getting string value');
   assert.equal(card2.getValue(), 1245, 'getting numeric value');   
});


/**
 * Setting and getting card properties
 */
QUnit.test('Setting and getting card properties', function(assert) {
   var card = new JSCardDealer.Card('myvalue');
   card.setProperty('suit', 'diamond');
   card.setProperty('number', 7643);
   
   assert.equal(card.getProperty('suit'), 'diamond', 'getting and setting string property');
   assert.equal(card.getProperty('number'), 7643,  'getting and setting numeric property');
});

/**
 * Creating card deck 
 */
QUnit.test('Create card deck', function(assert) {
	var cardDeck = new JSCardDealer.Deck();
	
	assert.notEqual(cardDeck, null, 'not null');
	assert.notEqual(cardDeck, undefined, 'not undefined');   
});


/**
 * Add cards to deck 
 */
QUnit.test('Add cards to car deck', function(assert) {
   
	// Create cards
		
	// hearts
	var cardHeart1   = new JSCardDealer.Card(1);  cardHeart1.setProperty('suit', '♥');
	var cardHeart2   = new JSCardDealer.Card(2);  cardHeart2.setProperty('suit', '♥');	 
	var cardHeart3   = new JSCardDealer.Card(3);  cardHeart3.setProperty('suit', '♥');	 
	var cardHeart4   = new JSCardDealer.Card(4);  cardHeart4.setProperty('suit', '♥');
	var cardHeart5   = new JSCardDealer.Card(5);  cardHeart5.setProperty('suit', '♥');
	var cardHeart6   = new JSCardDealer.Card(6);  cardHeart6.setProperty('suit', '♥');
	var cardHeart7   = new JSCardDealer.Card(7);  cardHeart7.setProperty('suit', '♥');
	var cardHeart8   = new JSCardDealer.Card(8);  cardHeart8.setProperty('suit', '♥');
	var cardHeart9   = new JSCardDealer.Card(9);  cardHeart9.setProperty('suit', '♥');
	var cardHeartA   = new JSCardDealer.Card(14); cardHeartA.setProperty('suit', '♥');
	var cardHeartK   = new JSCardDealer.Card(13); cardHeartK.setProperty('suit', '♥');
	var cardHeartQ   = new JSCardDealer.Card(12); cardHeartQ.setProperty('suit', '♥');
	var cardHeartJ   = new JSCardDealer.Card(11); cardHeartJ.setProperty('suit', '♥');
	
	// diamonds
	var cardDiamond1   = new JSCardDealer.Card(1);  cardDiamond1.setProperty('suit', '♦');
	var cardDiamond2   = new JSCardDealer.Card(2);  cardDiamond2.setProperty('suit', '♦');	 
	var cardDiamond3   = new JSCardDealer.Card(3);  cardDiamond3.setProperty('suit', '♦');	 
	var cardDiamond4   = new JSCardDealer.Card(4);  cardDiamond4.setProperty('suit', '♦');
	var cardDiamond5   = new JSCardDealer.Card(5);  cardDiamond5.setProperty('suit', '♦');
	var cardDiamond6   = new JSCardDealer.Card(6);  cardDiamond6.setProperty('suit', '♦');
	var cardDiamond7   = new JSCardDealer.Card(7);  cardDiamond7.setProperty('suit', '♦');
	var cardDiamond8   = new JSCardDealer.Card(8);  cardDiamond8.setProperty('suit', '♦');
	var cardDiamond9   = new JSCardDealer.Card(9);  cardDiamond9.setProperty('suit', '♦');
	var cardDiamondA   = new JSCardDealer.Card(14); cardDiamondA.setProperty('suit', '♦');
	var cardDiamondK   = new JSCardDealer.Card(13); cardDiamondK.setProperty('suit', '♦');
	var cardDiamondQ   = new JSCardDealer.Card(12); cardDiamondQ.setProperty('suit', '♦');
	var cardDiamondJ   = new JSCardDealer.Card(11); cardDiamondJ.setProperty('suit', '♦');
	
	// clubs
	var cardClub1   = new JSCardDealer.Card(1);  cardClub1.setProperty('suit', '♣');
	var cardClub2   = new JSCardDealer.Card(2);  cardClub2.setProperty('suit', '♣');	 
	var cardClub3   = new JSCardDealer.Card(3);  cardClub3.setProperty('suit', '♣');	 
	var cardClub4   = new JSCardDealer.Card(4);  cardClub4.setProperty('suit', '♣');
	var cardClub5   = new JSCardDealer.Card(5);  cardClub5.setProperty('suit', '♣');
	var cardClub6   = new JSCardDealer.Card(6);  cardClub6.setProperty('suit', '♣');
	var cardClub7   = new JSCardDealer.Card(7);  cardClub7.setProperty('suit', '♣');
	var cardClub8   = new JSCardDealer.Card(8);  cardClub8.setProperty('suit', '♣');
	var cardClub9   = new JSCardDealer.Card(9);  cardClub9.setProperty('suit', '♣');
	var cardClubA   = new JSCardDealer.Card(14); cardClubA.setProperty('suit', '♣');
	var cardClubK   = new JSCardDealer.Card(13); cardClubK.setProperty('suit', '♣');
	var cardClubQ   = new JSCardDealer.Card(12); cardClubQ.setProperty('suit', '♣');
	var cardClubJ   = new JSCardDealer.Card(11); cardClubJ.setProperty('suit', '♣');
	
	// spades
	var cardSpade1   = new JSCardDealer.Card(1);  cardSpade1.setProperty('suit', '♠');
	var cardSpade2   = new JSCardDealer.Card(2);  cardSpade2.setProperty('suit', '♠');	 
	var cardSpade3   = new JSCardDealer.Card(3);  cardSpade3.setProperty('suit', '♠');	 
	var cardSpade4   = new JSCardDealer.Card(4);  cardSpade4.setProperty('suit', '♠');
	var cardSpade5   = new JSCardDealer.Card(5);  cardSpade5.setProperty('suit', '♠');
	var cardSpade6   = new JSCardDealer.Card(6);  cardSpade6.setProperty('suit', '♠');
	var cardSpade7   = new JSCardDealer.Card(7);  cardSpade7.setProperty('suit', '♠');
	var cardSpade8   = new JSCardDealer.Card(8);  cardSpade8.setProperty('suit', '♠');
	var cardSpade9   = new JSCardDealer.Card(9);  cardSpade9.setProperty('suit', '♠');
	var cardSpadeA   = new JSCardDealer.Card(14); cardSpadeA.setProperty('suit', '♠');
	var cardSpadeK   = new JSCardDealer.Card(13); cardSpadeK.setProperty('suit', '♠');
	var cardSpadeQ   = new JSCardDealer.Card(12); cardSpadeQ.setProperty('suit', '♠');
	var cardSpadeJ   = new JSCardDealer.Card(11); cardSpadeJ.setProperty('suit', '♠');
	
	// Create deck
	var cardDeck = new JSCardDealer.Deck();
	
	// add heart cards to deck
	cardDeck.addCard(cardHeart1);
	cardDeck.addCard(cardHeart2);
	cardDeck.addCard(cardHeart3);
	cardDeck.addCard(cardHeart4);
	cardDeck.addCard(cardHeart5);
	cardDeck.addCard(cardHeart6);
	cardDeck.addCard(cardHeart7);
	cardDeck.addCard(cardHeart8);
	cardDeck.addCard(cardHeart9);
	cardDeck.addCard(cardHeartA);
	cardDeck.addCard(cardHeartK);
	cardDeck.addCard(cardHeartQ);
	cardDeck.addCard(cardHeartJ);
	
	// add diamond cards to deck
	cardDeck.addCard(cardDiamond1);
	cardDeck.addCard(cardDiamond2);
	cardDeck.addCard(cardDiamond3);
	cardDeck.addCard(cardDiamond4);
	cardDeck.addCard(cardDiamond5);
	cardDeck.addCard(cardDiamond6);
	cardDeck.addCard(cardDiamond7);
	cardDeck.addCard(cardDiamond8);
	cardDeck.addCard(cardDiamond9);
	cardDeck.addCard(cardDiamondA);
	cardDeck.addCard(cardDiamondK);
	cardDeck.addCard(cardDiamondQ);
	cardDeck.addCard(cardDiamondJ);
	
	// add clubs cards to deck
	cardDeck.addCard(cardClub1);
	cardDeck.addCard(cardClub2);
	cardDeck.addCard(cardClub3);
	cardDeck.addCard(cardClub4);
	cardDeck.addCard(cardClub5);
	cardDeck.addCard(cardClub6);
	cardDeck.addCard(cardClub7);
	cardDeck.addCard(cardClub8);
	cardDeck.addCard(cardClub9);
	cardDeck.addCard(cardClubA);
	cardDeck.addCard(cardClubK);
	cardDeck.addCard(cardClubQ);
	cardDeck.addCard(cardClubJ);
	
	// add spade cards to deck
	cardDeck.addCard(cardSpade1);
	cardDeck.addCard(cardSpade2);
	cardDeck.addCard(cardSpade3);
	cardDeck.addCard(cardSpade4);
	cardDeck.addCard(cardSpade5);
	cardDeck.addCard(cardSpade6);
	cardDeck.addCard(cardSpade7);
	cardDeck.addCard(cardSpade8);
	cardDeck.addCard(cardSpade9);
	cardDeck.addCard(cardSpadeA);
	cardDeck.addCard(cardSpadeK);
	cardDeck.addCard(cardSpadeQ);
	cardDeck.addCard(cardSpadeJ);	  
	
	assert.equal(cardDeck.getCards().length, 52, 'Get number of cards');
});


/**
 * Creating card deck 
 */
QUnit.test('Get number of cards in deck', function(assert) {
	// create cards
	var card1 = new JSCardDealer.Card(1);
	var card2 = new JSCardDealer.Card(2);
	var card3 = new JSCardDealer.Card(3);
	var card4 = new JSCardDealer.Card(4);
	var card5 = new JSCardDealer.Card(5);
	
	
	// create deck and add cards
	var deck = new JSCardDealer.Deck();
	deck.addCard(card1);
	deck.addCard(card2);
	deck.addCard(card3);
	deck.addCard(card4);
	deck.addCard(card5);

	// get number of cards
	assert.equal(deck.getNumberOfCards(), 5, 'Number of cards in deck');
});


/**
 * Creating card deck 
 */
QUnit.test('Assign array of cards to deck', function(assert) {
	
	// create empty array
	var cards  = [];
	
	// create some cards
	var card1 = new JSCardDealer.Card(1);
	var card2 = new JSCardDealer.Card(2);
	var card3 = new JSCardDealer.Card(3);
	var card4 = new JSCardDealer.Card(4);
	var card5 = new JSCardDealer.Card(5);
	
	// add cards to array
	cards.push(card1);
	cards.push(card2);
	cards.push(card3);
	cards.push(card4);
	cards.push(card5);
	
	// create deck and add cards
	var deck = new JSCardDealer.Deck();
	
	// assign array of cards to deck
	deck.assignCards(cards);
	
	// get number of cards
	assert.equal(deck.getNumberOfCards(), 5, 'Number of cards in deck');
	
	// create dealer
	var dealer = new JSCardDealer.Dealer(deck);
	
	// deal cards
	var card = dealer.dealCard();
	assert.equal(card.getValue(), 5, 'Get dealed card value (5)');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 4, 'Get dealed card value (4)');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 3, 'Get dealed card value (3)');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 2, 'Get dealed card value (2)');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 1, 'Get dealed card value (1)');		
});


/**
 * Creating card deck 
 */
QUnit.test('Combine card decks', function(assert) {
	
	var card1 = new JSCardDealer.Card(1);
	var card2 = new JSCardDealer.Card(2);
	var card3 = new JSCardDealer.Card(3);
	var card4 = new JSCardDealer.Card(4);
	var card5 = new JSCardDealer.Card(5);
	
	// create pile A
	var pileA = new JSCardDealer.Deck();
	pileA.addCard(card1);
	pileA.addCard(card2);
	
	// create pile B
	var pileB = new JSCardDealer.Deck();
	pileB.addCard(card3);
	pileB.addCard(card4);
	pileB.addCard(card5);
	
	// combine pile a with pileB
	pileA.combineWith(pileB);   
	
	assert.equal(pileA.getNumberOfCards(), 5, 'Combining piles should result in a deck/pile of 5 cards');
});


/**
 * Creating card dealer 
 */
QUnit.test('Create dealer', function(assert) {
   var cardDeck = new JSCardDealer.Deck();
   var cardDealer = new JSCardDealer.Dealer(cardDeck);
   
   assert.notEqual(cardDealer, null, 'not null');
});


/**
 * Assign decks to card dealer 
 */
QUnit.test('Assign deck to card dealer', function(assert) {
	// create deck 1
	var card1 = new JSCardDealer.Card(1);
	var card2 = new JSCardDealer.Card(2);	
	var deck1 = new JSCardDealer.Deck();
	deck1.addCard(card1);
	deck1.addCard(card2);
	
	// create deck 2
	var card3 = new JSCardDealer.Card(3);
	var card4 = new JSCardDealer.Card(4);	
	var deck2 = new JSCardDealer.Deck();
	deck2.addCard(card3);
	deck2.addCard(card4);	
	
	// init card dealer without a deck
	var dealer = new JSCardDealer.Dealer();
	
	// assign deck 1
	dealer.assignDeck(deck1);
	
	// deal cards
	var card = dealer.dealCard();
	assert.equal(card.getValue(), 2, 'Deck 1: Card 1 Value');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 1, 'Deck 1: Card 2 Value');

	// assign deck 2
	dealer.assignDeck(deck2);
	var card = dealer.dealCard();
	assert.equal(card.getValue(), 4, 'Deck 2: Card 1 Value');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 3, 'Deck 2: Card 2 Value');	
});

/**
 * Dealer dealing ards 
 */
QUnit.test('Dealing cards', function(assert) {
	// create some cards	
	var card1 = new JSCardDealer.Card(1);
	var card2 = new JSCardDealer.Card(2);
	var card3 = new JSCardDealer.Card(3);	
	
	// create a deck
	var cardDeck = new JSCardDealer.Deck();
	cardDeck.addCard(card1);
	cardDeck.addCard(card2);
	cardDeck.addCard(card3);
	
	// create dealer
	var dealer = new JSCardDealer.Dealer(cardDeck);
	
	// deal unshuffled deck of cards
	var card = dealer.dealCard();
	assert.equal(card.getValue(), 3, 'Card 1 Value');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 2, 'Card 2 Value');
	
	card = dealer.dealCard();
	assert.equal(card.getValue(), 1, 'Card 3 Value');
});

/**
 * Dealer dealing ards 
 */
QUnit.test('Get remaining cards', function(assert) {
	// create some cards	
	var card1 = new JSCardDealer.Card(1);
	var card2 = new JSCardDealer.Card(2);
	var card3 = new JSCardDealer.Card(3);	
	
	// create a deck
	var cardDeck = new JSCardDealer.Deck();
	cardDeck.addCard(card1);
	cardDeck.addCard(card2);
	cardDeck.addCard(card3);
	
	// create dealer
	var dealer = new JSCardDealer.Dealer(cardDeck);
	
	// deal unshuffled deck of cards
	var card1 = dealer.dealCard();
	assert.equal(dealer.getAmountOfRemainingCards(), 2, 'Get remainging cards (2)');
	
	var card2 = dealer.dealCard();
	assert.equal(dealer.getAmountOfRemainingCards(), 1, 'Get remainging cards (1)');
	
	var card3 = dealer.dealCard();
	assert.equal(dealer.getAmountOfRemainingCards(), 0, 'Get remainging cards (0)');	
});
