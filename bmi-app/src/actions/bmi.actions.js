import axios from 'axios';

const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "http://localhost";
const portApi = process.env.NODE_ENV === "development" ? 3001 : 3001;

const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;

async function addBmi(data) {
  const url = `${baseURLApi}/bmi/addBmi`;
  return await axios.post(url, data).then(response => response.data);
}

async function getValues(username) {
  const url = `${baseURLApi}/bmi/getValues`;
  return await axios.post(url, username).then(response => response.data);
}


export {
  addBmi,
  getValues,
};