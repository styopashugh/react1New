import React from 'react';
import Cell from './cell';

export default class Board extends React.Component{
	renderCell(i){
		return <Cell onClick={()=>this.props.onClick(i)}/>
	}
		
		render(){
			return(
				<div>
					<div className='board-row'>
						{this.renderCell(0)}
						{this.renderCell(0)}
						{this.renderCell(0)}


					</div>
					<div className='board-row'>
						{this.renderCell(0)}
						{this.renderCell(0)}
						{this.renderCell(0)}


					</div>
					<div className='board-row'>
						{this.renderCell(0)}
						{this.renderCell(0)}
						{this.renderCell(0)}


					</div>
				</div>
				
			)
		}





	
}