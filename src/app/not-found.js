import Link from "next/link"

export default function NotFound(){
    return(
        <>
            <h1>Ooops, we can not find the programme you want.</h1>

            <Link href="/">Home</Link> | <Link href="/add-programme">Add Programme</Link>
        </>
    )
}