import React from "react";
import ReactDOM from "react-dom/client";

// Create a React element
// const heading = React.createElement("h1", { id: "title" }, "Hello Ghazala");

//JSX Syntax
// JSX => Babel transpiles JSX to React.createElement calls => objects => render as html element
const heading = (
  <h1 id="title" className="heading">
    Hello Ghazala
  </h1>
);

const  Buttton = () => {
  return <button id="button">Click Me</button>
}

//Component Composition 
// Component composition is the practice of combining multiple components to build more complex UIs in React.
const Container = () => {
  return (
    <div className="container">
      heel
      1234
      {heading}
      {2333}
      <Buttton /> 
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
