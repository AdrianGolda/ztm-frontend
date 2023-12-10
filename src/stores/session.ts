import {defineStore} from 'pinia'
import {API, TOKEN_KEY} from "../api/fetcherService";

export const useSessionStore = defineStore('session', () => {

    const isLoggedIn = !!localStorage.getItem(TOKEN_KEY)

    const login = async ({email, password}: { email: string, password: string }): Promise<boolean> => {
        console.log("login")
        return await fetch(`${API}/login`, {
            method: 'POST', headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }, body: JSON.stringify({email, password})
        })
            .then(async response => {
                console.log('response', response.ok)
                if (response.ok) {
                    const body = await response.json();
                    console.log('body', body)
                    localStorage.setItem(TOKEN_KEY, body.token);
                    return true
                }
                return false;
            }).catch((e) => {
                console.log('error', e)
                return false
            })

    }

    return {isLoggedIn, login}
})
