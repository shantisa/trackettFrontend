export class SignInError {
    constructor(json) {
        this.message = "";
        if(json.message !== undefined) {
            this.message = json.message;
        }
        this.emailError = "";
        if(json.emailError !== undefined) {
            this.emailError = json.emailError;
        }
        this.pwdError = "";
        if(json.pwdError !== undefined) {
            this.pwdError = json.pwdError;
        }
    }

    static isValid(json) {
        return (json.hasOwnProperty("message") ||  json.hasOwnProperty("emailError") ||
            json.hasOwnProperty("pwdError") );
    }
}