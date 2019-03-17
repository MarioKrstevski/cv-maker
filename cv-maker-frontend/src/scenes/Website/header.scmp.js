import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  max-height: 56px;
  height: 56px;
  padding: 0 15px !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    border: 1px solid greenyellow;
  }
`;

export const Logo = styled.img`
  display: flex;
  margin-right: auto;
  height: 50px;
  width: 50px;
  background: url('https://image.shutterstock.com/image-vector/letter-cv-logo-colorful-geometric-260nw-1089897095.jpg')
    no-repeat center;
  background-size: cover;
`;

export const MainNavigation = styled.nav`
  li {
    display: inline;
  }
`;

export const NewUserButtons = styled.div``;

export const AccountInformation = styled.div`
  display: flex;
  > * {
    display: inline !important;
  }
`;
