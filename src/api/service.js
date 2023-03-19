import axios from "axios";

export default axios.create({
    baseURL: 'https://641625f20b3cdc7b2ca29bff.mockapi.io/api/v1',
    headers: { 'Content-Type': 'application/json' },
});