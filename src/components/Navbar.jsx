"use client"
import LoginPage from "@/app/login/page";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            "title": "Home",
            "path": "/"
        },
        {
            "title": "About",
            "path": "/about"
        },
        {
            "title": "Contact",
            "path": "/contact"
        },
        {
            "title": "Blogs",
            "path": "/blogs"
        },
    ];

    const handler = () => {
        router.push("/login")
    }

    return (
        <nav className="flex justify-between items-center bg-blue-200 font-bold py-4 px-10">
            <h2 className="text-xl font-bold">Next Hero</h2>
            <ul className="flex justify-between items-center gap-4">
                {
                    links.map((link, idx) => (
                        <li key={idx}>
                            <Link className={pathName === link.path ? "text-red-500" : ""} href={link.path}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handler} type="button" className="bg-slate-600 text-white font-bold p-2 rounded">Login</button>
        </nav>
    );
};

export default Navbar;