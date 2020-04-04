import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://farmington-7411e.firebaseio.com/'
})

export default instance;