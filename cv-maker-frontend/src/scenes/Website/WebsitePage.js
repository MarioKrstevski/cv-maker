import React, { Fragment } from 'react';
import styled from 'styled-components';
import './website-styles.scss';
import { Header, CallToAction, Video, Examples, Features, Testimonials, Partners, Footer } from './components';

const WebsiteContainer = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  > * {
    border: 0.05rem solid black;
    padding: 0 30px;
  }
`;

function WebsitePage() {
  return (
    <WebsiteContainer>
      <Header />
      <CallToAction />
      <Video />
      <Examples />
      <Features />
      <Testimonials />
      <Partners />
      <Footer />
    </WebsiteContainer>
  );
}
export default WebsitePage;
