 //Day 7: Conditionally rendered fruits based on pricing
   {/* {price > 5 ? (
    //     <div>
    //         <h3>
    //           {name} - ${price}
    //         </h3>
    //     </div>
    //   ) : (
    //     ""
    //   )} */}
    
export default function Fruit({ name, price, soldout}) {
  return (
     <>
        <li>
            {name} - {price}  {soldout ? ": Soldout" : ""}
        </li>
     </>
    


  );
}
