import React from 'react';
import styled from 'styled-components';
import { EditorMenu, CreateNew, Documents } from './components';

const EditorPageWrapper = styled.div`
  border: 1px solid darkgreen;
  box-sizing: border-box;
  > * {
    border: 0.05rem solid darkseagreen;
    padding: 0 30px;
  }
`;

function EditorPage() {
  return (
    <EditorPageWrapper>
      <EditorMenu />
      <CreateNew />
      <Documents />
    </EditorPageWrapper>
  );
}
export default EditorPage;
