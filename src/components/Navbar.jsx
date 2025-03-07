// Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://images.vexels.com/content/143097/preview/circle-logo-discs-535a09.png" className="h-8" alt="Logo" />
                    </Link>
                    
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={20} />
                        </div>

                        <button 
                            type="button" 
                            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            onClick={() => setProfileMenu(!profileMenu)}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-12 h-12 rounded-full" src="https://i.pinimg.com/736x/16/a1/94/16a1943e64ed9009911f8bfe9a27d56a.jpg" alt="user photo" />
                        </button>
                    </div>
                    
                    
                </div>
            </nav>

            {profileMenu && (
                <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg dark:bg-gray-800 z-50">
                    <button 
                        className="absolute top-4 right-4 text-gray-700 dark:text-gray-300" 
                        onClick={() => setProfileMenu(false)}
                    >
                        <X size={24} />
                    </button>
                    <div className="p-6">
                        <h2 className="text-xl font-semibold dark:text-white">User Menu</h2>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/profile" className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Profile</Link>
                            </li>
                            <li>
                                <Link to="/settings" className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Settings</Link>
                            </li>
                            <li>
                                <Link to="/logout" className="block py-2 px-4 text-red-500 hover:bg-red-100 dark:hover:bg-red-700 rounded">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;

