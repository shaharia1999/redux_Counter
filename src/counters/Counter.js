import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremectACtion } from '../redux_services/ActionCounter';

const Counter = () => {
    const count =useSelector(state=>state.count);
    const dispatch=useDispatch()
 
    // const [state,setState]=useState(0);

    const incremectCounter=()=>{
        // setState((state)=>state+1)
        dispatch(incremectACtion());
    }

    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={incremectCounter}>incremect</button>
            <button>decrement</button>
            <button>reset</button>
            
        </div>
    );
};

export default Counter;