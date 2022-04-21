import axios from "axios";

const userInstance = axios.create({
    credentials: true,
    baseURL: 'https://yuriy-oliferchuk.herokuapp.com/api/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
})

export const infoAPI = {
    async getInfo(lang) {
        const responce = await userInstance.get(`${lang}/admin/info`);
        return responce;
    }
}