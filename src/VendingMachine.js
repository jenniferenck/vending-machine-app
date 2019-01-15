import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>Vending Machine App</h1>
        <img
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          src="https://thumbs3.ebaystatic.com/d/l225/m/mrffjnInx2mfjLM_1-yu7tw.jpg"
          alt="old school vending machine with playground balls"
        />
        <span style={{ display: 'inline-flex' }}>
          <p>
            <Link to="/chips">
              <img
                style={{ width: '100px' }}
                src="https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/chip-512.png"
                alt="potato chip icon"
              />
            </Link>
          </p>
          <p>
            <Link to="/sardines">
              <img
                style={{ width: '100px' }}
                src="https://images.vexels.com/media/users/3/143225/isolated/preview/209a4cb7c11bebeb888599843b0df8cc-sardines-can-icon-by-vexels.png"
                alt="sardines icon"
              />
            </Link>
          </p>
          <p>
            <Link to="/soda">
              <img
                style={{ width: '100px' }}
                src="https://cdn4.iconfinder.com/data/icons/food-4-9/128/food_Coke-Can-Soda-Beer-Beverage-Drink-512.png"
                alt="soda icon"
              />
            </Link>
          </p>
        </span>
      </div>
    );
  }
}

export default VendingMachine;
