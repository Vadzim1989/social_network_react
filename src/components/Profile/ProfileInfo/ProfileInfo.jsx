import React from "react";
import p from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defaultPhoto from '../../../assets/images/ava_img.png'
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, setStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = React.useState(false);

  const activateEditMode = (() => {
    setEditMode(true);
  });

  

  if(!profile) {
    return <Preloader/>
  }
  const mainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
    return (
      <>
        <div className={p.descriptionBlock}>
          <img src={profile.photos.small ?? defaultPhoto} className={profile.photos.small ?? p.defaultPhoto} alt="profilePhoto" />
          {isOwner && <div><input placeholder={"Load photo"} type={'file'} onChange={mainPhotoSelected}/></div>}
          <div>
            { !editMode && <ProfileStatusWithHooks status={status} setStatus={setStatus}/>}
            { editMode 
            ? <ProfileDataForm profile={profile} saveProfile={saveProfile} setEditMode={setEditMode}/> 
            : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode}/>
            }            
          </div>          
        </div>
      </>
    )
}

export default ProfileInfo;