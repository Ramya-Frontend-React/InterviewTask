import React from 'react'
import { useState } from 'react';



function Colunm_create() {
const [formValue,setformValue]=useState({name:"",type:"",number:"",date:""});

const  handleChange =  (e) => {
  const { name, value } = e.target;
  setformValue({ ...formValue, [name]: value});
}

const onSubmit=()=>{
console.log(formValue, "async")

if (JSON.parse(localStorage.getItem("array")) === null) {
  localStorage.setItem("array", JSON.stringify([formValue]));
} else {
  let data = JSON.parse(localStorage.getItem("array"));
  data.push(formValue);
  localStorage.setItem("array", JSON.stringify(data));
}

alert("Submited")
// navigate("/tableentry")
}





  return (
    
    <div className="row">
    <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <h2 className="content-title">Colunm Creation</h2>



<div class="table-responsive">
     
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Type</th>
          <th></th>
          <th></th>
          <th>Add</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
             <input
           type="name" 
           className="form-control"
           id="name" 
           placeholder="Enter Name"
            value={formValue.name} 
            name="name"
             onChange={handleChange} 
             required/>
             </td>
          <td> 
        <select name="select" 
               onChange={handleChange} 
               value={formValue.type}
               
             className="form-control" 
              >
        <option>Select Option</option>
        <option 
        >Number</option>
        <option
        >Date</option>
        <option 
        >Multiselect</option>
        
        </select>
        </td>

      
        <td> <input 
        type="number" 
         onChange={handleChange}   
         value={formValue.number} 
         className="form-control" 
        
          placeholder="Enter Number" 
          name="number"
          required/></td>   

        <td><input type="date"
        onChange={handleChange} 
         value={formValue.date}
          className="form-control"
        
            placeholder="Enter date"
             name="date" required/></td>
        <td><button  className="btn btn-warning" onClick={onSubmit}   name="submit" >Add</button></td>   
        </tr>
        
      </tbody>
    </table>
       
  </div>
 
</div>



    </div>
  )
}

export default Colunm_create