import React from 'react';
import axios from 'axios';
import '../assets/css/styleLogin.css';

const Login = () =>{
    return(
        <div class = 'login'>
            <form action="" class = 'shadow-none p-3 mb-5 bg-light rounded'>
                <div class = 'mb-3 '>
                        <label class = 'form-label'>User</label>
                        <input type="text" class = 'form-control' />
                </div>
                <div class = 'mb-3'>
                        <label class = 'form-label'>Password</label>
                        <input type="password" class = 'form-control' />
                </div>
                <div class = 'mb-3'>
                        <a href="">Sign up</a>
                </div>
                <button type="submit" class = 'btn btn-primary'>Login</button>
            </form>
       </div> 
    );
}

export default Login;