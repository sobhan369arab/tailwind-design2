import SectionDown from "./SectionDown"
import SectionTop from "./SectionTop"

const Content1 = () => {
  return (
    <div className="all">
        <div className="w-80 h-72 bg-[url('./Content/Background1.png')] bg-cover absolute top-44 left-10"></div>
        <div className="w-72 h-72 bg-[url('./Content/Background2.png')] bg-cover absolute bottom-32 right-0 dark:hidden"></div>
        <div className="w-24 h-24 bg-[url('./Content/Background3.png')] bg-cover absolute bottom-60 right-52 dark:hidden"></div>
        <div className="container">
            <SectionTop/>
            <SectionDown/>
        </div>
    </div>
  )
}

export default Content1