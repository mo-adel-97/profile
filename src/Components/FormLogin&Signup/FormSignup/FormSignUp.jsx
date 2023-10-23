import { useForm } from "react-hook-form"
import "./FormSignUp.css"
import { useState } from "react"
import FormLogin from "../FormLogin/Form"
import axios from "axios"

export default function FormSignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:4000/users', { data })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
   
  const [login,setLogin] = useState(false);

  const handleLoginComponent = ()=>{
    setLogin(true)
}

  return (
    <>
    {login ? <FormLogin />  : <div className="FORMROOT">
    <div className="divContent">
<h3 >Dutify<span className="LOGOFORM">AI</span></h3>
     <h2> Welcom dear </h2>
     <p style={{color:"#666"}}>Do You hav an account ? <span onClick={handleLoginComponent} style={{color:"purple",
     textDecoration:"none",cursor:"pointer"}}> login</span></p>

    <div className="FormLogin">
    <form onSubmit={handleSubmit(onSubmit)}>

      <label style={{color:"#666"}}>userName</label>
      <input placeholder="Entre Your UserName" {...register("userName" ,{required:true })} />
      {errors.userName && <span>This field is required</span>}

       <label style={{color:"#666"}}>Password</label>
      <input placeholder="Entre Your Password " {...register("password", { required: true })} type="password" />
      {errors.password && <span>This field is required</span>}

      <label style={{color:"#666"}}>Confirm Password</label>
      <input placeholder="Confirm Your Password " {...register("confirmpassword", { required: true })} type="password" />
      {errors.confirmpassword && <span>This field is required</span>}
      <br />
      <input type="submit" value="SignUp"/>
    </form>
    </div>
    </div>
    </div> }
    </>
  )
}