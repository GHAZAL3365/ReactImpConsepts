
      const headingEl = React.createElement("h1", {}, "Revising React");
      const root = ReactDOM.createRoot(document.getElementById("root")); // this reactDOM api helping to render the elemnt in the root div and displaying it on the browser

      const paragraphEl = React.createElement(
        "p",
        {},
        "This is a paragraph element created using React."
      );

      root.render(headingEl);
      root.render(paragraphEl);
      // The above line will replace the previous content in the root div with the new paragraph element.
      // To render both elements, we can wrap them in a parent element like a div.
      const containerEl = React.createElement(
        "div",
        {},
        headingEl,
        paragraphEl
      );
      root.render(containerEl);
      // Now both the heading and paragraph will be displayed together in the root div.
  