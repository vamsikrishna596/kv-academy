import React, { useState } from 'react';
import { sampleResources } from '../data/sampleResources';
import ResourceCard from '../components/ResourceCard';
import { Search, Book, FileText, GraduationCap, ClipboardList } from 'lucide-react';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        { name: 'All', icon: null },
        { name: 'Notes', icon: Book },
        { name: 'PYQs', icon: ClipboardList },
        { name: 'Syllabus', icon: FileText },
        { name: 'Study Guides', icon: GraduationCap },
    ];

    const filteredResources = activeCategory === 'All'
        ? sampleResources
        : sampleResources.filter(r => r.category === activeCategory);

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Ace Your Exams with <br />
                        <span className="text-primary-200">Premium Notes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-primary-100 mb-8 font-medium">
                        Buy and sell high-quality academic resources. Join the community of top scorers today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow max-w-md">
                            <input
                                type="text"
                                placeholder="Search for subjects, books, or authors..."
                                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 border-2 border-transparent focus:border-primary-300 focus:outline-none shadow-lg"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                        <button className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg shrink-0">
                            Explore Now
                        </button>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-900/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
            </section>

            {/* Categories */}
            <section>
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat.name
                                        ? 'bg-primary-600 text-white shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                {Icon && <Icon className="w-4 h-4" />}
                                <span>{cat.name}</span>
                            </button>
                        )
                    })}
                </div>
            </section>

            {/* Product List */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">🔥</span>
                    Trending Resources
                </h2>

                {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredResources.map(resource => (
                            <ResourceCard key={resource.id} resource={resource} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-500 text-lg">No resources found in this category.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
