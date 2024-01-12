'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const Logo = () => {
    const router = useRouter()
    return(
        <Image 
        onClick={() => router.push('/')}
        alt="Logo"
        src='/images/logo2.png'
        height='120'
        width='120'
        className="hidden md:flex items-center gap-x-2 cursor-pointer"
        />
    )
}
