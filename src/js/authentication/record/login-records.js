import { Record } from 'immutable';

export default class LoginRecord extends Record ({
    email: null,
    token: null
}){
    static parse(user) {
        return new LoginRecord({
            email: user.email,
            token: user.token
        })
    }
}
