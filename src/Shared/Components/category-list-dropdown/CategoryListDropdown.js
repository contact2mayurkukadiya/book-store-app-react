import { FormControl, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const useStyles = makeStyles((theme) => ({
    selectRoot: {
        color: 'slateGray',
        fontSize: '12px',
        backgroundColor: 'red',
        '&:focus': {
            backgroundColor: 'transparent',
        }
    },
    selectInput: {
        padding: '0px !important',
        '&:focus': {
            backgroundColor: 'transparent !important',
        }
    },
    renderValue: {
        color: 'slateGray',
        fontSize: '12px',
        fontWeight: '600'
    },
    selectIcon: {
        color: 'slateGray', // set the color as needed
        fontSize: '20px !important',
    }
}));

export default function CategoryListDropdown({
    value,
    items,
    placeholder,
    bindLabel = null,
    bindValue = null,
    onChange,
    width = 150
}) {

    const classes = useStyles();

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    function renderValue(selected) {
        return (
            selected ? <span className={classes.renderValue}> {bindValue && bindLabel ? selected : !bindValue && bindLabel ? selected[bindLabel] : selected} </span> : <span className={classes.renderValue}>{placeholder || 'Choose Option'}</span>
        );
    }

    const iconComponent = (props) => {
        return (
            <KeyboardArrowDownRoundedIcon {...props} className={classes.selectIcon} />
        );
    };


    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: width }} size="small">
                <Select
                    id="dropdown"
                    value={value}
                    onChange={handleChange}
                    displayEmpty={true}
                    disableUnderline={true}
                    classes={{ root: classes.selectRoot, select: classes.selectInput }}
                    renderValue={() => renderValue(value)}
                    IconComponent={iconComponent}
                >
                    {items.map((item, index) =>
                        <MenuItem key={index}
                            value={bindValue ? item[bindValue] : item}
                            sx={{ color: 'slateGray', fontSize: '12px' }}>
                            {bindLabel ? item[bindLabel] : item}
                        </MenuItem>
                    )}
                </Select>
            </FormControl >
        </>
    )
}