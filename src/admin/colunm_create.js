import React from 'react'
import { useState } from 'react';
function Colunm_create(props) {

const [formValue,setformValue]=useState([""]);


 const [name,setName]=useState([""]);
 const [type,setType]=useState([""]);
 const [number,SetNumber]=useState([""]);
 const [date,setDate]=useState([""]);
 function onSubmit() {
  let addValue = [...formValue];
  addValue.push({
    name: name,
    type:type,
    number:number,
    date:date
  });
  setformValue(addValue);
  console.log(formValue)
  props.fun(formValue)
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
          <td> <input type="name" className="form-control" id="name" placeholder="Enter Name" name="name" 
           onChange={(e) => setName(e.target.value)} /></td>
          <td> 
        <select name="select" onChange={(e) => setType(e.target.value)} className="form-control" >
        <option value="Select Option" >Select Option</option>
        <option value="number"   >Number</option>
        <option value="date">Date</option>
        <option value="multiselect">Multiselect</option>
        </select>
        </td>

      
        <td> <input type="number"  onChange={(e) => SetNumber(e.target.value)}  className="form-control" id="number" placeholder="Enter Number" name="number" /></td>   
        <td><input type="date" onChange={(e) => setDate(e.target.value)} className="form-control" id="name" placeholder="Enter Name" name="date" /></td>
        <td><botton  className="btn btn-warning" onClick={onSubmit}   name="submit" >Add</botton></td>   
        </tr>
        
        <p>Note:Please double click add Botton </p>
      </tbody>
    </table>
  </div>
 
</div>



    </div>
  )
}

export default Colunm_create