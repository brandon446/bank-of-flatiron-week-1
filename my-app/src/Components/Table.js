import React  from "react";


function Table({list}){      
    
function handleDelete(id){
    fetch(`http://localhost:3001/transactions/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
}}

    )
  .then(res=>res.json())
  .then(data=>document.location.reload()
  )
}
const sortedList = list.sort((a, b) => (a.description.toUpperCase() > b.description.toUpperCase() ? 1 : -1))



    return(
            <div>
                <table  className="table">
                    <thead>
                        <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Delete</th>
                    </tr>
                    </thead>

                  <tbody>
                  {
                   sortedList.map((item, index)=>{
                        return(
                            <tr key={index}>
                                
                                <td>{item.date}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.amount}</td>
                                <td><button onClick={ ()=>handleDelete(item.id)}>x</button></td>                      
                                
                                 </tr>
                        )
                    })
                }
                  </tbody>
                </table>
                
                        </div>
    )
}
export default Table