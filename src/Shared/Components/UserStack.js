import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

export default function UserStackComponent({ data }) {
    return (
        data?.length > 0 && (
            <div className="flex items-center">
                <div className="flex items-center">
                    {
                        data.slice(0, 3).map((item, index) => (
                            <Avatar key={index} style={{ width: 20, height: 20, marginRight: 5 }} alt={item.authorName} src={item.profileImage} />
                        ))
                    }
                </div>


                {data?.length == 1 && (
                    <span className="text-xs text-slate-500">
                        <span className="font-semibold">{data[0].authorName}</span> like this
                    </span>
                )}

                {data?.length == 2 && (
                    <span className="text-xs text-slate-500">
                        <span className="font-semibold">{data[0].authorName}</span> and <span className="font-semibold">{data[1].authorName}</span> like this
                    </span>
                )}

                {data?.length === 3 && (
                    <span className="text-xs text-slate-500">
                        <span className="font-semibold">{data[0].authorName}</span>, <span className="font-semibold">{data[1].authorName}</span> and <span className="font-semibold">{data[2].authorName}</span> like this
                    </span>
                )}

                {data?.length > 3 && (
                    <span className="text-xs text-slate-500">
                        <span className="font-semibold">{data[0].authorName}</span> and <span className="font-semibold">{data.length - 1} other friends</span> like this
                    </span>
                )}

            </div>
        )
    )
}