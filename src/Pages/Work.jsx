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
            <div className="text-center font-sans px-4 pt-10">
                <h1 className="font-semibold uppercase text-sky-200 text-2xl sm:text-3xl md:text-3xl">
                    Connect with us
                </h1>
            </div>

            {/* Form section */}
            <div className="w-min max-w-2xl border border-slate-700 flex flex-col items-center mx-auto mt-10 rounded-2xl p-6 py-4 mb-24">
                <h3 className="text-lg pt-2">Welcome to Atelier</h3>
                <p className="text-gray-400 text-sm pt-2">Fill out this details form so we can connect with you.</p>

                <form 
                    onSubmit={submitHandler} 
                    className="w-96 flex flex-col items-center mt-8"
                >
                    <div className="w-96">
                        <div className="flex sm:flex-col lg:flex-row gap-10 sm:gap-4 w-full justify-center mb-6">
                            <div>
                                <label className="text-sm">First Name</label>
                                <input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    placeholder="Harry"
                                    className="bg-slate-800 text-sm p-2 w-full outline-none rounded "
                                />
                            </div>
                            <div>
                                <label className="text-sm">Last Name</label>
                                <input
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    placeholder="Potter"
                                    className="bg-slate-800 text-sm p-2 w-full outline-none rounded"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex w-full flex-col justify-center mb-6">
                            <label className="text-sm">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="atelier.dev2@gmail.com"
                                className="bg-slate-800 text-sm p-2 w-full outline-none rounded"
                            />
                        </div>

                        {/* Country and Phone - Responsive layout */}
                        <div className="flex sm:flex-col lg:flex-row gap-10 sm:gap-4 w-full justify-center mb-6">
                            <div>
                                <label className="text-sm">Country</label>
                                <input
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Country"
                                    className="bg-slate-800 text-sm p-2 w-full outline-none rounded"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Phone No.</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 000000000"
                                    className="bg-slate-800 text-sm p-2 w-full outline-none rounded"
                                />
                            </div>
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
                                className="font-bold text-white border border-cyan-300 text-md h-12 w-40 rounded-full flex items-center justify-center"
                                onClick={handlesubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Work;
