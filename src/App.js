import { useRef, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import FormInput from './Components/FormInput';

function App() {
  const [user,setUser] = useState({
    userName:"",
    Email:"",
    Password:"",
    confirmPassword:""
  });

  const inputs =[
    {
      id:1,
      name:"userName",
      type:"text",
      placeholder:"user name",
      errorMessage:"User name should be 12-22 characters and shouldn't be include any special character!",
      label:"User Name",
      pattern:"^[A-Za-z0-9]{4,16}$", // regular expression.
      required:false
    },
    {
      id:2,
      name:"Email",
      type:"email",
      placeholder:"user Email", 
      errorMessage:"It should be valid email address!",
      label:"Email",
      required:false
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
      required:false
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at lest 1 latter, 1 number, 1 special character!",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}`,
      label:"Password",
      required:false
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match",
      label:"Confirm Password",
      required:false
    }
  ]

  console.log("re-rendered")
  const userNameRef = useRef()
  

  const handleSubmit =(e)=>{
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    e.preventDefault()
  }

  const onChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  console.log(user)

  return (
    <div className="App">
       <Form handleSubmit={handleSubmit}>
         <h1> Register </h1>
          {inputs.map((input)=>(
            <FormInput 
            key={input.id} {...input} 
            value={user[input.userName]}
            onChange={onChange}
            />
          ))}
          <button >Submit</button>
        </Form>
    </div>
  );
}

export default App;
