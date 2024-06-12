import Content1 from "./Content1/Content1"
import Content2 from "./Content2/Content2"
import { Footer } from "./Footer/Footer"
import Header from "./Header/Header"
import Slider from "./Slider/slider"

const HomePage = () => {
    return (
        <div className=" bg-Whisper dark:bg-zinc-900">
            <Header/>
            <Content1/>
            <Slider/>
            <Content2/>
            <Footer/>
        </div>
    )
}

export default HomePage