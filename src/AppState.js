import { useState, useEffect, useCallback, useRef } from 'react';

import ClasseQualquer from './ClasseQualquer'

function App(
  {parametros}
) {
  const [count, setCount] = useState(() => 0);

  console.log('%crender', 'padding: 5px; background: #fff; color: #ffd03a');

  useEffect(() => {
    console.log('%ccomponent did mount', 'padding: 5px; background: #fff; color: #072ad8');

    return () => console.log('%cunmounting component', 'padding: 5px; background: #fff; color: #b00020')
  }, []);

  useEffect(() => {
    console.log(`%cnew value for count: ${count}`, 'padding: 5px; background: #fff; color: #00b354');

    return () => console.log('%cbefore rendering again', 'padding: 5px; background: #fff; color: #ff5b0d')
  }, [count]);


  // useCallback(fn, inputs) é equivalente a useMemo(() => fn, inputs)

  const reset = useCallback(() => {
    setCount(0);
    inputRef.current.focus();
  }, []);

  const increase = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  
  const [valor, setValor] = useState(ClasseQualquer.fazQualquerCoisa(parametros));
  useEffect(() => {
    setValor(ClasseQualquer.fazQualquerCoisa(parametros));
  }, [parametros]);


  // const valor = useMemo(() => ClasseQualquer.fazQualquerCoisa(parametros), [parametros]);


  const inputRef = useRef(null)
  
  return (
    <>
      Count: {count}
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <br /><br />
      <input ref={inputRef} />

      <div>{`a resposta para tudo: ${valor}`}</div>
    </>
  );
}

export default App;
