function generateRandomCard() {
  // Get all available cards
  const availableCards = cards.filter(c => {
    // Skip cards that are locked
    if (c.realm === 11 && isCardLocked(c.id)) {
      return false;
    }
    return true;
  });

  if (availableCards.length === 0) return null;

  // Pick a random card
  const card = pickRandom(availableCards);
  if (!card) return null;

  return {
    id: card.id,
    quantity: 1
  };
} 