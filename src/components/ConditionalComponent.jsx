import Welcome from "../Welcome";
import Code from "../Code";

export default function ConditionalComponent ({messageOne , messageTwo}){
// conditional rendering using Element Variable.
// Element variable allows us to write HTML in js.
// ===============================================================
//  Using conditioners:


const showMessage = true;
return(
   showMessage ? <p>{messageOne}</p> :<p> {messageTwo}</p>

)
}
// ================================================================

//We could display this better by returning one statement.
// let message;
// const showMessage = true; 
// if(showMessage !== true){
//   message = <h1>This is message one</h1>;
// }
// else{
//     message =  <h1>This is message two</h1>;
// }
// return message;



// // DAY 6: Using Ternery Operators
// const displayMessage = true;
//  return (
//     displayMessage ? <Code/> : <Welcome/>
//  )

