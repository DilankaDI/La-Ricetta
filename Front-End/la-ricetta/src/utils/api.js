import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchRecipes = () => API.get('/recipes');
export const fetchRecipe = (id) => API.get(`/recipes/${id}`);
export const loginUser = (data) => API.post('/auth/login', data);
