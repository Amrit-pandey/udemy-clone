import getCurrentUser from "@/actions/getCurrentUser";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser()
  return (
  
    <div className="min-h-screen flex flex-col relative">
      <Navbar currentUser={currentUser} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
