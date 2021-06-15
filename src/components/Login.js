import React from 'react';
import './styles/Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/180px-Facebook_f_Logo_%28with_gradient%29.svg.png'
          alt=''
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt=''
        />
      </div>
      <button type='submit' onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
