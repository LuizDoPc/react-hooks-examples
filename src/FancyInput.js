import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = (props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        myFocusFunction: () => {
            inputRef.current.focus();
            console.log(`%ccustom function!!🚀`, 'padding: 5px; background: #fff; color: #00b354');
        },
        foo: () => {

        },
        bar: 42
    }));


    return <input ref={inputRef} style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: 8, marginBottom: 8 }} />;
}

export default forwardRef(FancyInput);