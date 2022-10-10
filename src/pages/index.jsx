import { About } from "../components/about"
import { Hero } from "../components/hero"
import { HomeLayout } from "../components/layouts/home layout"

const HomePage = ()=>{
    return(
        <HomeLayout>
            <Hero/>
            <About/>
        </HomeLayout>
    )
}

export default HomePage