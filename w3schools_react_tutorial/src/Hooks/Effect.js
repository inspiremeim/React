import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log("useEffect setTimeout called");
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

function EffectWithOptionalParam() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log("useEffect setTimeout called");
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

function EffectWithOptionalParamChange() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
    console.log("useEffect setCalculation called");
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

function EffectWithOptionalParamAndClearEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
      console.log("useEffect setTimeout called");
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default EffectWithOptionalParamAndClearEffect;