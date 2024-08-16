import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  '../App.css';
const SignUp = () => {
    let [frmObj,setFrmObj] = useState({"name":"","email":"","password":"","gender":"","role":""});
    let [signupStatus, setSignupStatus]=useState('');
    let navigate = useNavigate();
    let changeHandler = (e) => {
        //    setFrmName(e.target.value);
        setFrmObj({...frmObj,[e.target.name]:e.target.value});
        console.log(frmObj);
        //send the details to middleware/express and check to see if user with this info..
        // .....exists..if exists display..user already exists, if not,
        // congratulations...ask user to login by providing login page link
    }
    let onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(frmObj);
        const handleSignUp=async()=>{
            try{
                const response=await axios.post(process.env.REACT_APP_BACKEND_URL+"user/signup/",frmObj)
                let data=response.data;
                console.log(data);
                navigate('/login')
                setSignupStatus('Thanks for signing up!')
            }catch(err){
                console.error("Signup Failed:", err)
            }
        };
        handleSignUp();
    }
    if(signupStatus=== ''){
    return (
        <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
            <div className="container my-4 w-50">
         <h2 className="text-center text-info my-5">SignUp</h2>
        <form onSubmit={onSubmitHandler}>
       <div className="row d-flex justify-content-center">
       <div className="col-sm-9">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={changeHandler}
                />              
               </div>
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-9">
                <label htmlFor="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-9">
                <label htmlFor="" className="form-label">Password</label>
                <input
                    type="text"
                    name="password"
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-9 my-2">
                <label htmlFor="" className="form-label">Gender</label>
                <div>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="male" className="form-check-label">Male</label>
                </div>
                <div>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="female" className="form-check-label">Female</label>
                </div>
                <div>
                <input
                    type="radio"
                    name="gender"
                    value="others"
                    id="others"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="others" className="form-check-label">Others</label>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-9 my-2">
                <label htmlFor="" className="form-label">Role</label>
                <div>
                <input
                    type="radio"
                    name="role"
                    value="customer"
                    id="male"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="customer" className="form-check-label">customer</label>
                </div>
                <div>
                <input
                    type="radio"
                    name="role"
                    value="realtor"
                    id="female"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="realtor" className="form-check-label">realtor</label>
                </div>
            </div>
        </div>
        {/* <div className="row d-flex justify-content-center">
            <div className="col-sm-9 my-2">
                <label htmlFor="" className="form-label">Role</label> <br></br>
               <select className="form-control bg-dark text-light ">
                <option name='role' value='customer'onChange={changeHandler} >customer</option>
                <option name='role' value='realtor' onChange={changeHandler}>realtor</option>
               </select>
            </div>
        </div> */}
        <div className="row d-flex justify-content-center mx-2">
            <div className="col-sm-9 form-check my-3">
                <input
                    type="checkbox"
                    id="check"
                    className="form-check-input bg-dark"
                />
               <label htmlFor="" className="form-check-label ">I agree with all the terms and conditions</label>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">        
                <button type="submit" className="btn btn-outline-dark my-4" >  Submit </button>          
            </div>
        </div>
        </form>
        </div>           

            </div>
            <div className="col-sm-1"></div>
       
        </div>
        </div>
        
       

        </>
     );
    } else{
        return (
            <>
                <h4 className='text-success'>{signupStatus}</h4>
                <h5>Back to Login 
                    <Link to="/login">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                    >
                        Login
                    </button>
                    </Link>                   
                </h5>
                </>
        );
    }
}
export default SignUp;