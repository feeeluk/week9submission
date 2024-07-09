import { connect } from "@/utilities/connect"
import { auth } from "@clerk/nextjs/server"

export default async function Page({params}){

    const db = connect()
    const {userId} = auth()
    const userInfo = (await db.query(`SELECT *
                                    FROM users
                                    WHERE clerk_id=$1`, [params.user_id])).rows[0]

    return(
        <>
            <h1>Your profile:</h1>
            
            <p>
                Clerk ID: {userInfo.clerk_id}
            </p>

            <p>
                Username: {userInfo.username}
            </p>

            <p>
                Bio: {userInfo.bio}
            </p>

            <p>
                Location: {userInfo.location}
            </p>
        </>
    )

}