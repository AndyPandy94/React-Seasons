import React from "react";
import ReactDOM from "react-dom";

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
  constructor(props) {
    super(props);

// This is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setstate to update our state
        this.setState({ lat: position.coords.latitude });
      },

      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

// React says we have to define render!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>;
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
