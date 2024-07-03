import { connect } from "@/utilities/connect"
import { revalidatePath } from "next/cache"

export function AddComment(params){

    async function handleAddComment(formData){
        'use server'

        const comment = formData.get('comment')
        const episode = params.episode

        const db = connect()
        db.query(`INSERT INTO comments (comment, episode_id)
                VALUES ($1, $2)`, [comment, episode])
        
        revalidatePath(`${params.programme}/${params.episode}`)
         
    }
        
    return(
        <div>
        
            <form action={handleAddComment} className="flex flex-col">

                <label htmlFor="comment">Add comment: </label>
                <input id="comment" name="comment" class="" type="text" placeholder="What do you want to say?"></input>

                <button type="submit">Submit</button> 

            </form>

        </div>
    )
}