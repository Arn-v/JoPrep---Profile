const { getUserProfile, saveProfile } = require('../controllers/ProfileController')

const express = require("express") ; 
const router = express.Router() ;


router.get("/" , getUserProfile )  ; 
router.post("/saveProfile" , saveProfile) ; 


module.exports = router ;  
