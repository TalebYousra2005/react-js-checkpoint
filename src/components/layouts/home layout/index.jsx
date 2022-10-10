import { Footer } from "../../footer"
import { Navbar } from "../../navbar"

export const HomeLayout = ({children})=>{
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}