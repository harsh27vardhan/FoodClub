import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserPage from './UserPage';
import RestroHome from './RestroHome';

const HomePage = () => {
    const [city, setCity] = useState();
    const navigate = useNavigate();
    async function getUserCity() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lati = position.coords.latitude;
                    const longi = position.coords.longitude;
                    console.log(`Latitude: ${lati}, Longitude: ${longi}`);
                    try {
                        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lati}%2C${longi}&key=f7abc6f9ed5e46fc9b991f4a1c161750`);
                        const data = await response.json();

                        // Extract the city name from the response
                        const cityName = data.results[0]?.components?.city ||
                            data.results[0]?.components?.town ||
                            data.results[0]?.components?.village ||
                            'Unknown Location';

                        console.log('City:', cityName);
                        setCity(cityName); // Update the state to trigger re-render
                    }
                    catch {
                        console.log("Unable to fetch from the api", err);
                    }
                }, (error) => {
                    console.error("Navigator is not enabled in the Browser.");
                });
        }
        else {
            console.log("Geolocation is not supported...");
        }
    }
    useEffect(() => {
        getUserCity();
        fetchData();
    }, []);
    function handleSearchSubmit(e) {
        e.preventDefault();
        const searchQuery = document.getElementById('search-input').value;
        if (searchQuery === "" || searchQuery.trim() === "") return; //Prevents empty string queries
        fetchData(searchQuery);
    }
    async function fetchData(searchQuery) {
        //  redirect it to the page where there is fetched data and filter it.
        try {
            const response = await fetch("http://localhost:3030/food", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
            });
            console.log(response);
            if (response.status !== 200) {
                navigate("/login");
            }
        }
        catch (errors) {
            console.log("Error:", errors);
        }
    }
    // useEffect(() => {
    //     try {
    //         async ()=> {
    //             const response = await fetchData();
    //             console.log(response);
    //         }
    //     }
    //     catch (error) {
    //         console.log("Error:", error);
    //     }
    // }, []);

    // return (
    //     <div className='flex flex-col justify-start border border-white w-full h-[100vh] overflow-auto'>
    //         <nav className='w-full flex gap-2 justify-between px-2'>
    //             Food Club
    //             <div className='flex gap-2 justify-end'>
    //                 <Link to="/login">Login</Link>
    //                 <Link to="/signup">Singup</Link>
    //             </div>
    //         </nav>
    //         <div className="flex flex-col gap-4 my-8">
    //             <h1>Food Club</h1>
    //             <h3>Find Food {city ? `in ${city}` : ""}</h3>
    //             <form onSubmit={handleSearchSubmit} className='border flex items-center mx-4'>
    //                 <input type="text" id='search-input' placeholder='Search for restrorant, food, or drink' className='flex-1 min-w-fit bg-transparent p-2 outline-none' />
    //                 <div className='flex gap-2 mx-2'>
    //                     Price limit :
    //                     <select name="" id="">
    //                         <option value="500">500</option>
    //                         <option value="1000">1000</option>
    //                         <option value="1500">1500</option>
    //                         <option value="2000">2000</option>
    //                         <option value="2500">2500</option>
    //                         <option value="Infinity">Infinity</option>
    //                     </select>
    //                     rating :
    //                     <select name="" id="">
    //                         <option value="5">5</option>
    //                         <option value="4">4</option>
    //                         <option value="3">3</option>
    //                         <option value="2">2</option>
    //                         <option value="1">1</option>
    //                     </select>
    //                     discount :
    //                     <select name="" id="">
    //                         <option value="10">10%</option>
    //                         <option value="15">15%</option>
    //                         <option value="20">20%</option>
    //                         <option value="25">25%</option>
    //                         <option value="30">30%</option>
    //                     </select>
    //                     isVeg :
    //                     <select name="" id="">
    //                         <option value="true">Veg</option>
    //                         <option value="false">Non-Veg</option>
    //                     </select>
    //                 </div>
    //                 <button type='submit'>Search</button>
    //             </form>
    //         </div>
    //         <div className='flex flex-col items-start gap-1 mt-8 px-2'>
    //             <h2 className='text-4xl'>Collection</h2>
    //             <div className='flex justify-between items-center border w-full'>
    //                 <p className='text-2xl font-thin'>Explore dishes of top restaurants, cafes, pubs and bars {city ? `in ${city}` : ""}</p>
    //                 <Link to="/" className='font-light'>All collections {city ? `in ${city} ▶` : ""}</Link>
    //             </div>
    //         </div>
    //     </div>
    // )
    return document.cookie.split("user=")[1] === "ADMIN" ? (<RestroHome />) : (<UserPage />);
}

export default HomePage
