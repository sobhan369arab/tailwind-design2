import PartDown from "./PartDown"
import PartTop from "./PartTop"

const Content2 = () => {
    return (
        <div className=" h-auto all mt-16  ">
            <div className=" h-[500px] w-[555px] bg-[url('./Content/Fill-225.png')] bg-cover absolute lg:top-0 lg:left-60"></div>
            <div className=" h-[350px] w-[400px] bg-[url('./Content/Vector.png')] bg-cover absolute lg:top-20 lg:left-80"></div>
            <div className=" h-24 w-24 bg-[url('./Content/hand.png')] bg-cover absolute  lg:top-[280px] lg:left-[570px] hidden  lg:block"></div>
            <div className=" h-[500px] w-40 bg-[url('./Content/flower.png')] bg-cover absolute  bottom-[-70px] right-10 hidden  sm:block"></div>
            <div className=" h-28 w-[400%] bg-[url('./Content/Intersect.png')] bg-repeat-x  absolute  top-[-148px] right-10 hidden  sm:block"></div>
            <div className="container">
                <PartTop />
                <PartDown/>
            </div>
        </div>
    )
}

export default Content2