import axios from 'axios'

const api = axios.create({
    baseURL: `https://brototype-student-management-system.onrender.com`
})

export default api

export const base = 'wss://brototype-student-management-system.onrender.com'