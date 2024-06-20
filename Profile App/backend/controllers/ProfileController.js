
const User = require("../models/User") ; 
require("dotenv").config() ;


// JSON Web Token -> email_id , id 



//Handler for getting the user's profile information(latest)
exports.getUserProfile = async(req,res) => 
{
   try
    {
     const { id } = req.user ;

     const userProfileData = await User.find( { id } ) ; 

     if(!userProfileData){
        return res.status(404).json({ success:false , 
                                    message:"Profile Data Not Found "
                                    } ) 
     }


     //successful response case
      res.status(200).json({ success:true, 
                                 data:userProfileData , 
                                 message:"Profile Data Succesffully Found "
                                } ) 

    }


    catch(error){
      console.log(error)
      console.error(error) 

      res.status(500).json(
        { success:false , 
          message:"Internal Server Error "
        }
       )
    }


}







//Handler for updating existing user's profile information or saving the current profile
exports.saveProfile = async(req,res) => 
{
  try
  {
    
    const {id} = req.body.profileData ; 

    const newProfileData = req.body.profileData ; 

    const {firstName,lasttName, email, address} = req.body.profileData  ; 

    
    // VALIDATION LEFT 


    const userProfile = await User.findById ( id ) ; 

   if( userProfile )
     { 
      const updatedProfile = await User.findByIdAndUpdate ( id , newProfileData , { new:true }) ; 

      //successful response case
      res.status(200).json({ success:true, 
        data: updatedProfile , 
        message:"Profile Data Updated successfully"
       } ) 
     }


   else
   {
     const {firstName, lastName, email, address} = req.body.profileData  ; 

      //create new entry for User
       const user = await User.create( {
                                        firstName,lastName,email,address
                                        })

        //now creating a JWT for AuthN 
        const payload = {
            name:firstName, 
            email:user.email,
            id:user._id
            };

    const jwt = require("jsonwebtoken") ; 

    let token =  jwt.sign(payload, 
        process.env.JWT_SECRET,
        {
            expiresIn:"2h",
        });

        
    user = user.toObject();
    user.token = token;

    const options = {
        expires: new Date( Date.now() + 3*24*60*60*1000),
        httpOnly:true,
    }

   // creating a cookie & sending  in the response 
   return res.cookie("token", token, options).status(200).json({
    success: true,
    token,
    user,
    message: 'User profile created successfully',
    });

  }


}


   catch(error){
       console.log(error)
       console.error(error) 

       res.status(500).json(
         { success:false , 
          message:"Internal Server Error "
         })
    }


}








//Hnadler for signining up for new  profile
// exports.signup = async (req,res) => 
// {

//     try
//     {
//         const {firstName,lasttName, email, address} = req.body;

//         const existingUser = await User.findOne({email});

//         if(existingUser){
//             return res.status(400).json({
//                 success:false,
//                 message:'Profile already Exists',
//             });
//         }

//         //create new entry for User
//         const user = await User.create({
//             firstName,lastName,email,address
//         })

//       //now creating a JWT for AuthN 
//         const payload = {
//             name:firstName, 
//             email:user.email,
//             id:user._id
//         };


//         let token =  jwt.sign(payload, 
//             process.env.JWT_SECRET,
//             {
//                 expiresIn:"2h",
//             });

            
//         user = user.toObject();
//         user.token = token;

//        // creating a cookie & sending  in the response 
//         res.cookie("token", token, options).status(200).json({
//             success:true,
//             token,
//             user,
//             message:'User Logged in successfully',
//         });


//         return res.status(200).json({
//             success:true,
//             message:'New User Created Successfully',
//         });

//     }


//     catch(error) {
//         console.error(error);
//         return res.status(500).json({
//             success:false,
//             message:'User cannot be registered, please try again later',
//         });
//     }
// }