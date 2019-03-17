import React, { useState } from 'react';
import { EditorMenuWrapper, SideMenu } from '../editor.scmp';
import { Logo } from '../../Website/header.scmp';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Menu from '@material-ui/icons/Menu';

export default function EditorMenu() {
  const [alignment, setAlignment] = useState('resumes');
  const handleAlignment = (event, alignment) => setAlignment(alignment);
  return (
    <EditorMenuWrapper>
      <Logo />
      <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
        <ToggleButton value="resumes">Resumes</ToggleButton>
        <ToggleButton value="cvs">CVs</ToggleButton>
      </ToggleButtonGroup>

      <SideMenu>
        <Menu />
      </SideMenu>
    </EditorMenuWrapper>
  );
}
