import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getDevice(id) {
        return apiClient.get('/device/', { params: id })
    },
    updateDevice(data) {
        return apiClient.patch('/device/', data)
    },
    addDevice(data) {
        return apiClient.post('/device', data)
    },
}
