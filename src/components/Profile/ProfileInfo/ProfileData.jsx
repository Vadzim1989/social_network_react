import React from "react";

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <> 
          <div>
            <b>About me:</b> {profile.aboutMe}
          </div>
          <div>
            <b>Full name:</b> {profile.fullName}  
          </div>
          <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : 'no'}
          </div>   
          <div>
            {profile.lookingForAJobDescription}
          </div>              
          <div>
            <b>Contacts:</b>
              <ul>
                  {Object.keys(profile.contacts).map(key => {
                      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                  })}
              </ul>
          </div> 
          {isOwner && <div><button onClick={activateEditMode}>edit</button></div>}     
        </>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <li><b>{contactTitle}</b>: {contactValue}</li>
}

export default ProfileData;