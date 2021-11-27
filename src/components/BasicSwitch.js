import React from "react";

import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Online Mode' } };

export default function BasicSwitch() {
  return (
    <div>
      <Switch {...label} />
    </div>
  );
}