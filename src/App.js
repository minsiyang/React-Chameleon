import React, {Component} from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  this.state = { colors: ['red', 'blue', 'yellow'] }
  }
  render () {
    return (
      <div className="App">
        <Button colors={this.state.colors} />
      </div>
    )
  }

}

export default App;