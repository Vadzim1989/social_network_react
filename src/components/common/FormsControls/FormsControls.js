import React from "react"
import style from './FormsControls.module.css'
import { Field } from 'redux-form'

const FormControl = ({meta: {touched, error}, children, text}) => {
    const hasError = touched && error;
    return(
        <div className={`${style.formControl} ${(hasError ? style.error : '')}`}>
            <label>
                {children}
                {text}
            </label>
            {hasError && <span>{error}</span>} 
        </div>
    )
}

export const Textarea = (props) => { //we destruct our props, and take input's values
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => { //we destruct our props, and take input's values
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props= {}, text = '') => <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} text={text}/>