import React from "react";

function DetailButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-yellow-950  bg-stone-400 rounded-md py-3 text-xs font-semibold hover:text-stone-400 hover:bg-yellow-950 w-[20%]"
    >
      {props.children}
    </button>
  );
}

export default DetailButton;
