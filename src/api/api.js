import axios from "axios";

axios.defaults.withCredentials = true;

const userInstance = axios.create({
    baseURL: 'https://yuriy-oliferchuk.herokuapp.com/api/1.0/',
    // baseURL: 'http://localhost:3001/api/1.0/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    withCredentials: true,
    crossDomain: true
})

export const infoAPI = {
    async getInfo(lang) {
        const response = await userInstance.get(`${lang}/info`);
        return response;
    }
}

export const authAPI = {
    async checkAuthorisation(token) {
        const response = await userInstance.get('auth/me', {headers: {Authorization: token}});
        return response;
    },
    
    async login(data) {
        try {const response = await userInstance.post('auth/login', data);
            return response;}
        catch(e) {
            return e.response
        }
    },
    
    async logout() {    
        const response = await userInstance.get('auth/logout');
        return response;
    }
}