
const FooterTop = () => {
    return (
        <div className="w-4/5 pt-24 m-auto lg:flex lg:justify-between lg:flex-row-reverse">
            <div dir="rtl" className="lg:w-3/5">
                <h1 className="text3 dark:text-black">اطلاعات بیشتری لازم دارید؟ </h1>
                <h1 className="text9 text-gray-800 lg:mt-12 mt-6">امروز با ما ارتباط برقرار کنید. متخصصان متعهد ما در اینجا هستند تا به شما پشتیبانی استثنایی و پاسخ‌های سریع را ارائه دهند.</h1>
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
                <div className="bg-Mustard Box1 w-4/5 mt-4 m-auto text-center">ارتباط با پشتیبان</div>
            </div>

        </div>
    )
}

export default FooterTop