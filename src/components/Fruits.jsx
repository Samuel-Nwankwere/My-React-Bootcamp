// Arrays in components and props
import Fruit from "./Fruit";
//I imported Fruit component, 'Fruits' is the name of this file also a component
export default function Fruits() {
  const fruits = [
    {name:"Mango", price:"$4"},
    {name:"Apple", price:"$3"},
    {name:"Pineapple", price:"$5"}
  ];
 
  return (
    <div>  
      {fruits.map((fruit => (
      //  <Fruit key={fruit.name} name={fruit.name} price ={fruit.price} />
      <Fruit key={fruit.name} name={fruit.name} price={fruit.price}/>
      
      )))}

     </div>
 
  );
}

 // The above would only render using props by using the following:
      // <Fruit name={fruit.name} price={fruit.price} key={fruit.name} />
      // The above would render the fruit name and price, but we are not using props in the Fruit component yet.
      //Things I'd note is 'fruit' is the parameter of the map function targeting the 'fruits' array and objects, and 'fruit.name' and 'fruit.price' are the properties of the objects in the fruits array.
      //  The 'key' prop is used to give each element a unique identifier, which helps React optimize rendering. In this case, we can use 'fruit.name' as the key since it's unique for each fruit.
        //we can destructure the props in the Fruit component to make it cleaner, for example:
        // function Fruit({name, price}){
        //     return (
        //     <div>
        //         <h3>{name}</h3>
        //         <p>{price}</p>
        //     </div>
        //     )
        // } and can be used in the created fruit component as props.name and props.price, or directly as name and price if destructured.
        // the fruit component is the one separately created in the Fruit.jsx file, and we are importing it here to use it in the Fruits component, which is then used in the App component to render the list of fruits with their prices. 