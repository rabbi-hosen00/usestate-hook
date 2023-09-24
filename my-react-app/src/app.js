
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

