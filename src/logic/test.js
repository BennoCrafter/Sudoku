const boardModule = require("./Board")
const board = new boardModule.Board()
board.setValue(0, 0, 1);
board.setValue(2, 2, 9);
board.setValue(8, 8, 1);
board.setValue(6, 6, 9);
board.setValue(3, 4, 9);
board.setValue(5, 5, 2);
board.setValue(2, 7, 6);

console.log("1: " + JSON.stringify(board.getSubBoard(2,2)))
console.log("3: " + JSON.stringify(board.getSubBoard(2,7)))
console.log("5: " + JSON.stringify(board.getSubBoard(5,4)))
console.log("9: " + JSON.stringify(board.getSubBoard(8,8)))
console.log(board.outputBoard());

console.log("1 in 0,1 allowed (F): " + board.setValueAllowed(0,1,1))
console.log("1 in 1,1 allowed (F): " + board.setValueAllowed(1,1,1))
console.log("2 in 0,1 allowed (T): " + board.setValueAllowed(0,1,2))
console.log("9 in 0,1 allowed (F): " + board.setValueAllowed(0,1,9))
