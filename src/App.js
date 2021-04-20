import {useState} from 'react'

import AppState from './AppState';
import AppReducer from './AppReducer';
import AppRefs from './AppRefs';
import AppCustomHook from './AppCustomHook';
import AppImperative from './AppImperative';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <>
        <button onClick={()=> setCurrentPage(0)}>state/effect</button>
        <button onClick={()=> setCurrentPage(1)}>reducer</button>
        <button onClick={() => setCurrentPage(2)}>refs</button>
        <button onClick={() => setCurrentPage(3)}>refs w/ custom hook</button>
        <button onClick={() => setCurrentPage(4)}>imperative + refs</button>
        <br />
        <br />
        {currentPage === 0 && <AppState parametros={{}} />}
        {currentPage === 1 && <AppReducer />}
        {currentPage === 2 && <AppRefs />}
        {currentPage === 3 && <AppCustomHook />}
        {currentPage === 4 && <AppImperative />}
    </>
    )
}

export default App