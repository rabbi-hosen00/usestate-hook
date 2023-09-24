
import React from 'react'
import './index.css'

const handleParentClick = (event) =>{
    console.log("parent event : ", event)
   }
   const handleIncriment = (event) =>{
    event.stopPropagation();
    console.log("child event : ", event)
   }

  
  const App = () => {
    return (
        <div className='parent' onClick={handleParentClick} >
          <h1> Welcome everyone</h1>
          <button onClick={handleIncriment}> +</button>
        </div>
    )
}

export default App;




/*const handleParentClick = (event) =>{
    console.log("parent event: ", event)
}

  const handleIncriment = (event) =>{
        event.stopPropagation();
        console.log("child event: ", event)
  }
)*/








/*import React from 'react';
import Card from './components/Card';
import Data from './data.json'

function App (){

  


   return <div>

            <h1 className='headingStyle'> Todo App</h1>
           { Data.map( (item, index) => <  Card key={index} titleText = {item.title} descText = {item.desc} /> )}
    
   </div>
}


export default App;*/
