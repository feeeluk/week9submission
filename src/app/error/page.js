import { CauseError } from "@/components/CauseError"

export default function Page(){
    return(
        <>
            <h1>This is the error route</h1>

            <CauseError />
        </>
    )
}