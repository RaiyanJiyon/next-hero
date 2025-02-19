import Link from "next/link";

const MySelfPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Myself Page</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700 mb-6">
                        Hi! I’m an enthusiastic and passionate developer. I enjoy diving into challenging projects and learning new technologies. Over the years, I’ve built a diverse skill set that enables me to create innovative and efficient solutions.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">My Interests</h2>
                    <p className="text-gray-700 mb-6">
                        Beyond coding, I have a wide array of interests. I love exploring new places, reading books on various topics, and keeping up with the latest trends in technology and design.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Developed an e-commerce platform with React and Node.js</li>
                        <li>Built a real-time chat application using Socket.io</li>
                        <li>Created a personal portfolio website with Next.js and Tailwind CSS</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-700 mb-4">Want to get in touch with me? Feel free to reach out!</p>
                    <Link href="/contact" legacyBehavior>
                        <a className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Contact Me</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MySelfPage;
