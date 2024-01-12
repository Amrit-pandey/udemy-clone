import { Toaster } from "react-hot-toast";
import Navbar from "./_components/navbar";

const NewCourse = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  );
};

export default NewCourse;
