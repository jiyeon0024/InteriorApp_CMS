import React from "react";

function Button2(props) {
  return (
    <button
      className="border-2 text-white text-lg  font-medium border-white   hover:border-yellow-950  hover:text-yellow-950 rounded py-3 px-20"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button2;
