import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = (_, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        myFocusFunction: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef}  />;
}

export default forwardRef(FancyInput);