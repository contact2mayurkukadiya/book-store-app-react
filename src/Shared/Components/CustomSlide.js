import { Button, Rating } from "@mui/material"
import React from "react"
import { DisplayBookDetail } from "./DisplayBookDetail"

export function CustomSlide({ slide, bgColor }) {
    return (
        <>
            <div style={{ height: '300px' }}>
                <div style={{ height: '80%', backgroundImage: `${bgColor.gradient}` }} className="p-[20px]">
                    <div className="flex items-start h-full">
                        <div className="flex-1 w-2/5 h-[140%]">
                            <img src={slide.image} alt="Book Image" className="shadow-md max-h-full max-w-full m-auto" style={{ userDrag: 'none', pointerEvents: 'none' }} />
                        </div>
                        <div className="w-3/5">
                            <DisplayBookDetail textColorClass={'text-white'} slide={slide} emptyFillColor={'rgba(255,255,255,0.2)'} starFillColor={bgColor.bg} />
                            <div className="p-[20px]">
                                <Button variant="contained"
                                    sx={{
                                        borderRadius: '40px',
                                        fontSize: '12px',
                                        backgroundColor: 'white !important',
                                        color: bgColor.bg,
                                        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1) !important'
                                    }}>
                                    See The Book
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}