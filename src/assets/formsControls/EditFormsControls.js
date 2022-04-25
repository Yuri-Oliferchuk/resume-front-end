import React from "react";
import { Field } from "redux-form";
import style from "./EditFormsControls.module.css"
 
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${ hasError && style.error}`} >
            <label>{props.labletext}</label>
            { hasError && <span>{  meta.error }</span> }
            <div>
                <textarea {...input} {...props}  />   
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${ hasError && style.error}`} >
            <label>{props.labletext}</label>
            { hasError && <span>{  meta.error }</span> }
            <div>
                <input {...input} {...props} />   
            </div>
        </div>
    )
}

export const createField = (name, placeholder, component, validators, props={} ) => {
    return (
        <div>
            <Field name={name} 
                   placeholder={placeholder}
                   component={component}
                   validate={validators}
                   {...props} />
        </div>
    )
        
}