import React, {useState} from 'react';
import axios from 'axios';
import '../assets/css/styleLogin.css';
import { Link } from 'react-router-dom';

const Login = () =>{
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        let credentials = {
            user : user,
            password : password
        }

        if(!credentials.user || !credentials.password){
            alert('Credenciales invalidas')
        }
        else{
            axios.post('http://localhost:18080/login', credentials).then(res => {
                console.log(res.data)
            })
        }
    } 



    return(
        <div className= 'login'>
            <div className = 'shadow-none p-3 mb-5 bg-light rounded'>
                <div className = 'mb-3 '>
                        <label className = 'form-label'>User</label>
                        <input type="text" className = 'form-control' placeholder='User' onChange={e => setUser(e.target.value)}/>
                </div>
                <div className = 'mb-3'>
                        <label className = 'form-label'>Password</label>
                        <input placeholder='Password' type="password" className = 'form-control' onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className = 'mb-3'>
                        <a href="">Sign up</a>
                </div>
                <button type='button' className = 'btn btn-primary' onClick={() =>{
                  handleLogin()
                }}>Login</button>
            </div>
       </div> 
    );
}

export default Login;