import axios from 'axios';

import LoginRecord from 'authentication/record/login-records';

export const loadCredentials = async (body) => {
    const { data } = await axios.post('/api/auth', body);
    return LoginRecord.parse(data)
};
