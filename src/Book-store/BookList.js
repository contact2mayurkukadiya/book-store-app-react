import React, { Component } from "react";
import Box from '@mui/material/Box';
import { StyledTab, StyledTabPanel, StyledTabs } from "../Shared/Components/customized-tab/CustomTabs";
import { DisplayBookDetail } from "../Shared/Components/DisplayBookDetail";
import UserStackComponent from "../Shared/Components/UserStack";
import { UIConst } from "../Shared/Constants/app.const";

export default class BookListComponent extends Component {

    constructor() {
        super();

        this.state = {
            activeTab: 0,
            genreList: [
                {
                    id: 1,
                    type: 'Business',
                    bookList: [
                        {
                            id: 3,
                            title: "SpiderMan- HomeComming",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '98,654',
                            description: "SpiderMan Homecomming is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/3.jpeg",
                            likedBy: [
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
                            ]
                        },
                        {
                            id: 4,
                            title: "SpiderMan- Far From Home",
                            author: "Tom Cruse",
                            rating: 2,
                            voters: '8,89,567',
                            description: "SpiderMan Far From Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/4.jpeg",
                            likedBy: [
                                {
                                    authorName: 'Caption America',
                                    profileImage: 'assets/images/caption.png'
                                },
                                {
                                    authorName: 'Thor',
                                    profileImage: 'assets/images/thor.png'
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "SpiderMan- No Way Home",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '43,467',
                            description: "SpiderMan No Way Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/5.jpeg",
                            likedBy: [
                                {
                                    authorName: 'Toni Stark',
                                    profileImage: 'assets/images/toni.png'
                                }
                            ]
                        },
                    ]
                },
                {
                    id: 2,
                    type: 'Science',
                    bookList: [
                        {
                            id: 6,
                            title: "Ironman 1",
                            author: "Toni Stark",
                            rating: 5,
                            voters: '76,342',
                            description: "IronMan 1 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/6.jpeg",
                            likedBy: []
                        },
                        {
                            id: 7,
                            title: "Ironman 2",
                            author: "Toni Stark",
                            rating: 4,
                            voters: '34,654',
                            description: "IronMan 2 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/7.jpg",
                            likedBy: []
                        },
                        {
                            id: 3,
                            title: "SpiderMan- HomeComming",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '98,654',
                            description: "SpiderMan Homecomming is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/3.jpeg",
                            likedBy: []
                        },
                        {
                            id: 4,
                            title: "SpiderMan- Far From Home",
                            author: "Tom Cruse",
                            rating: 2,
                            voters: '8,89,567',
                            description: "SpiderMan Far From Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/4.jpeg",
                            likedBy: []
                        },
                        {
                            id: 5,
                            title: "SpiderMan- No Way Home",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '43,467',
                            description: "SpiderMan No Way Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/5.jpeg",
                            likedBy: []
                        }
                    ]
                },
                {
                    id: 3,
                    type: 'Fiction',
                    bookList: [
                        {
                            id: 5,
                            title: "SpiderMan- No Way Home",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '43,467',
                            description: "SpiderMan No Way Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/5.jpeg",
                            likedBy: []
                        },
                        {
                            id: 6,
                            title: "Ironman 1",
                            author: "Toni Stark",
                            rating: 5,
                            voters: '76,342',
                            description: "IronMan 1 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/6.jpeg",
                            likedBy: []
                        },
                        {
                            id: 7,
                            title: "Ironman 2",
                            author: "Toni Stark",
                            rating: 4,
                            voters: '34,654',
                            description: "IronMan 2 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/7.jpg",
                            likedBy: []
                        }
                    ]
                },
                {
                    id: 4,
                    type: 'Philosophy',
                    bookList: [
                        {
                            id: 1,
                            title: "Age of Ultron",
                            author: "Toni Stark",
                            rating: 3,
                            voters: '1235',
                            description: "Age of Ultron is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/1.jpeg",
                            likedBy: []
                        },
                        {
                            id: 2,
                            title: "Avenger End Game",
                            author: "Tom Cruse",
                            rating: 5,
                            voters: '6754',
                            description: "Avenger End Game is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/2.jpeg",
                            likedBy: []
                        },
                    ]
                },
                {
                    id: 5,
                    type: 'Biography',
                    bookList: [
                        {
                            id: 1,
                            title: "Age of Ultron",
                            author: "Toni Stark",
                            rating: 3,
                            voters: '1235',
                            description: "Age of Ultron is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/1.jpeg",
                            likedBy: []
                        },
                        {
                            id: 2,
                            title: "Avenger End Game",
                            author: "Tom Cruse",
                            rating: 5,
                            voters: '6754',
                            description: "Avenger End Game is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/2.jpeg",
                            likedBy: []
                        },
                        {
                            id: 3,
                            title: "SpiderMan- HomeComming",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '98,654',
                            description: "SpiderMan Homecomming is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/3.jpeg",
                            likedBy: []
                        },
                        {
                            id: 4,
                            title: "SpiderMan- Far From Home",
                            author: "Tom Cruse",
                            rating: 2,
                            voters: '8,89,567',
                            description: "SpiderMan Far From Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/4.jpeg",
                            likedBy: []
                        },
                        {
                            id: 5,
                            title: "SpiderMan- No Way Home",
                            author: "Tom Cruse",
                            rating: 4,
                            voters: '43,467',
                            description: "SpiderMan No Way Home is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/5.jpeg",
                            likedBy: []
                        },
                        {
                            id: 6,
                            title: "Ironman 1",
                            author: "Toni Stark",
                            rating: 5,
                            voters: '76,342',
                            description: "IronMan 1 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/6.jpeg",
                            likedBy: []
                        },
                        {
                            id: 7,
                            title: "Ironman 2",
                            author: "Toni Stark",
                            rating: 4,
                            voters: '34,654',
                            description: "IronMan 2 part is the best book for avenger get togather in which all avengers get togather and take some snacks.",
                            image: "./assets/images/7.jpg",
                            likedBy: []
                        }
                    ]
                },
                {
                    id: 6,
                    type: 'Novel',
                    bookList: []
                },
                {
                    id: 7,
                    type: 'Fantacy',
                    bookList: []
                },
                {
                    id: 8,
                    type: 'Music',
                    bookList: []
                },
                {
                    id: 9,
                    type: 'Instrumental',
                    bookList: []
                },
                {
                    id: 10,
                    type: 'Poetry',
                    bookList: []
                }
            ]
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(event, newValue) {
        this.setState({ activeTab: newValue })
    }

    render() {
        return (
            <>
                <div>
                    <div className="flex items-center">
                        <Box>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: "sticky", top: UIConst.HeaderHeight, backgroundColor: '#f3f5f7', zIndex: 1 }}>
                                <h1 className="text-xl text-slate-600 whitespace-nowrap">Popular by Genre</h1>
                                <Box sx={{ width: 'calc(100% - 200px)', maxWidth: { xs: 320, sm: 480, md: 600 } }}>
                                    <StyledTabs
                                        variant="scrollable"
                                        scrollButtons="auto"
                                        value={this.state.activeTab}
                                        onChange={this.handleTabChange}
                                    >
                                        {
                                            this.state.genreList.map((genre, index) => (
                                                <StyledTab key={index} value={index} label={genre.type} />
                                            ))
                                        }
                                    </StyledTabs>
                                </Box>
                            </Box>

                            {
                                this.state.genreList.map((genre, index) => (
                                    <StyledTabPanel key={index} value={index} label={genre.type} selectedTab={this.state.activeTab} >
                                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[50px]">
                                            {
                                                genre.bookList.map((book, index) => (
                                                    <div key={index} className="bg-white shrink-0 shadow-sm rounded-md mt-[50px]">
                                                        <div className="flex p-[20px]" >
                                                            <div className="flex-1/3 w-[130px] shrink-0 relative">
                                                                <img src={book.image} alt='Book Image' className="absolute max-w-full shadow-lg bottom-0" />
                                                            </div>
                                                            <div className="flex-2/3">
                                                                <DisplayBookDetail slide={book} />
                                                            </div>
                                                        </div>
                                                        {
                                                            book.likedBy?.length > 0 && (
                                                                <div className="border-t py-[10px] px-[20px]">
                                                                    <UserStackComponent data={book.likedBy} />
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </StyledTabPanel>
                                ))
                            }
                        </Box>
                    </div>
                </div>
            </>
        )
    }
}