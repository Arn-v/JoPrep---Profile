


import React, { useEffect, useState } from 'react';
import { CiCamera } from "react-icons/ci";
import axios from "axios";


function ProfileForm(props)
{

    const initialUserData = {  
        firstName: "", 
        lastName: "", 
        email: "", 
        address: "" ,
    };

    const [formData, setFormData] = useState({  
        firstName: "", 
        lastName: "", 
        email: "", 
        address: "" ,
    }); 



    function changeHandler(event)
    {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value 
            }; 
        }); 
    }






    async function getUserData()
    {
       axios.get('http://localhost:5000/api/profile')
       .then( (res) => {
           const responseUserData = res.data ; 
           console.log(responseUserData) ; 
        })
        .catch( (error) => {
            console.log(error) ; 
        })
    }





    async function submitHandler(event)
    {
        event.preventDefault(); 

        try {

            console.log(formData) ; 
            const savedUserData = await fetch(
                `http://localhost:5000/api/profile/save`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...formData }) ,
                }
            );

            console.log("FORM RESPONSE......", savedUserData);
        }
        catch (error) {
            console.log(error);
            console.error(error) 
        }
    }



    useEffect(() => {
        getUserData();
        return () => {
        }
    }, []); 







    function imgBtnHandler(event){
        event.preventDefault() ; 
    }













    return (
        <div>
            <form className='profile-form'>
                <button onClick={imgBtnHandler} className='profile-photo-btn'>
                    <CiCamera/>
                    <span>Add a profile photo</span>
                </button>
                
                <div className='profile-form-container'>
                    <div className='field-container' id="name-container">
                        <div>
                            <label htmlFor="first-name" className='field-label'>First Name</label>
                            <input type="text" value={formData.firstName} onChange={changeHandler} name="firstName" id="first-name" className="input-field"></input>
                        </div>
                        <div>
                            <label htmlFor="last-name" className='field-label'>Last Name</label>
                            <input type="text" value={formData.lastName} onChange={changeHandler} name="lastName" id="last-name" className="input-field"></input>
                        </div>
                    </div>
                    <div className='field-container'>
                        <label htmlFor="email" className='field-label'>Email</label>
                        <input type="text" value={formData.email} onChange={changeHandler} name="email" id="email" className="input-field"></input>
                    </div>
                    <div className='field-container'>
                        <label htmlFor="address" className='field-label'>Address</label>
                        <textarea type='text' onChange={changeHandler} value={formData.address} name="address" id="address"  className="input-field"></textarea>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='reset-btn'>Reset</button>
                    <button onClick={submitHandler} className='save-btn'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default ProfileForm;
