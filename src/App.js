import React from 'react';

import TLActions from './TLActions';
import TLContainer from './TLContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Groceries</h1>
        <TLContainer />
        <TLActions />
      </div>
    );
  }
}

export default App;
