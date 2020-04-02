import React, { Component } from 'react';
import SearchBox from '../components/searchBox/searchBox';
import Scroll from '../components/scroll/scroll';
import CardList from '../components/cardList/cardList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, robots } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
