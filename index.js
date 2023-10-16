// Initialize scores for each team
let redScore = 0;
let greenScore = 0;
let purpleScore = 0;
let yellowScore = 0;

let redScoreSpirit = 0;
let greenScoreSpirit = 0;
let purpleScoreSpirit = 0;
let yellowScoreSpirit = 0;

function resetScore() {
  // Show a confirmation dialog
  const confirmation = window.confirm("Reset all scores?");

  // If the user confirms, reset the scores
  if (confirmation) {
    // Reset scores for the original buttons
    document.getElementById('red-score').textContent = '0';
    document.getElementById('green-score').textContent = '0';
    document.getElementById('purple-score').textContent = '0';
    document.getElementById('yellow-score').textContent = '0';

    // Reset scores for the new buttons (spirit cup)
    document.getElementById('red-score-spirit').textContent = '0';
    document.getElementById('green-score-spirit').textContent = '0';
    document.getElementById('purple-score-spirit').textContent = '0';
    document.getElementById('yellow-score-spirit').textContent = '0';

    // Reset the score variables for the original buttons
    redScore = 0;
    greenScore = 0;
    purpleScore = 0;
    yellowScore = 0;

    // Reset the score variables for the new buttons (spirit cup)
    redScoreSpirit = 0;
    greenScoreSpirit = 0;
    purpleScoreSpirit = 0;
    yellowScoreSpirit = 0;
  }
}

// Add an event listener to trigger the resetScore function on a button click
document.getElementById('reset-button').addEventListener('click', resetScore);

function addScore(teamId, points) {
  // Determine which team to update based on teamId
  let teamElement;
  let currentScore;

  switch (teamId) {
    case 'red-score':
      teamElement = document.getElementById('red-score');
      currentScore = redScore;
      break;
    case 'green-score':
      teamElement = document.getElementById('green-score');
      currentScore = greenScore;
      break;
    case 'purple-score':
      teamElement = document.getElementById('purple-score');
      currentScore = purpleScore;
      break;
    case 'yellow-score':
      teamElement = document.getElementById('yellow-score');
      currentScore = yellowScore;
      break;
    case 'red-score-spirit':
      teamElement = document.getElementById('red-score-spirit');
      currentScore = redScoreSpirit;
      break;
    case 'green-score-spirit':
      teamElement = document.getElementById('green-score-spirit');
      currentScore = greenScoreSpirit;
      break;
    case 'purple-score-spirit':
      teamElement = document.getElementById('purple-score-spirit');
      currentScore = purpleScoreSpirit;
      break;
    case 'yellow-score-spirit':
      teamElement = document.getElementById('yellow-score-spirit');
      currentScore = yellowScoreSpirit;
      break;
    default:
      return; // Do nothing if teamId is not recognized
  }

  // Calculate the new score and update the display
  const totalScore = currentScore + points;
  teamElement.textContent = totalScore;

  // Update the corresponding team's score variable
  switch (teamId) {
    case 'red-score':
      redScore = totalScore;
      break;
    case 'green-score':
      greenScore = totalScore;
      break;
    case 'purple-score':
      purpleScore = totalScore;
      break;
    case 'yellow-score':
      yellowScore = totalScore;
      break;
    case 'red-score-spirit':
      redScoreSpirit = totalScore;
      break;
    case 'green-score-spirit':
      greenScoreSpirit = totalScore;
      break;
    case 'purple-score-spirit':
      purpleScoreSpirit = totalScore;
      break;
    case 'yellow-score-spirit':
      yellowScoreSpirit = totalScore;
      break;
  }
}






function finaliseScores() {

const finalScoresURL = './scoreboard.html';

const newWindow = window.open(finalScoresURL);

if (newWindow) {

newWindow.document.open();
newWindow.document.write('<h2>Red Devils Score: ' + redScore + '</h2>');
newWindow.document.write('<h2>Green Gladiators Score: ' + greenScore + '</h2>');
newWindow.document.write('<h2>Purple Dragons Score: ' + purpleScore + '</h2>');
newWindow.document.write('<h2>Yellow Lightning Score: ' + yellowScore + '</h2>');


newWindow.document.write('<h2>Red Devils (Spirit Cup): ' + redScoreSpirit + '</h2>');
newWindow.document.write('<h2>Green Gladiatorss (Spirit Cup): ' + greenScoreSpirit + '</h2>');
newWindow.document.write('<h2>Purple Dragons (Spirit Cup): ' + purpleScoreSpirit + '</h2>');
newWindow.document.write('<h2>Yellow Lightning (Spirit Cup): ' + yellowScoreSpirit + '</h2>');

}





}




