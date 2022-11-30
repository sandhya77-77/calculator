import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
import'./Code.css'
function Details() {
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [num,setNum]=useState('')
  const [email,setemail]=useState('')
  const [date,setDate]=useState('')
  const [pwd,setPwd]=useState('')
  const[confirm,setconfim]=useState('')
  const[data,setData]=useState([])
const addData=()=>{
  const a={
    name:name,
    num:num,
    email,email,
    date:date,
    pwd:pwd,
    confirm:confirm
}
console.log(a);
setData([...data,a])
console.log(data);
localStorage.setItem('details',JSON.stringify(data))
alert('updated your details')
}
const getuser=localStorage.getItem("details")
var user=JSON.parse(getuser)
console.log(user);
  navigate("/Edit")
  return (
   <div className='content'>
  {
    user?.map(users=><form className='register'>
         <center> <h1>Edit</h1></center>
      <label >UserName</label>
    <input type='text'value={users.name} onChange={(e)=>setName(e.target.value)}/><br/>
    <label>MobileNo</label>
    <input type='text'value={users.num} onChange={(e)=>setNum(e.target.value)}/><br/>
    <label>EmailId</label>
    <input type='email'value={users.email} onChange={(e)=>setemail(e.target.value)}/><br/>
    <label>date</label>
    <input type='date'value={users.date} onChange={(e)=>setDate(e.target.value)} /><br/>
    <label>Password</label>
    <input type='password'value={users.pwd} onChange={(e)=>setPwd(e.target.value)}/><br/>
    <label>conformpassword</label>
    <input type='password'value={users.confirm} onChange={(e)=>setconfim(e.target.value)}/><br/>
    <center> <button type='Submit'onClick={addData}>Update</button></center>
    </form>
    )
  }
   </div>
  )
}

export default Details
