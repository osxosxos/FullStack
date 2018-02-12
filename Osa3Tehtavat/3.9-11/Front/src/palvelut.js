import axios from 'axios';

const baseUrl = '/persons';

const getAll = () => axios.get(baseUrl);

const create = newObject => axios.post(baseUrl, newObject);

const remove = id => axios.delete(`${baseUrl}/${id}`);

const update = (henkilo) => {
    return axios.put(`${baseUrl}/${henkilo.id}`, henkilo);
};

export default { getAll, create, remove, update };
