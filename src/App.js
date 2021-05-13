import {useState} from 'react'
import Ripples from 'react-ripples'

import AppState from './AppState';
import AppReducer from './AppReducer';
import AppRefs from './AppRefs';
import AppCustomHook from './AppCustomHook';
import AppImperative from './AppImperative';


const buttonStyle = {
    backgroundColor: '#163db7', color: '#fff', border: 'none', padding: 8, borderRadius: 4
}

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div style={{padding: 20}}>
            <div style={{display: 'flex', gap: 4}}>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => setCurrentPage(0)}>state/effect</button></Ripples>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => setCurrentPage(1)}>reducer</button></Ripples>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => setCurrentPage(2)}>refs</button></Ripples>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => setCurrentPage(3)}>refs w/ custom hook</button></Ripples>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => setCurrentPage(4)}>imperative + refs</button></Ripples>
            </div>
            <br />
            <br />
            {currentPage === 0 && <AppState parametros={{}} />}
            {currentPage === 1 && <AppReducer />}
            {currentPage === 2 && <AppRefs />}
            {currentPage === 3 && <AppCustomHook />}
            {currentPage === 4 && <AppImperative />}
        </div>
    )
}

export default App