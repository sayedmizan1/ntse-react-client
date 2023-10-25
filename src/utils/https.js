import axios from 'axios';

export default axios.create({
    baseURL: "https://ntse.onrender.com/",
    headers: {
        "Content-type": "application/json"
    }
});