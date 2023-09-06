import React from "react";

function Button1(props) {
  return (
    <button
      className={`border-2 text-white  border-white px-1 rounded hover:border-yellow-950  hover:text-yellow-950`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button1;
