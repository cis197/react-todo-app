import React from 'react';
import { connect } from 'react-redux';

import {REMOVE_ITEM} from '../actions/types'

class TLItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.itemName}</p>
        <button onClick={() => this.props.removeItem(this.props.itemName)}>
          X
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: itemName => dispatch({ type: REMOVE_ITEM, itemName })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TLItem);
