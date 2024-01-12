'use client'

import ToggleUser from "@/app/(Dashboard)/_components/toggleUser"
import UserModal from "@/app/(Dashboard)/_components/userModal";
import { SafeUser } from "@/types"
import { useCallback, useState } from "react";

interface NavbarProps {
    currentUser : SafeUser | null
}

export const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    const [isOpen, setIsopen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsopen((value) => {
      return !value;
    });
  }, []);

    return(
        <div className="sticky z-30 ">
            <div className="p-8">
                    <div className="flex items-center justify-end">
                        <div className="relative">
                        {currentUser && (
                        <ToggleUser onClick={toggleOpen} currentUser={currentUser}/>
                        )}
                        {isOpen && (
                            <UserModal currentUser={currentUser}/>
                        )}
                        </div>
                </div>
            </div>
        </div>
    )
}