import screenLightController from "../../js/darkMood"


const HeaderTop = () => {
  return (
    <div className="h-[20%] mb-3  flex justify-between items-center  text-[8px] sm:text-[11px] md:text-[13px] lg:text-[14px] ">     
        <div id="download" className="bg-Mustard Box1 ">دانلود اپلیکیشن</div>
        <div className=" flex items-center justify-around gap-2 lg:gap-6 cursor-pointer dark:text-zinc-300"> 
            <div onClick={()=> screenLightController()} className="h-4 w-4 md:h-8 md:w-8 bg-[url('./darkMood.png')] dark:bg-[url('./lightMood.png')] bg-cover"> </div>
            <div className="p-1">
              <a href="#en" >EN </a>
              <span className="mx-1">|</span>
              <a href="#fa"> FA</a>
            </div>
            <div>تماس با ما </div>
            <div>سوالات متداول </div>
            <div> نظرات </div>
            <div> ویژگی ها</div>
            <div>دوره ها </div>
            <div>خانه </div>
            <img src="./logoHeader.png" alt="image" className="inline-block h-6  lg:h-10 md:h-6 cursor-default md:inline-block hidden"/>
        </div>
    </div>
  )
}

export default HeaderTop