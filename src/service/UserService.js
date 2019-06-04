import Axios from "axios";

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const headers = {
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}
const UserService = {
    login: (username, password) => {
        return Axios.post("http://localhost:1337/localhost:5000/api/users/login", {
            username, password
        }, {
                headers
            })
    },
    register: (username, password) => {
        return Axios.post("http://localhost:1337/localhost:5000/api/users/register", {
            username, password
        }, {
                headers
            })
    },
    getUserList: ()=>{
        return Axios.get("http://localhost:1337/localhost:5000/api/users/getuser",{
            headers
        })
    }
}

export default UserService;