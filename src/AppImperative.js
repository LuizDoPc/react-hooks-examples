import { useRef } from 'react';
import FancyInput from './FancyInput';

const AppImperative = () => {
    const inputRef = useRef(null);

    return (
        <>
            <FancyInput ref={inputRef} />
            <br/>
            <button onClick={() => {
                inputRef.current.myFocusFunction();
            }}>
                focus
            </button>
        </>
    )
}

export default AppImperative;