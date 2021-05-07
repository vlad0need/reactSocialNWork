import { Formik, Field, ErrorMessage} from "formik";
import {required} from "../../utilits/validators";
import s from "./loginFormik.module.css"
import React from "react";
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import * as Yup from 'yup'





const LoginForm = (props) => {
    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)

    }
    if (props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                   email: Yup.string()
                    .email('Invalid email or password')
                    .required("Required"),
                    password: Yup.string()
                        .required('Invalid email or password')
                })}
                /*validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}*/
                onSubmit={(values) => onSubmit(values) }
            >
                {({isSubmitting, values, handleSubmit, handleBlur, touched, errors}) => (
                    <form onSubmit={handleSubmit} >
                        <Field className={s.formControl + " " + (touched.email && errors.email ? s.error : '')}
                               placeholder={"Email"} name={"email"}
                               onBlur={handleBlur} value={values.email}   />
                        <Field className={s.formControl + " " + (touched.password && errors.password ? s.error : '')}
                               placeholder={"Password"} name={"password"}
                               type={"password"} value={values.password}
                               onBlur={handleBlur} />
                        {(errors.password && touched.password) || (errors.email && touched.email)
                            ? <div className={s.formSummaryError}>{errors.email}</div> : null}
                        <button className={s.btn} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (LoginForm);;