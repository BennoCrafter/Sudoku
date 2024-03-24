class Board {
  constructor(values=[]) {
    this.values = values
    this.createEmptyBoard()
  }
  setValue(x,y, val){

  }
  createEmptyBoard(){
    for (let row = 0; row < 9; row++){
        this.values.push([0,0,0,0,0,0,0,0,0])
    }
  }
}


const board = new Board([])
console.log(board.values)