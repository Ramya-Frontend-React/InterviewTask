import React, { useState } from "react";

function Table_entry() {
 const [getdata, setGetdata] = useState();

 
 const onEdit=()=>{}

const data= JSON.parse(localStorage.getItem("array"));
console.log(data)

const onDel=()=>{
  const data= JSON.parse(localStorage.getItem("array"));
  let newdata=data.splice(0, 1);
  newdata.push(data);
  localStorage.setItem("array", JSON.stringify(data));
  console.log(newdata)

}







  return (
    
    <div className="row">
    
      <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <h2 className="content-title">Table Entry</h2>

        <div class="table-responsive">
       <table class="table table-bordered">
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
         
      

        </div>
      </div>
    </div>
  );
}

export default Table_entry;
