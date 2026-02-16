import Welcome from "../Welcome";
import Code from "../Code";

export default function ConditionalComponent (){
// conditional rendering using Element Variable.
// Element variable allows us to write HTML in js.
// ===============================================================
//  Using conditioners:
// const showMessage = true;
// if(showMessage !== true){
//     return (
//         <div>
//             {messageOne}
//         </div>
//     )
// }else{
//     return (
//         <div>
//             {messageTwo}
//         </div>
//     )
// }
// ================================================================

//We could display this better by returning one statement.
let message;
const showMessage = true;
if(showMessage !== true){
  message = <h1>This is message one</h1>;
}
else{
    message =  <h1>This is message two</h1>;
}
return message;
}