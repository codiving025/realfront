import { useLocation } from "react-router-dom";
import House from "./House";
import { useState,useEffect } from "react";
import axios from "axios";
const SearchedHouse = (props) => {
    let [searchedHouse,setSearchedHouse] =  useState({});
    let loca = useLocation();
    console.log(loca.state._id);
    useEffect( () =>{
        let fetchData = async () => {
            let result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}houses/houseById/${loca.state._id}`);
          // console.log(housesData);
          setSearchedHouse(result.data[0])
        }
        fetchData();
      },[]);
    console.log(searchedHouse);
    if(!searchedHouse) {
        return "...loading data";
    }

    return (
        <>
        <h1 className="text-center text-info"> Searched House</h1>
        <div className="container my-3">
        <House Houses = {searchedHouse} />
        </div>     
        </>
       
     );
}
export default SearchedHouse;