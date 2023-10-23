import { useForm } from "react-hook-form"
import "./Form.css"
import FormSignUp from "../FormSignup/FormSignUp"
import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
export default function FormLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:4000/correcter', { data })
    .then(function (response) {
      console.log(response);
      if(response.data.correctUser === "this is correct user"){
        console.log(response.data.correctUser)
        const id = response.data.user.IfUserExist.id;
        const TOKEN = response.data.token.token
        localStorage.setItem("token", TOKEN)
        navigate(`/users/${id}`);
      }else{
        localStorage.clear("token")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'UserName Or Password is not correct!',
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

const [signUp,setSignUp] = useState(false);

 const handleSignUpComponent = ()=>{
    setSignUp(true)
 }
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

      <input placeholder="Entre Your Password " {...register("password", { required: true })} type="password" />
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