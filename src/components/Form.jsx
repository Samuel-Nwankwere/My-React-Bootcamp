 import { useState } from "react"
// // Input field in react. For single input.
// export default function Form(){
//     const   [name, setName] = useState("")
//     return (
//         <div>
//             <form>
//                 <header>Form Input</header>
//                 <input type="" value={name} onChange={(e)=> setName(e.target.value)}/>
//             </form>
//         </div>
//     )
//


export default function Form(){
    const [name, setName] = useState ({firstName: "", lastName :""})
    function handleClick(e){
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <form >
                <header>User Details</header>
                <label>Firstname : </label>
                <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})} />
                <br />
                <label >Lastname : </label>
                <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />
                <br />
               <button onClick={(e) => handleClick(e)}> Add user</button>

            </form>
        </div>
    )
}

















// export default function Form(){
//     const [name , setName] = useState({firstName:"" , lastName:""})

//      function handleSubmit(e){
//         e.preventDefault();
//         console.log(name)
//      }
//     return (
//         <div>
//             <form action=""> 
//                 <header>Form</header>
//                 <label >FirstName: </label>
//                 <input type="text"  onChange={(e) => setName({...name, firstName:e.target.value})} value={name.firstName} />
//                 <br />
//                 <br />
//                 <label >Lastname: </label>
//                 <input type="text"  onChange={(e) => setName({...name, lastName: e.target.value})}  value={name.lastName}/>
//                 <br />
//                 <br />
//                 <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
//             </form>
//         </div>
//     ) 
// }