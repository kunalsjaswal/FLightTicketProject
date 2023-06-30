import { useState } from "react";
import contextStore from "./contextFile";

const StateStore = (props)=>{

    // signup data 
    const [newUser, setNewUser] = useState({
        username:"",
        email:""
    })

    // changing signup to login to admin login functions
    const showLogIn=()=>{
        document.getElementById('login-id').style.display = "block";
        document.getElementById('signup-id').style.display = "none";
        document.getElementById('admin-id').style.display = "none";
    }
    const showSignUp=()=>{
    document.getElementById('login-id').style.display = "none";
    document.getElementById('signup-id').style.display = "block";
    document.getElementById('admin-id').style.display = "none";
    }
    const showAdmin=()=>{
    document.getElementById('login-id').style.display = "none";
    document.getElementById('signup-id').style.display = "none";
    document.getElementById('admin-id').style.display = "block";

    }

    
    
    
    // login details 

    const host="https://service2-8lpw.onrender.com/skyview";

    const [userData, setuserData] = useState()
    const [loginDetails, setloginDetails] = useState({
        id:"",
        status:false
    })

    const getUserApi=async(id)=>{

        const response = await fetch(`${host}/getUsers/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        });

        const data = await response.json();
        setuserData(data);
    }

    const [userTickets, setUserTickets] = useState([])
    const getUserTickets=async(id)=>{
        const response = await fetch(`${host}/showuserTickets/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        })
        const json = await response.json()
        setUserTickets(json);
    }

    const [allTickets, setallTickets] = useState([])
   
    const getAllTickets=async(id)=>{
        const response = await fetch(`${host}/showAllTickets`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        })
        const json = await response.json();
        setallTickets(json);
    }


   

    return (
        <contextStore.Provider
            value={{
                newUser,setNewUser,
                showLogIn,showSignUp,showAdmin,
                getUserApi,userData,
                loginDetails, setloginDetails,
                userTickets,getUserTickets,setUserTickets,
                allTickets,getAllTickets
            }}
        >
            {props.children}
        </contextStore.Provider>
    )
}

export default StateStore