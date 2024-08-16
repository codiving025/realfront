import Enquiry from "./Enquiry";
const House = (props) => {
        if(!props.Houses) {
                return <h3> ...Loading data</h3>
        }          
            return (
                <>
                <div className="container-fluid ">
                <div className="row mt-4">
             <div className="col-sm-6">
              <h5 className="text-info"> {props.Houses.address} </h5>
                   <hr className="bg-info"/> 
             </div>      
             <div className="col-sm-6">
                 <h5 className="text-info"> {props.Houses.price} </h5>
                  <hr className="bg-info"/>
         </div>
                </div>    
                       <div className="row">
                       <div className="col-sm-6">
                     <img className="img-fluid img-thumbnail" src={`./imgs/${props.Houses.photo}`}  alt="house pic here" />
                           </div>     
                    <div className="col-sm-6">
                                {props.Houses.description}
                                <hr></hr>
                                   <div className="container">
                                   <h2 className="my-3 text-info"> Enquiry </h2>
                                   { localStorage.getItem('name') && <Enquiry/> }
                                   </div>                              
                    </div>
                </div>
                </div>
                </>
             );
        }      
        export default House;