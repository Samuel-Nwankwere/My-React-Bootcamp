export default function Fruit({name , price}){
    return (
    <div>
        <li style={{color:"green", fontSize:"20px"}}>
            {name} - {price}
        </li>
    </div>
    )
}