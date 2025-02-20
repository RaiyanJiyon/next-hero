"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { id } = await params;
                console.log(id);
                
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [params]);

    if (!post) {
        return "Loading..."
    }

    return (
        <div className='max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg'>
            <h1 className='text-2xl font-bold mb-2'>{post?.title}</h1>
            <p className='text-gray-700'>{post?.body}</p>
        </div>
    );
};

export default PostPage;
