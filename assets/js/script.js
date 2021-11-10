// TODO: Declare any global variables we need
let headsCount = 0
let tailsCount = 0
let total = 0

const pennyImg = document.querySelector('img')
const headsText = document.getElementById('heads')
const headsPercent = document.getElementById('heads-percent')
const tailsText = document.getElementById('tails')
const tailsPercent = document.getElementById('tails-percent')
const statusText = document.querySelector('.message-container')

    // TODO: Add event listener and handler for flip and clear buttons
    
    // Flip Button Click Handler
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM
    const flipButton = document.getElementById('flip')
    flipButton.addEventListener('click', function(e){
        let pennyFlip = Math.random() < 0.5
        //console.log(pennyFlip)
        if(pennyFlip){ //Heads was flipped
            // Update the scorboard
            // TODO: Calculate the total number of rolls/flips
            // Make variables to track the percentages of heads and tails
            // TODO: Use the calculated total to calculate the percentages
            // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
            // TODO: Update the display of each table cell
            headsCount++
            total++
            headsText.textContent = headsCount
            if(total > 0){
                headsPercent.textContent = Math.round((headsCount/total) * 100)+ '%'
                tailsPercent.textContent = Math.round((tailsCount/total) * 100) + '%' 
            }
            statusText.textContent = 'You Flipped Heads'
            pennyImg.src = './assets/images/penny-heads.jpg'
        }
        else{//Tails was flipped
            tailsCount++
            total++
            tailsText.textContent = tailsCount
            if(total > 0){
                headsPercent.textContent = Math.round((headsCount/total) * 100)+ '%'
                tailsPercent.textContent = Math.round((tailsCount/total) * 100) + '%' 
            }
            statusText.textContent = 'You Flipped Tails'
            pennyImg.src = './assets/images/penny-tails.jpg'

         }
        
    })

    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    const resetButton = document.getElementById('clear')
    resetButton.addEventListener('click', function(e){
        headsCount = 0
        tailsCount = 0
        total = 0
        headsText.textContent = headsCount
        headsPercent.textContent = 0 + '%'
        tailsText.textContent = tailsCount
        tailsPercent.textContent = 0 + '%' 
        statusText.textContent = 'Let\'s Get Rolling!'
        pennyImg.src = './assets/images/penny-heads.jpg'
    })