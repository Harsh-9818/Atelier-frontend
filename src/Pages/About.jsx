import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="bg-[#0e0e0e] text-white w-full min-h-screen overflow-hidden">
      <div className="font-sans px-4 lg:pt-32 pt-20 mb-12 flex flex-col md:flex-row justify-between items-center md:mb-60 ">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 mx-4 md:mx-20 text-center md:text-left">
          <h1 className="tracking-[0.5rem] text-cyan-300">ABOUT US</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold pt-5 leading-tight">
            Helping businesses succeed through the power of websites.
          </h1>
          <p className="pt-6 md:pt-10 w-[90%] mx-auto md:mx-0 leading-normal tracking-[0.1rem] text-gray-300">
            Our team specializes in modern web technologies, ensuring responsive, fast, and visually stunning designs.
            Whether you're a startup or an established brand, we bring your ideas to life with cutting-edge development solutions.
            Let’s build something amazing together!
          </p>

          <div className="mt-6 md:mt-10">
            <Link
              to="/work"
              className="font-bold text-white glow-on-hover text-md h-12 w-40 rounded-full flex items-center justify-center mx-auto md:mx-0"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/Logo/side.png"
            alt="Side Logo"
            className="w-full max-w-[80%] md:max-w-[650px] h-auto object-contain"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
