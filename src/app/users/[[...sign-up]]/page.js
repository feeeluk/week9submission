import { connect } from "@/utilities/connect"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default function Page() {

    const {userId} = auth()

    async function handleCreateUser(formData){
        "use server"

        const db = connect()
        const data = Object.fromEntries(formData)
        const {username, bio, location} = data

        try{
            db.query(`INSERT INTO users (clerk_id, username, bio, location)
                        VALUES ($1, $2, $3, $4)`, [userId, username, bio, location])

            redirect(`/users/user-profile/${userId}`)
        }
        catch(error){

        }
    }

    return(
        <div>
            <p>This is the sign up page</p>

            <form action={handleCreateUser}>

                <label for="username">Username</label>
                <input id="username" name="username" className="" placeholder="username"></input>

                <label for="bio">Bio</label>
                <input id="bio" name="bio" className="" placeholder="bio"></input>

                <label for="location">Location</label>
                <input id="location" name="location" className="" placeholder="location"></input>

                <button type="submit">Submit</button>


            </form>
        </div>
    )
}