import { connect } from "@/utilities/connect"
import { AddComment } from "@/components/AddComment"
import { DeleteComment } from "@/components/DeleteComment"
import Image from "next/image"
import { revalidatePath } from "next/cache"
//import { LikeButton } from "@/components/LikeButton";

export default async function EpisodePage({params}){

    const db = connect()

    const episodeInfo = (await db.query(`SELECT *
                                        FROM episodes
                                        WHERE episode_id = $1`, [params.episode_id])).rows[0]

    const commentsData = (await db.query(`SELECT *
                                        FROM comments
                                        WHERE episode_id = $1`, [params.episode_id])).rows


    return(
        <>
            <div>
                <h1>Episode name: {episodeInfo.episode_name}</h1>
                <Image height={400} width={250} src={episodeInfo.episode_image} />
                {/* <LikeButton /> */}
            </div>

            <div>
                
                <h1>Comments:</h1>
                {commentsData.map((episode) => {
                    return(
                            <div key={episode.comment_id}>
                                
                                {episode.comment_id}: {episode.comment}
                                
                                <DeleteComment comment={episode.comment_id} programme={params.programme_id} episode={params.episode_id} />
                            </div>
                    )
                })}
            </div>

            <div>
                <AddComment programme={params.programme_id} episode={params.episode_id} />
            </div>
        </>
    )
}