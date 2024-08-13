import React from "react";
import Login from "./Login";
import { connect } from 'react-redux';
import { login, logout } from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {
    login,
    logout
})(LoginContainer);