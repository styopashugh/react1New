import React from 'react';
import Board from './board.js';
import Change from './change.js';




class Game extends  React.Component{
	render(){
		return(<div className ='game'>
			<div className='change'><Change/></div>
			<div className='game-board'><Board/></div>
			<div className='game-Info'>Info</div>
			</div>)
	}
}

export default Game;