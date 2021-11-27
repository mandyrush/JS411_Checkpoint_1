import React from 'react';
import { useState } from "react";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
    const [soundQuality, setSoundQuality] = useState('normal');

    const handleChange = (event) => {
        setSoundQuality(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={soundQuality}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={'low'}>Low</MenuItem>
                    <MenuItem value={'normal'}>Normal</MenuItem>
                    <MenuItem value={'high'}>High</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}