import React, { Component } from 'react';

class Testapi extends Component {
state = { cocktails: []}

componentDidMount(){
    fetch('/cocktails')
    .then(res => res.json())
    .then(cocktails =>this.setState({cocktails}));
}
    render() {
      return (
          <div>
          <ul>
            <h1> hallo </h1>
          {this.state.cocktails.map(cocktail =>
            <li key={cocktail.id}>{cocktail.name}</li>)}
          </ul>
        </div>
      );
    }
  }
  
  export default Testapi;