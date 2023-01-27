import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { connect } from 'react-redux'
import { counterAction } from '../store/index'
//function components
 const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  const incrementHandler = () => {
    dispatch(counterAction.increment())
  }

  const decrementHandler = () => {
    dispatch(counterAction.decrement())
  }

  const incrementByHandler = () => {
    dispatch(counterAction.incrementby(5))
  }


  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//class Components

// class Counter extends React.Component {
//   incrementHandler = () => {
//     this.props.increment()
//   }

//   decrementHandler = () => {
//     this.props.decrement()
//   }

//   incrementHandlerBy = () => {
//     this.props.incrementby()
//   }
//   toggleCounterHandler = () => {
//     this.props.toggle()
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.showToggle && <div className={classes.value}>{this.props.counter}</div>}
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.incrementHandlerBy}>Increment by 5</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToprops = (state) => {
//   return {
//     counter: state.counter,
//     showToggle: state.showToggle
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     toggle: () => dispatch({ type: "Toggle" }),
//     incrementby: () => dispatch({ type: "INCREMENTBY", amount: 5 }),
//     decrement: () => dispatch({ type: "DECREMENT" })
//   }
// }

// export default connect(mapStateToprops, mapDispatchToProps)(Counter);
