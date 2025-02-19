const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Page</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-700 mb-6">
                        Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I’m always open to connecting with new people and exploring new opportunities.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                rows="4"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> example@example.com
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Phone:</strong> +1 234 567 8901
                    </p>
                    <p className="text-gray-700">
                        <strong>Address:</strong> 1234 Street Name, City, Country
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
