let stringifyBoard = function (board) {
    return board[0].join(' ')+
    '\n'+
    board[1].join(' ')+
    '\n'+
    board[2].join(' ')
}

let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

let player='X';

let win = function(board,player){
    if(board[0][0]===player && board [0][1]===player && board[0][2]===player){
        return true;
    }
    if(board[1][0]===player && board [1][1]===player && board[1][2]===player){
        return true;
    }
    if(board[2][0]===player && board [2][1]===player && board[2][2]===player){
        return true;
    }
    if(board[0][0]===player && board [1][0]===player && board[2][0]===player){
        return true;
    }
    if(board[0][1]===player && board [1][1]===player && board[2][1]===player){
        return true;
    }
    if(board[0][2]===player && board [1][2]===player && board[2][2]===player){
        return true;
    }
    if(board[0][0]===player && board [1][1]===player && board[2][2]===player){
        return true;
    }
    if(board[0][2]===player && board [1][1]===player && board[2][0]===player){
        return true;
    }
    return false;
}



while(true){
    let boardStr = stringifyBoard(board);
    let row = +prompt('please enter the number of row \n \n \n' + boardStr)
    let column = +prompt('please enter the number of column \n \n \n' + boardStr)

    board[row][column]=player;
    


if(board[row][column] !== '-'){
    alert('Game over')
    break;
}

const didWin = win(board, player)
    if(didWin){
        alert('you win');
    }



}

if (player==='X') {
    player='O';
}else{
    player='X'
}