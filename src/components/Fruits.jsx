// Arrays in components and props
import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    {name:"Mango", price:"$4"},
    {name:"Apple", price:"$3"},
    {name:"Pineapple", price:"$5"}
  ];
 

 
  return (
    <div>  
      {fruits.map((fruit => (
      <Fruit />
      // The above would only render 

      )))}

     </div>
 
  );
}
