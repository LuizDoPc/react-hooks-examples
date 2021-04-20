import { useCallback, useState } from "react";


const AppRefs = () => {
    const [height, setHeight] = useState(0);

    const measureRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <>
            <h1 ref={measureRef}>Hello, world</h1>
            <h2>O header acima tem {Math.round(height)}px de altura</h2>
        </>
    );
}

export default AppRefs;