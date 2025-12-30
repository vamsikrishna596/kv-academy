import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UploadCloud, FileText } from 'lucide-react';

const Upload = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        description: '',
        price: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new resource object
        const newResource = {
            id: Date.now(),
            ...formData,
            price: parseFloat(formData.price),
            file: formData.file ? formData.file.name : 'dummy.pdf',
            status: 'pending',
            date: new Date().toISOString()
        };

        // Save to localStorage for admin to see
        const uploads = JSON.parse(localStorage.getItem('eduMartUploads') || '[]');
        uploads.push(newResource);
        localStorage.setItem('eduMartUploads', JSON.stringify(uploads));

        toast.success('Resource uploaded! Waiting for Admin Approval.');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <div className="bg-primary-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <UploadCloud className="w-10 h-10 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Sell Your Notes</h2>
                    <p className="text-gray-500 mt-2">Upload your study materials and start earning.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition outline-none"
                                placeholder="e.g. Data Structures Notes"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject / Branch</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition outline-none"
                                placeholder="e.g. Computer Science"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition outline-none"
                            placeholder="Briefly describe the contents..."
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition outline-none"
                            placeholder="150"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload File (PDF/Image)</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition cursor-pointer relative">
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                                accept=".pdf,.jpg,.png,.jpeg"
                            />
                            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500 text-sm">
                                {formData.file ? formData.file.name : "Click to browse or drag file here"}
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-600/30"
                    >
                        Submit for Approval
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
