import axios from 'axios';
import $router from '@/router'

let Service = axios.create({
    baseURL: 'http://localhost:10000',
    timeout: 1000,
});

Service.interceptors.request.use((request) => {
    let token = Auth.getToken()

    if (!token) {
        $router.to('/Login');
        return;
    }
    else {
        request.headers["Authorization"] = 'Bearer' + token;
    }

    return request;
})

Service.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
        Auth.logout();
        $router.to('/Login');
    }
})

let Auth = {
    async login(email, password) {
        let response = await Service.post("/api/auth/login", {
            email: email,
            password: password,
        })

        let user = response.data;

        localStorage.setItem('user', JSON.stringify(user));

        return true;
    },

    logout() {
        localStorage.removeItem('user');
    },

    async signin(name, surname, date, email, password, profilna) {
        let response = await Service.post("/api/auth/signUp", {
            "ime": name,
            "prezime": surname,
            "datumRodenja": date,
            email: email,
            password: password,
            profilnaSlika: profilna
        })

        let user = response.data;

        localStorage.setItem('user', JSON.stringify(user));

        return true;
    },

    getUser() {
        JSON.parse(localStorage.getItem('user'));
    },

    getToken() {
        let user = Auth.getUser();
        if (user && user.token) {
            return user.token;
        }
        else {
            return false;
        }
    },

    authenticated() {
        let user = Auth.getUser();
        if (user && user.token) {
            return true
        }
        return false;
    },

    state: {
        get authenticated() {
            return Auth.authenticated();
        } ,
        get userEmail() {
            let user = Auth.getUser();

            if (user) {
                return user.userEmail
            }

            return Auth.getUser();
        }
    }
};

export {Service, Auth};