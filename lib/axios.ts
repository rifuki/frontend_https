import axios from 'axios'
// import https from "https";

// const agent = new https.Agent({
//     rejectUnauthorized: false
// })

export default axios.create({
    baseURL: 'https://backend.rifuki.codes',
    withCredentials: true,
    // httpsAgent: agent,
})