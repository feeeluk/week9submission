import { connect } from "@/utilities/connect"
import { revalidatePath } from "next/cache"

export default async function AddCategory(){

    const db = connect()    

    const categories = (await db.query(`SELECT DISTINCT *
        FROM categories
        ORDER BY category_name asc`)).rows 

    async function handleAddCategory(formData){
        'use server'

        const category = formData.get('category')

        const db = connect()

        db.query(`INSERT INTO categories (category_name)
                VALUES ($1)`, [category])
      
    
        revalidatePath(`/add-category`)
         
    }
        
    return(
        <div>

            {categories.map( (category) => {
               return(
                   <h1 key={category.category_id}>{category.category_name}</h1>
               )
           })}
        
            <form action={handleAddCategory} className="flex flex-col">

                <input id="category" name="category" class="" type="text" placeholder="Create a new category"></input>

                <button type="submit">Submit</button> 

            </form>

        </div>
    )
}