import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const changeNumber = useSelector((state) => state.changeNumber);
  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <button
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span>-</span>
            </button>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={changeNumber}
            />
            <button
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
