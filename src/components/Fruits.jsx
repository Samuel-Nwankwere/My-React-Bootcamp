// Arrays in components and props
export default function Fruits() {
  const fruits = ["Mango", "Orange", "Pear", "Apples", "Banana"];

  return (
   <div>
    {fruits.map(fruits => <h1>{fruits}</h1>)}
   </div>
  );
}
