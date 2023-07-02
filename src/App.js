import {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimals(){
    const animals=['bird','cat','dog','gator','horse'];
    return animals[Math.floor(Math.random()*animals.length)];
    
}
function App(){
const [animals,setAnimals]=useState([]);
const handleClick=()=>{
  setAnimals([...animals,getRandomAnimals()]);  

}
const renderedAnimals=animals.map((animal, index)=>{
return(<AnimalShow type={animal} key={index}></AnimalShow>);
});
return(
    <div>
        <button onClick={handleClick}> Add Animal</button>
        <div>{renderedAnimals}</div>
       
    </div>
);
}
export default App;