/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let score = 0

  hand.forEach(function(cards) {
    if (cards === 'K' || cards === 'Q' || cards === 'J') {
      score = score + 10
    }
    if (cards != 'A' && cards != 'K' && cards != 'Q' && cards != 'J') {
      score = score + +cards
    }
    if (cards === 'A') {
      score <= 10 ? (score = score + 11) : (score = score + 1)
    }
  })

  score > 21 ? (score = score - 10) : score
  return score
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
