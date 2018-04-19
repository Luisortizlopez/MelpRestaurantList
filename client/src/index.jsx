import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  construntor(props){
    this.state = {
      list:[]
    }
  }


render () {
    return (
      <div>Hello world</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
