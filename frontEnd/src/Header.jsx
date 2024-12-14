import React, { useState } from "react";
import UserIcon from "./assets/user.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import axios from "axios";

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const user = document.cookie.split("user=")[1];
    const navigate = useNavigate();

    const nowInMilliseconds = Date.now(); // Get milliseconds since the epoch
    const currentDate = new Date(nowInMilliseconds); // Create a Date object from the milliseconds
    const currentHour = currentDate.getHours(); // Extract the hour (0-23)
    console.log("Current Hour:", currentHour);
    console.log("Only Header is re-rendered");

    async function handleLogOutUser(e) {
        e.preventDefault();
        const res = await axios.post("http://localhost:3030/user/logout", {}, {
            withCredentials: true,
        });
        if (res.status === 200) {
            console.log(res);
            window.location.reload();
        }
    }

    return (
        <div className="flex flex-col gap-0 p-4 justify-between">
            <div className="flex justify-between h-[36px] items-center">
                <h3 className="text-3xl font-semibold">Hello {user === "CUSTOMER" ? "User" : "Restro"}! 👋</h3>
                <div className="h-full flex flex-col items-end relative">
                    <img
                        src={UserIcon}
                        alt=""
                        className="h-full aspect-square rounded-[50%] bg-white cursor-pointer"
                        onClick={() => setShowOptions(!showOptions)}
                    />
                    {showOptions && <div className="flex flex-col p-4 rounded-lg shadow-red-300 shadow-lg bg-white z-[1] gap-2 border-2 border-red-500 fixed top-14">
                        <button className="border-2 border-black p-1 rounded-md">Get All Foods</button>
                        <form onSubmit={handleLogOutUser} className="w-full">
                            <button type="submit" className="border-2 border-black p-1 rounded-md w-full">Log out</button>
                        </form>
                    </div>}
                </div>
            </div>
            {user === "CUSTOMER" && <p>It's {currentHour <= 11 ? "Breakfast" : currentHour <= 15 ? "Lunch" : currentHour <= 20 ? "Snacks" : "Dinner"} time!</p>}
        </div>
    )
};

export default Header;
