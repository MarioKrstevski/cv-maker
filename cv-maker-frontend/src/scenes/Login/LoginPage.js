import './home-styles.scss';
import React, { useContext } from 'react';
import auth from '../../services/AuthService';
import { navigate } from '@reach/router';

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
