'use client'

import { Logo } from "@/components/logo"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter()
  return (
    <div className="sticky z-30 shadow-lg w-full">
        <div className="px-8 p-6 border-[1px]">
            <div className="flex items-center justify-between">
                <div className="border-r-[1px] border-gray-500 pr-8 top-0 bottom-0 ">
                    <Logo />
                </div>
                <div 
                onClick={() => router.push('/instructor/create')}
                className="text-lg text-purple-600 hover:text-purple-800 font-bold transition cursor-pointer">Exit</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar