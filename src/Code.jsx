import Welcome from "./Welcome"
export default function Code({isLoggedIn, username}){

    return(
        <div>
            <h1>Hello this Bolean is True</h1>
        </div>
    )
    // let userLogin;
    // let displayUserName;
//I can't define a boolean here it's meant to be in the parent component as isLoggedIn = {true} <Component isLoggedIn = {bolean}/>
//     if(username){
//         displayUserName = username
//     }else{
//          displayUserName = "User"
//     }
       
//    if(isLoggedIn){
//     userLogin = <h3>Hello {username}, welcome back to Dynamo</h3>;
// // Mistake made : I made  userLogin = {isLoggedIn} , {user}; This is invalid jsx syntax.
//    }else {
//     userLogin = <h3>Please Login Into Your Account</h3>
//    }
//    return userLogin;

}