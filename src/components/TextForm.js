import React, { useState } from "react";
import "../App.css";

export default function () {
  const [text, setText] = useState("");

  const handleUpper = () => {
    setText(text.toUpperCase());
  };

  const lowerUpper = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText("");
  };
  const countShortLength = () => {
    let word = text.split(" ");
    word = word.map((ch) => ch.replace(/\./g, ""));
    let shortest = word.reduce((cur, pre) => {
      return cur.length < pre.length ? cur : pre;
    });
    return shortest.length;
  };
  const countLongLength = () => {
    let word = text.split(" ");
    word = word.map((ch) => ch.replace(/\./g, ""));
    let shortest = word.reduce((cur, pre) => {
      return cur.length > pre.length ? cur : pre;
    });
    return shortest.length;
  };

  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <h3 className="text-center my-5 text-uppercase">Text analyzer</h3>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
            value={text}
            placeholder="enter here"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="btn btn-light mx-3" onClick={handleUpper}>
          convert into uppercase
        </button>
        <button className="btn btn-dark" onClick={lowerUpper}>
          convert into lowercase
        </button>
        <button className="btn btn-light mx-3" onClick={handleClear}>
          clear
        </button>
      </div>
      <div className="d-flex container">
        <div className="container my-3">
          <h4>Your Text Summary</h4>
          <p>
            {text.split(" ").length} word and {text.length} character
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <p>{text.split(" ").length / 2} Average word length </p>
          <p>{text.replace(/ /g, "").length} character without space</p>
          <p>{text.split(" ").length - 1} no of spaces</p>
          <p>{countShortLength()} Shortest word length</p>
          <p>{countLongLength()} Longest word length</p>
        </div>
        <div className="container">
          <h3>PREVIEW</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
