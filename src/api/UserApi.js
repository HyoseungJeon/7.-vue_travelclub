import axios from 'axios';

const URL = "http://localhost:18080/users"

export const findUser = (email, password) => {
    return axios.get(`${URL}?email=${email}&password=${password}`).then(
        result => result.data
    )
}