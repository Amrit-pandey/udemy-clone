import { SafeUser } from "@/types";
import UsermenuItems from "./user-menu-items";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


interface UserModalProps {
  currentUser: SafeUser | null;
}

const UserModal: React.FC<UserModalProps> = ({ currentUser }) => {
  const router = useRouter()
  return (
    <>
      <div className="absolute right-0 top-20 bottom-0">
        <div className="flex flex-col cursor-pointer h-[65vh] w-[17vw] overflow-hidden bg-white shadow-lg right-0 top-12 transition border-[1.5px]">
          <div className="flex flex-row items-center gap-4 px-4 py-3">
            <div className="w-[70px] h-[70px] rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
              <span>{currentUser?.name?.at(0)?.toUpperCase()}</span>
              <span>{currentUser?.name?.at(1)?.toUpperCase()}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="hover:text-blue-800 text-xl font-bold">
                {currentUser?.name}
              </span>
              <span className="text-sm text-gray-600">
                {currentUser?.email}
              </span>
            </div>
          </div>
          <hr />
          <UsermenuItems label="My learning" onClick={() => {}} />
          <UsermenuItems label="Cart" onClick={() => {}} />
          <UsermenuItems label="My courses" onClick={() => {}} />
          <hr className="my-2" />
          <UsermenuItems label="Notification" onClick={() => {}} />
          <UsermenuItems label="Messages" onClick={() => {}} />
          <hr className="my-2" />
          <UsermenuItems label="Edit profile" onClick={() => router.push('/instructor/profile')} />
          <UsermenuItems label="Logout" onClick={() => signOut()} />
        </div>
      </div>
    </>
  );
};

export default UserModal;
