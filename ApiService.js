import axios from 'axios';

axios.defaults.baseURL = 'https://adonisjs-crud.herokuapp.com/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const getNotes = async () => axios.get('/notes');

const saveNote = async (data) => axios.post('/note', data);

const editNote = async (data) => axios.put(`/note/${data.id}`, data);

const removeNote = async (id) => axios.delete(`/note/${id}`);

export { getNotes, saveNote, editNote, removeNote }