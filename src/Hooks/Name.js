import React, { createContext, useContext } from "react";

export const NameContext = createContext();

export const NameContextProvider = (props) => (
  <NameContext.Provider value={{name:"manoj", age:20, company:props.company}}>
    {props.children}
  </NameContext.Provider>
);

export const useMyName = () => {
  const name = useContext(NameContext);

  console.log("name is", name);
  return `My name is ${name}.`;
};

export const Name = (props) => {
    const test = useMyName();
    return <h1>Hey Hi --{test}</h1>
}