import './home-styles.scss';
import React from 'react';
import { navigate } from '@reach/router';
import auth from '../../services/AuthService';

function LoginPage(props) {
  const handleSubmit = event => {
    auth.login();
    navigate('/editor');
  };
  return (
    <div>
      I am a login page
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginPage;
