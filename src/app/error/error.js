"use client"

export default function ErrorPage({error, reset}){
    return(
        <>
            <h1>This is the error page...</h1>

            <p>Error = {error.message}</p>
            
            <button onClick={() => reset()}>Try again</button>
        </>
    )
}