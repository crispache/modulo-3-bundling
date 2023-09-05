import React from "react";
import classes from "./helloComponentStyles.scss";

export const HelloComponent = () => {

  return (
    <div className="container">
      <span className={classes.resultBackground}>
        Hola Mundo
      </span>
    </div>
  );
};
