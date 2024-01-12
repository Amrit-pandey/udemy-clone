"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { SafeUser } from "@/types";
import { useCallback, useState } from "react";
import ToggleUser from "./toggleUser";
import UserModal from "./userModal";

interface NavbarProps {
  currentUser: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsopen((value) => {
      return !value;
    });
  }, []);

  return (
    <div className="sticky z-30 top-0 px-8 py-6 lg:p-10 h-14 w-full border-b shadow-lg bg-white flex items-center">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-1 relative items-center gap-6">
          <Logo />
          <div className="lg:flex lg:flex-1 hidden  grow">
            <input
              type="text"
              placeholder="Search for anything"
              className="rounded-full border-[1px] border-black p-4 w-full outline-none "
            />
          </div>
          <div className="lg:flex  hidden lg:gap-8 lg:items-center text-md">
            <Link href="#" className="hover:text-purple-600">
              Udemy Bussiness
            </Link>
            {currentUser ? (
              <Link href="/instructor/create" className="hover:text-purple-600">
                Instructor
              </Link>
            ) : (
              <Link href="#" className="hover:text-purple-600">
                Teach on Udemy
              </Link>
            )}
            <div className="relative">
              <Link href="/cart" className="hover:text-purple-600">
                <ShoppingCartIcon />
              </Link>
              <div className="absolute -right-3 -top-4 rounded-full bg-purple-500 text-white w-6 h-6 flex justify-center items-center text-sm">
                {!currentUser ? 0 : currentUser.cartIds.length}
              </div>
            </div>
          </div>
          {!currentUser && (
            <div className="gap-3 flex space-x-4 md:block md:w-auto items-center justify-between w-full">
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          )}
          {currentUser && (
            <ToggleUser onClick={toggleOpen} currentUser={currentUser}/>
          )}
          {isOpen && (
           <UserModal currentUser={currentUser}/>
          )}
        </div>
      </div>
    </div>
  );
};
