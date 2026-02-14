import Button from "./Button"

export default function Hello (){
    const person =[ 
        {id:1, name:"Samuel", message:"Is a student" , emoji:"🚀", seatNumbers: [1,3,7]},
    // {id:2, name:"Joe" , class: 'ss2', age:16},
    // {id:3, name:"keln" , class: 'ss2', age:15},
]
    return(
        <>
            {person.map((people => (
                <div key={people.id}>
                <h3>{people.name}</h3>
                <p>{people.message}</p>
                <p>{people.emoji}</p>
             <small >User seat no: {people.seatNumbers}</small> 
             <div className="Button">
            <Button/>
            </div>
                </div>
                
            )))}
            
        </>
    )

}