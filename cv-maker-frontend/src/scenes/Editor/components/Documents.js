import React from 'react';
import styled from 'styled-components';

const resumes = [
  {
    src:
      'https://images.ctfassets.net/ii3k8n6p1keg/4PzL61z6408oQCcmOs8We8/edd7aaf8f1581779202fc3fd73382d85/china-cv.png',
  },
  {
    src: 'https://craft-cv.com/image/en/218/cv-example-pandora.png',
  },
  {
    src: 'https://www.modelos-de-curriculum.com/wp-content/uploads/2018/03/21-curriculum-vitae-academico-morado-p1.jpg',
  },
];

const Document = styled.img`
width: 150px;
height: 230px;
border: 1px solid gray;
${props => {
  if (props.toLeft) {
    return `margin-right: auto`;
  }
}}
  background: ${props => `src(${props.src}) center no-repeat`} ;
  background-size: cover;
`;

const DocumentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
`;
const documents = resumes.map(doc => {
  return <Document key={doc.src} src={doc.src} />;
});
export default function Documents() {
  return <DocumentsWrapper> {documents}</DocumentsWrapper>;
}
