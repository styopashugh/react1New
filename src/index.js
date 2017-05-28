import React from 'react';
import ReactDOM from 'react-dom';
//import Game from "./game.js";
//import './style/index.css';

class App extends  React.Component{
    render(){
        return(

            <div className="eee" style={{backgroundColor:"aqua" ,width:"800px",height:"400px"}}>
                <h1>{this.props.textH1}</h1>
                <input type="text"></input>
            </div>
        )
    }
}


ReactDOM.render(
  <App textH1="text1"/>,
  document.getElementById('root')
);
