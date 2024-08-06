import React from "react";
import Login from "./Login";
import { connect } from 'react-redux';

class LoginContainer extends React.Component {
    render() {
        return (
            <Login />
        );
    }
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, {
    
})(LoginContainer);