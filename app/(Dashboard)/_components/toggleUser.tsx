import { SafeUser } from "@/types";

interface ToggleUserProps {
  onClick: () => void;
  currentUser?: SafeUser | null;
}

const ToggleUser: React.FC<ToggleUserProps> = ({ onClick, currentUser }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-[50px] h-[50px] relative bg-black text-white rounded-full p-4 transition cursor-pointer items-center flex justify-center font-bold"
      >
        <span>{currentUser?.name?.at(0)?.toUpperCase()}</span>
        <span>{currentUser?.name?.at(1)?.toUpperCase()}</span>
      </div>
    </>
  );
};

export default ToggleUser;
