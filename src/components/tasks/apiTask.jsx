import React from 'react'
import './apiTask.css'
import { useEffect ,useState } from 'react';
import mobileimg from './mobilejpeg.jpeg'
const ApiTask = () => {

    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://raw.githubusercontent.com/marcoroganovic/shopping-cart/master/js/data.json');
          const data = await response.json();
          setJsonData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);

console.log(jsonData)
  return (
    <div className='box'>
      {jsonData.map((dat)=> 
      {
        return(<>
    <div className="carts">
        
          <h1 > ProductId:{dat.id}</h1>
         
         <div className='discription'>

          <img src={mobileimg} alt="no img"  />
          <p className='des'>
            <h5>Description</h5>
            {dat.description}
          </p>
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
