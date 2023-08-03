
import { useState } from 'react';
import './App.css';

function App() {
  const [value , setvalue] = useState(' ')
  
  const [value2 , setvalue2] = useState([])
 
    function  handlechange(event)
  {
    setvalue(event.target.value) ; 
  }
  function  handlebutton(){
        
    setvalue2([ value , ...value2  ])
  } 
  function handleremove(index)
  {
     setvalue2((prelist) =>{
      const updatelist = [...prelist] ;
      console.log(updatelist)
      updatelist.splice(index ,1 ) 

      return updatelist ; 
     })
  }
  return (
    <div className="App">
      <>
      
      <div>
        <h1>ADD ITEMS</h1>
        <div className='input'>
            <input type="text"
            onChange={handlechange}
               />
               <button onClick={handlebutton}>Add task </button>
         
            

        </div>
            <ul>
              {
                value2.map((items ,  index)=>
               { return(
                  <div className='itemsinlist'>
                  
                  <li key={index}> {items}</li>
                  <button onClick={() => handleremove(index)}  className='btn'>remove</button>
                      
                  </div>
                    
                )} )
              }
            </ul>
      </div>
      </>
     
    </div>
  );
}

export default App;
