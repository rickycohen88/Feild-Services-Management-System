import axios from 'axios';

const dataRequest = axios.create({
    baseURL:"http://localhost:8080/"
});

export default dataRequest;