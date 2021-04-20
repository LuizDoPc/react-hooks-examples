import { useCallback, useState } from "react";

const useNodeHeight = () => {
    const [height, setHeight] = useState(0);

    const measureRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return {height, measureRef};
}

export default useNodeHeight;