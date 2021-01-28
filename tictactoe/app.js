//declare starting state of game
const state = {
  playerX: [],
  playerO: [],
  movesLeft: 9,
  gameOver: false,
  winner: null,
  winningMoves: null,
  turn: 'X'
};
/*
possible solutions for tic tac toe:
0 1 2
3 4 5
6 7 8
*/
const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//tie game if board is filled and no winner
const isTie = () => !state.movesLeft && !state.winner;
//finds matching moves in board and passed to isWinner fn to find winner
const findMatching = (solutions, playerMoves) => solutions.every(val => playerMoves.includes(val));
//identifies pieces on board to match winner
const isWinner = playerMoves => solutions.filter(win => findMatching(win, playerMoves)).length > 0;

//view handling functions
const renderMove = () => (event.target.innerHTML = state.turn);
const displayResult = result => document.getElementById('winner').innerHTML = result;
const displayWin = () => displayResult(`<p>${state.turn} WINS!</p>`);
const displayCat = () => displayResult(`<p>CAT\'S GAME. PLAY AGAIN.</p>`);

const displayResults = () => {
  if (state.winner) displayWin()
  if (isTie()) displayCat()
}

const displayWinner = () => {
  if (state.winningMoves.length > 0) state.winner === 'X' ? 'X' : 'O';
};

//keep track of game state
const addToPlayerMoves = newMove => newMove.push(Number(event.target.id));
const subtractMove = () => (state.movesLeft -= 1);

const isGameOver = move =>
  isWinner(move) || isTie()
    ? (state.gameOver = true)
    : (state.gameOver = false);

const addWinner = newMove => {
  if (isWinner(newMove)) state.winner = state.turn
};

const updateState = newMove => {
  addToPlayerMoves(newMove);
  subtractMove();
  addWinner(newMove)
  isGameOver(newMove);
};

const addToWinningMoves = newMove => {
  state.winningMoves = solutions.filter(win => findMatching(win, newMove))
};

const nextPlayer = () =>  {
  return state.turn === 'X' ? (state.turn = 'O') : (state.turn = 'X');
}

//handling of controller logic
const controller = (newMove, turn) => {
  renderMove();
  updateState(newMove);
  displayResults(newMove, turn);
  addToWinningMoves(newMove);
  displayWinner();
  nextPlayer();
};

const nextMove = () => {
  document.getElementById('board').addEventListener('click', ({ target }) => {
    if (!state.gameOver && target.innerHTML.length === 0) {
      state.turn === 'X'
        ? controller(state.playerX, state.turn)
        : controller(state.playerO, state.turn);
    }
  });
};

//initialize view and state
const initResults = () => document.getElementById('winner').innerHTML = '';

const initMoves = () => {
  let idArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  idArr.forEach(index => (document.getElementById(index).innerHTML = ''));
}

const initView = () => {
  initResults();
  initMoves();
}

const initState = () => {
  state.playerX = [];
  state.playerO = [];
  state.movesLeft = 9;
  state.gameOver = false;
  state.turn = 'X';
  state.winningMoves = null;
  state.winner = null;
};

const initAll = () => {
  initView();
  initState();
}
//reset game
const resetGame = () => {
  document
    .querySelector('button')
    .addEventListener('click', () => initAll());
}

nextMove();
resetGame();
