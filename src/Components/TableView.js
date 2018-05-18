import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';
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
  }

  updateJokes(joke, outcome) {

    this.setState(prevState => ({
      votedOn: [...prevState.votedOn, joke],
      totalFunny: prevState.totalFunny + outcome,
      totalNotFny: prevState.totalNotFny + (outcome === 0 ? 1 : 0)
    }))

  }

  render() {
    console.log(27, this.state.jokeObj);
    return (
      <div className={"TableView"}>
       <Tabs>
         <Tab label="Joke">
          <JokeView votedJokes={this.state.jokeObj} updateJokes={this.updateJokes.bind(this)} />
          </Tab>
        <Tab label="Results">
           <ResultView funny={this.state.totalFunny} notFunny={this.state.totalNotFny} votedJokes={this.state.votedOn} />
          </Tab>
          </Tabs>
      </div>)
  }
}

export default TableView;