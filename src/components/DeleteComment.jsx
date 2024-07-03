import { connect } from "@/utilities/connect"
import { revalidatePath } from "next/cache"

export function DeleteComment(params){

    async function handleDeleteComment(){
        'use server'

        const db = connect()
        db.query(`DELETE FROM comments WHERE comment_id = $1`, [params.comment])

        revalidatePath(`${params.programme}/${params.episode}`)
    }

    return(
        

        <div>
        
            <form action={handleDeleteComment} className="flex flex-col">

                <button type="submit">{`<< delete >>`}</button> 

            </form>

        </div>
    )
}