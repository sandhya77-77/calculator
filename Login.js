import {useState} from 'react'
import{useNavigate}from'react-router-dom'
import './Code.css'
function Login() {
  const history=useNavigate();
  const[data,setData]=useState([])
  const[inpval,setInpval]=useState({
    email:" ",
    Password:" "
  })
  console.log(inpval);
 
  const getData=(e)=>{
    // console.log(e.target.value);
    const{value,name}=e.target;
  setInpval(()=>{
    return{
     ...inpval,
     [name]:value  
    }
  })
}
const addData=(e)=>{
e.preventDefault();
const getuserArr=localStorage.getItem("details")
//console.log(getuserArr);
const {email,Password}=inpval;
  const userdata=JSON.parse(getuserArr);
const userlogin=userdata.filter((el,k)=>{
  return el.email===email&&el.pwd===Password
})
  if(userlogin.length===0){
    alert("invalid details")
  }
  else{
  console.log("login successfully");
  history("/Edit")
  }
}


  return (
    <div className='log'>
    <form className='login'>
      <h1>Login</h1>
      <input type='email' name='email'placeholder='email'autoComplete='off' onChange={getData}/>
      <input type='password' name='Password'placeholder='Password'autoComplete='off' onChange={getData} />
      <br/>
      <button type='Submit'onClick={addData}>submit</button>
  
    </form>
    </div>
  )
}

export default Login
