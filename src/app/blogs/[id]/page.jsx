"use client";
import { useEffect, useState } from "react";

const blogs = [
    {
        "id": 1,
        "title": "Exploring the Future of AI",
        "author": "John Doe",
        "date": "2025-02-15",
        "content": "Artificial Intelligence continues to advance, offering unprecedented opportunities and challenges..."
    },
    {
        "id": 2,
        "title": "The Benefits of a Plant-Based Diet",
        "author": "Jane Smith",
        "date": "2025-01-28",
        "content": "Switching to a plant-based diet has numerous health benefits, including reduced risk of chronic diseases..."
    },
    {
        "id": 3,
        "title": "Top 10 Travel Destinations for 2025",
        "author": "Emily Davis",
        "date": "2025-02-10",
        "content": "From the pristine beaches of Bali to the bustling streets of Tokyo, here are the top travel destinations for 2025..."
    },
    {
        "id": 4,
        "title": "Mastering the Art of Mindfulness",
        "author": "Michael Brown",
        "date": "2025-02-01",
        "content": "Mindfulness is the practice of being present in the moment. Discover techniques to incorporate mindfulness into your daily life..."
    },
    {
        "id": 5,
        "title": "The Rise of Remote Work",
        "author": "Laura Wilson",
        "date": "2025-02-18",
        "content": "Remote work has become increasingly popular, offering flexibility and work-life balance. Explore tips for thriving in a remote work environment..."
    },
    {
        "id": 6,
        "title": "Healthy Habits for a Productive Day",
        "author": "Daniel Garcia",
        "date": "2025-02-05",
        "content": "Establishing healthy habits can boost productivity and overall well-being. Learn simple yet effective habits to start your day right..."
    },
    {
        "id": 7,
        "title": "Innovations in Renewable Energy",
        "author": "Sarah Lee",
        "date": "2025-02-09",
        "content": "Renewable energy technologies are evolving rapidly. Discover the latest innovations and their impact on the environment..."
    },
    {
        "id": 8,
        "title": "The Power of Positive Thinking",
        "author": "David Kim",
        "date": "2025-02-12",
        "content": "Positive thinking can transform your life. Explore strategies to cultivate a positive mindset and achieve your goals..."
    },
    {
        "id": 9,
        "title": "Tips for Successful Entrepreneurship",
        "author": "Jessica Thompson",
        "date": "2025-02-03",
        "content": "Entrepreneurship requires determination and resilience. Learn tips and insights from successful entrepreneurs to help you succeed..."
    },
    {
        "id": 10,
        "title": "The Importance of Cybersecurity",
        "author": "Matthew Green",
        "date": "2025-02-14",
        "content": "Cybersecurity is crucial in today's digital age. Understand the importance of protecting your data and best practices to stay safe online..."
    }
]

const BlogDetailsPage = ({ params }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchParams = async () => {
            const unwrappedParams = await params;
            const { id } = unwrappedParams;
            const singleBlog = blogs.find(blog => blog.id === parseInt(id));
            setBlog(singleBlog);
        };
        fetchParams();
    }, [params]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Blog Details Page</h1>
            <div className="container mx-auto px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Blog Title for ID: {blog.id}</h2>
                    <h2 className="text-3xl font-bold mb-4">Blog Title: {blog.title}</h2>
                    <p className="text-gray-700 mb-2">By Author: {blog.author}</p>
                    <p className="text-gray-500 text-sm mb-4">Date: {new Date(blog.date).toLocaleDateString()}</p>
                    <p className="text-gray-800">{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
