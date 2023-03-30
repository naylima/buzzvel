import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000", 
});

export async function createUser({ username, linkedin, github }) {
  const response = await api.post('/users', { username, linkedin, github });
  return response.data;
}

export async function getUser(username) {
  const response = await api.get(`/users/${username}`);
  return response.data;
}