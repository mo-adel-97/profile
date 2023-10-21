import { useForm } from "react-hook-form"
import "./Form.css"
import ButtonAppBar from "../../NavBar/NavBar"
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    <>
    <ButtonAppBar />
<div className="FORMROOT">
    <div className="divContent">
<h3 >Dutify<span className="LOGOFORM">AI</span></h3>
     <h2> Welcom back dear </h2>
     <p style={{color:"#666"}}>Do not hav an account ? <span><a href="" style={{color:"purple",
     textDecoration:"none"}} > signUp </a></span></p>

    <div className="FormLogin">
    <form onSubmit={handleSubmit(onSubmit)}>

      <label style={{color:"#666"}}>userName</label>

      <input defaultValue="test" {...register("userName" ,{required:true })} />
      {errors.userName && <span>This field is required</span>}
       <label style={{color:"#666"}}>Password</label>

      <input {...register("password", { required: true })} type password />
      {errors.password && <span>This field is required</span>}
      <br />
      <input type="submit" />
    </form>
    </div>
    <p className="PForgetPassword"> <a href="#">Do you forget password?</a></p>
    </div>
    </div>
    </>
  )
}