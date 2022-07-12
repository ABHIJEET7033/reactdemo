import React, { useState } from "react";
const App =()=>{
  const [FullName,setFullName]=useState({
      fname:"",
      lname:"",
      email:"",
      phone:"",
  });
 
  
  const inputEvent = (event)=>{
    
    const {value,name} = event.target;
    setFullName((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      };
  //     if(name==='fName')
  //     {
  //       return {

  //         fname:value,
  //         lname:preValue.lname,
  //         email:preValue.email,
  //         phone:preValue.phone,
  //     };
  //   }
  //     else if(name==='lName')
  //     {
  //       return {

  //         fname:preValue.fname,
  //         lname:value,
  //         email:preValue.email,
  //         phone:preValue.phone,
  //     };
  //   }
  //   else if(name==='email')
  //     {
  //       return {

  //         fname:preValue.fname,
  //         lname:preValue.lname,
  //         email:value,
  //         phone:preValue.phone,
  //     };
  //   }
  //   else if(name==='phone')
  //     {
  //       return {

  //         fname:preValue.fname,
  //         lname:preValue.lname,
  //         email:preValue.email,
  //         phone:value,
  //     };
  //   }
   });
  }
  
  const onSubmits = (event)=>{
    event.preventDefault();
    alert('form submitted');
  };
  return(
     <>
     <div className="main_div">
    <form onSubmit={onSubmits}>
     <div>
      <h1>Hello {FullName.fname} {FullName.lname}</h1>
      <p>{FullName.email}</p>
      <p>{FullName.phone}</p>
      <input
       type="text" 
       placeholder="Enter Your first Name" 
       name="fname"
       onChange={inputEvent} 
       value={FullName.fname}
      />
       <br/>
       <input
       type="text" 
       placeholder="Enter Your last Name" 
       name="lname"
       onChange={inputEvent} 
       value={FullName.lname}
       />
       <br/>

       <input
       type="email" 
       placeholder="Enter Your email" 
       name="email"
       onChange={inputEvent} 
       value={FullName.email}
       />
       <br/>

       <input
       type="number" 
       placeholder="Enter Your phone number" 
       name="phone"
       onChange={inputEvent} 
       value={FullName.phone}
       />
       <br/>
      <button onClick={onSubmits}>Click Me 👍</button>
      </div>
    </form> 
    </div>
     </>
  );
};

export default App;