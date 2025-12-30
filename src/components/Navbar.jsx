import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, LogOut, User, BookOpen, Upload } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition">
                        <BookOpen className="w-8 h-8" />
                        <span className="text-2xl font-bold">EduMart</span>
                    </Link>

                    {/* Actions */}
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition">
                            Marketplace
                        </Link>

                        {user && (
                            <Link to="/upload" className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 font-medium transition">
                                <Upload className="w-4 h-4" />
                                <span>Sell</span>
                            </Link>
                        )}

                        <Link to="/cart" className="relative text-gray-600 hover:text-primary-600 transition">
                            <ShoppingCart className="w-6 h-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <User className="w-5 h-5 text-gray-500" />
                                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-red-500 transition"
                                    title="Logout"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-primary-600 font-medium hover:bg-primary-50 rounded-lg transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 shadow-sm transition"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
