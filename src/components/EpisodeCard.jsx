import Image from "next/image"
import Link from "next/link"
import { HoverEffect } from "./animationWrappers/Hover"

export function ProgrammeCard({programmeData}){
    return(

        <HoverEffect>

            <div className="petCard
            relative
            h-52
            w-52
            overflow-hidden
            m-2
            border-2
            border-black">

                <Link href={`/${programmeData.programme_id}`}>
                    
                    <div key={programmeData.programme_id} className="relative
                    top-36 left-2 z-10">

                        <h5 key={programmeData.programme_name} className="">{programmeData.programme_name}</h5>
                    </div>

                    <Image key={programmeData.programme_image} src={programmeData.programme_image} layout="fill" className="object-cover
                    object-center" />

                </Link>
            </div>
            
        </HoverEffect>
    )
}