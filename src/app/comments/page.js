import Link from "next/link"
import { auth } from "@clerk/nextjs/server"

export default function CommentsPage(){

    const {userId} = auth()

    return(
        <>
            <Link href={`/comments/users-comments/${userId}`}><h1>My comments</h1></Link>
            <Link href={`/comments/all-comments`}><h1>All comments</h1></Link>
        </>
    )
}