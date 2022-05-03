import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
    },

    async postInfo(data) {
        // const {token} = data;
        const token = cookies.get("MYACC");     
        try {const response = await userInstance.post(`${data.lang}/info`, data, {headers: {Authorization: token}});
            return response;}
        catch(e) {
            return e.response
        }
    },
}

export const authAPI = {
    async checkAuthorisation(token) {
        const response = await userInstance.get('auth/me/jwt', {headers: {Authorization: 'Bearer ' + token}});
        return response;
    },

    async getNewToken(refreshToken) {
        const response = await userInstance.post('/auth/refresh-tokens', {refreshToken: 'Bearer ' + refreshToken});
        return response;
    },
    
    async login(data) {
        try {const response = await userInstance.post('auth/login', data);
            return response;}
        catch(e) {
            return e.response
        }
    },
    
    async signup(data) {
        try {const response = await userInstance.post('auth/signup', data);
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