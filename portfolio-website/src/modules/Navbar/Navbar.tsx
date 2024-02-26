import Link from "next/link"

export const Navbar = (): JSX.Element => {

    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/aboutMe">About Me</Link>
            <Link href="/portfolio">Portfolio</Link>
        </nav>
    )

}