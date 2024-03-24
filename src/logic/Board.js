class Board {
	constructor() {
		this.values = []
		this.createEmptyBoard()
	}
	setValue(rowIndex, colIndex, val) {
		this.values[rowIndex][colIndex] = val
	}

	getSubBoard(rowIndex, colIndex) {
		let ri = Math.floor(rowIndex/3) * 3 // first row index
		let ci = Math.floor(colIndex/3) * 3 // first col index
		let subBoard = [this.getValue(ri, ci), this.getValue(ri, ci+1), this.getValue(ri, ci+2),
			this.getValue(ri+1, ci), this.getValue(ri+1, ci+1), this.getValue(ri+1, ci+2),
			this.getValue(ri+2, ci), this.getValue(ri+2, ci+1), this.getValue(ri+2, ci+2)]
		return subBoard
	}

	setValueAllowed(rowIndex, colIndex, val) {
		if (!this.isEmpty(rowIndex, colIndex)) {
			return false
		}
		// check whether row already contains the val
		for (let colI = 0; colI < 9; colI++) {
			if (this.getValue(rowIndex, colI) == val)
				return false
		}
		// check whether row already contains the val
		for (let rowI = 0; rowI < 9; rowI++) {
			if (this.getValue(rowI, colIndex) == val)
				return false
		}
		// check, whether the val is already in the sub-board
		if (this.getSubBoard(rowIndex, colIndex).includes(val))
			return false
		return true;
	}

	getValue(rowIndex, colIndex) {
		return this.values[rowIndex][colIndex]
	}

	createEmptyBoard() {
		for (let row = 0; row < 9; row++) {
			this.values.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
		}
	}

	isEmpty(rowIndex, colIndexl) {
		return this.getValue(rowIndex, colIndexl) === 0
	}

	outputBoard() {
		let hr = "----------------------------------------\n";
		let st = hr + hr
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (col % 3 == 0) st += "|"
				if (this.isEmpty(row, col)) {
					st += "|   ";
				} else {
					st += "| " + this.getValue(row, col) + " ";
				}
			}
			st += "|\n" + hr;
			if ((row+1) % 3 == 0) st += hr
		}
		return st;
	}
}

module.exports = { Board }