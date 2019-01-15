import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
  render() {
    return (
      <div>
        <img
          className="spin"
          src="https://theamericancandystore.co.uk/1349-large_default/fanta-orange-can-355ml.jpg"
          alt=""
        />
        <p>Soda</p>
        <Link to="/">
          <button className="btn btn-secondary" type="button">
            Go Back
          </button>
        </Link>
      </div>
    );
  }
}

export default Soda;
