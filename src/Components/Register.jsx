import { useForm } from "react-hook-form"
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"


export default function Register(){
const{register,handleSubmit,formState:{errors},setFocus ,reset,watch}=useForm()

const password = watch('Password')
const  navigate = useNavigate()

const onLogin=(data)=>{
      console.log(data)
      reset()
      setFocus('fullname')
      setTimeout(async() => {
            const res = await axios.post('http://localhost:3110/register',data,{
                  headers:{
                        'Content-Type' :'application/json'
                  }
            })
            const resData = res.data
            if(resData.status){
                  toast.success(resData.message)
                  setTimeout(() => {
                        navigate('/')
                  }, 1200);
                 
            }else{
                  toast.error(resData.message)
            }
      }, 1200);
}


return(
<>
<img src="https://inventory-management-rosy.vercel.app/static/media/signup.f15f90666859b33549cb.jpg" alt="sad" style={{objectFit:'contain' , width:'62%', height:'10%', }} />
<form onSubmit={handleSubmit(onLogin)} style={{height:'450px', position:'absolute' ,top:'20%' ,left:'70%'} }>
<h3>Register</h3>
  <div className="input-filed">
    <label htmlFor="">FullName</label>
    <input type="text" {...register('Fullname',{
      required:'FullName is required'
    })} />
  </div>
  <div className="input-filed">
    <label htmlFor="">Username</label>
    <input type="email"  {...register('Username',{
      required:'UserName is required',
      pattern:{
            value: /^\S+@\S+\.\S+$/,
            message:'Invalid Email Address...!!'
      }
    })}  />
  </div>
  <div className="input-filed">
    <label htmlFor="">MobileNo</label>
    <input type="text" {...register('MobileNo',{
      required:'Mobile number is required',
      minLength:{
            value:10,
            message:"Invalid Mobile Number..!!!"
      },
      maxLength:{
            value:10,
            message:"Invalid Mobile Number..!!!"
      }
    })}  />
  </div>
  <div className="input-filed">
    <label htmlFor="">Password</label>
    <input type="password"  {...register('Password',{
      required:'Password is required'
    })}  />
  </div>
  <div className="input-filed">
    <label htmlFor="">Verifiy</label>
    <input type="password" placeholder='Verifiy your password here'   {...register('confirm',{
      required:'password is incorrect',
      validate:(value)=>value===password || "Password Doesn't Match"
    })} />
  </div>
  {
      errors && <p className= 'error' style={{fontWeight:'bold',color:'red'}}>{Object.values(errors)[0]?.message}</p>
  }
<button type="submit">Submit</button>
<NavLink to={'/'}>Click here to Login</NavLink>
</form> 
</>


)



}