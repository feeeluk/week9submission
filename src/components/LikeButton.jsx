'use client'

import { motion } from "framer-motion"
import { useState } from "react"

export function LikeButton(){

    const [like, setLike] = useState(0)

    return(
        <div>

            <motion.button
                whileHover={{scale: 1.2, rotate: 360}}
                transition={{duration: 5}}
                onClick={() => {
                    setLike(like + 1)
                }}>
            
            {`<3 ${like}`}
            </motion.button>

        </div>
    )
}