import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to My Website!</h1>
          <p className="text-gray-600 mt-4">Discover amazing content and learn more about what we offer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt="Feature 1"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-700">
              We provide a wide range of services to cater to your needs, including web development, mobile app development, and more.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt="Feature 2"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Our Projects</h2>
            <p className="text-gray-700">
              Check out some of our recent projects and see the impact we’ve made for our clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt="Feature 3"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-700">
              Have any questions or need further information? Feel free to reach out to us, and we’ll be happy to assist you.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">© 2025 My Website. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
