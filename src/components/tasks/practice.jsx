import React, { useState ,useEffect } from 'react';

const Practice = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
  
  let obj = { fname : "123" , lname : "123"}
  const [object , setobject] = useState({ firstname : "" , lastname : ""})
 const [count , setcount] = useState(0) ; 
  const handleFirstNameChange = (event) => {
    //   setFirstName( event.target.value);
      setobject({ ...object  , firstname : event.target.value } )
    };
    
    const handleLastNameChange = (event) => {
        // setLastName(event.target.value);
      setobject({ ...object  , lastname : event.target.value } )

    };
    
    const handleSubmit = (event) => {

        event.preventDefault();
        // // You can perform further actions with the form data here
        // setobject( { fname : firstName , lname : lastName} )
        // obj = { fname : firstName , lname : lastName}
    };
    useEffect(() => {
     
      
       console.log("aamir ")
       document.title  = `you click ${count} the counter` 
     
   } , [count] )

    const handlebtn = () =>{
let a = count+1 ; 
     setcount(a)
    } ; 

    
  return (
    <div className="flex justify-center  flex-col items-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={object.firstname}
            onChange={handleFirstNameChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={object.lastname}
            onChange={handleLastNameChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your last name"
          />
        </div>
      
      </form>
      <div className="display"> 
       first name : {object.firstname}  <br />
       lastname : {object.lastname}



    {/* perform the useeffect hook there   */}
      <button
          className="w-full my-1 mpx-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
       onClick={(handlebtn)}     
      >
          COUNT : {count}   
        </button>
      </div>
    

    </div>
  );
};

export default Practice;
