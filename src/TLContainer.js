import React from 'react';
import { connect } from 'react-redux';

import TLItem from './TLItem';

class TLContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.reduxTLItems.map(tli => (
          <TLItem itemName={tli} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxTLItems: state
  };
};

export default connect(mapStateToProps)(TLContainer);
