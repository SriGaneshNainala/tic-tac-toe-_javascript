let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');

function cellClicked(cellIndex) {
    if (gameState[cellIndex] !== '' || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

    checkWin();
    checkDraw();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
            gameActive = false;
            messageElement.innerText = `${currentPlayer} wins!`;
            return;
        }
    }
}

function checkDraw() {
    if (!gameState.includes('')) {
        gameActive = false;
        messageElement.innerText = `It's a draw!`;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];

    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });

    messageElement.innerText = '';
}
