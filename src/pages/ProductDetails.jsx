import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleResources, formatPrice } from '../data/sampleResources';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Check, FileText, Star, User, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const resource = sampleResources.find(r => r.id === parseInt(id));
    const { addToCart, cart } = useCart();

    // Tab state for description/details
    // Simplified for this version

    if (!resource) {
        return <div className="text-center py-20 text-xl text-red-500">Resource not found!</div>;
    }

    const isInCart = cart.some(item => item.id === resource.id);

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Preview Section */}
                <div className="bg-gray-100 p-10 flex items-center justify-center relative">
                    <div className="bg-white p-8 shadow-2xl rounded-lg w-3/4 aspect-[3/4] flex flex-col items-center justify-center border border-gray-200">
                        <FileText className="w-24 h-24 text-primary-200 mb-4" />
                        <h3 className="text-gray-900 font-bold text-center text-lg">{resource.title}</h3>
                        <p className="text-gray-400 text-sm mt-2">Preview Page 1 of 15</p>
                    </div>

                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        {resource.fileType}
                    </div>
                </div>

                {/* Right: Info Section */}
                <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-primary-600 font-bold text-sm uppercase tracking-wide mb-4">
                        <span>{resource.subject}</span>
                        <span>•</span>
                        <span>{resource.category}</span>
                    </div>

                    <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
                        {resource.title}
                    </h1>

                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-1 text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="text-gray-900 font-bold">{resource.rating}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <User className="w-4 h-4" />
                            <span>{resource.author}</span>
                        </div>
                    </div>

                    <div className="text-gray-600 mb-8 leading-relaxed">
                        {resource.description}
                    </div>

                    <div className="flex items-center justify-between mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div>
                            <p className="text-gray-500 text-sm font-medium mb-1">Total Price</p>
                            <span className="text-4xl font-black text-gray-900">{formatPrice(resource.price)}</span>
                        </div>
                        <div className="flex flex-col space-y-1 text-xs text-green-600 font-medium">
                            <div className="flex items-center space-x-1">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Verified Seller</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Instant Download</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        {isInCart ? (
                            <Link
                                to="/cart"
                                className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-600/30 flex items-center justify-center space-x-2"
                            >
                                <Check className="w-5 h-5" />
                                <span>Go to Cart</span>
                            </Link>
                        ) : (
                            <button
                                onClick={() => addToCart(resource)}
                                className="flex-1 bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-600/30 flex items-center justify-center space-x-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
