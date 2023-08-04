
import { useState } from 'react';
import './App.css';

function App() {
const [value , setvalue] = useState('')
  
const [value2 , setvalue2] = useState([])
  
const [ toglebtn , settoglebtn] = useState(true)

const [edititem , setedititem ] = useState(null) 
 
    function  handlechange(event)
  {
    let aa = event.target.value
    setvalue(aa) ; 
  
    
  }
  function  addtaskbutton(){
        
   if(!value) 
   { 
    alert("inputBar is empty")
   }
   else if(value && !toglebtn){
           
          setvalue2( 
            value2.map(
              (elem)=>
              {
               if (elem.id === edititem )
               {
                return {...elem , name :value }
               }
                 return elem ; 
              }
            )
           )
           setvalue("") ; 
           settoglebtn(true)
   }
else
{
  const inputdata = {id: new Date().getTime().toString() , name:value }
  setvalue2([ inputdata , ...value2  ])
  setvalue("")

}

  } 
  function handleremove(index)
  {
    const updatearray = value2.filter(
      (elem)=>
      {
        return index !== elem.id 
      }
    );
    setvalue2(updatearray) ; 

  }
  function handleedit(index)
  {
      let updateitem =  value2.find((elem)=> 
      {
         return  elem.id === index
      })

      console.log(updateitem.id)   ;  
      
      settoglebtn(false) 
     
      setvalue(updateitem.name)

      setedititem(index)



  }
  return (
    <div className="App">
      <>
      
      <div>
        <h1>ADD ITEMS</h1>
        <div className='input'>
            <input type="text"
            onChange={handlechange}
            value={value}
               />

            {
              toglebtn ? <button onClick={addtaskbutton} className='btn'>Add task </button> :<button className='btn' onClick={addtaskbutton}>edit </button>
            }   
               
         
            

        </div>
            <ul className='listitems'>
              {
                value2.map((items)=>
               { return(
                  <div className='itemsinlist'>
                  
                  <li key={items.id} >   {items.name}</li>
                  <button onClick={() => handleremove(items.id)}  className='btn'>remove</button>
                  <button onClick={()=>handleedit(items.id)} className='btn'>edit</button>
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
