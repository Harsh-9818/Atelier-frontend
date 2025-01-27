import Footer from "../Components/Footer"

function Work(){
    return(
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white w-full min-h-screen">
            {/* Tag line */}
            <div className="text-center font-sans px-4 pt-20">
                <h1 className="font-bold text-cyan-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Wanna work with us ?
                </h1>
            </div>

            {/* Form section */} 
            <div className="w-3/5 h-96 border-2 border-white flex flex-col items-center mx-auto mt-10 rounded-3xl">
                <h3 className="text-xl pt-4">Welcome to Atelier</h3>
                <p className="text-gray-300 pt-2">Fill out this details form so we can connect with you.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Work