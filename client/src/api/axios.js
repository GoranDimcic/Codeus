import axios from "axios";
import useAuthStore from "../store/auth";

const ApiClient = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json'
    }
})

const requestInterceptor = async config => {
    const {token}= useAuthStore.getState()
    if (token && config.baseURL) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        }
    }

    return config
}

ApiClient.interceptors.request.use(requestInterceptor)

export default ApiClient;