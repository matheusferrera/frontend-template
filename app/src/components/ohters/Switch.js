import React, { useState } from 'react';

import { Box, FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Componente Switch
const Switch = ({ labelLeft, labelRight }) => {
    const theme = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(prevChecked => !prevChecked);
    };

    return (
        <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
            <FormControlLabel
                control={<Box component="span">{labelLeft}</Box>}
                sx={{ margin: 0 }}
            />
            <MuiSwitch
                checked={isChecked}
                onChange={handleChange}
                sx={{
                    width: 72,
                    height: 34,
                    '& .MuiSwitch-switchBase': {
                        padding: 1,
                        '&.Mui-checked': {
                            transform: 'translateX(26px)',
                            color: theme.palette.primary.main,
                            '& + .MuiSwitch-track': {
                                backgroundColor: theme.palette.primary.main,
                            },
                        },
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 34,
                        backgroundColor: '#ccc',
                        opacity: 1,
                        transition: 'background-color 0.3s',
                    },
                    '& .MuiSwitch-thumb': {
                        backgroundColor: 'white',
                    },
                }}
            />
            <FormControlLabel
                control={<Box component="span">{labelRight}</Box>}
                sx={{ margin: 0 }}
            />
        </Box>
    );
};

Switch.propTypes = {
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string,
};

export default Switch;
