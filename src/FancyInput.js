import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = (_, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        myFocusFunction: () => {
            inputRef.current.focus();
            console.log(`%ccustom function!!🚀`, 'padding: 5px; background: #fff; color: #00b354');
        }
    }));
    return <input ref={inputRef} style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: 8, marginBottom: 8 }} />;
}

export default forwardRef(FancyInput);