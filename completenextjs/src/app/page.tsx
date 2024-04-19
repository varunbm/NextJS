import Link from "next/link"

const Homepage = () => {
    return(
        <>
            <h2>Home page..</h2>
            <Link href="/about">
                About
            </Link>
        </>
    )
}

export default Homepage