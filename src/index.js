import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "pink",
  fontSize: "20px",
  border: "1px solid brown"
};

//to update properties of our customStyle:
customStyle.color = "green";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
