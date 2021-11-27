import React from "react";

import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Online Mode' } };

export default function BasicSwitch({
  state,
  handleChange
}) {
  return (
    <div>
      <Switch checked={state} onChange={() => handleChange(!state)} {...label} />
    </div>
  );
}