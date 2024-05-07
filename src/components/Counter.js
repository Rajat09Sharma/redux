import { counterActions } from '../store';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

  const counter = useSelector((states) => states.counter.counter);
  const showCounter=useSelector(states=>states.counter.showCounter)
  const dispatch =useDispatch();

  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  };

  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  };

  const increaseHandler=()=>{
    dispatch(counterActions.increase({amount:10}));
  };

  const toggleCounterHandler =()=>{ 
    console.log("counter comp togglre clicked")
    dispatch(counterActions.toggleCounter());
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter&&counter}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>Increased by 10</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
