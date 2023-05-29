export class SignUpError {
    constructor(json) {
        this.message = "";
        if(json.message !== undefined) {
            this.message = json.message;
        }
        this.fnError = "";
        if(json.fnError !== undefined) {
            this.fnError = json.fnError;
        }
        this.lnError = "";
        if(json.lnError !== undefined) {
            this.lnError = json.lnError;
        }
        this.emailError = "";
        if(json.emailError !== undefined) {
            this.emailError = json.emailError;
        }
        this.pwdError = "";
        if(json.pwdError !== undefined) {
            this.pwdError = json.pwdError;
        }
        this.pwdrError = "";
        if(json.pwdrError !== undefined) {
            this.pwdrError = json.pwdrError;
        }
    }

    static isValid(json) {
        return (json.hasOwnProperty("message") || json.hasOwnProperty("fnError")
            || json.hasOwnProperty("lnError") || json.hasOwnProperty("emailError") ||
            json.hasOwnProperty("pwdError") || json.hasOwnProperty("pwdrError") );
    }
}