import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/sampleResources';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, getCartTotal } = useCart();
    const { subtotal, commission, total } = getCartTotal();

    if (cart.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added any resources yet.</p>
                <Link to="/" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition">
                    Browse Resources
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-grow space-y-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({cart.length})</h1>

                {cart.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xs uppercase">
                                {item.fileType}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.subject}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <span className="font-bold text-gray-900">{formatPrice(item.price)}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="w-full lg:w-96">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Platform Fee (10%)</span>
                            <span>{formatPrice(commission)}</span>
                        </div>
                        <div className="h-px bg-gray-100 my-4"></div>
                        <div className="flex justify-between text-lg font-black text-gray-900">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                    </div>

                    <Link
                        to="/checkout"
                        className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition flex items-center justify-center space-x-2 shadow-lg shadow-primary-600/30"
                    >
                        <span>Proceed to Checkout</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
