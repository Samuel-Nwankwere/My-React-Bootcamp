import Welcome from "../Welcome";

export default function ConditionalComponent (){
//I'll make a conditioner to display the <h3> when they are triggered.
const showHeader = true;
if(showHeader == true){
    return (
        <div>
        <h1>Sammy did it!</h1>
    </div>
    )
}else{
    return(
        <div>
        <h3>NO! He didn't</h3>
    </div>
    )
}
//Displaying components conditionally
const display = true;
if(display){
    return <Welcome/>
}else{
    return <Code/>
};
    
 //Displaying Jsx Conditionally
 
}