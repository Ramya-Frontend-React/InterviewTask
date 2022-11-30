import React, { useState } from "react";
import { useLocation  } from "react-router-dom";


function Table_entry() {
  const [ status, setStatus ] = useState(true)
  const location = useLocation();
  const [getdata, setGetdata] = useState();

  console.log(location.state,"fdfd")
 
 const onEdit=()=>{}

const data= JSON.parse(localStorage.getItem("array"));
console.log(data)

const onDel=()=>{
 
    // var data = JSON.parse(data[i]);
    // if (data.itemId == 3) {
    //   data.splice(i, 1);
    // }
    // data = JSON.stringify(data); 
    // localStorage.setItem("array", data);
  }




const [formValue,setformValue]=useState({name:"",type:"",number:"",date:""});


  return (
    
    <div className="row">
      {console.log('getData', getdata)}
      <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <h2 className="content-title">Table Entry</h2>

        <div class="table-responsive">
       { status? <table class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                {/* <th>Type</th> */}
                <th>Number</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
               
                return (
                  
                  <tr key={index}>
                    <td>{item.name}</td>
                    {/* <td>{item.type} </td> */}
                    <td> {item.number}</td>
                    <td>{item.date}</td>
                    <td><button  className="btn btn-warning" onClick={onEdit}   name="submit" >Edit</button></td>   
                    <td><button  className="btn btn-warning" onClick={onDel}   name="submit" >Delete</button></td>   
                  </tr>
                );
              })}
            </tbody>
          </table>
          :
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
             onChange={""} />
             </td>
          <td> 
        <select name="select" 
               
               
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
         onChange={""}   
         value={formValue.number} 
         className="form-control" 
        
          placeholder="Enter Number" 
          name="number"
           /></td>   

        <td><input type="date"
        onChange={""} 
         value={formValue.date}
          className="form-control"
        
            placeholder="Enter date"
             name="date" /></td>
        <td><button  className="btn btn-warning" onClick={""}   name="submit" >Add</button></td>   
        </tr>
        
      </tbody>
    </table>}

        </div>
      </div>
    </div>
  );
}

export default Table_entry;
