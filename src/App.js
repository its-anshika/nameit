import React from 'react';
import Header from './components/Header.js'
import Searchbox from './components/Searchbox.js'
import Results from './components/Results.js'
import './index.css';
//App component is the parent component
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
  state = {
    head: "Name It!",
    headerExpanded: true,
    Names: [],
  };

  handlechange = (input) => {
    this.setState({ headerExpanded: !input, Names: input ? name(input):[] });
  }//as input is string its equivalent to !(input.length > 0 )


  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} titl={this.state.head} />
        <Searchbox oninput={this.handlechange} />
        <Results suggested={this.state.Names} />
      </div>
    );
  }
}
//this is the current class
//something that might change later needs to be stored in a 'state'(obj)
//only changing a state does not re-render ,hence we do setState
//prop is some data that we can transfer from parent component to child component
//using callback function, we can transfer from child component to parent component
export default App;
