
import React from 'react';
import ProfileForm from './ProfileForm';

function ProfileSection( ) {
    return (
        <div className='profile-section'>

            <div className="profile-container">

                    <h2 className='profile-title'>My Profile</h2>

                  <ProfileForm></ProfileForm>
                        
            </div>
            
        </div>
    );
}

export default ProfileSection;