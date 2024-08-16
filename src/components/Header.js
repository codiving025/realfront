import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Header = () => {
    let navigate=useNavigate();
    const logoutHandler=() =>{
        localStorage.clear();
        navigate('/');
    }
    return (       
        <div className="row bg-info d-flex align-items-center" id="head">
            <div className="col-sm-1"></div>
            <div className="col-sm-2 " id="imgs">
            <Link to='/'> <img className=""  src="/imgs/logo1.png" alt="logo here" height={100} width={150} /></Link>
             </div>
             <div className="col-sm-1"></div>
               <div className="col-md-4" >
               <b>   <i id="inner"> You dream it, we find it, </i> </b> <br/>
                <b>   <i id="inner"> Selling more than just houses, we’re selling dreams. </i> </b>
             </div>
             {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-4">
            {
                (localStorage.getItem('name'))&&
                <h4>Hello {localStorage.getItem('name')}!</h4>
            }
            {
                (localStorage.getItem('name'))?(
                    <>
            <span id="buttons"><Link to='/'><button className="btn btn-body mx-2"> Home</button></Link></span>
            <span id="buttons"> <Link to ='enquiry' ><button className="btn btn-primary mx-2"> enquiry</button> </Link></span>
        <span>        <Link to="logout"> <button className="btn btn-success mx-2" onClick={logoutHandler}> Logout </button> </Link> </span>
            </>
            )
                :  <span id="buttons"> <Link to='login'>   <button className="btn btn-primary mx-2"> Login </button> </Link></span>
            }
            {!localStorage.getItem('name')&&
            
                <span id="buttons"> <Link to ='signup' ><button className="btn btn-primary mx-2"> Sign Up</button> </Link></span>
            }
               

            </div>
        </div>
       
     );
} 
export default Header;