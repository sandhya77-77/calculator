import React,{useState} from 'react'
function Headr() {
    const [data,setData]=useState([])

    const[val,setVal]=useState({
        Name:" ",
        Password:" "
    })

    const getdata=(e)=>{
        // const{value,name}=e.target;
    //    setVal({...val,[name]:value})
       setVal({...val,[e.target.name]:e.target.value})
        console.log(val);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setData([...data,val])
        console.log(data);
    }
    
  return (
    <div>
    <form onSubmit={submitHandler}>
       <label>name:</label>
      <input type='text' name='Name' onChange={getdata}/><br/>
      <label>password</label>
      <input type='password'name='Password' onChange={getdata}/><br/>
      <button type='Submit'>Submit</button>
    </form>
    </div>
  )
}

export default Headr
