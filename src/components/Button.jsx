import { useState } from "react";
export default function Button(){
const [count , setCount] = useState(0);
const [incrementBy , setIncrementBy]= useState(0);

function increaseCount (){
  setCount( count => count + incrementBy )
}
function decreaseCount (){
  setCount(count => count - incrementBy >= 0 ? count - incrementBy : 0)
} 

function increaseIncrementBy (){
  setIncrementBy (incrementBy => incrementBy + 1)
}

function decreaseIncrementBy(){
  setIncrementBy (incrementBy => incrementBy > 1 ? incrementBy - 1 : 0)
}

function resetAll (){
 setCount(0)
 setIncrementBy(0)
    
}
 return(
  <>
  <div className="container">
    <header>
      <h1>Counter App</h1>
    </header>
    <div className="increaseCount">
      <h4>Current Value : <span className="count-value">{count}</span></h4>
      <div className="btn-grid">
        <button className="btn" onClick={increaseCount}>Increase </button>
        <button className="btn" onClick={decreaseCount}>Decrease </button>
      </div>
    </div>
    <hr />
    <div className="increaseCount">
      <h4>Increase value by :<span className="count-value"> {incrementBy}</span></h4>
      <div className="btn-grid">
        <button className="btn" onClick={increaseIncrementBy}>Increase</button>
        <button className="btn" onClick={decreaseIncrementBy}>Decrease </button>
      </div>
    </div>

    <div className="resetBtn">
      <button onClick={resetAll}>Reset</button>
    </div>
  </div>
  </>
 )
}









// function MyButton({count , setCount}) {
//   function handleClick() {
//     setCount(count => count - 1 );
//   }
//   function returnClick(){
// setCount (count => count + 1)
//   }
//   return <div>
//     <button onClick={handleClick}>Remove item</button>
//     <button onClick={returnClick}>Add item</button>

//     </div>

//   ;
// }

//   <button onClick={handleClick}>Add item {count}  </button> This Lives inside <MyButton/> and then can't be accessed by Button
// To make it accessible I have to lift state up and then pass it in as props.

// export default function Button() {
//   const [count, setCount] = useState(10);
//   return (
//     <div>
//       <h2>Cart : {count}</h2>
//       <MyButton count={count} setCount={setCount} />
//     </div>
//   );
// }
