import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Home } from 'lucide-react';

const Success = () => {
    return (
        <div className="max-w-2xl mx-auto mt-10 text-center">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                <div className="mb-6 animate-bounce">
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
                </div>

                <h1 className="text-3xl font-black text-gray-900 mb-4">Payment Successful!</h1>
                <p className="text-gray-500 text-lg mb-8">
                    Thank you for your purchase. Your academic resources are now ready for download.
                </p>

                <div className="bg-green-50 p-6 rounded-2xl mb-8 border border-green-100">
                    <h3 className="font-bold text-green-800 mb-4">What happens next?</h3>
                    <ul className="text-left text-green-700 space-y-2 text-sm">
                        <li className="flex items-center gap-2">✓ A confirmation email has been sent to your college ID.</li>
                        <li className="flex items-center gap-2">✓ You can download your files below.</li>
                        <li className="flex items-center gap-2">✓ You can always access these from your dashboard.</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-600/30">
                        <Download className="w-5 h-5" />
                        <span>Download All</span>
                    </button>

                    <Link
                        to="/"
                        className="flex items-center justify-center space-x-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
