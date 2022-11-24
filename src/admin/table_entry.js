import React, { useState } from 'react'
import Colunm_create from './colunm_create'

function Table_entry() {
  const [getdata,setGetdata]=useState([])
  const  values =(data)=>{
    setGetdata(data)
    console.log(getdata,"Get")
  }
  return (
    <div className="row">
      <Colunm_create fun={values} />
    <div className="col-lg-2"></div>
      <div className="col-lg-10">
        <h2 className="content-title">Table Entry</h2>

<div class="table-responsive">
    <table class="table table-bordered">
      
      <thead>
        <tr>
       
          <th>Name</th>
          <th>Type</th>
          <th>Number</th>
          <th>Date</th>
         
        </tr>
      </thead>
      <tbody>
        
          {getdata?.map((item)=>{
            return( 
              <tr>
            <>
            <td>{item.name}</td>
            <td>{item.type} </td>
            <td> {item.number}</td>
            <td>{item.date}</td>
            </>
            </tr>
            )
          })}
         
         
       
      
       




      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Table_entry