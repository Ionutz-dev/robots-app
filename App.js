import React, { Component } from 'react';

import './App.css';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import Cards from './containers/Cards';
import Searchbox from './components/Searchbox/Searchbox';
import { robots } from './robots';
import Scroll from './components/Scrollbar/Scrollbar';

class App extends Component {
  state = {
    robots: [],
    searchfield: '',
  };

  onChangeSearch = event => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    this.setState({ robots: robots });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robot => {
      console.log(robot);
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="App">
          <h1>Robo App</h1>
          <Searchbox onSearch={this.onChangeSearch} />
          <Scroll>
            <ErrorBoundary>
              <Cards
                robots={filteredRobots}
                searchRobot={event => this.onChangeSearch(event)}
              />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
