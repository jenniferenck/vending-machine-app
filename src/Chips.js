import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'spin'
    };
  }

  componentDidMount() {
    setTimeout(this.stopSpinning, 1000);
    // console.log('FIRST', this.state.className);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState.className);
    console.log('currState:', this.state.className);
  }

  stopSpinning = () => {
    this.setState(
      {
        className: ''
      }
      //   console.log(this.state.className)
    );
  };

  render() {
    return (
      <div>
        <img
          className={this.state.className}
          src="https://www.fritolay.com/images/default-source/default-album/tostitos-salsa-verde.png?sfvrsn=fdf9f93a_0"
          alt=""
        />
        <p>Chips</p>
        <Link to="/">
          <button className="btn btn-secondary" type="button">
            Go Back
          </button>
        </Link>
      </div>
    );
  }
}

export default Chips;
