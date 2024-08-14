import axiosInstance from './interceptorService';
import { handleApiError, handleAxiosError } from '../helpers/helpersBrockai';

export const fetchIndex = async (payload: any) => {
    try {
        const response = await axiosInstance.post('/fetchIndex', payload);

        if (response && response.data.hits && response.data.hits.hits) {
            return response.data.hits.hits;
        }
        else if (response && response.status == 200 && response.data.type == "error") {
            return handleApiError(response);
        }
        else {
            return;
        }
        
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const updateIndex = async (payload: any) => {
    try {
        const response = await axiosInstance.post('/updateIndex', payload);
        return response.data;
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const searchIndex = async (payload: any) => {
    try {
        const response = await axiosInstance.get('/searchIndex', payload);
        return response.data.hits.hits;
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const postLog = async (payload: any) => {
    try {
        const response = await axiosInstance.post('/log', payload);
        return response.data;
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const postDoc = async (payload: any) => {

    try {
        const response = await axiosInstance.post('/doc', payload);
        return response.data;
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const deleteDoc = async (payload: any) => {
    try {
        const response = await axiosInstance.post('/delete', payload);
        return response.data;
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const fetchToken = async () => {
    try {
        const response = await axiosInstance.get('/token');
        return response.data;
    } catch (error) {
        return handleAxiosError(error);
    }
};

