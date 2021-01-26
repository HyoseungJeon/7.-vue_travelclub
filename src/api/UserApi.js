import axios from 'axios';

const URL = "http://localhost:18080/users"
const URLClub = "http://localhost:18080/clubs"

export const findUser = (email, password) => {
    return axios.get(`${URL}?email=${email}&password=${password}`).then(
        result => result.data
    )
}

export const getUserEmail = (email) => {
    return axios.get(`${URL}?email=${email}`).then(
        result => result.data
    )
}

export const registerUser = (user) => {
    return axios.post(`${URL}`,user).then(
        result => (result.status === 201 )
    )
}

export const modifyUser = (user) => {
    return axios.patch(`${URL}/${user.id}`,user).then(
        result => (result.status === 201)
    )
}

export const getClubs = () =>{
    return axios.get(`${URLClub}`).then(
        result => result.data
    )
}

export const findClubs = (name) => {
    return axios.get(`${URLClub}?name=${name}`).then(
        result => result.data
    )
}