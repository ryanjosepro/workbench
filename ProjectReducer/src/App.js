import React from 'react';

import { createSimpleStore } from './components/SimpleReducer';

const Counter = createSimpleStore(
    {
        count: 0
    },
    {
        increment(state) {
            state.count++;
        },

        decrement(state) {
            state.count--;
        },

        setCount(state, count) {
            state.count = count;
        }
    }
)

function App({count}) {
    function initCount(dispatch) {
        dispatch(Counter.actions.setCount(count));
    }

    return (
        <Counter.Provider init={initCount}>
            <Child></Child>
        </Counter.Provider>
    );
}

function Child() {
    const state = Counter.useState();
    const dispatch = Counter.useDispatch();

    function increment() {
        dispatch(Counter.actions.increment());
    }

    function decrement() {
        dispatch(Counter.actions.decrement());
    }

    return (
        <>
            <h1>Total: {state.count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default App;