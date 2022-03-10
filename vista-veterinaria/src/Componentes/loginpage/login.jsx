import React, { useState } from 'react';
import {Routes,Route,} from 'react-router-dom';
import axios from 'axios';
import '../assets/css/styleLogin.css';
import AppRouter from '../AppRouter';
import { Link, Router } from 'react-router-dom';
import Register from '../registroUsuario/registerUser';

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    let [isLogin, setIsLogin] = useState(false)

    const handleLogin = () => {
        let credentials = {
            username: user,
            password: password
        }
        console.log(credentials)
        if (credentials.username && credentials.password) {
            methodPost(credentials)
        }
        else {
        
            console.log(user.credentials)
            alert('Credenciales invalidas')
        }
    }

    const methodPost = async (credentials) => {
        const res = await axios.post('http://localhost:18080/user/login', credentials)
        if (res.data !== 'No hay'){
            document.cookie = 'token=' + res.data
            setIsLogin(true)
        }
    }


    return (
        <>
            {isLogin ?
                <AppRouter/> : (
             
                    <><Routes>
                        <Route path='/registro' element={<Register/>} />
                    </Routes>
                    <div className='login'>
                            <div className='shadow-none p-3 mb-5 bg-light rounded'>
                                <div className='mb-3 '>
                                    <label className='form-label'>User</label>
                                    <input type="text" className='form-control' placeholder='User' onChange={e => setUser(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Password</label>
                                    <input placeholder='Password' type="password" className='form-control' onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    {/* <a href="">Sign up</a> */}
                                    <Link to="/registro">Sign up </Link>
                                </div>
                                <button type='button' className='btn btn-primary' onClick={() => {
                                    handleLogin();



                                    //   jsCookie.get('token') ? (<AppRouter/>) : (<Login/>) 
                                } }>Login</button>
                            </div>
                        </div></>
                )}

        </>
    );
}

export default Login;