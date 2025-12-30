export const sampleResources = [
    {
        id: 1,
        title: "Complete Data Structures Notes",
        subject: "Computer Science",
        category: "Notes",
        author: "Rahul Sharma",
        price: 150,
        description: "Comprehensive handwritten notes covering Arrays, Linked Lists, Trees, Graphs, and DP. Perfect for semester exams.",
        rating: 4.8,
        fileType: "PDF"
    },
    {
        id: 2,
        title: "Engineering Mathematics 1 - Solved PYQs",
        subject: "Mathematics",
        category: "PYQs",
        author: "Sneha Gupta",
        price: 99,
        description: "Last 5 years solved question papers for Engineering Mathematics 1. Step-by-step solutions included.",
        rating: 4.5,
        fileType: "PDF"
    },
    {
        id: 3,
        title: "Physics Mechanics Study Guide",
        subject: "Physics",
        category: "Study Guides",
        author: "Amit Verma",
        price: 200,
        description: "Deep dive into Mechanics with problem sets and formula sheets.",
        rating: 4.2,
        fileType: "PDF"
    },
    {
        id: 4,
        title: "Operating Systems Syllabus Decoded",
        subject: "Computer Science",
        category: "Syllabus",
        author: "Priya Singh",
        price: 50,
        description: "Simplified syllabus breakdown for OS course with important topics highlighted.",
        rating: 4.0,
        fileType: "PDF"
    },
    {
        id: 5,
        title: "React JS Zero to Hero",
        subject: "Web Development",
        category: "Notes",
        author: "Dev Master",
        price: 299,
        description: "My personal learning notes on React, Redux, and Context API.",
        rating: 4.9,
        fileType: "PDF"
    }
];

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);
};
