import { Board } from "../Board.js";
import { output } from "./utils/output.js";


const board = new Board()
board.setValue(0, 0, 1);
board.setValue(2, 2, 9);
board.setValue(8, 8, 1);
board.setValue(6, 6, 9);
board.setValue(3, 4, 9);
board.setValue(5, 5, 2);
board.setValue(2, 7, 6);

output("1: " + JSON.stringify(board.getSubBoard(2,2)))
output("3: " + JSON.stringify(board.getSubBoard(2,7)))
output("5: " + JSON.stringify(board.getSubBoard(5,4)))
output("9: " + JSON.stringify(board.getSubBoard(8,8)))
output(board.outputBoard());

output("1 in 0,1 allowed (F): " + board.setValueAllowed(0,1,1))
output("1 in 1,1 allowed (F): " + board.setValueAllowed(1,1,1))
output("2 in 0,1 allowed (T): " + board.setValueAllowed(0,1,2))
output("9 in 0,1 allowed (F): " + board.setValueAllowed(0,1,9))

let filename = "../../../assets/exampleBoards/example02.txt"

