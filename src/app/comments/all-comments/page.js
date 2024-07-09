import { connect } from "@/utilities/connect"

export default async function AllComments(){

    const db = connect()
    const comments = (await db.query(`SELECT *
                                    FROM comments`)).rows

    return(
        <>
        <h1>All comments</h1>
        {console.log(comments)}
        {comments.map( (comment) => {
            return(
                <p key={comment.comment_id}>
                    <h1>User: {comment.clerk_id}</h1>
                    <h1>ID: {comment.comment_id}</h1>
                    <h1>Comment: {comment.comment}</h1>
                    <h1>Episode: {comment.episode_id}</h1>
                    <h1>&nbsp;</h1>
                </p>
            )
        })}
        </>
    )
}