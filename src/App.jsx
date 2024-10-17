import './App.css'
import Counter from './Counter'
import Team from './Team'
import Student from './Student'
import Users from './User'
import Friends from './Friends'

function App() {
  
function handleClick(){
  alert('Button Clicked')
}
const handleClick2 = () => {
  alert('Button 2 clicked')
}

const addToFive =(num) => {
  alert(num + 5);
 }  
 return (
    <>    
      <h1>React Core concepts</h1> 
      <Friends></Friends>
      <Users></Users>
      <Student></Student>
    <Team></Team>
    <Counter></Counter>
      <button onClick={handleClick}>click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Third Click')}}>Third</button> 
      {/* <button onClick={() => {addToFive(3)}}>Four</button> */}
      <button onClick={() => {addToFive(6)}}>Four</button>
    </>
  )
}

export default App
