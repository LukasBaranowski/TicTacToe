document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')
    
    let currentPlayer = 'playerX'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
        
    });

    function clickOutcome(event) {
        const squaresArray = Array.from(squares)
        const index = squaresArray.indexOf(event.target)
        playerDisplay.innerHTML = currentPlayer
        
        if(currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            currentPlayer = 'player0'
        } else {
            squares[index].classList.add('player0')
            currentPlayer = 'playerX'
            
        }
        
    }
    
    
})