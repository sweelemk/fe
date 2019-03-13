import axios from 'axios';

export const registerInfo = async (body) => {
    console.log(body);
    const { data } = await axios.post('/api/register', body);
    console.log(data);
    // return true;
};
