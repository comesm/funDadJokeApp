import React, {Component} from 'react';
import TableRow from './TableRow';


class ResultView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(28, this.props.votedJokes);
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
           <TableRow key={idx} joke={jokeObj} />
         ))
         }
        </table>
        <div>
      </div>
  </div>
    )
  }

}


// let ResultView = ({results }) => (
//  <div>
//      <p>Here are your Results: </p>
//      <p>Funny: </p>
//      <p>Not Funny: </p>
//      <p>Here are your Results: </p>
//       <Table>
//        <TableHeader>
//         <TableHeaderColumn>Vote</TableHeaderColumn>
//         <TableHeaderColumn>Rating</TableHeaderColumn>
//         <TableHeaderColumn>Joke</TableHeaderColumn>
//        </TableHeader>
//        <TableBody>
//        {results.map((jokeObj, idx) => (
//         <TableRow>
//         <TableRowColumn></TableRowColumn>
//          <TableRowColumn>{jokeObj.vote ? "Funny" : "Not Funny"}</TableRowColumn>
//          <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{jokeObj.joke}</TableRowColumn>
//        </TableRow>))
//        }
//        </TableBody>
//       </Table>
//       <div>

//       </div>
//   </div>

// )



export default ResultView