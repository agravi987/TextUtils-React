import React, { useState } from "react";

export default function Textform({
  title = "Enter title",
  sub_heading = "Enter the text below",
  isDarkMode,
  showAlert,
}) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase", "primary");
  };

  const handleOnChange = (event) => {
    setHistory([...history, text]);
    setText(event.target.value);
  };

  const handleUndoClick = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setText(lastState || "");
      setHistory(history);
    }
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to LowerCase", "primary");
  };

  const handleCapClick = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
    showAlert("Text Capitalized", "primary");
  };

  const handleClearClick = () => {
    setText("");
    showAlert("Text cleared successfully", "warning");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleSaveClick = () => {
    localStorage.setItem("text", text);
  };

  const handleLoadClick = () => {
    setText(localStorage.getItem("text"));
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Removed extra spaces ", "success");
  };

  const [text, setText] = useState(" ");
  const [history, setHistory] = useState([]);

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className="text-center">{title}</h1>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {sub_heading}
          </label>
          <textarea
            className={`form-control ${
              isDarkMode ? "bg-secondary text-white" : " "
            } `}
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCapClick}>
          Capitaize
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUndoClick}>
          Undo
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSaveClick}>
          Save
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoadClick}>
          Load
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleExtraSpace}
        >
          Remove extra sapce
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
