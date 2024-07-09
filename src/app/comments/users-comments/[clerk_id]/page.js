import { connect } from "@/utilities/connect"

export default async function MyComments({params}){

    const db = connect()
    const comments = (await db.query(`SELECT *
                                    FROM comments
                                    WHERE clerk_id = $1`, [params.clerk_id])).rows

    return(
        <>
        <h1>My comments</h1>
        {console.log(comments)}
        {comments.map( (comment) => {
            return(
                <p key={comment.comment_id}>
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