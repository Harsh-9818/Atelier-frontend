import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="w-full border-t border-gray-200 mt-10 lg:h-80 flex justify-center">
            <div className="w-full max-w-screen-xl flex flex-col lg:flex-row justify-between items-center lg:items-start py-10">
                
                {/* Logo Section */}
                <div className="lg:ml-2 mb-6 lg:mb-0">
                    <Link to="/" className="font-semibold text-2xl text-white flex gap-2">
                        <img src="/Logo/Atelier_logo.png" className="h-9" alt="Company logo" />
                        ATELIER
                    </Link>
                </div>

                {/* Right side: Contact, Social, and Links in 3 separate columns */}
                <div className="flex flex-col lg:flex-row justify-between lg:gap-20 text-center lg:text-left lg:mr-4">
                    
                    {/* Contact Section */}
                    <div className="flex flex-col gap-2">
                        {/* <p className="font-semibold text-xl">Project Enquiries</p> */}
                        <a 
                            href="mailto:Atelier.dev2@gmail.com" 
                            className="text-gray-500 hover:text-white"
                        >
                            atelier.dev2@gmail.com
                        </a>
                        {/* <p className="font-semibold text-xl mt-3">Contact</p> */}
                        <p className="text-gray-500 pt-4">+91 0000000000</p>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col gap-2">
                        {/* <p className="font-semibold text-xl">Follow us on</p> */}
                        <a 
                            href="https://github.com/Harsh-9818" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white"
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://www.instagram.com/atelier_official_/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white pt-4"
                        >
                            Instagram
                        </a>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col gap-5 text-gray-500">
                        <Link to="about" className="hover:text-white">About</Link>
                        <Link to="services" className="hover:text-white">Our Services</Link>
                        <Link to="components" className="hover:text-white">Components</Link>
                        <Link to="socials" className="hover:text-white">Socials</Link>
                        <Link to="work" className="hover:text-white">Work with us</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
