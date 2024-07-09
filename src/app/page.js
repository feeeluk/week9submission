import { ProgrammeCard } from "@/components/ProgrammeCard"
import { connect } from "@/utilities/connect"
import { redirect } from "next/navigation"
import * as Popover from '@radix-ui/react-popover';
import "@/styles/style.css";

export default async function Home({searchParams}) {
  
  const db = connect()
  
  let searchParamsSort = ""
  let searchParamsFilter = ""
  
  setDefaultSort()
  setDefaultFilter()

  //console.log("sortby: " + searchParamsSort)
  //console.log("filterby: " + searchParamsFilter)

  function setDefaultSort(){

    if(searchParams.sortby === "asc"){
      searchParamsSort = "asc"
      return searchParamsSort
    }
    
    else if(searchParams.sortby === "desc"){
      searchParamsSort = "desc"
      return searchParamsSort}
      
    else{
      searchParamsSort = "asc"
      return searchParamsSort
      }
  }

  function setDefaultFilter(){

    if(searchParams.filterby == 0){
      return searchParamsFilter = ""} 
    
    else if(searchParams.filterby != null){
      return searchParamsFilter =`WHERE category_id = ${searchParams.filterby}`}

  }

  const programmes = (await db.query(`SELECT *
                                    FROM programmes
                                    JOIN categories ON programme_category_id = categories.category_id
                                    ${searchParamsFilter}
                                    ORDER BY programmes.programme_name ${searchParamsSort}`)).rows


  const categories = (await db.query(`SELECT DISTINCT *
                                      FROM categories
                                      ORDER BY category_name asc`)).rows


  async function handleSort(formData){
    "use server"

    const sortValue = formData.get("sort")
    let sort = ""

    if(sortValue === "asc"){
      sort = "asc"
      redirect("./?sortby=asc")
    } else {
      sort = "desc"
      redirect("./?sortby=desc")
    }

  }
  
  async function handleFilter(formData){
    "use server"

    const filterValue = formData.get("filter");
    redirect(`./?filterby=${filterValue}`)
  }

  return (
  
  <>

    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">Click for options</Popover.Trigger>
          <Popover.Portal>
              <Popover.Content className="PopoverContent">

              <form action={handleSort}>

                <select id="sort" name="sort" defaultValue={'asc'}>
                  <option value="asc">{'Sort (A - Z)'}</option>
                  <option value="desc">{'Sort (Z - A)'}</option>
                </select>

                &nbsp;

                <input type="submit" name="" id="" />

              </form>

              <form action={handleFilter}>

                <select id="filter" name="filter" defaultValue={1000}>
                  
                  <option value={0}>All categories</option>
                  
                  {categories.map( (category) => {
                    return(
                      <option key={category.category_id} value={category.category_id}>{category.category_name}</option>
                    )
                  })}

                </select>

                &nbsp;

                <input type="submit" name="" id="" />

              </form>

              <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
      </Popover.Portal>
    </Popover.Root>


    <div className="flex flex-wrap">

      {programmes.map( (programme) => {

        return(
          <div key={programme.programme_id}>
            
            <ProgrammeCard programmeData={programme} />
            
          </div>
        )})}
      
    </div>

  </>
  );
}
