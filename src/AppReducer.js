import { useReducer } from 'react';
import Ripples from 'react-ripples'

const initialState = { count: 0 };

const buttonStyle = {
    backgroundColor: '#163db7', color: '#fff', border: 'none', padding: 8, borderRadius: 4
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <br />
            <div style={{ display: 'flex', gap: 4 }}>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => dispatch({ type: 'decrement' })}>-</button></Ripples>
                <Ripples color='#fff'><button style={buttonStyle} onClick={() => dispatch({ type: 'increment' })}>+</button></Ripples>
            </div>
        </>
    );
}

export default App;
