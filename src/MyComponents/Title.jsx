import React from "react";
import propTypes from "prop-types";

function Title(props) {
  let titlestyle = {
    marginTop: "20px",
    color: "black",
    font: "sans-serif",
    opacity: "0.7",
    fontFamily: "Trocchi, serif",
    fontSize: "45px",
    fontWeight: "normal",
    lineHeight: "48px",
  };

  let pstyle = {
    fontSize: "20px",
    color: "black",
  };
  return (
    <div>
      <center>
        <h1 className="retro" style={titlestyle}>
          {props.title}
        </h1>
        <p style={pstyle}>
          (Helps you to find the weather conditions in your city)
        </p>
      </center>
    </div>
  );
}
Title.propTypes = {
  title: propTypes.string,
};

export default Title;
