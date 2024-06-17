import React, { useState } from 'react'
import loginImg from '../assets/loginimg.jpg'
import { FloatingLabel, Form,Spinner } from 'react-bootstrap'
import { Link,  useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';




const Auth = ({insideRegister}) => {

  const [isLoggedin,setIsLoggedin] = useState(false)

  const [UserData,setUserData] =useState({
    username:"",email:"",password:""
  })
  console.log(UserData);

  const navigate = useNavigate()

  const handleRegister = async (e)=>{
    e.preventDefault()
    if(UserData.username && UserData.email && UserData.password){
      // api call
      try{
        const result = await registerAPI(UserData)
        console.log(result);
        if(result.status==200){
          toast.warning(`Welcome ${result?.data?.username}...please login to explore our website!!!`)
          setUserData({username:"",email:"",password:""})
          navigate('/login')
        }else{
          if(result.response.status==406){
            toast.error(result.response.data)
            setUserData({username:"",email:"",password:""})
          }
        }

      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning("please fill the form completely")
    }

  }


  // login
  const handleLogin = async(e)=>{
    e.preventDefault()
    if(UserData.email && UserData.password){
      // api call
      try{
        const result = await loginAPI(UserData)
        if(result.status==200){
          setIsLoggedin(true)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
         
          setTimeout(()=>{
            // toast.warning( ` welcome ${result.data.user.username}...  `)
            setUserData({
              username:"",email:"",password:""
            })
            setIsLoggedin(false)

            navigate('/')
          },2000);
        }else{
          if(result.response.status==404){
            toast.error(result.response.data)
          }
        }

      }catch(err){
        console.log(err);
      }

    }else{
      toast.info("Please fill the form completely")
    }
  }



  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <div className='card shadow p-2'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img  className='w-100' src={loginImg} alt="login" />
            </div>
            <div className='col-lg-6'>
              <h1 className='fw-bolder mt-2'><i class="fa-brands fa-docker me-1"></i> Project Fair</h1>
              <h5 className='fw-bolder mt-2'>
                sign {insideRegister? "Up":"In"} to your Account
              </h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel controlId='floatingInputname' label='Username' className='mb-3'>
                    <Form.Control type="text" placeholder="Username" value={UserData.username} onChange={e=>setUserData({...UserData,username:e.target.value})} />
                  </FloatingLabel>
                }
                 <FloatingLabel controlId='floatingInputname' label='Email Address' className='mb-3'>
                    <Form.Control type="email" placeholder="name@example.com" value={UserData.email} onChange={e=>setUserData({...UserData,email:e.target.value})} />
                  </FloatingLabel>
                  <FloatingLabel controlId='floatingInputname' label='Password' className='mb-3'>
                    <Form.Control type="password" placeholder="Password"  value={UserData.password} onChange={e=>setUserData({...UserData,password:e.target.value})} />
                  </FloatingLabel>
                  {
                    insideRegister?
                    <div className='mt-3'>
                      <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                      <p>Already have an account? Click here to <Link to ="/login">Login</Link></p>
                    </div>
                    :
                    <div className='mt-3'>
                      <button onClick={handleLogin} className='btn btn-primary mb-2'>Login
                    { isLoggedin && <Spinner animation="border" className='ms-1' variant="light" />}
                      </button>
                      <p>Already have an account? Click here to <Link to ="/register">Register</Link></p>
                    </div>
                  }
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default Auth