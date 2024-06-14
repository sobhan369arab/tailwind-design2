import screenLightController from "../../js/darkMood"


const HeaderTop = () => {
  return (
    <div className="h-[20%] mb-3  md:flex md:justify-between md:flex-row-reverse md:items-center md:pt-0 pt-4  textBasis1    ">
      <div className=" sm:flex sm:items-center  justify-between flex-row-reverse">      
        <div className="flex items-center justify-around xl:gap-6 sm:gap-4   cursor-pointer dark:text-zinc-200">
        <div onClick={() => screenLightController()} className="h-4  w-4 md:h-8 md:w-8 bg-[url('./darkMood.png')] dark:bg-[url('./lightMood.png')] bg-cover"> </div>
          <div className="p-1">
            <a href="#en" >EN </a>
            <span className="mx-1">|</span>
            <a href="#fa"> FA</a>
          </div>
          <span className="sm:inline hidden">تماس با ما </span>
          <span className="sm:inline hidden">سوالات متداول </span>
          <span> نظرات </span>
          <span> ویژگی ها</span>
          <span>دوره ها </span>
          <span>خانه </span>
          <img src="./logoHeader.png" alt="image" className=" h-6  lg:h-10 md:h-6 cursor-default lg:inline-block hidden" />
        </div>
      </div>
      <div dir="ltr" className="bg-Mustard Box1  hidden  ">دانلود اپلیکیشن</div>
    </div>
  )
}

export default HeaderTop