import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary-bg text-black econdary dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5">
            <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
                {/* First Div: Logo and Description (Wider Column) */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Panto</h2>
                    <p className=" md:mr-12">
                        YourCompany is dedicated to providing the best quality products to enhance your home and lifestyle. We combine style and comfort to transform your living spaces into modern sanctuaries.
                    </p>
                </div>

                {/* Second Div: Menu 1 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className=" hover:text-primary transition">About Us</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-primary transition">Services</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-primary transition">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Third Div: Menu 2 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className=" hover:text-primary transition">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-primary transition">Returns</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-primary transition">Support</a>
                        </li>
                    </ul>
                </div>

                {/* Fourth Div: Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="flex items-center space-x-2  hover:text-primary transition">
                            <FaFacebookF /> <span>Facebook</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2  hover:text-primary transition">
                            <FaTwitter /> <span>Twitter</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2  hover:text-primary transition">
                            <FaInstagram /> <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
               <p> &copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
               <p className='flex gap-4'>
                
                <Link  to="/">Terms & Conditions</Link>
                <Link to="/">Privacy Policy</Link>
               </p>
            </div>
        </footer>
    );
};

export default Footer;
