import { Link } from 'react-router-dom';
function About(){
    return(
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white w-full min-h-screen">
            <div className="font-sans px-4 pt-20 flex justify-between items-center">
                {/* Left Section */}
                <div className="left w-132 h-96 mx-20">
                    <h1 className="tracking-[0.5rem] text-cyan-300">ABOUT US</h1>
                    <h1 className="text-5xl font-extrabold pt-5 leading-tight">
                        Helping businesses succeed through the power of websites.
                    </h1>
                    <p className="pt-10 w-[85%] leading-normal tracking-[0.1rem] text-gray-300">
                        Our team specializes in modern web technologies, ensuring responsive, fast, and visually stunning designs. 
                        Whether you're a startup or an established brand, we bring your ideas to life with cutting-edge development solutions. 
                        Let’s build something amazing together!
                    </p>

                    <div className="mt-10">
                        <Link to="/work" className="font-bold text-white border border-cyan-300 text-md h-12 w-40 rounded-full flex items-center justify-center">
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right w-1/2 flex justify-center hidden md:flex">
                    <img src="/Logo/side.png" alt="Side Logo" className="h-auto max-w-[650px]" />
                </div>
            </div>

        </div>
    )
}

export default About