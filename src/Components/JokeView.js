import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import makeRequest from '../utils';

const styles = {
   headline: {
     fontSize: 24,
     paddingTop: 16,
     marginBottom: 12,
     fontWeight: 400
  },
  button: {
    margin: 12
  }
}

class JokeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentJoke: ''
    }

    this.getJoke();
  }

  vote(outCome) {
    this.props.updateJokes({vote: outCome, joke: this.state.currentJoke}, outCome);
    this.getJoke();
  }

  getJoke() {
    makeRequest()
     .then(results => {
        this.setState({currentJoke: results});
     })
     .catch(err => {
       this.setState({currentJoke:
        "click on like button to fetch a joke"});
     })
  }


  render() {
    return (
      <div>
       <div>
         <p>Here is your Joke: </p>
         <p>{this.state.currentJoke}</p>
       </div>
         <RaisedButton label="Good Joke" onClick={() => this.vote(1)} primary={true} style={styles.button} />
         <RaisedButton label="Bad Joke" onClick={() => this.vote(0)} secondary={true}  style={styles.button} />
      </div>
    )
  }
}

export default JokeView