import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.user === 12) {
    return {
      count: state.count + 1,
    };
    //
  }
  if (action.type === "decrease") {
    if (state.count <= 0) {
      return {
        count: 0,
      };
    }
    return {
      count: state.count - 1,
    };
  }
  //
  if (action.type === "reset") {
    return {
      count: 0,
    };
  }
  return state;
};

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div style={{ padding: "0.5rem" }}>
        <br />
        <p>Reducer</p>
        <br />
        <p style={{ color: "blue" }}> Add item to Cart</p>

        <br />

        <p>
          <span>
            &nbsp; &nbsp; Blender
            <span style={{ color: "red" }}>&nbsp;&nbsp;{state.count}</span>
          </span>
        </p>

        <div style={{ display: "flex", padding: "1rem" }}>
          <button
            onClick={() => {
              dispatch({ user: 12 });
            }}
          >
            +
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              dispatch({ type: "decrease" });
            }}
          >
            -
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
