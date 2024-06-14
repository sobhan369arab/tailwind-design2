
const FooterTop = () => {
    return (
        <div className="w-4/5 sm:pt-24 pt-12 m-auto lg:flex lg:justify-between lg:flex-row-reverse">
            <div dir="rtl" className="lg:w-3/5">
                <h1 className="text3 text-black dark:text-zinc-100">اطلاعات بیشتری لازم دارید؟ </h1>
                <h1 className="text9 text-gray-800 dark:text-zinc-300 lg:mt-12 mt-6">امروز با ما ارتباط برقرار کنید. متخصصان متعهد ما در اینجا هستند تا به شما پشتیبانی استثنایی و پاسخ‌های سریع را ارائه دهند.</h1>
            </div>
            <div className="lg:w-1/5 lg:mt-0 mt-3 ">
                <div className="flex justify-around ">
                    <span>hello@skillup.com</span>
                    <img src="./Content/sms.png" alt="image" />
                </div>
                <div className="flex justify-around mt-4">
                    <span>(+1) 546 54 54</span>
                    <img src="./Content/phone.png" alt="image" />
                </div>
                <div className="footerBox">ارتباط با پشتیبان</div>
                <div dir="ltr" className="footerBox md:hidden ">دانلود اپلیکیشن</div>

            </div>

        </div>
    )
}

export default FooterTop