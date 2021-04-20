import useNodeHeight from './useNodeHeight'

const AppCustomHook = () => {
    const { measureRef, height} = useNodeHeight()

    return (
        <>
            <h1 ref={measureRef}>Hello, world</h1>
            <h2>O header acima tem {Math.round(height)}px de altura</h2>
        </>
    );
}

export default AppCustomHook;