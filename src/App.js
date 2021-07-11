import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  let sum = 0;
  let luckyNumber;

  let inputValue;

  function setLucky(e) {
    luckyNumber = e.target.value;
  }

  function changeInput(e) {
    inputValue = e.target.value;
  }

  function showLeap() {
    if (inputValue === "" || inputValue.length !== 8) {
      setMessage("Please Input Correctly!");
      return;
    }

    let arrayOfDate = inputValue.split("");
    arrayOfDate.forEach((date) => {
      sum += Number(date);
    });

    if (sum % Number(luckyNumber) === 0) {
      setMessage("This is your lucky number!");
    } else {
      setMessage("This is not your lucky number!");
    }
  }

  return (
    <div className="App">
      <h1>Is Your Birthday Lucky?</h1>
      <p>
        This is a react js application in which it tests whether your birthday
        is lucky or not based on certain calulation.
      </p>
      <small>enter your date of birth in ddmmyyyy format</small>
      <input onChange={changeInput} placeholder="ddmmyyyy" />
      <small>enter your lucky number here</small>
      <input onChange={setLucky} placeholder="number between 0 and 9" />
      <button onClick={showLeap}>Calculate</button>
      <h2>{message}</h2>
    </div>
  );
}
