import React, {
    useMemo,
    useState, 
    useCallback, 
    useReducer 
} from 'react';




const reducer = (state, action) => {
    switch (action.type){
        case "increase":
            return {...state, counter: state.counter + 1}
        case "decrease":
            return {...state, counter: state.counter - 1}
        default:
            return state;
    }
}

const Hooks = () => {
    const [inputValue, setInputValue] = useState('');
    const [count, dispatch] = useReducer(reducer, {counter: 10})
    
    const calculateResult = (input, value) => {
        return input.length * value;
    };

    const memoizedResult = useMemo(() => calculateResult(inputValue, count.counter), [
        inputValue,
        count.counter,
    ]);
    
    const handleIncrease = useCallback(() => {
        dispatch({type: 'increase'})
    }, [count.counter])
    const handleDecrease = useCallback(() => {
        dispatch({type: 'decrease'})
    }, [count.counter])
    
    return (
        <div>
            <h1>useMemo/useCallback Section</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <h3>Результат: {memoizedResult}</h3>
            <div>count : { count.counter }</div>
            <hr/>
            <h1>useReducer Section</h1>
            <button onClick={handleIncrease}>Увеличить</button>
            <button onClick={handleDecrease}>Уменьшить</button>
        </div>
    )
}

export default Hooks;