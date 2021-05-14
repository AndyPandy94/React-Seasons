import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
// render() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   };
//   return <div>Latitude:</div>
// };

// This is how to write function into a class based one
class App extends React.Component {
//   constructor(props) {
//     super(props);

//  This is the only time we do direct assignment to this.state
//     this.state = { lat: null, errorMessage: '' };

//   }
// This is the same as writing the whole contstructor, due to babel completing it for you.
  state = { lat: null, errorMessage: ''};

//
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        // We called setstate to update our state
      (position) => this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errorMessage: err.message })

    );
  }

// React says we have to define render!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner />;
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
