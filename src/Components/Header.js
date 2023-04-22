import React, { useState } from "react";
import { UIConst } from "../Shared/Constants/app.const";
import CategoryListDropdown from "../Shared/Components/category-list-dropdown/CategoryListDropdown";
import { Button, Container, Divider } from "@mui/material";
import SearchInputBox from "../Shared/Components/SearchInputBox";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    textSizeMedium: {
        textTransform: "capitalize !important",
        color: "slategray !important"
    }
})


export default function HeaderComponent(props) {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState('')



    const [categories, setCategories] = useState([
        { label: "Business", value: 1 },
        { label: "Science", value: 2 },
        { label: "Fiction", value: 3 },
        { label: "Non-fiction", value: 4 },
        { label: "Philosophy", value: 5 },
        { label: "Biography", value: 6 },
        { label: "Reference books", value: 7 },
        { label: "Textbooks", value: 8 },
        { label: "Poetry", value: 9 },
        { label: "Cookbooks", value: 10 },
    ]);

    const handleDropdownChange = function (value) {
        console.log(value);
        setSelectedItem(value);
    }

    const handleSearchInputChange = function (value) {
        console.log('Search Value', value);
    }

    return (
        <>
            <Container >
                <div style={{ height: `${UIConst.HeaderHeight}` }} className={`flex items-center justify-between`}>
                    <div className="flex items-center flex-1 shrink-0">
                        <CategoryListDropdown width={125} placeholder="Browse Category" value={selectedItem} items={categories} bindLabel={'label'} onChange={handleDropdownChange} />
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <div className="ml-[10px] flex items-center">
                            <SearchInputBox onChange={handleSearchInputChange} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <h1 className="text-md text-slate-500 font-light">Read<span className="font-semibold">Books</span></h1>
                    </div>
                    <div className="flex items-center justify-end flex-1">
                        <img src="assets/images/profile.png" alt="profile" className="rounded w-[30px] h-[30px] text-[10px] mr-[15px]" />
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Button classes={{ textSizeMedium: classes.textSizeMedium }} variant="text" className="!ml-[10px] text-slate-400" startIcon={<MenuIcon />}>
                            Menu
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    )
}