
const SectionTop = () => {
  return (
    <div>
        <div className=" sm:mt-20 mt-24 lg:w-[73%] w-full m-auto relative">
            <h1 className="text3 text-center dark:text-zinc-200">دوره هایی که جایی پیدا نمیشه</h1>
            <div className="flex flex-wrap justify-center xl:gap-20 lg:gap-6  gap-4 mt-12 relative z-50">
                <div className="itemBox1">
                    <img src="./Content/apple.png" alt="image" className="img1" />
                    <h1 className="text4">تغذیه مناسب</h1>
                </div>
                <div className="itemBox1">
                    <img src="./Content/Union.png" alt="image" className="img1" />
                    <h1 className="text4">شیمی</h1>
                </div>
                <div className="itemBox1">
                    <img src="./Content/tooth.png" alt="image" className="img1" />
                    <h1 className="text4">مراقبت دندان</h1>
                </div>
                <div className="itemBox1">
                    <img src="./Content/dog.png" alt="image" className="img1" />
                    <h1 className="text4">مراقبت از حیوانات</h1>
                </div>
                <div className="itemBox1">
                    <img src="./Content/rojh.png" alt="image" className="img1" />
                    <h1 className="text4">زیبایی و سلامت</h1>
                </div>
                <div className="itemBox1">
                    <img src="./Content/plant.png" alt="image" className="img1" />
                    <h1 className="text4">نگهداری از گیاهان</h1>
                </div>
                <div className="itemBox1">
                    <img src="./Content/shirt.png" alt="image" className="img1" />
                    <h1 className="text4">استایل و فشن</h1>
                </div>
                <div className="itemBox1 md:w-24 sm:w-20 w-16 ">
                    <img src="./Content/mosk.png" alt="image" className="img1" />
                    <h1 className="text4">سینما اکت</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTop