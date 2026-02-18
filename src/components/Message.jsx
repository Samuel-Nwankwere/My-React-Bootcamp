//Day 7: Learning useState
import { users } from "./User";
import { useState } from "react";

export default function Message() {
  const [user, setUser] = useState(users);

  const deleteUser = (id) => {
    const newUser = user.filter((u) => u.id !== id);
    // u is shorthand for uer
    console.log(id)
    setUser(newUser);
  };

  const userProfile = user.map((u) => (
    <div className="single-user" key={u.id}>
      {" "}
      <div className="image-flex">
         <img src={u.imageUrl} alt={u.name} className="profile-pic" />
    
        <p className="text">
          {" "}
          <b>
            {u.name} {u.surname} ({u.age} )
          </b>
           <br /> <small className="knownFor">{u.knownFor}</small>
          <br />
        </p>
        {" "}
      </div>
      <p className="text">{u.message}</p>
      <button className="delete-btn" onClick={() => deleteUser(u.id)}>Delete </button>
    </div>
  ));

  return (
   <>
    <h2 className="header">List Of Posts</h2>
    <div className="flex-box">
      
      <div className="flex-item">{userProfile}</div>
    </div>
    </>
  );
}

// export default function Message() {
//     const userProfile =
//        users.map((user => (

//         <div className="flex-box">
//            <div className="single-user">
//              <div className="image-flex">
//                 <img src={user.imageUrl} alt={user.name} className="profile-pic"/>
//                   <p key={user.id} > <b>{user.name} {user.surname} ({user.age} )</b>
//                    <br/> <small className="knownFor">{user.knownFor}</small>
//                   <br />
//                   </p>
//              </div>
//                <p key={user.message}>{user.message}</p>

//                <button >Delete </button>
//            </div>
//         </div>
//        )))

//     return (
//        <div className="flex-box">
//         <h2 className="header">List of Users</h2>
//         <div className="flex-item">{userProfile}</div>
//        </div>
//     )
//   ;
// }

// onClick={handleClick} this is simply how we can call the function in react
