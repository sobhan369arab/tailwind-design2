
const HeaderDown = () => {
  return (
    <div className=" sm:border-b-4 sm:border-solid sm:border-black h-[77%]  flex">
      <div className="w-[53%] h-full sm:block hidden " >
        <img src="./hero-img2.png" alt="image" className="h-full " />
      </div>
      <div dir="rtl" className="sm:w-[47%] w-full h-full  ">
        <h1 className="text1   text-Skyblue">اسکیلاپ ! </h1>
        <h1 className="text1 md:pt-0 dark:text-zinc-300">بهترین پلتفرم برای آموزش<br />و یادگیری</h1>
        <div className="sm:flex sm:gap-3 mr-1 mt-4 text2">
          <div className="Box2 border border-solid border-gray-700 bg-white "> مشاهده دوره ها</div>
          <div className="Box2  bg-Skyblue">شروع کنید!</div>
        </div>
        <div className="sm:flex sm:items-center sm:gap-2 lg:pt-6 pt-0 " >
          <img src="./member.png" alt="image" className="md:h-10 sm:h-6 h-8 sm:m-0 m-auto " />
          <span className="text2 sm:m-0 sm:m-4 sm:mt-0 mt-4 mx-10   inline-block   dark:text-zinc-300"> 1000 دانشجو ما را تایید و تاکید کرده اند.</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderDown