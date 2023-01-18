import React, {useState} from "react";

function Form({list, setList}){
    
     
    

     const [date, setDate] = useState('')
     const [description, setDescription] = useState('')
     const [category, setCategory] = useState('')
     const [amount, setAmount] = useState(0)
     

     function newData(e){
        e.preventDefault()
        setList([...list, {
           
            date,
            description,
            category,
            amount
        }])
    
        setDate('')
        setDescription('')
        setCategory('')
        setAmount(0)

        fetch("  http://localhost:3001/transactions",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                date,
                description,
                category,
                amount})

        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

   
     
     
     



     
    
    return(
        <>
        <form  className="border border-success p-2 mb-2 border-opacity-25" onSubmit={newData}>
        
         <div>
         <input name="date"onChange={(e)=>{setDate(e.target.value)}}  value = {date} type = "date" placeholder="date"/>
         <input name="description" onChange={(e)=>{setDescription(e.target.value)}} value= {description}type = "text" placeholder="description"/>
         <input name="category" onChange={(e)=>{setCategory(e.target.value)}} value = {category} type = "text" placeholder="category"/>
         <input name="amount" onChange={(e)=>{setAmount(e.target.value)}} value = {amount} type = "number" placeholder="amount"/>
         </div>
         <button type="submit" placeholder=""  className="btn btn-secondary">Add Transaction</button>

        </form>
        </>
    )
}

export default Form