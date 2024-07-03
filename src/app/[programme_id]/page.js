import { connect } from "@/utilities/connect"
import Image from "next/image"
import Link from "next/link"
//import { LikeButton } from "@/components/LikeButton"

export default async function ProgrammePage({params}){
    const db = connect()
    const programmeInfo = (await db.query(`SELECT *
                                        FROM programmes
                                        JOIN categories ON programme_category_id = categories.category_id
                                        WHERE programme_id = $1`, [params.programme_id])).rows[0]

    const programmeEpisodes = (await db.query(`SELECT seasons.season_id AS sn_id, seasons.season_name AS sn_name, episodes.episode_id AS e_id, episodes.episode_name AS e_name, episodes.episode_image AS e_image
                                        FROM programmes
                                        JOIN seasons ON programmes.programme_id = seasons.programme_id
                                        JOIN episodes ON seasons.season_id = episodes.season_id
                                        WHERE programmes.programme_id = $1
                                        GROUP BY sn_id, sn_name, e_id, e_name, e_image
                                        ORDER BY sn_id, e_id`, [params.programme_id])).rows

    return(
        <>
            <div>
                <h1>Name: {programmeInfo.programme_name}</h1>
                <h1>Description: {programmeInfo.programme_description}</h1>
                <h1>Category: {programmeInfo.category_name}</h1>
                <Link href={`/${programmeInfo.programme_id}/edit`}>                
                    <Image height={400} width={250} src={programmeInfo.programme_image} />
                </Link>
                {/* <LikeButton /> */}
            </div>

            <div>Episodes:
                {programmeEpisodes.map((episode) => {
                    return(
                        <Link href={`/${programmeInfo.programme_id}/${episode.e_id}`} key={episode.e_id}>
                            <div className="relative
                                            h-36
                                            w-52
                                            overflow-hidden
                                            m-2
                                            border-2
                                            border-black">

                                <div key={episode.e_id} className="relative
                                                                    top-24
                                                                    left-2
                                                                    z-10">
                                    <h5 key={episode.e_id}>{episode.sn_name} : {episode.e_name}</h5>
                                </div>

                                <Image src={episode.e_image} key={episode.e_id} layout="fill" className="object-cover
                                                                                                        object-center" /> 
                            </div> 
                        </Link>
                    )
                })}
            </div>
        </>
    )
}