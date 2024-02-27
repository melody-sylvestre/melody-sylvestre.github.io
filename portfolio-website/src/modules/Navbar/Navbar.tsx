"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export const Navbar = (): JSX.Element => {
    const path = usePathname()


    return (
        <>
            <nav className="flex flex-row justify-center min-w-[80vw] sm:min-w-0 gap-8 px-0 py-12 sm:hidden">
                {path !== "/" && <Link className="text-xl  hover:font-bold" href="/">Home</Link>}
                {path !== "/aboutMe" && <Link className="text-xl hover:font-bold" href="/aboutMe">About me</Link>}
                {path !== "/portfolio" && <Link className="text-xl hover:font-bold" href="/portfolio">Portfolio</Link>}
            </nav>

            <nav className="hidden sm:flex flex-row justify-center min-w-[80vw] gap-8 p-12 ">
                <Link className="text-2xl  hover:font-bold" href="/">Home</Link>
                <Link className="text-2xl hover:font-bold" href="/aboutMe">About me</Link>
                <Link className="text-2xl hover:font-bold" href="/portfolio">Portfolio</Link>
            </nav>
        </>
    )

}