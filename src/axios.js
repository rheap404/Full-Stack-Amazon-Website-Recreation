import axios from "axios";

const instance = axios.create ({
    baseURL: 'http://127.0.0.1:5001/clone-e4d0e/us-central1/api' // THE API (cloud fn) URL
});

export default instance;