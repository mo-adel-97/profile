import { useForm } from "react-hook-form"
import "./Form.css"
import FormSignUp from "../FormSignup/FormSignUp"
import { useState } from "react"
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)

const [signUp,setSignUp] = useState(false);

 const handleSignUpComponent = ()=>{
    setSignUp(true)
 }

  console.log(watch("example")) // watch input value by passing the name of it
  return (
    <>
    {signUp ? <FormSignUp /> : <div className="FORMROOT">
    <div className="divContent">
<h3 >Dutify<span className="LOGOFORM">AI</span></h3>
     <h2> Welcom back dear </h2>
     <p style={{color:"#666"}}>Do not hav an account ? <span onClick={handleSignUpComponent} style={{color:"purple",
     textDecoration:"none",cursor:"pointer"}}> signUp </span> </p>

    <div className="FormLogin">
    <form onSubmit={handleSubmit(onSubmit)}>

      <label style={{color:"#666"}}>userName</label>

      <input placeholder="Entre Your UserName" {...register("userName" ,{required:true })} />
      {errors.userName && <span>This field is required</span>}
       <label style={{color:"#666"}}>Password</label>

      <input placeholder="Entre Your Password " {...register("password", { required: true })} type password />
      {errors.password && <span>This field is required</span>}
      <br />
      <input type="submit" value="Login"/>
    </form>
    </div>
    <p className="PForgetPassword"> <a href="#">Do you forget password?</a></p>
    </div>
    </div> }
    </>
  )
}