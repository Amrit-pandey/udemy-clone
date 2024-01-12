import { Toaster } from "react-hot-toast";
import { Footer } from "../(Dashboard)/_components/footer";
import { Navbar } from "../(Dashboard)/_components/navbar";
import getCurrentUser from "@/actions/getCurrentUser";

const AuthLayout = async({children}: {children: React.ReactNode}) => {
    const currentUser = await getCurrentUser()
    return(
        <div className="">
            <Toaster />
            <Navbar currentUser={currentUser}/>
            {children}
            <Footer />
        </div>
    )
}

export default AuthLayout;