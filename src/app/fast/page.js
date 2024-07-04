import { SlowComponent } from "@/components/Slow"
import { Suspense } from "react"
import Loading from "@/components/Loading"

export default function Page(){
    return(
        <>
        
        <h1>Fast</h1>

        <Suspense fallback={
            <Loading />
        }>
            <SlowComponent />
        </Suspense>
        
        </>
    )
}