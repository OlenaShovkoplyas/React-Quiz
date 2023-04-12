import axios from './service';

const quizes = {
  fetch: () => axios.get('/quizes').then((data) => data),
};

const quiz = {
  fetch: (() => axios.get('/quiz').then((data) => data)),
};

export { quizes, quiz };
