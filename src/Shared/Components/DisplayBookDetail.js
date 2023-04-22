import React from "react";
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export function DisplayBookDetail({ textColorClass = 'text-slate-500', slide, starFillColor, emptyFillColor = 'rgba(0,0,0,0.4)' }) {
    return (
        <>
            <div className={`pl-[20px] ${textColorClass}`}>
                <h1 className="truncate overflow-hidden font-bold select-none">{slide.title}</h1>
                <p className="truncate overflow-hidden text-[10px] mb-2 font-light select-none">by {slide.author}</p>
                <div className="mb-5 flex items-center flex-wrap">
                    <Rating
                        name="read-only"
                        size="small"
                        icon={<StarIcon fontSize="inherit" sx={starFillColor ? { color: starFillColor } : {}} />}
                        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: emptyFillColor }} />}
                        value={slide.rating}
                        readOnly />

                    <span className="text-[10px] ml-[10px] whitespace-nowrap select-none">{slide.voters} voters</span>
                </div>
                <p className="text-xs line-clamp-3 select-none">{slide.description}</p>
            </div>
        </>
    )
}