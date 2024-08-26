import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getReq, postReq } from './ApiContext';
import { getStorage } from '@MR/secureStorage';

const api: AxiosInstance = axios.create({
    baseURL: 'http://192.168.0.100:3000', // Update this if using a mobile emulator
    headers: {
        // 'Content-Type': 'application/json',
    },
});



api.interceptors.request.use(
    async (config) => {
        const token = getStorage('token'); // Use AsyncStorage for React Native
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access (e.g., navigate to login screen)
        }
        return Promise.reject(error);
    }
);

const makeRequest = async (method: 'get' | 'post' | 'put' | 'delete', req: { endpoint: string, baseURL?: string, data?: any, header?: any }) => {
    try {
        const config: AxiosRequestConfig = {
            method,
            url: req.endpoint,
            baseURL: req.baseURL || api.defaults.baseURL,
            headers: { ...api.defaults.headers, ...req.header },
            data: req.data
        };

        console.log(`Request configuration:`, config);
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getData = async (req: getReq) => {
    return makeRequest('get', req);
};

export const postData = async (req: postReq) => {
    return makeRequest('post', req);
};

export const modifyData = async (req: postReq) => {
    return makeRequest('put', req);
};

export const removeData = async (req: postReq) => {
    return makeRequest('delete', req);
};
