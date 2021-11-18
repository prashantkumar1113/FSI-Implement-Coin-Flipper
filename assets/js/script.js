// TODO: Declare any global variables we need
const diceImg = document.querySelector("img");
const message = document.querySelector(".message-container");
let diceCounts = [0, 0, 0, 0, 0, 0];
let dicePercents = [0, 0, 0, 0, 0, 0];
let total = 0;

// TODO: Add event listener and handler for flip and clear buttons

// Flip Button Click Handler
// TODO: Determine flip outcome
// TODO: Update image and status message in the DOM
const flipButton = document.getElementById("roll");
flipButton.addEventListener("click", function (e) {
  let rolledValue = Math.ceil(Math.random() * 6);
  let indexValue = rolledValue - 1;
  diceImg.src = `./assets/images/dice/dice${rolledValue}.png`;
  message.textContent = `You Rolled a ${rolledValue}`;
  //console.log(`Rolled value: ${rolledValue}, Index value: ${indexValue}`)

  diceCounts[indexValue]++;
  total++;

  for (let i = 0; i < dicePercents.length; i++) {
    dicePercents[i] = Math.round((diceCounts[i] / total) * 100) + "%";
    let queryString = `td${i + 1}-percent`;
    document.getElementById(queryString).textContent = dicePercents[i];
    //console.log( queryString )
  }

  let queryString = `td${rolledValue}`;
  document.getElementById(queryString).textContent = diceCounts[indexValue];
});

// Clear Button Click Handler
// TODO: Reset global variables to 0
// TODO: Update the scoreboard (same logic as in flip button click handler)
const resetButton = document.getElementById("clear");
resetButton.addEventListener("click", function (e) {
  total = 0;
  message.textContent = "Let's Get Rolling!";
  for (let i = 0; i < diceCounts.length; i++) {
    diceCounts[i] = 0;
    dicePercents[i] = 0;
    let queryString = `td${i + 1}`;
    document.getElementById(queryString).textContent = "0";
    queryString = `${queryString}-percent`;
    document.getElementById(queryString).textContent = "0%";
    diceImg.src = `./assets/images/dice/dice1.png`;
  }
});
