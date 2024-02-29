"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export const Navbar = (): JSX.Element => {
    const path = usePathname()


    return (
        <>
            <nav className="flex flex-row justify-center min-w-[80vw] sm:min-w-0 gap-8 px-0 pb-4 sm:hidden">
                {path !== "/" && <Link className="text-xl  hover:font-bold" href="/">Home</Link>}
                {path !== "/portfolio" && <Link className="text-xl hover:font-bold" href="/portfolio">Portfolio</Link>}
                {path !== "/aboutMe" && <Link className="text-xl hover:font-bold" href="/aboutMe">About</Link>}

            </nav>

            <nav className="hidden sm:flex flex-row justify-center min-w-[80vw] gap-8 pb-6 ">
                <Link className={`text-2xl  hover:font-bold ${path === "/" && "underline underline-offset-8"}`} href="/">Home</Link>
                <Link className={`text-2xl  hover:font-bold ${path === "/portfolio" && "underline underline-offset-8"}`} href="/portfolio">Portfolio</Link>
                <Link className={`text-2xl  hover:font-bold ${path === "/aboutMe" && "underline underline-offset-8"}`} href="/aboutMe">About</Link>

            </nav>
        </>
    )

}