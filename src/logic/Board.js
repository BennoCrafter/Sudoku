class Board {
	constructor() {
		this.values = [];
		this.createEmptyBoard();
	}
	setValue(row, col, val) {
		this.values[row][col] = val;
	}

  setValueAllowed(row, col, val) {
		return true
	}

	getValue(row, col) {
		return this.values[row][col];
	}

	createEmptyBoard() {
		for (let row = 0; row < 9; row++) {
			this.values.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
		}
	}

  isEmpty(row, col) {
    return this.getValue(row,col) === 0
  }

	outputBoard() {
		let st = "-------------------------------------\n";
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
        if (this.isEmpty(row,col)) {
          st += "|   " 
        } else {
          st += "| "+this.getValue(row, col) + " "
        }
      }
      st += "|\n-------------------------------------\n"
		}
		return st;
	}
}

const board = new Board();
board.setValue(0, 0, 1);
board.setValue(8, 8, 1);
console.log(board.outputBoard());
