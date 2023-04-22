import React from "react";
import HeaderComponent from "../Components/Header";
import BookStoreSliderComponent from "./BookStoreSlider";
import AuthorOfWeekComponent from "./AuthorOfWeek";
import BooksOfYearComponent from "./BooksOfYear";
import BookListComponent from "./BookList";
import { Container } from "@mui/material";

export default function BookStoreLayoutComponent(props) {
    const slides = [
        {
            id: 1,
            title: "Age of Ultron",
            author: "Toni Stark",
            rating: 3,
            voters: '1235',
            description: "Age of Ultron is the best book for avenger get togather in which all avengers get togather and take some snacks.",
            image: "./assets/images/1.jpeg"
        },
        {
            id: 2,
            title: "Avenger End Game",
            author: "Tom Cruse",
            rating: 5,
            voters: '6754',
            description: "Avenger End Game is the best book for avenger get togather in which all avengers get togather and take some snacks.",
            image: "./assets/images/2.jpeg"
        },
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

    return (
        <div className="bg-[#F3F5F7]">
            <div className="sticky z-[1001] top-0 bg-inherit shadow-sm">
                <HeaderComponent></HeaderComponent>
            </div>
            <div className="mb-16">
                <BookStoreSliderComponent slides={slides}></BookStoreSliderComponent>
            </div>
            <Container>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="hidden lg:w-1/5 xl:w-1/5 lg:block xl:block">
                        <div className="mb-12">
                            <AuthorOfWeekComponent></AuthorOfWeekComponent>
                        </div>
                        <div>
                            <BooksOfYearComponent></BooksOfYearComponent>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/5">
                        <div className="">
                            <BookListComponent></BookListComponent>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}