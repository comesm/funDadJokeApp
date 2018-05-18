import React, {Component} from 'react';
import TableRow from './TableRow';


class ResultView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
     <p>Here are your Results: </p>
     <p>Funny: {this.props.funny}</p>
     <p>Not Funny: {this.props.notFunny}</p>
        <table style={{width:'100%'}}>
         <tr>
          <th>Vote</th>
          <th>Rating</th>
          <th>Joke</th>
         </tr>
          {this.props.votedJokes.map((jokeObj, idx) => (
           <TableRow updateCount={this.props.updateCount} key={idx} joke={jokeObj} />
         ))
         }
        </table>
        <div>
      </div>
  </div>
    )
  }

}


export default ResultView