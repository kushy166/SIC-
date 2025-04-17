import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
      <Stack spacing={2} direction="row">
        <Button variant="text">Click Me!</Button>
        <Button variant="contained">Delete</Button>
        <Button variant ="outlined">Save</Button>
      </Stack>
    );
  }
