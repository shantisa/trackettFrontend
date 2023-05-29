import {fetchJSON} from "../../utils/NetworkUtils";
import {SignUpResponse} from "../../Model/SignUpResponse";
import {SignUpError} from "../../Model/SignUpError";
import {SignInError} from "../../Model/SignInError";
import {SignInResponse} from "../../Model/SignInResponse";
export default function UserDataSource() {
    async function createUser(firstName, lastName, email, password, repeatPass) {
        return await fetchJSON(SignUpResponse, SignUpError,"http://localhost:3030/createAccount", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first: firstName,
                last: lastName,
                email: email,
                password: password,
                confirm: repeatPass
            })
        })
    }

    async function userLogin(email, password){
        return await fetchJSON(SignInResponse, SignInError,"http://localhost:3030/userAccount", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
    }

    return {
        createUser,
        userLogin
    }

}
