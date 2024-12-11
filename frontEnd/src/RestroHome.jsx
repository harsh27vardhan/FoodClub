// useEffect(() => {
//     // fetch foods by RestroId;
//     //update foods
// }, []);
import React, { useEffect, useState } from 'react'
import UserIcon from "./assets/user.svg"
import ProductCard from './components/products/productCard';
const RestroHome = () => {
    const [foods, setFoods] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1,]);
    const [addFoodItem, setAddFoodItem] = useState(false);
    // useEffect(() => {
    //     // fetch foods by RestroId;
    //     //update foods
    // }, []);
    function deleteCookie(cookieName) {
        // Set the cookie with an expiration date in the past
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
    function handleAllFood(e) {
        e.preventDefault();
        // add food wwith the backend api
        console.log('Adding');
        //If added..remove the form and show added
        alert('Added successfully');
        // and then navigate to the restro home page
    }
    return (
        <div className="w-full h-[100vh] flex flex-col gap-8 items-center p-4 relative">
            <div className="flex justify-between w-full h-[36px] items-center">
                <h3 className="text-3xl font-semibold">Hello Restro! 👋</h3>
                <img
                    src={UserIcon}
                    alt=""
                    className="h-full aspect-square rounded-[50%] bg-white"
                />
            </div>
            <div className='flex flex-col gap-4 px-4 h-[calc(100vh - 36px)] w-full overflow-auto'>
                <div className='flex w-full justify-between pr-4'>
                    <p className="text-xl font-semibold">Here are your Food Items</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setAddFoodItem(true)}>Add new Food Item</button>
                </div>
                <div className='flex flex-wrap justify-center gap-4'>
                    {foods.length > 0 && (
                        foods.map((food, index) => (
                            <ProductCard key={"produt-card" + index} />
                        ))
                    )}
                </div>
            </div>
            {addFoodItem && (
                <div className='flex flex-col w-full h-[100vh] gap-4 justify-center items-center bg-[#00000046] absolute top-0 left-0' onClick={() => setAddFoodItem(false)}>
                    <div className='bg-white flex flex-col justify-center items-center p-8 rounded-md shadow-md' onClick={(e) => { e.stopPropagation() }}>
                        <h2 className='text-lg font-bold mb-4'>Add Food</h2>
                        <form action="" className='flex flex-col w-full' onSubmit={handleAllFood}>
                            <input required type="text" placeholder="Food Name" name='food-name' className='p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <input required type="text" placeholder="Category" name='category' className='p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <input required type="text" placeholder="Description" className='p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <div className='flex items-center gap-2'>
                                <input type="radio" name='isVeg' className='p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                                <label htmlFor="">It's a Non-Veg Dish</label>
                            </div>
                            <input required type="number" placeholder="Price" name='price' className='p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <input required type="number" placeholder="Available Qualtity" className='p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <input type="text" placeholder="Image link" className='p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <input required type="number" placeholder="Rating" className='p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <input type="number" placeholder="Discount" className='p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500' />
                            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Add Food</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RestroHome
