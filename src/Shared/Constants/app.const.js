import { createTheme } from "@mui/material";
const colors = require('tailwindcss/colors')


export const UIConst = Object.freeze({
    HeaderHeight: '60px'
})

const palette = createTheme().palette
export const defaultTheme = createTheme({
    palette: {
        ...palette,
        customPalette: colors
    }
})