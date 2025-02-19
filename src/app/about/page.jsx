import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Page</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Who Am I?</h2>
                    <p className="text-gray-700 mb-6">
                        Hello! I’m a passionate developer with a keen interest in web technologies and artificial intelligence. With several years of experience in the industry, I've worked on various projects, ranging from simple websites to complex applications.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                    <p className="text-gray-700 mb-6">
                        My journey in the tech world began in my early years, experimenting with different programming languages and tools. Over the years, I've honed my skills and developed a deep understanding of modern web development practices.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Proficient in JavaScript, React, Next.js, and Node.js</li>
                        <li>Experienced with HTML, CSS, and Tailwind CSS for responsive design</li>
                        <li>Familiar with backend technologies like Express and MongoDB</li>
                        <li>Strong problem-solving and debugging skills</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Want to Know More?</h2>
                    <p className="text-gray-700 mb-4">Want to know more about myself?</p>
                    <Link href="/about/myself" legacyBehavior>
                        <a className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Myself</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
