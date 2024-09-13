import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle clicking outside of the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        try {
            setAuthUser(null);  // Reset authUser to null
            localStorage.removeItem("User");  // Remove user data from localStorage
            toast.success("Logout Successfully");
            window.location.reload();  // Refresh the page
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Extract the first letter of the user's email or default to 'U'
    const firstLetter = authUser?.user?.email ? authUser.user.email.charAt(0).toUpperCase() : 'U';

    return (
        <div className="relative flex items-center">
            <button 
                onClick={toggleDropdown} 
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full focus:outline-none"
            >
                {firstLetter}
            </button>
            <span className="ml-2 text-sm text-gray-700">
                {authUser?.user?.email || 'User'}
            </span>

            {isDropdownOpen && (
                <div 
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20" 
                    style={{ top: '100%' }}
                >
                    <div className="py-2">
                        <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;
