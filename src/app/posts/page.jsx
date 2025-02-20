import { postAPI } from '@/services/postAPI';
import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {
    const posts = await postAPI();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
            {posts.slice(0, 10).map(post => (
                <div key={post.id} className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'>
                    <div className='p-4'>
                        <h2 className='text-2xl font-bold text-gray-900'>Title: {post.title}</h2>
                        <p className='h-48 text-gray-600 mt-2'>Description: {post.body}</p>
                        <Link href={`posts/${post.id}`} type="button" className=" bg-blue-500 hover:bg-blue-800 text-white font-bold p-2 text-center">View Details</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostsPage;
