/* In this exercise we must create a string that represents a chessboard with "#"'s and empty spaces */
 
var boardwidth = 8, boardheight = 5, board = "";
 
for ( i = 0 ; i < boardheight ; i++ ) {
  
  for ( f = 0 ; f < boardwidth ; f++ ) {
 
    if ( f % 2 === 0 )
      board += " ";
 
    else
      board += "#";
      
  }
  
  if ( i % 2 === 0) {
      board += "\n ";
  }
  
  else {
      board += "\n";
  }
 
}
 
console.log(board)
