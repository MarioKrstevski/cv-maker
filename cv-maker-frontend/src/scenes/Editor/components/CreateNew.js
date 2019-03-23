import React from 'react';
import { CreateNewWrapper } from '../editor.scmp';
import { Button } from '@material-ui/core';

export default function CreateNew() {
  return (
    <CreateNewWrapper>
      <div>
        <Button variant="outlined">New Resume</Button>
        <Button variant="outlined">New CV</Button>
      </div>
    </CreateNewWrapper>
  );
}
