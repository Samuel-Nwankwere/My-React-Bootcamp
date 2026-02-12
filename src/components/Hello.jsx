// function Hello({person}){
// //   Always use '{}' in the functions for destructuring props
//     return(
//     <div>
//         <h1>
//            {person.name} {person.message} {person.emoji} {person.seatNumbers}
//         </h1>
//     </div>
//     );
    
// }
// export default Hello;

export default function Hello (props){
    return(
        <div>
            {props.person.name} {props.person.message}
        </div>
    )

}