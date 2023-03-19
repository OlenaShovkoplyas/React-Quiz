import axios from './service';

const quizes = {
    fetch: () => axios.get('/quizes').then(data => data),
};

export { quizes };
