import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';
import { formatPrice } from '../data/sampleResources';

const ResourceCard = ({ resource }) => {
    const { addToCart, cart } = useCart();

    const isInCart = cart.some(item => item.id === resource.id);

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
            {/* Thumbnail Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-4xl text-primary-300 font-bold opacity-50 group-hover:scale-110 transition duration-500">
                    {resource.fileType}
                </span>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-700">
                    {resource.category}
                </div>
            </div>

            <div className="p-5">
                <div className="mb-2">
                    <span className="text-xs text-primary-600 font-semibold uppercase tracking-wider">
                        {resource.subject}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 line-clamp-1">
                        {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        by {resource.author}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">
                        {formatPrice(resource.price)}
                    </span>

                    <div className="flex space-x-2">
                        <Link
                            to={`/product/${resource.id}`}
                            className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                            title="View Details"
                        >
                            <Eye className="w-5 h-5" />
                        </Link>

                        <button
                            onClick={() => addToCart(resource)}
                            disabled={isInCart}
                            className={`p-2 rounded-lg transition flex items-center justify-center ${isInCart
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm'
                                }`}
                            title={isInCart ? "Already in Cart" : "Add to Cart"}
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceCard;
