import React, { useState } from "react";

// Basically we are modifying the props here
// preceioulsy the value prop
// if we have value prop in our component , we are providing new one
// 
export const withMultipleValue = (Comp) => (props) => {
  const { factor = 1, ...rest } = props;
  const [value, setValue] = useState(
    Number(props.value) ? props.value * factor : factor
  );
  const newProps = {
    ...rest,
    value,
    onClick: () => setValue((value) => value * factor),
  };
  return <Comp {...newProps} />;
};

// A comp accepts props & shows somethng
export const MathComp = (props) => {
    return(
        <>
            <h1>Value: {props.value}</h1>
            <button onClick={props.onClick}>Change value</button>
        </>
    )
}
export const TestComp = withMultipleValue(MathComp)
