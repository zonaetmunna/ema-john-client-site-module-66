import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {

     const { signInUsingGoogle } = useAuth();
     const location = useLocation();
     const history = useHistory();

     const redirect_url = location.state?.from || './shop';
     const handleGoogleSign = () => {
          signInUsingGoogle()
               .then(result => {

                    history.push(redirect_url)

               })
     }

     return (
          <div className="login-form">
               <div>
                    <h2>login</h2>
                    <form >
                         <input type="email" name="" id="" placeholder="your email" />
                         <br />
                         <input type="password" name="" id="" placeholder="your password" />
                         <br />
                         <input type="submit" value="Submit" />
                    </form>
                    <p>new to ema-john<Link to="/register">Create-account</Link> </p>
                    <div>--------or-------</div>
                    <button onClick={handleGoogleSign} className="btn-regular">Google Sign In</button>
               </div>
          </div>
     );
};

export default Login;