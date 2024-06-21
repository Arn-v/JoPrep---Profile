import Navbar from "../Components/Navbar";
import ProfileSection from "../Components/ProfileSection";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ProfilePage()
{
   return(

    <div>

        <Navbar></Navbar>

        <ProfileSection></ProfileSection>

        <ToastContainer />
        
    </div>
   )
}

export default ProfilePage ;