import { useRef } from 'react';
import Ripples from 'react-ripples'


import FancyInput from './FancyInput';

const buttonStyle = {
    backgroundColor: '#163db7', color: '#fff', border: 'none', padding: 8, borderRadius: 4
}

const AppImperative = () => {
    const inputRef = useRef(null);

    return (
        <>
            <FancyInput ref={inputRef} />
            <br/>
            <Ripples color='#fff'>
                <button style={buttonStyle} onClick={() => {
                    inputRef.current.myFocusFunction();
                }}>
                    focus
                </button>
            </Ripples>
        </>
    )
}

export default AppImperative;