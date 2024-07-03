import { connect } from "@/utilities/connect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function AddProgramme(){

    const db = connect()

    const categories = (await db.query(`SELECT DISTINCT *
        FROM categories
        ORDER BY category_name asc`)).rows


    async function handleAddProgramme(formData){
        "use server"

        const name = formData.get("programme_name")
        const image = formData.get("programme_image")
        const description = formData.get("programme_description")
        const category_id = formData.get("programme_category_id")

        const db = connect()

        db.query(`INSERT INTO programmes (programme_name, programme_image, programme_description, programme_category_id)
                VALUES ($1, $2, $3, $4)`, [name, image, description, category_id])

        revalidatePath("/")
        redirect("/")
         
    }
        
    return(
        <div>
        
            <form action={handleAddProgramme} className="flex flex-col">

                <input id="programme_name" name="programme_name" class="" type="text" placeholder="New programme - name"></input>
                <input id="programme_image" name="programme_image" class="" type="text" placeholder="New programme - image"></input>
                <input id="programme_description" name="programme_description" class="" type="text" placeholder="New programme - description"></input>

                <select id="programme_category_id" name="programme_category_id" className="" defaultValue={""}>
                    
                    <option value="">select category</option>

                    {categories.map( (category) => {
                    return(
                        <option key={category.category_id} value={category.category_id}>{category.category_name}</option>
                    )
                    })}

                </select>

                <button type="submit">Submit</button> 

            </form>

        </div>
    )
}