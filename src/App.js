import React, { useState } from "react";

import "./App.css";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Kolkata",
  }).format(date);
}
function App() {
  const [title, setTitle] = useState("asdf");
  const [title2, setTitle2] = useState("asdfasdfakdjfjlkajsd");
  const clikhandler = () => {
    setTitle("new title");
  };

  const clikhandler2 = () => {
    setTitle2(title2);
  };
  const changehandler = (event) => {
    setTitle2(event.target.value);
  };

  return (
    <div className="App">
      <h1>asdf </h1>
      <span id="sed">{title}</span>
      <br />
      <span id="sed">{title2}</span>
      <br />
      <button onClick={clikhandler}>Click Me</button>
      <button onClick={clikhandler}>Click Me</button>
      <div className="alert alert-primary" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      <input
        type="number"
        step="0.2"
        min="0.2"
        name="ss"
        id="ss"
        value={title2}
        onChange={changehandler}
      />
      <button onClick={clikhandler2}>Click Me</button>
    </div>
  );
}

export default App;
