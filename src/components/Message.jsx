//Day 7: Learning useState: Deleting a User
import { users } from "./User";
import { useState } from "react";

export default function Message() {

  const[user , setUser] = useState(users);
  const deleteUser = (id) => {
    const newUser = user.filter((u) => u.id !== id);
    setUser(newUser);
  }


  const listOfUser = user.map((u) => (
    <div className="single-user" key={u.id}>
      <div className="image-flex">
        <img className="profile-pic" src={u.imageUrl} alt="" />
        <p className="text">
          <b>{u.name} {u.surname} ({u.age}) </b> <br />
         <small>{u.knownFor}</small>
        </p>
      </div>
      <div>
        <p className="text">{u.message}</p>
      </div>

      <button className="delete-btn" onClick={() => deleteUser(u.id)}>
        Delete
      </button>
    </div>
  ));

  return (
    <>
      <div className="header">
        {" "}
        <h1>List Of Users </h1>
      </div>
      <div className="flexbox">
        <div className="flex-item">{listOfUser}</div>
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
