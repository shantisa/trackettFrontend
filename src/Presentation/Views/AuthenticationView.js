import React from "react";
import '../styles/AuthStyle.scss'
import TabButton from '../components/TabButton'
import AuthenticationViewModel from "../ViewModel/AuthenticationViewModel";
import SignIn from "../components/SignIn";
import CreateAcc from "../components/CreateAcc";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";
export default function AuthenticationView(){

    const viewModel = AuthenticationViewModel();

        return(
            <div className="authForms">

                <div className="msgLoader"> {viewModel.isLoading ? <Loader/> : ""}
                    {viewModel.message.length>0 ? <MessageAlert btnLabel={viewModel.message} clearMsg={viewModel.clearMessage} /> : ""}</div>
                <div className="btn-group tabButton">
                    <TabButton btnLabel="SIGN IN" selected={viewModel.isSignIn} onClick={() => {viewModel.setSignIn(true)}} />
                    <TabButton btnLabel="SIGN UP" selected={!viewModel.isSignIn} onClick={() => {viewModel.setSignIn(false)}} />
                </div>
                {viewModel.isSignIn ? <SignIn values={viewModel.authValues} errors={viewModel.authErrors} setValues={viewModel.setAuthValues} handleSubmit={viewModel.signIn} /> :
                    <CreateAcc values={viewModel.authValues} errors={viewModel.authErrors} setValues={viewModel.setAuthValues} handleSubmit={viewModel.signUp} />}
            </div>
        );
}