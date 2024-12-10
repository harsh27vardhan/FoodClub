import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        role: "CUSTOMER"
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({ ...formData, role: checked ? "ADMIN" : "CUSTOMER" });
        }
        else setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post("http://localhost:3030/user/signup", formData);
        console.log(response);
        // const {fullname,username,email,password};
    }
    const [userType, setUserType] = useState(null);
    return (
        <div className="flex h-[100vh] justify-center w-full items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create a New Account</h2>
                {userType ? <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your Name"
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-transparent text-black"
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-transparent text-black"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-transparent text-black"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-transparent text-black"
                        required
                    />
                    <div className='flex justify-start text-black'>
                        <input type="checkbox" id='role' name='role' onChange={handleChange} className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-transparent text-black" />
                        <label htmlFor="restro">If you're a Restrorant?</label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold p-3 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Signup
                    </button>
                </form> : <div>
                    <button onClick={() => setUserType("USER")}>SignUp as User</button>
                    <button onClick={() => setUserType("ADMIN")}>SignUp as Resto</button>
                </div>}

            </div>
        </div>
    )
}

export default Signup
