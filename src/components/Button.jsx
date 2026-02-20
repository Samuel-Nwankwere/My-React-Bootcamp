import { useState } from "react";
export default function Button(){
const [count , setCount] = useState(0);
const [incrementBy , setIncrementBy]= useState(1);

function increaseCount (){
  setCount( count => count + incrementBy)
}
function decreaseCount (){
  setCount(count => count - incrementBy)
} 

function increaseIncrementBy (){
  setIncrementBy (incrementBy => incrementBy + 1)
}

function decreaseIncrementBy(){
  setIncrementBy (incrementBy => incrementBy - 1)
}
 return(
  <>
  <div>
    <h1>Current Value : {count}</h1>
    <button onClick={increaseCount}>Increase Value</button>
    <button onClick={decreaseCount}>Decrease Value</button>
  </div>

  <div>
    <h1>Increase Value : {incrementBy}</h1>
    <button onClick={increaseIncrementBy}>Increase Value</button>
    <button onClick={decreaseIncrementBy}>Decrease Value</button>
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
