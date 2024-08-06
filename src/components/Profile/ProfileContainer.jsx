import React from "react";
// import p from './Profile.module.css';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfile, getStatus, setStatus } from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId ?? '31504';
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    if(!this.props.isAuth) {
      return <Navigate to='/login'/>
    }
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus}/>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  profile:  state.profilePage.profile,
  status:   state.profilePage.status
})

// export default connect(mapStateToProps, {
//   getProfile
// })(withRouter(withAuthRedirect(ProfileContainer)));

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    setStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);