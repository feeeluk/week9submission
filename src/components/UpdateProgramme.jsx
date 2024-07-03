import { connect } from "@/utilities/connect"
import { redirect } from "next/navigation"

export async function UpdateProgramme({params}){

    const db = connect()

    const programme = (await db.query(`SELECT *
                                        FROM programmes
                                        WHERE programmes.programme_id = ${params.programme_id}`)).rows[0]

    const categories = (await db.query(`SELECT DISTINCT *
        FROM categories
        ORDER BY category_name asc`)).rows

    async function handleUpdateProgramme(formData){
        "use server"

        const name = formData.get('programme_name')
        const image = formData.get('programme_image')
        const description = formData.get('programme_description')
        const category = formData.get('programme_category_id')

        const db = connect()
        db.query(`UPDATE programmes
                SET programme_name = $1, programme_image = $2, programme_description = $3, programme_category_id = $4
                WHERE programme_id = $5`, [name, image, description, category, programme.programme_id])

                redirect('./')
    }
    
    return(
        <div>
            <h1>Update Programme</h1>

            <form action={handleUpdateProgramme} className="flex flex-col">

                <input id="programme_name" name="programme_name" class="" type="text" placeholder={programme.programme_name}></input>
                <input id="programme_image" name="programme_image" class="" type="text" placeholder={programme.programme_image}></input>
                <input id="programme_description" name="programme_description" class="" placeholder={programme.programme_description}></input>

                <select id="programme_category_id" name="programme_category_id" className="" defaultValue={`${programme.programme_category_id}`}>

                    {categories.map( (category) => {
                    return(
                        <option key={category.category_id} value={category.category_id}>{category.category_name}</option>
                    )
                    })}

                </select>

                <button type="submit">Update</button> 

            </form>

        </div>
    )
}