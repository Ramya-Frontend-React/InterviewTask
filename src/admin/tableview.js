import React, { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";

function Table_view() {
  const location = useLocation();
  const [getdata, setGetdata] = useState([]);
  console.log(location.state,"fdfd")
 


const data= JSON.parse(localStorage.getItem("array"));
console.log(data)
  





  return (
    
    <div className="row">
      {console.log('getData', getdata)}
      <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <h2 className="content-title">Table View</h2>

        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                {/* <th>Type</th> */}
                <th>Number</th>
                <th>Date</th>
                
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
               
                return (
                  
                  <tr key={index}>
                    <td>{item.name}</td>
                    {/* <td>
                      {item.type} </td> */}
                    <td> {item.number}</td>
                    <td>{item.date}</td>
                   

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

export default Table_view;
