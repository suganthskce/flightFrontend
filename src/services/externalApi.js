import axios from 'axios';
import { notify } from 'react-notify-toast';

const errorCode = {
    400: 'Something Went wrong',
    404: 'Resource Not Found'
}

const buildRequest = (options) => {
    const data = {};
    const { method = 'GET', url = '' } = options;
    return { url, method, data };
}

const sanitizeResponse = (response = {}, options = {}) => {
    const { data = {}, headers = {}, status = 400 } = response;
    if (errorCode[status]) {
        notify.show(errorCode[status], 'error', 5000);
    }

    return data;
}

const externalApiRequest = async (options) => {
    const reqData = buildRequest(options);
    return axios(reqData).then((responseData) => {
        return sanitizeResponse(responseData, options);
    }).catch((err) => {
        return sanitizeResponse(err.response, options);
    });

};


export default externalApiRequest;