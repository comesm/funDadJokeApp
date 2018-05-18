import React, {Component} from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkbox: {
    marginBottom: 16,
  }
}

class TableRow extends Component {


  constructor(props) {
    super(props);
    this.state = {
      funny: null
    }
  }

  toggleFunny() {

    let nextFunnyState;

    if(this.state.funny === null) {
       if(this.props.joke.vote) {
         nextFunnyState = "Not Funny";
       } else {
         nextFunnyState = "Funny";
       }
    } else {
      if(this.state.funny === "Funny") {
        nextFunnyState = "Not Funny";
      } else {
        nextFunnyState = "Funny";
      }
    }

    this.setState(
      {
        funny: nextFunnyState
      },
      ()=> {
        if(this.state.funny === "Funny") {
          this.props.updateCount(true);
        } else {
          this.props.updateCount(false);
        }
       }
    )
  }

  render() {
    return (
      <tr>
           <td><Checkbox
            onCheck={this.toggleFunny.bind(this)}
            defaultChecked={this.props.joke.vote ? true: false}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            style={styles.checkbox}
            /></td>
           <td>{
            !this.state.funny ? (this.props.joke.vote ? "Funny" : "Not Funny") : this.state.funny}</td>
           <td>{this.props.joke.joke}</td>
      </tr>

      )
  }
}

export default TableRow