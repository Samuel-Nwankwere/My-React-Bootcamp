import { useState } from "react";
// import './style.css' 
function MyButton({ count, setCount }) {
  function addItem() {
    setCount((count) => count + 1);
  }
  function removeItem(){
    setCount ((count => count - 1))
  }

  return (
    <div>
      <button onClick={addItem}>Add +</button>
      <button onClick={removeItem}>Remove -</button>

    </div>
  );
}

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Cart: {count} Items </h2>
      <MyButton count={count} setCount={setCount} />
    </div>
  );
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
