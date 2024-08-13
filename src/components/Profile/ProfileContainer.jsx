import React from "react";
// import p from './Profile.module.css';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfile, getStatus, setStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId ?? this.props.authUserId;
    if(!userId) this.props.history.push('/login');
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  render() {
    if(!this.props.isAuth) {
      return <Navigate to='/login'/>
    }
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus} isOwner={!this.props.router.params.userId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  profile:    state.profilePage.profile,
  status:     state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth:     state.auth.isAuth
})

// export default connect(mapStateToProps, {
//   getProfile
// })(withRouter(withAuthRedirect(ProfileContainer)));

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    setStatus,
    savePhoto,
    saveProfile
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);