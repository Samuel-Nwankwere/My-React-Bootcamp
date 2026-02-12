import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const person = {
    name:"Samuel",
    message:"loves you guys!!" ,
    emoji:"🚀",
    seatNumbers: [1,3,7]

  }
  return (
    <div className="App">
      <Hello person={person}/>
      <Fruits/>
    </div>
  )
}

export default App
