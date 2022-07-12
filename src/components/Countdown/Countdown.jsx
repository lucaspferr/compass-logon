import React from "react";
import { CounterContainer, CounterText, CounterTimer, Seconds } from "./styles";

const Countdown = () => {
  const [counter, setCounter] = React.useState(600);

  React.useEffect(() => {
    if (counter === 0) setCounter(600);
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <React.Fragment>
      <CounterContainer>
        <CounterText>
          Application
          <br />
          refresh in
        </CounterText>
        <CounterTimer>{counter}</CounterTimer>
        <Seconds>seconds</Seconds>
      </CounterContainer>
    </React.Fragment>
  );
};

export default Countdown;
