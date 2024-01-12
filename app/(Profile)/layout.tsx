import getCurrentUser from "@/actions/getCurrentUser";
import { Navbar } from "../(Courses)/(InstructorDashboard)/_components/navbar";
import { Footer } from "../(Dashboard)/_components/footer";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentUser={currentUser} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
