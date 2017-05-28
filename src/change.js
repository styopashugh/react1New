import React from 'react';
export default class Change extends React.Component{

	foo(name){
		alert(name);
	}
		createButton(text){
			return <button onClick={()=>this.foo("styop")}>{text}</button>
		}
		render(){
			return(
			<div>
				{this.createButton("a")}
				{this.createButton("b")}
				{this.createButton("c")}
			</div>
			)
		}


}