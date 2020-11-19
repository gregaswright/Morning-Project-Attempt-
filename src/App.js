import React from 'react'
import logo from './logo.svg';
import './App.css';

import CharsContainer from './Container/CharsContainer'
import FavoritesContainer from './Container/FavoritesContainer'

class App extends React.Component {

  state = {
    char: {}
  }

  appClickHandler = (char_obj) => {
    this.setState({char: char_obj})
    console.log(char_obj)
  }
  
  render() {
    return (
      <>
        <CharsContainer appClickHandler={this.appClickHandler}/>
        <FavoritesContainer char={this.state.char}/>
      </>
    )
  }
}

export default App;
