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
    console.log(11, this.props);
  }

  render() {
    console.log(11, this.props);
    return (
      <tr>
           <td><Checkbox
            checked={this.props.joke.vote ? true: false}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            style={styles.checkbox}
            /></td>
           <td>{this.props.joke.vote ? "Funny" : "Not Funny"}</td>
           <td>{this.props.joke.joke}</td>
      </tr>

    )
  }


}

export default TableRow