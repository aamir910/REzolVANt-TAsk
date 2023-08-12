import React from 'react'
import './apiTask.css'
import { useEffect ,useState } from 'react';
import mobileimg from './mobilejpeg.jpeg' ; 
import axios from 'axios'
const ApiTask = () => {

  
    










  const API ='https://raw.githubusercontent.com/marcoroganovic/shopping-cart/master/js/data.json'
    const [jsonData, setJsonData] = useState([]);
    async function fetchData() {
      try {
        const response = await axios.get(API);
        // const data = await response.json();
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    useEffect(() => {
      
      fetchData();
    }, []);
    
    console.log(jsonData)
  return (
    <div className='box'>
      {jsonData.map((dat)=> 
      {
        return(<>
    <div className="carts" key={dat.id}>
        
          <h1 > Id:{dat.id+1}</h1>
         
         <div className='discription'>

          <img src={mobileimg} alt="no img"  />
          <div className='des'>
            <h5>Description</h5>
            {dat.description}   
          </div>
         </div>
          <p>
           Price:{dat.price}
          </p>
        
    </div>
            
        </>
        
        )
      })}  

    </div>
  )
}

export default ApiTask
