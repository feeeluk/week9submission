import Link from "next/link"

export default function NotFound(){
    return(
        <>
        <h1>Ooops, we can't find the programme you want. Why don't you add it?</h1>

        <Link href="/">Home</Link> | <Link href="/add-programme">Add Programme</Link>
        </>
    )
}