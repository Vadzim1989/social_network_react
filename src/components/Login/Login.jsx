import React from "react";
import {reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import { requiredField, maxLengthCreator } from "../../utils/validators/validators";
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'
import { createField } from "../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            {createField('login', 'email', [requiredField, maxLengthCreator(100)], Input)}           
            {createField('Password', 'password', [requiredField, maxLengthCreator(30)], Input, {type: 'password'})}            
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (data) => {
        login(data.email, data.password, data.rememberMe);
    }
    if(isAuth) {
        return <Navigate to='/profile'/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }    
}

export default Login;