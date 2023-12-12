import type {SingleStop, SingleUserStopResponse} from "../api/types";

export const TOKEN_KEY = 'token';
export const API = `http://localhost:8080`;

const req = (
    method = 'GET',
    api = '',
    postData?: BodyInit,
) => fetch(`${API}/${api}`, {
    method: method,
    headers: {
        'Accept': 'application/json',
        'authorization': `bearer ${localStorage.getItem(TOKEN_KEY)}`
    },
    body: postData
});


export const fetchUserStops = async (): Promise<SingleUserStopResponse[]> => {
    return await req('GET',`user-stops`).then(async response => {
        return await response.json();
    })
}

export const fetchAllStops = async (): Promise<SingleStop[]> => {
    return await req('GET',`stops`).then(async response => {
        return await response.json();
    })
}