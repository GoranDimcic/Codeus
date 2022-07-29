import axios from "axios";
import useAuthStore from "../store/auth";

const ApiClient = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json'
    }
})

const requestInterceptor = async config => {
    const { authToken } = useAuthStore.getState()

    if (authToken && config.baseURL) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${authToken}`,
        }
    }

    return config
}

ApiClient.interceptors.request.use(requestInterceptor)

export default ApiClient;