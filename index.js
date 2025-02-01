let redScore = 0;
let greenScore = 0;
let purpleScore = 0;
let yellowScore = 0;

let redScoreSpirit = 0;
let greenScoreSpirit = 0;
let purpleScoreSpirit = 0;
let yellowScoreSpirit = 0;

function resetScore() {

  const confirmation = window.confirm("Reset all scores?");

  
  if (confirmation) {
    
    document.getElementById('red-score').textContent = '0';
    document.getElementById('green-score').textContent = '0';
    document.getElementById('purple-score').textContent = '0';
    document.getElementById('yellow-score').textContent = '0';

    
    document.getElementById('red-score-spirit').textContent = '0';
    document.getElementById('green-score-spirit').textContent = '0';
    document.getElementById('purple-score-spirit').textContent = '0';
    document.getElementById('yellow-score-spirit').textContent = '0';

    
    redScore = 0;
    greenScore = 0;
    purpleScore = 0;
    yellowScore = 0;

   
    redScoreSpirit = 0;
    greenScoreSpirit = 0;
    purpleScoreSpirit = 0;
    yellowScoreSpirit = 0;
  }
}


document.getElementById('reset-button').addEventListener('click', resetScore);

function addScore(teamId, points) {
  
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
      return;
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
  const newWindow = window.open(finalScoresURL, '_blank');
  
  // Get current date and time
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  // Calculate total scores
  const totalScores = {
    red: redScore + redScoreSpirit,
    green: greenScore + greenScoreSpirit,
    purple: purpleScore + purpleScoreSpirit,
    yellow: yellowScore + yellowScoreSpirit
  };

  // Find winner
  const winner = Object.entries(totalScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  const winnerMap = {
    red: 'Red Devils',
    green: 'Green Gladiators',
    purple: 'Purple Dragons',
    yellow: 'Yellow Lightning'
  };

  if (newWindow) {
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sports Day Scorecard</title>
        <style>
          body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            color: #1e293b;
          }
          
          .scorecard {
            max-width: 800px;
            margin: 40px auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
          }
          
          .header h1 {
            color: #1e3a8a;
            margin: 0 0 10px 0;
            font-size: 32px;
          }
          
          .header p {
            color: #64748b;
            margin: 5px 0;
          }
          
          .scores-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .team-score {
            background: #f8fafc;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
          }
          
          .team-name {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          
          .score-detail {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            padding: 5px 0;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .total-score {
            font-size: 24px;
            font-weight: bold;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #e2e8f0;
          }
          
          .winner-section {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background: #f0f9ff;
            border-radius: 12px;
          }
          
          .winner-section h2 {
            color: #1e3a8a;
            margin: 0 0 10px 0;
          }
          
          .winner-section p {
            font-size: 24px;
            font-weight: bold;
            color: #0284c7;
            margin: 0;
          }
          
          .red { color: #ef4444; }
          .green { color: #22c55e; }
          .purple { color: #a855f7; }
          .yellow { color: #eab308; }
          
          @media print {
            body {
              background: white;
            }
            .scorecard {
              box-shadow: none;
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="scorecard">
          <div class="header">
            <h1>Blakeview Sports Day</h1>
            <p>Final Scores</p>
            <p>Date: ${currentDate} | Time: ${currentTime}</p>
          </div>
          
          <div class="scores-grid">
            <div class="team-score">
              <div class="team-name red">Red Devils</div>
              <div class="score-detail">
                <span>Main Competition:</span>
                <span>${redScore}</span>
              </div>
              <div class="score-detail">
                <span>Spirit Cup:</span>
                <span>${redScoreSpirit}</span>
              </div>
              <div class="total-score">
                Total: ${totalScores.red}
              </div>
            </div>
            
            <div class="team-score">
              <div class="team-name green">Green Gladiators</div>
              <div class="score-detail">
                <span>Main Competition:</span>
                <span>${greenScore}</span>
              </div>
              <div class="score-detail">
                <span>Spirit Cup:</span>
                <span>${greenScoreSpirit}</span>
              </div>
              <div class="total-score">
                Total: ${totalScores.green}
              </div>
            </div>
            
            <div class="team-score">
              <div class="team-name purple">Purple Dragons</div>
              <div class="score-detail">
                <span>Main Competition:</span>
                <span>${purpleScore}</span>
              </div>
              <div class="score-detail">
                <span>Spirit Cup:</span>
                <span>${purpleScoreSpirit}</span>
              </div>
              <div class="total-score">
                Total: ${totalScores.purple}
              </div>
            </div>
            
            <div class="team-score">
              <div class="team-name yellow">Yellow Lightning</div>
              <div class="score-detail">
                <span>Main Competition:</span>
                <span>${yellowScore}</span>
              </div>
              <div class="score-detail">
                <span>Spirit Cup:</span>
                <span>${yellowScoreSpirit}</span>
              </div>
              <div class="total-score">
                Total: ${totalScores.yellow}
              </div>
            </div>
          </div>
          
          <div class="winner-section">
            <h2>Overall Winner</h2>
            <p>${winnerMap[winner]}</p>
          </div>
        </div>
      </body>
      </html>
    `);
    
    newWindow.document.close();
  }
}










