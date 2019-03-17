import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import '../website-styles.scss';

import { Logo, MainNavigation, NewUserButtons, AccountInformation, HeaderWrapper } from '../header.scmp';
import auth from '../../../services/AuthService';
import HoverPopover from './HoverPopover';
import { navigate } from '@reach/router';

function Header() {
  return (
    <HeaderWrapper>
      <Logo toLeft />
      <MainNavigation>
        <li>Resume's</li>
        <li>CV's</li>
        <li>Cover Letters</li>
        <li>Career Blog</li>
        <li>Pricing</li>
      </MainNavigation>
      {!auth.isLogin() ? (
        <AccountInformation>
          <button>My Documents</button>
          <HoverPopover />
        </AccountInformation>
      ) : (
        <NewUserButtons>
          <Button
            onClick={() => {
              auth.login();
              navigate('/editor');
            }}
          >
            Sign in
          </Button>
          <Button>Create Account</Button>
        </NewUserButtons>
      )}
    </HeaderWrapper>
  );
}

export default Header;
