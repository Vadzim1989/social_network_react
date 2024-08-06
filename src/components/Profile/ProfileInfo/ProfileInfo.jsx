import React from "react";
import p from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
    return (
      <>
        {/* <div>
          <img className={p.backgroundImg} src='https://png.pngtree.com/thumb_back/fw800/back_pic/03/80/06/3757c30a762387b.jpg' alt="profile"/>
        </div> */}
        <div className={p.descriptionBlock}>
          <img src={props.profile.photos.small} alt="profilePhoto" />
          <ProfileStatus status={props.status} setStatus={props.setStatus}/>
        </div>
      </>
    )
}

export default ProfileInfo;