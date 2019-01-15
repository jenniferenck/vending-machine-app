import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
  render() {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif"
          alt="sardines"
        />
        <p>Sardines</p>
        <Link to="/">
          <button className="btn btn-secondary" type="button">
            Go Back
          </button>
        </Link>
      </div>
    );
  }
}

export default Sardines;
