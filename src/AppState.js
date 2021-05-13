import { useState, useEffect, useCallback, useRef } from 'react';
import Ripples from 'react-ripples'

import ClasseQualquer from './ClasseQualquer'

const consoleStyles = [
  'padding: 5px; background: #fff; color: #ffd03a',
  'padding: 5px; background: #fff; color: #072ad8',
  'padding: 5px; background: #fff; color: #b00020',
  'padding: 5px; background: #fff; color: #00b354',
  'padding: 5px; background: #fff; color: #ff5b0d'
]


const buttonStyle = {
  backgroundColor: '#163db7', color: '#fff', border: 'none', padding: 8, borderRadius: 4
}

function App(
  {parametros}
) {
  const [count, setCount] = useState(() => 0);

  console.log('%crender 🌀', consoleStyles[0]);

























  // useEffect(() => {
  //   console.log('%copa 🗻', consoleStyles[1]);
  // });

  useEffect(() => {
    console.log('%ccomponent did mount 🗻', consoleStyles[1]);

    return () => console.log('%cunmounting component 🎠', consoleStyles[2]);
  }, []);

  useEffect(() => {
    console.log(`%cnew value for count: ${count} 🎈`, consoleStyles[3]);

    return () => console.log('%cbefore rendering again ⏮', consoleStyles[4])
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
  const [inputData, setInputData] = useState('')
  
  return (
    <>
      Count: {count}
      <br />
      <div style={{display: 'flex', gap: 4}}>
        <Ripples color='#fff'><button style={buttonStyle} onClick={reset}>Reset</button></Ripples>
        <Ripples color='#fff'><button style={buttonStyle} onClick={decrease}>-</button></Ripples>
        <Ripples color='#fff'><button style={buttonStyle} onClick={increase}>+</button></Ripples>
      </div>
      <br /><br />

      <input ref={inputRef} value={inputData} onChange={({target: {value}}) => setInputData(value)} style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: 8}} />

      <div>{`a resposta para tudo: ${valor}`}</div>
    </>
  );
}

export default App;
