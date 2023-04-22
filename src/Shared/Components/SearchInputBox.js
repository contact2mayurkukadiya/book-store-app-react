import React, { useState } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const useStyles = makeStyles({
    input: {
        fontSize: '12px !important',
        padding: '0px !important',
        color: "slateGray !important",
        maxWidth: '100px !important',
    },
});

export default function SearchInputBox({ onChange }) {
    const classes = useStyles();

    const [searchQuery, setSearchQuery] = useState('')
    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleSearchInputChange = function (event) {
        setSearchQuery(event.target.value);
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        onChange && onChange(event.target.value);
    }

    const handleClearSearch = function () {
        setSearchQuery('');
        setShowClearIcon("none");
        onChange && onChange('');
    }

    return (
        <>
            <FormControl>
                <TextField
                    size="small"
                    placeholder="Search Book"
                    variant="standard"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    InputProps={{
                        classes: { input: classes.input },
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon sx={{ fontSize: '20px', color: "slateGray" }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                style={{ display: showClearIcon, cursor: 'pointer' }}
                                onClick={handleClearSearch}
                            >
                                <CloseRoundedIcon sx={{ fontSize: '18px', color: "slateGray" }} />
                            </InputAdornment>
                        )
                    }}
                />
            </FormControl>
        </>
    )
}