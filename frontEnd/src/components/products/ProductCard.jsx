import React from 'react'

const ProductCard = () => {
    function handleEditFoodItem() {
        console.log("Edit Food Item");
        // Call the edit food item function from backend using patch request
        //MAintain the states using redux and update the todos so that the restro homepage shows the edited items
    }
    function handleDeleteFoodItem() {
        console.log("Delete Food Item");
        // Call the delete food item function from backend using delete request
        //MAintain the states using redux and update the todos so that the restro homepage shows the deleted items
    }
    return (
        <div className='flex flex-col gap-2 border bg-white p-8 rounded-lg shadow-lg w-[350px]'>
            <img src="" alt="Food Image" />
            <h3>Food Name</h3>
            <p>Price: $10.99</p>
            <div className='flex justify-end gap-2'>
                <button onClick={handleEditFoodItem} className='text-blue-600 font-bold'>Edit</button>
                <p>|</p>
                <button onClick={handleDeleteFoodItem} className='text-red-600 font-bold'>Delete</button>
            </div>
        </div>
    )
}

export default ProductCard
