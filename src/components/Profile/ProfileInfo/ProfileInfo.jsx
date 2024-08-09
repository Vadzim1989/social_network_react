import React from "react";
import p from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defaultPhoto from '../../../assets/images/ava_img.png'

const ProfileInfo = ({profile, status, setStatus}) => {
  if(!profile) {
    return <Preloader/>
  }
    return (
      <>
        {/* <div>
          <img className={p.backgroundImg} src='https://png.pngtree.com/thumb_back/fw800/back_pic/03/80/06/3757c30a762387b.jpg' alt="profile"/>
        </div> */}
        <div className={p.descriptionBlock}>
          <img src={profile.photos.small ?? defaultPhoto} className={profile.photos.small ?? p.defaultPhoto} alt="profilePhoto" />
          <ProfileStatusWithHooks status={status} setStatus={setStatus}/>
        </div>
      </>
    )
}

export default ProfileInfo;