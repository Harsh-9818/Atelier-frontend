import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../Components/Footer";

function SocialCard({ name, Icon, link }) {
    return (
        <div className="text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="w-80 h-96 border border-white rounded-3xl flex items-center justify-center hover:shadow-cyan-inner hover:scale-105 hover:border-2 hover:border-cyan-300 transition-all ">
                    <Icon className="w-32 h-32 text-gray-400 hover:text-white transition-all group-hover:text-white" />
                </div>
            </a>
        </div>
    );
}

function Socials() {
    const socialPlatforms = [
        { name: "Instagram", Icon: FaInstagram, link: "https://www.instagram.com/atelier_official_/" },
        { name: "Github", Icon: FaGithub, link: "https://github.com/Harsh-9818" },
        { name: "LinkedIn", Icon: FaLinkedin, link: "https://www.linkedin.com/in/harshtanwar/" }
    ];
    
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white w-full min-h-screen">
            <div className="flex justify-center items-center px-6 pt-20">
                <h1 className="font-semibold  text-sky-200 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
                    Follow us on...
                </h1>
            </div>
            
            <div className="flex justify-center items-center mb-48">
                <div className="text-center font-sans pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-20 gap-y-10">
                    {socialPlatforms.map(platform => (
                        <SocialCard 
                            key={platform.name} 
                            name={platform.name} 
                            Icon={platform.Icon} 
                            link={platform.link} 
                        />
                    ))}
                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default Socials;
