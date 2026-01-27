import  { useState } from 'react'
import TechList from "./TechList";


function App() {
  const [selected ,setSelected] = useState("");

  const techs = [
    { id: 1, title: "React" },
    { id: 2, title: "JavaScript" },
    { id: 3, title: "Node" },
  ];

  return (
    <div>
      <h1>My App</h1>

  <p> Selected: {selected}</p>

   <TechList techs={techs} setSelected={setSelected} selected={selected}/>
    </div>
  )
}
export default App;
