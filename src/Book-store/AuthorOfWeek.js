import React, { Component } from "react";

export default class AuthorOfWeek extends Component {

    constructor() {
        super();

        this.state = {
            authorList: [
                {
                    authorName: 'Toni Stark',
                    profileImage: 'assets/images/toni.png'
                },
                {
                    authorName: 'Tom Cruse',
                    profileImage: 'assets/images/tom.png'
                },
                {
                    authorName: 'Caption America',
                    profileImage: 'assets/images/caption.png'
                },
                {
                    authorName: 'Thor',
                    profileImage: 'assets/images/thor.png'
                },
                {
                    authorName: 'Hulk',
                    profileImage: 'assets/images/hulk.png'
                },
                {
                    authorName: 'Wonder Woman',
                    profileImage: 'assets/images/wonderwoman.png'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-xl text-slate-600 mb-[20px] h-[50px] flex items-center">Author of the week</h1>
                {
                    this.state.authorList.map((author, index) => (
                        <div className="mb-4 flex items-center" key={index}>
                            <img src={author.profileImage} alt="profile" className="rounded-full drop-shadow-md max-w-[30px] max-h-[30px]" />
                            <span className="ml-[15px] text-slate-500 text-sm font-semibold">{author.authorName}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}