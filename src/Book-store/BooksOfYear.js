import React, { Component } from "react";
export default class BooksOfYearComponent extends Component {

    constructor() {
        super();

        this.state = {
            bookList: [
                {
                    id: 3,
                    title: "SpiderMan- HomeComming",
                    author: "Tom Cruse",
                    rating: 4,
                    voters: '98,654',
                    description: "SpiderMan Homecomming is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                    image: "./assets/images/3.jpeg"
                },
                {
                    id: 4,
                    title: "SpiderMan- Far From Home",
                    author: "Tom Cruse",
                    rating: 2,
                    voters: '8,89,567',
                    description: "SpiderMan Far From Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                    image: "./assets/images/4.jpeg"
                },
                {
                    id: 5,
                    title: "SpiderMan- No Way Home",
                    author: "Tom Cruse",
                    rating: 4,
                    voters: '43,467',
                    description: "SpiderMan No Way Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                    image: "./assets/images/5.jpeg"
                },
                {
                    id: 6,
                    title: "Ironman 1",
                    author: "Toni Stark",
                    rating: 5,
                    voters: '76,342',
                    description: "IronMan 1 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                    image: "./assets/images/6.jpeg"
                },
                {
                    id: 7,
                    title: "Ironman 2",
                    author: "Toni Stark",
                    rating: 4,
                    voters: '34,654',
                    description: "IronMan 2 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                    image: "./assets/images/7.jpg"
                }
            ]
        }
    }

    render() {
        return (
            <>
                <div>
                    <h1 className="text-xl text-slate-600 mb-[20px]">Books of the year</h1>
                    {
                        this.state.bookList.map((book, index) => (
                            <div className="mb-8 flex items-center" key={index}>
                                <img src={book.image} alt="book image" className="drop-shadow-md max-w-[100px] max-h-[60px]" style={{ pointerEvents: 'none' }} />
                                <div className="ml-[15px]">
                                    <p className=" text-slate-500 text-sm font-semibold mb-[5px]">{book.title}</p>
                                    <p className=" text-slate-500 text-sm font-light">by {book.author}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}