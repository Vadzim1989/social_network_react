import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import p from './Profile.module.css';


const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setStatus}/>
      <MyPostsContainer/>
    </>
  )
}

export default Profile;