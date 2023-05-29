import React from "react";
import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import UserDataSource from "../../Data/DataSource/UserDataSource";
import {SignUpError} from "../../Model/SignUpError";
import {SignInError} from "../../Model/SignInError";
export default function AuthenticationViewModel() {

    const navigate = useNavigate();
    const dataSource = UserDataSource();
    const [isSignIn, setSignIn] = useState(true);

    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [authValues, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    })
    //create state for the error messages (email, password, first name, last name, repeat password)
    const [authErrors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    })
    function setAuthValues(attrName, value){
        if (typeof value === 'string') {
            value = value.trim()
        }
        setValues({ ...authValues, [attrName]: value })
    }

   function checkValidation(){
        let valid = true;
       if(authValues.firstName.length === 0){
           authErrors.firstName = "Please provide your first name";
           valid = false;
       }else{
           authErrors.firstName = "";
       }
       if(authValues.lastName.length === 0){
           authErrors.lastName = "Please provide your last name";
           valid = false;
       }else{
           authErrors.lastName = "";
       }

       if(!authValues.email.match(/^\S+@\S+\.\S+$/)){
           authErrors.email = "Please provide a valid email";
           valid = false;
       }else{
           authErrors.email = "";
       }
        if(authValues.password.length < 8){
            authErrors.password = "Password must be 8 characters or more";
            valid = false;
        }else{
            authErrors.password = "";
        }
       if(authValues.password !== authValues.repeatPassword){
           authErrors.repeatPassword = "Passwords do not match";
           valid = false;
       }else{
           authErrors.repeatPassword = "";
       }
       //set error to itself to inform state change
       setErrors({ ...authErrors})
       return valid;
   }

    function checkSignIn(){
        let valid = "true";
        if(!authValues.email.match(/^\S+@\S+\.\S+$/)){
            authErrors.email = "Please provide a valid email";
            valid = false;
        }else{
            authErrors.email = "";
        }
        if(authValues.password.length < 8){
            authErrors.password = "Password must be 8 characters or more";
            valid = false;
        }else{
            authErrors.password = "";
        }
        //set error to itself to inform state change
        setErrors({ ...authErrors})
        return valid;
    }
    async function signUp(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (checkValidation() && !isLoading) {
            setLoading(true);
            let res = await dataSource.createUser(authValues.firstName, authValues.lastName, authValues.email, authValues.password, authValues.repeatPassword);
            setLoading(false);
            setMessage(res.message);
            if(res instanceof SignUpError) {
                authErrors.firstName = res.fnError;
                authErrors.lastName = res.lnError;
                authErrors.email = res.emailError;
                authErrors.password = res.pwdError;
                authErrors.repeatPassword = res.pwdrError;
                //set error to itself to inform state change
                setErrors({ ...authErrors});
            } else {
                setTimeout(() => {
                    navigate('/home')
                }, 2000)
            }

        }
    }

    async function signIn(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (checkSignIn() && !isLoading) {
            setLoading(true);
            let res = await dataSource.userLogin(authValues.email, authValues.password);
            setLoading(false);
            setMessage(res.message);
            if(res instanceof SignInError) {
                authErrors.email = res.emailError;
                authErrors.password = res.pwdError;
                //set error to itself to inform state change
                setErrors({ ...authErrors});
            } else {
                setTimeout(() => {
                    navigate('/home')
                }, 2000)
            }

        }
    }

    function clearMessage(){
        setMessage("");
    }

    return{
        isSignIn,
        setSignIn,
        authValues,
        authErrors,
        setAuthValues,
        signUp,
        signIn,
        isLoading,
        message,
        clearMessage
    }
}