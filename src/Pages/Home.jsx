import { Link } from 'react-router-dom';
import Eye from '../Components/Eye';
import Footer from '../Components/Footer';
import Grid from '../Components/Grid';
import Marque from '../Components/Marque';
import '/src/index.css';
// import {motion} from 'motion';

function Home() {
  return (
    <div>
    <div className="aurora-background text-white w-full min-h-screen ">
      
      {/* Grid Component */}
      {/* <div className="absolute top-0 left-0 p-4">
        <Grid />
      </div> */}

      {/* Header Section */}
      <div className="text-center font-sans px-4 lg:pt-20">
        <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Your Vision, Our Expertise
        </h1>
      </div>

      {/* About Section */}
      <div className="flex items-center text-gray-400 justify-center h-auto md:h-[30vh] w-full sm:w-4/5 lg:w-3/5 mx-auto text-center px-4 py-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Our fully integrated web development solutions power dynamic, 
          user-centric digital experiences for businesses of all sizes. 
          We have delivered 500+ projects spanning websites, e-commerce platforms, 
          and custom web applications, providing tailored results across 20+ industries globally.
        </p>
      </div>

      {/* Button */}
      <div className=" flex items-center justify-center ">
        <Link to="/work" className=" glow-on-hover font-bold text-white text-md h-12 w-40 rounded-full flex items-center justify-center" >
        GET IN TOUCH
        </Link>
      </div>
      
      <div>
        <Marque/>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
