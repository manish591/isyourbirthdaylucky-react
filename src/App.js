import { useState } from "react";
import "./styles.css";

let sum = 0;
let luckyNumber = 0;
let inputDate = "";

export default function App() {
  const [message, setMessage] = useState("");

  function setLucky(e) {
    luckyNumber = e.target.value;
  }

  function changeInput(e) {
    inputDate = e.target.value;
  }

  function showLeap() {
    if (inputDate === "" || luckyNumber === "") {
      setMessage("Please Input Correctly!");
      return;
    }

    let birthArray = inputDate.split("-");
    birthArray.forEach((date) => {
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
      <input onChange={changeInput} type="date" />
      <small>enter your lucky number here</small>
      <input
        onChange={setLucky}
        placeholder="enter lucky number"
        type="number"
        min="1"
      />
      <button onClick={showLeap}>Calculate</button>
      <h2>{message}</h2>
    </div>
  );
}
