import React, { Component } from 'react';
import Heading from './Heading';
import './App.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      color: ''
    }
  }
  
  changeColor = (e) => {
    this.setState( {color: e.target.value } )
  }

  render() {
    const colors = this.props.colors
    return (
      <div className="button">
        {colors.map((color, index) => {
          return <button key={index} onClick={this.changeColor} value={color}>{color}</button>
        })}
        <Heading color={this.state.color}/>
      </div>
    );
 }
}
export default Button;
