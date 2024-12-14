import React, { useState } from "react";
import SearchIcon from "./assets/search.svg";
import UserIcon from "./assets/user.svg";
import AppetizerImg from "./assets/appetizer.webp";
import MainCourse from "./assets/main-course.jpeg";
import FastFoodImg from "./assets/fastfood.jpeg";
import SaladImg from "./assets/salad.jpeg";
import DrinkImg from "./assets/drinks.webp";
import DessertImg from "./assets/desserts.webp";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const UserPage = () => {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    function handleSearchSubmit(e) {
        e.preventDefault();
        const text = document.querySelector("#userpage-search-input").value;
        if (text) {
            console.log(text);
            // fetch the data of the food according to the text and redirect it to that page containing that types of food.
        }
    }
    function handleClickToSearch(e) {
        const text = e.target.innerText || e.target.alt; //Will give the text according to our requirement
        console.log(text);
        // fetch the data of the food according to the text and reedirect it to that page containing that types of food.
    }
    console.log("Complete page re-rendered");
    return (
        <div className="w-full h-[100vh] flex flex-col gap-8">
            <div id="user-head-div" className="flex flex-col gap-8">
                <Header />
                <form
                    onSubmit={handleSearchSubmit}
                    className="flex h-8 gap-2 items-center px-4"
                >
                    <button type="submit" className="h-full">
                        <img src={SearchIcon} alt="" className="h-full" />
                    </button>
                    <label className="text-[#ffd7a7]">|</label>
                    <input
                        type="text"
                        id="userpage-search-input"
                        placeholder="What would you like to eat?"
                        className="flex-1 bg-transparent outline-none h-8"
                    />
                </form>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold px-4">Choose Category</p>
                <div className="flex w-full justify-evenly">
                    <div
                        className="user-food-category-cont flex flex-col w-[12%] items-center gap-2"
                        onClick={handleClickToSearch}
                    >
                        <img
                            src={MainCourse}
                            alt="Main"
                            className="w-[100%] aspect-square rounded-[50%]"
                        />
                        <p>Main</p>
                    </div>
                    <div
                        className="user-food-category-cont flex flex-col w-[12%] items-center gap-2"
                        onClick={handleClickToSearch}
                    >
                        <img
                            src={AppetizerImg}
                            alt="Appetizer"
                            className="w-[100%] aspect-square rounded-[50%]"
                        />
                        <p>Appetizer</p>
                    </div>
                    <div
                        className="user-food-category-cont flex flex-col w-[12%] items-center gap-2"
                        onClick={handleClickToSearch}
                    >
                        <img
                            src={DrinkImg}
                            alt="Drinks"
                            className="w-[100%] aspect-square rounded-[50%]"
                        />

                        <p>Drinks</p>
                    </div>
                    <div
                        className="user-food-category-cont flex flex-col w-[12%] items-center gap-2"
                        onClick={handleClickToSearch}
                    >
                        <img
                            src={DessertImg}
                            alt="Desserts"
                            className="w-[100%] aspect-square rounded-[50%]"
                        />
                        <p>Desserts</p>
                    </div>
                    <div
                        className="user-food-category-cont flex flex-col w-[12%] items-center gap-2"
                        onClick={handleClickToSearch}
                    >
                        <img
                            src={FastFoodImg}
                            alt="Fast Food"
                            className="w-[100%] aspect-square rounded-[50%]"
                        />
                        <p>Fast Food</p>
                    </div>
                    <div
                        className="user-food-category-cont flex flex-col w-[12%] items-center gap-2"
                        onClick={handleClickToSearch}
                    >
                        <img
                            src={SaladImg}
                            alt="Salad"
                            className="w-[100%] aspect-square rounded-[50%]"
                        />
                        <p>Salad</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 p-4">
                <p className="text-xl font-semibold">Explore Other options</p>
                <ul className="flex flex-wrap gap-6 gap-y-1 list-disc px-2">
                    <li onClick={handleClickToSearch}>Beverages</li>
                    <li onClick={handleClickToSearch}>Biryani</li>
                    <li onClick={handleClickToSearch}>Burger</li>
                    <li onClick={handleClickToSearch}>Cafe</li>
                    <li onClick={handleClickToSearch}>Chinese</li>
                    <li onClick={handleClickToSearch}>Coffee</li>
                    <li onClick={handleClickToSearch}>Desserts</li>
                    <li onClick={handleClickToSearch}>Ice Cream</li>
                    <li onClick={handleClickToSearch}>Italian</li>
                    <li onClick={handleClickToSearch}>Momos</li>
                    <li onClick={handleClickToSearch}>Mughlai</li>
                    <li onClick={handleClickToSearch}>North Indian</li>
                    <li onClick={handleClickToSearch}>Pasta</li>
                    <li onClick={handleClickToSearch}>Pizza</li>
                    <li onClick={handleClickToSearch}>Rolls</li>
                    <li onClick={handleClickToSearch}>Sandwich</li>
                    <li onClick={handleClickToSearch}>Shake</li>
                    <li onClick={handleClickToSearch}>South Indian</li>
                    <li onClick={handleClickToSearch}>Street</li>
                    <li onClick={handleClickToSearch}>Tea</li>
                </ul>
            </div>
        </div>
    );
};

export default UserPage;
