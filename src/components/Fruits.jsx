// Arrays in components and props
export default function Fruits() {
  const fruits = ["Mango", "Orange", "Pear", "Apples", "Banana"];
  // const people = [
  //   {id:1 , name:"Samuel", age:20},
  //   {id:2 , name:"Paul" , age: 16}
  // ];

  const students =[{id:1, name:"John" , class: 'ss2', age:16},
    {id:2, name:"Joe" , class: 'ss2', age:16},
    {id:3, name:"keln" , class: 'ss2', age:15},
    {id:4, name:"Noah" , class: 'ss2', age:16}
  ]

  return (
    <div>
    {/* <ul>{fruits.map((fruit =>(<li key={fruit}>{fruit}</li>))) }</ul> */}
  
    {/* {people.map((person =>(
     <div key={person.id}>
     <h2>{person.name}</h2>
     <p>Age: {person.age}</p>
     </div>
     
    
     )))} */}
      {students.map((student => (
        <div key={student.id}>
          <div key={student.id}>{student.id}.
          <h4 >{student.class}</h4>
        </div>
        <p>My name is {student.name}</p>
        <small>I am only {student.age}</small>
        </div>
      )))}
     </div>
 
  );
}
