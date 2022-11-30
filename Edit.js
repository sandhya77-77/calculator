import React from 'react'
import{useNavigate}from 'react-router-dom'
function Edit() {
    const navigate=useNavigate()
    const getuser=localStorage.getItem("details")
     var user=JSON.parse(getuser)
    console.log(user);
  return (
   <div>
  <center> <h1>Details</h1></center>
 <table> 
   <tr>
   <th>UserName</th> 
   <th>MobileNo</th> 
   <th>EmailId</th> 
   <th>date</th> 
    </tr>
    {
    user?.map(users=><tr><td>{users.name}</td>
    <td>{users.num}</td>
    <td>{users.email}</td>
    <td>{users.date}</td>
    <td><button onClick={()=>navigate('/details')}>Edit</button></td>
   </tr>
    )
  }
   </table>
   </div>
  )
}

export default Edit
