export class SignUpResponse {
    constructor(json) {
        this.message = "";
        if(json.message !== undefined) {
            this.message = json.message;
        }
    }

    static isValid(json) {
        return json.hasOwnProperty("message");
    }
}