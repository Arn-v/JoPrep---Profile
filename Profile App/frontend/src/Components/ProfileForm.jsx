
// import React, { useEffect, useState } from 'react';
// import { CiCamera } from "react-icons/ci";
// import axios from "axios" 


// function ProfileForm(props)
// {

//     const intialUserData = { name:"" ,
//                        firstnName : "" , 
//                        lastName:"" , 
//                        email:"" ,
//                        address:"" , 
//                      }



//  const [formData , setFormData ] = useState(intialUserData) ; 


//  function changeHandler(event)
//  {
//       setFormData( (prevState) => {

//             return {
//                ... prevState ,  //copying the previous state of 'formData
//                [event.target.name] : event.target.value 
//                   } ; 
//              } ) 
// }



//  async function getUserData()
//  {
//     try {
//         const userData = await fetch(
//           `localhost:5000/api/profile/`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
  
//         const res = await userData.json();
//         setFormData(res);
//       } 
//       catch (error) {
//         console.log(error);
//       }
//     };

 


//   async function submitHanlder(event){

//     event.preventDefault() ; 

//     try{
       
//        const savedUserData = await fetch(
//             `localhost:5000/api/profile/saveProfile`,
//             {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ ...formData }),
//             }
//         );
    
//         console.log("FORM RESPONSE......", savedUserData);

//     }

//     catch(error){
//         console.log(error) ; 
//     }


//  }



//  useEffect( () => {
//     getUserData() 
//     return () => {
//         // Perform any necessary cleanup here
//       }
// } , [] ) ; 



//   return (

//         <div>

//             <form className='profile-form'>

//                 <button className='profile-photo-btn'>
//                     <CiCamera/>
//                     <span>Add a profile photo</span>
//                 </button>
                
//                 <div className='profile-form-container'>

                    
//                     <div className='field-container' id="name-container">
//                        <div>
//                          <label htmlFor="first-name" className='field-label'>First Name</label>
//                          <input type="text" value={formData.firstnName} onChange={changeHandler} name="firstName" id="first-name" className="input-field"></input>
//                        </div>

//                        <div>
//                             <label htmlFor="last-name" className='field-label'>Last Name</label>
//                             <input type="text" value={formData.lastName} onChange={changeHandler} name="" id="last-name" className="input-field"></input>
//                        </div>

//                     </div>


//                    <div className='field-container'>
//                         <label htmlFor="email" className='field-label'>Email</label>
//                         <input type="text" value={formData.email} onChange={changeHandler} name="firstName" id="email" className="input-field"></input>
//                     </div>


//                     <div className='field-container'>
//                         <label htmlFor="address" className='field-label'>Address</label>
//                         <textarea onChange={changeHandler} value={formData.address} name="" id="adress" rows={4} cols={40} className="input-field" ></textarea>
//                     </div>
 

//                 </div>

//                 <div className='btn-container'>
//                     <button className='reset-btn' >Reset</button>
//                     <button onChange={submitHanlder} className='save-btn'>Save</button>
//                 </div>


//           </form>
            
//         </div>
//     );
    
// }


// export default ProfileForm;



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
        try {
            const userData = await fetch(
                `http://localhost:5000/api/profile/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const res = await userData.json();
            setFormData(res);
        } 
        catch (error) {
            console.log(error);
        }
    };

    async function submitHandler(event)
    {
        event.preventDefault(); 

        try {
            const savedUserData = await fetch(
                `http://localhost:5000/api/profile/saveProfile`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...formData }),
                }
            );

            console.log("FORM RESPONSE......", savedUserData);
        }
        catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        getUserData();
        return () => {
            // Perform any necessary cleanup here
        }
    }, []); 

    return (
        <div>
            <form className='profile-form'>
                <button className='profile-photo-btn'>
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
                        <input type='text' onChange={changeHandler} value={formData.address} name="address" id="address"  className="input-field"></input>
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
