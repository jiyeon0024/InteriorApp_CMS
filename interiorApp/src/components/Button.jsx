import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="text-yellow-950 border border-stone-400 rounded p-3 text-sm  font-semibold hover:text-white hover:bg-stone-400  hover:border-white "
      >
        {props.children}
      </button>
      <button className=" text-yellow-950  bg-stone-400 border border-stone-400 rounded p-3 text-sm  font-semibold hover:text-white hover:bg-stone-400   ">
        x
      </button>
    </div>
  );
}

export default Button;
