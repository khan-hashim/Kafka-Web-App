import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-dot-kafkapakistanapp.df.r.appspot.com/api/order',
})

export const insertOrder = payload => api.post(`/`, payload)


const apis = {
    insertOrder
}

export default apis