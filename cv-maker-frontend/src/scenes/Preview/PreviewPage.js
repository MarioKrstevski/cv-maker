import './preview-styles.scss';
import React from 'react';
import styled from 'styled-components';

const PersonalInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items:center;
  height: 160px;
  border: 1px solid purple;
  background-color: rgba(102,51,153, 0.2);
`;
const Introduction = styled.div`
  padding: 6px 10px;
  min-height: 86px;
  border: 1px solid green;
  background-color: rgba(0,255,0, 0.2);
`;
const DetailInformation = styled.div`
display:grid;
height:100%;
 
  border: 1px solid blue;
`;
const Education = styled.div`
  grid-area: education;
  border: 1px solid blue;
  background-color:blue;
`;
const WorkExperience = styled.div`
  grid-area: workExperience;
  border: 1px solid red;
  background-color: red;
`;
const SideInfo = styled.div`
  grid-area: sideInfo;
  border: 1px solid yellow;
  background-color: yellow;
`;
const Skills = styled.div``;
const Projects = styled.div``;
const SoftSkills = styled.div``;
const Languages = styled.div``;
const Interests = styled.div``;
const ProfilePhoto = styled.img`

  margin-top: 13px;
  border: 1px solid black;
  object-fit: cover;
  object-position:center;
  width:130px;
  height:130px;
    border-radius: 50%;
   
`;
const PreviewWrapper = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 6px;
  padding: 3px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 900px;
  height: 1200px;
  border: 1px solid black;

  & > div {
    box-sizing: border-box;
  }
`;
const ImgAndInfo = styled.div`
  display: flex;
  margin-left:14px;
`; 
const Links = styled.div`
margin-right: 14px;
text-align:right;
   & > *{
      font-weight:500;
      padding: 0;
      margin: 0;
   }
`;
const NameAndPosition = styled.div`
margin-top: 13px;
margin-left:2px;
display: inline-block;
border: 1px solid grey;
width: calc(100% - 170px);
height: 150px;
`;
const Name = styled.h1`
  margin-bottom: 5px;
`;
const Position = styled.div`
  font-size:19px;
`;

export default function PreviewPage() {
  return (
    <PreviewWrapper>
      <PersonalInfo> 
        <ImgAndInfo> 
        <div style={{width: 150, height: 157, display:'inline-block', border: '1px solid red'}}>
          <ProfilePhoto src="https://jamesgilberdphotography.weebly.com/uploads/1/3/6/5/13650410/emma-not-smiling-35x45_1_orig.jpg" />
        </div>
          <NameAndPosition>
            <Name> Suzanne Anotonie </Name>
            <Position> Hiring Manager </Position>
          </NameAndPosition>
        </ImgAndInfo>
        <Links> 
          <p> johndoe@gmail.com </p>
          <p> 070-445-556 </p>
          <p> Skopje, Macedonia </p>
          <p> linkedin.com/in/suzzane-antonie </p>
          <p> facebook.com/SuzzaneAnt </p>
        </Links>
      </PersonalInfo>
      <Introduction>
        A passionate, young and highly motivated developer who is focused on Front End technologies. 
        I'm always looking forward to take on a new project/opportunity where I can use and improve my skills. 
        I love to create, contribute and meet new people, therefore I tend to volunteer wherever I can around me. I аm looking for a challenging internship opportunity where i can improve even further.
       </Introduction>
      <DetailInformation>
        <Education />
        <WorkExperience />
        <SideInfo />
      </DetailInformation>
    </PreviewWrapper>
  );
}
