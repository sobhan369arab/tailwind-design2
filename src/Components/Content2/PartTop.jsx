
const PartTop = () => {
    return (
        <div className=" sm:flex justify-between ">
            <div className="sm:w-1/2  relative ">
                <div className="w-4/5 grid md:grid-cols-2 grid-cols-3 gap-4 m-auto mt-8">
                    <div className=" py-16 h-56  itemsBox3">
                        <img src="./Content/+5000Students.png" alt="image" className="m-auto " />
                    </div>
                    <div className=" py-16 h-52   itemsBox3">
                        <img src="./Content/+100KHours(1).png" alt="image" className="m-auto" />
                    </div>
                    <div className="py-16 sm:h-52 h-56  itemsBox3">
                        <img src="./Content/+500Courses.png" alt="image" className="m-auto" />
                    </div>
                </div>
            </div>
            <div dir="rtl" className="sm:w-2/5 mr-8   relative">
                <h1 className="text3 dark:text-zinc-300 pt-14">مهارت های خود را افزایش دهید</h1>
                <div className="pt-6">
                    <span className="text7"> کاتالوگ دوره های متنوع:</span>
                    <span className="text8"> مجموعه‌ای از دوره‌های گسترده از موضوعات و صنایع مختلف ارائه می‌دهد، تضمین می‌کند که شما می‌توانید دوره مناسبی را برای دستیابی به اهداف یادگیری خود پیدا کنید.</span>
                </div>
                <div className="pt-6">
                    <span className="text7"> مدرسان ماهر:</span>
                    <span className="text8">  تمام دوره‌ها توسط متخصصان صنعت و حرفه‌ای‌های با تجربه تدریس می‌شوند، به شما دانش عملی و راهنمایی‌های ارزشمندی ارائه می‌دهند.</span>

                </div>
                <div className="pt-6">
                    <span className="text7"> یادگیری انعطاف پذیر:</span>
                    <span className="text8">  شما می‌توانید به دوره‌ها  از هر مکان و زمانی دسترسی داشته باشید، که این امکان را فراهم می‌کند که یادگیری را به برنامه‌ی زمانی خود تنظیم کنید.</span>
                </div>
            </div>
        </div>
    )
}

export default PartTop