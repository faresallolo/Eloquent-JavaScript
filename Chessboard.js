/* This is the way I found to solve it (kinda). There are probably easier ways to do this, */
 
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
