import React, { Component } from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import JokeView from './JokeView'
import ResultView from './ResultView'


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        votedOn: [],
        totalFunny: 0,
        totalNotFny: 0
    }
    this.updateJokes = this.updateJokes.bind(this);
    this.updateCount = this.updateCount.bind(this)
  }

  updateJokes(joke, outcome) {

    this.setState(prevState => ({
      votedOn: [...prevState.votedOn, joke],
      totalFunny: prevState.totalFunny + outcome,
      totalNotFny: prevState.totalNotFny + (outcome === 0 ? 1 : 0)
    }))

  }

  updateCount(funny) {
    if(funny) {
      this.setState(prevState => ({
      totalFunny: prevState.totalFunny + 1,
      totalNotFny: prevState.totalNotFny - 1
    }));
    } else {
      this.setState(prevState => ({
      totalFunny: prevState.totalFunny - 1,
      totalNotFny: prevState.totalNotFny + 1
    }))
    }
  }

  render() {
    return (
      <div className={"TableView"}>
       <Tabs>
         <Tab label="Joke">
          <JokeView votedJokes={this.state.jokeObj} updateJokes={this.updateJokes} />
          </Tab>
        <Tab label="Results">
           <ResultView funny={this.state.totalFunny} updateCount={this.updateCount} notFunny={this.state.totalNotFny} votedJokes={this.state.votedOn} />
          </Tab>
          </Tabs>
      </div>)
  }
}

export default TableView;