import { useForm } from "react-hook-form"
import "./FormSignUp.css"
import { useState } from "react"
import FormLogin from "../FormLogin/Form"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";
import { FidgetSpinner } from "react-loader-spinner";
export default function FormSignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();
const [loading,setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true)
    console.log(data)
    axios.post('http://localhost:4000/users', { data })
    .then(function (response) {
      console.log(response);
    setLoading(false)

      if(response.data === "this is okay"){
        setLogin(true)
        navigate('/login')
      }else if(response.data === "password is not match with confirm password"){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password And ConfirmPassword is not Match!',
        })
      }else if(response.data === "this user is already exist"){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'this userName is already exist',
        })
      }

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
    <div>
      {loading ? <FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/> : <div>
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
</div> }
  
    </div>
  )
}