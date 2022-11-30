import {useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import'./Code.css'
function Page() {
  const navigate=useNavigate();
  const [name,setName]=useState('')
  const [num,setNum]=useState('')
  const [email,setemail]=useState('')
  const [date,setDate]=useState('')
  const [pwd,setPwd]=useState('')
  const[confirm,setconfim]=useState('')
  const[data,setData]=useState([])
const addData=(e)=>{
e.preventDefault();
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
localStorage.setItem('data',JSON.stringify(data))
navigate("/login")
}
  return (
   <div className='content'>
     <form className='register' autoComplete='off'>
      <h1>Registration</h1>
      <label>UserName</label><br/>
      <input type='text' name='UserName' onChange={e=>setName(e.target.value)} />
      <label>MobileNo</label><br/>
      <input type='text'name='MobileNo'onChange={e=>setNum(e.target.value)}  />
      <label>email</label><br/>
      <input type='email' name='email' onChange={e=>setemail(e.target.value)} />
      <label>date</label><br/>
      <input id='date'name='date' type='date'onChange={e=>setDate(e.target.value)}  />
      <label>Password</label><br/>
      <input type='password' name='Password'onChange={e=>setPwd(e.target.value)}  />
      <label>conformpassword</label><br/>
      <input type='password' name='conformpassword' onChange={e=>setconfim(e.target.value)}  /> 
      <br/>
      <button type='Submit'onClick={addData}>submit</button>
    <p>Already Have an Account <span><NavLink to='/login'>Signin</NavLink></span></p>
    </form>
   </div>
  )
}

export default Page
