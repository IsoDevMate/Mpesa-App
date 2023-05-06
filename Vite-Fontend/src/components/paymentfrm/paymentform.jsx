import react,{ useState } from 'react'
import './App.css'
import {Form,Button} from 'react-bootstrap'
//input fields for the user data
 export default const PaymentForm=()=> {
  const [amount, setAmount] = useState('')
  const [phone, setPhonet] = useState('')
  const[transaction,setTransaction]=useState(null)
//submit button for user data
  const handleSubmit = ((e)=>{
    e.preventDefault()
  })
}
//make API request  from frontend to initiate payment
fetch('/pay',{
method:'POST',
headers:{
  'content-Type':'application/json'
},
Body:JSON.stingify=({amount,phone})  //content type of the request is in json
})
.then(res => res.json())

.then(data=>{   
  console.log(data) // log the transaction details & display them to the user.
  setTransaction(data) //update component state with transaction details
})

.catch(err=>{
  console.log(err) //log error message display eror message to the user
})

return(
    
)





