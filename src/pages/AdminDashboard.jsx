import React, { useState, useEffect } from 'react';
import { Check, X, TrendingUp, DollarSign, FileText } from 'lucide-react';
import toast from 'react-hot-toast';
import { formatPrice } from '../data/sampleResources';

const AdminDashboard = () => {
    const [uploads, setUploads] = useState([]);
    const [stats, setStats] = useState({
        revenue: 12500,
        activeUsers: 142,
        totalUploads: 45
    });

    useEffect(() => {
        const storedUploads = JSON.parse(localStorage.getItem('eduMartUploads') || '[]');
        setUploads(storedUploads);
    }, []);

    const handleAction = (id, action) => {
        const updatedUploads = uploads.map(item => {
            if (item.id === id) {
                return { ...item, status: action === 'approve' ? 'approved' : 'rejected' };
            }
            return item;
        });
        setUploads(updatedUploads);
        localStorage.setItem('eduMartUploads', JSON.stringify(updatedUploads));
        toast.success(`Resource ${action === 'approve' ? 'Approved' : 'Rejected'}`);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold">
                    Admin Mode
                </span>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-xl">
                            <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900">{formatPrice(stats.revenue)}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Active Users</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stats.activeUsers}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-100 p-3 rounded-xl">
                            <FileText className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Resources</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stats.totalUploads}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900">Pending Approvals</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">Resource Title</th>
                                <th className="px-6 py-4 font-medium">Subject</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {uploads.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                        No pending uploads found.
                                    </td>
                                </tr>
                            ) : (
                                uploads.map(item => (
                                    <tr key={item.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                                        <td className="px-6 py-4 text-gray-500">{item.subject}</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">₹{item.price}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                    item.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.status === 'pending' && (
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleAction(item.id, 'approve')}
                                                        className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200" title="Approve">
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleAction(item.id, 'reject')}
                                                        className="p-1 bg-red-100 text-red-600 rounded hover:bg-red-200" title="Reject">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
