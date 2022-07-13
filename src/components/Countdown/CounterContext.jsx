import React from "react";

export const CounterContext = React.createContext();

export const CounterStorage = ({ children }) => {
  const [counter, setCounter] = React.useState(600);

  React.useEffect(() => {
    if (counter === 0) setCounter(600);
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
