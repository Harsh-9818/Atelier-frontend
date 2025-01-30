import { useState } from "react";
import Footer from "../Components/Footer";
import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND;


function Work() {

    const submitHandler = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!firstname || !lastname || !email || !country || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate phone number (simple validation for numbers only)
        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // console.log("Form Submitted", { firstname, lastname, email, country, phone, message });
    };


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handlesubmit=async(req,res)=>{
        try {
            await axios.post(`${BACKEND_URL}/api/v1/user/form`, {firstname, lastname, email, country, phone, message})
            console.log({firstname, lastname, email, country, phone, message});
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white w-full min-h-screen">
            {/* Tag line */}
            <div className="text-center font-sans px-4 pt-20">
                <h1 className="font-semibold uppercase text-sky-200 text-2xl sm:text-3xl md:text-4xl">
                    Wanna work with us?
                </h1>
            </div>

            {/* Form section */}
            <div className="w-full max-w-2xl border border-white flex flex-col items-center mx-auto mt-10 rounded-3xl p-6 py-10">
                <h3 className="text-xl pt-4">Welcome to Atelier</h3>
                <p className="text-gray-300 pt-2">Fill out this details form so we can connect with you.</p>

                <form 
                    onSubmit={submitHandler} 
                    className="w-full flex flex-col items-center mt-8"
                >
                    <div className="w-full">
                        <div className="flex sm:flex-col lg:flex-row gap-10 sm:gap-4 w-full justify-center mb-6">
                            <input
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder="First Name"
                                className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
                            />
                            <input
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder="Last Name"
                                className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex w-full justify-center mb-6">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
                            />
                        </div>

                        {/* Country and Phone - Responsive layout */}
                        <div className="flex sm:flex-col lg:flex-row gap-10 sm:gap-4 w-full justify-center mb-6">
                            <input
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Country"
                                className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
                            />
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone"
                                className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex w-full justify-center mb-6">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                                className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none resize-none h-20"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button 
                                type="submit" 
                                className="font-bold text-white border border-cyan-300 text-md h-12 w-40 rounded-full flex items-center justify-center hover:bg-cyan-300 hover:text-black transition duration-300"
                                onClick={handlesubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Work;
