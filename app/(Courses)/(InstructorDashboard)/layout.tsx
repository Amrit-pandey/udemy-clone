import getCurrentUser from "@/actions/getCurrentUser";
import { Navbar } from "./_components/navbar";
import { Footer } from "../../(Dashboard)/_components/footer";

const CoursesLayout = async ({children}: {children: React.ReactNode}) => {
    const currentUser = await getCurrentUser()
    return(
        <div>
            <Navbar currentUser={currentUser} />
            <main className="h-[75vh]">
            {children}
            </main>
            <Footer />
        </div>
    )
}

export default CoursesLayout;