import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';


export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: '4px'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        height: '4px',
        borderRadius: '5px',
        backgroundColor: '#635ee7',
        boxShadow: '0px 0px 15px #635ee7'
    },
});


export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme, color }) => {
        return ({
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(14),
            marginRight: theme.spacing(1),
            ...(color ? { color: color } : { color: theme.palette?.customPalette?.slate['500'] || theme?.palette?.primary?.dark }),
            '&.Mui-selected': {
                ...(color ? { color: color } : { color: theme.palette?.customPalette?.slate['500'] || theme?.palette?.primary?.dark }),
                fontWeight: '600'
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        })
    },
);

const TabPanel = function (props) {
    const { children, value, selectedTab, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== selectedTab}
            id={`simple-tabpanel-${selectedTab}`}
            aria-labelledby={`simple-tab-${selectedTab}`}
            {...other}
        >
            {value === selectedTab && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    selectedTab: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export const StyledTabPanel = TabPanel;