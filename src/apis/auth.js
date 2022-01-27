import request from '../utils/request';

export function loginApi(data) {
    return request({
        url: '/login',
        method: 'post',
        data,
    });
}

export function meApi() {
    return request({
        url: '/me',
        method: 'post',
    });
}
