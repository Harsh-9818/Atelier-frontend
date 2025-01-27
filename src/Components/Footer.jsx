import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full border-t border-gray-500 mt-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start p-5 lg:h-64">
            {/* Contact Section */}
            <div className="flex flex-col gap-5 my-4 lg:my-0 lg:mx-10 text-center lg:text-left">
                <Link to="/" className="font-semibold text-2xl text-white">
                    ATELIER
                </Link>
                <div className="flex flex-col gap-2">
                    <p>Project Enquiries</p>
                    <Link 
                        to="https://mail.google.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500"
                    >
                        Atelier.dev2@gmail.com
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Contact</p>
                    <p className="text-gray-500">+91 0000000000</p>
                </div>
            </div>

            {/* Social Section */}
            <div className="flex flex-col gap-5 my-4 lg:my-0 items-center lg:mx-10">
                <div>
                    <p className="font-semibold text-xl text-center lg:text-left">Follow us on</p>
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://github.com/Harsh-9818"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-3xl hover:text-white"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/atelier_official_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-3xl hover:text-white"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col gap-5 my-4 lg:my-0 text-center lg:text-right lg:mx-10 text-gray-500">
                <Link to="about">About</Link>
                <Link to="services">Our Services</Link>
                <Link to="components">Components</Link>
                <Link to="socials">Socials</Link>
                <Link to="work">Work with us</Link>
            </div>
        </div>
    );
}

export default Footer;
