import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/sampleResources';
import toast from 'react-hot-toast';
import { CreditCard, Lock } from 'lucide-react';

const Checkout = () => {
    const { getCartTotal, clearCart } = useCart();
    const { total } = getCartTotal();
    const [paymentAmount, setPaymentAmount] = useState('');
    const navigate = useNavigate();

    const handlePayment = (e) => {
        e.preventDefault();
        if (parseFloat(paymentAmount) === total) {
            // Simulate Payment Processing
            const toastId = toast.loading('Processing Payment...');
            setTimeout(() => {
                toast.dismiss(toastId);
                clearCart();
                navigate('/success');
            }, 2000);
        } else {
            toast.error(`Incorrect amount. Please enter exactly ${total}`);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="text-center mb-10">
                    <div className="bg-primary-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="w-10 h-10 text-primary-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Secure Payment</h1>
                    <p className="text-gray-500 mt-2 flex items-center justify-center gap-1">
                        <Lock className="w-3 h-3" />
                        256-bit SSL Encrypted
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
                    <p className="text-gray-500 text-sm font-medium mb-1">Total Payable Amount</p>
                    <p className="text-3xl font-black text-gray-900">{formatPrice(total)}</p>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Amount to Pay (Dummy Verification)
                        </label>
                        <input
                            type="number"
                            value={paymentAmount}
                            onChange={(e) => setPaymentAmount(e.target.value)}
                            className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 transition text-lg font-bold"
                            placeholder={total}
                            required
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            * Since this is a demo, please manually enter the exact total amount shown above to simulate a successful transaction.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-600/30 text-lg"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
