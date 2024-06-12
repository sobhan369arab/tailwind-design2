
const FooterDown = () => {
  return (
    <div className="border-t-2 border-solid border-gray-600 pt-10 mt-10 pb-20 flex md:justify-between justify-center items-center">
        <div className="flex gap-4 ">
            <div className="flex gap-4">
                <img src="./Content/behance.png" alt="image" className="imgFooter" />
                <img src="./Content/coolicon.png" alt="image" className="imgFooter"/>
                <img src="./Content/spn.png" alt="image" className="imgFooter"/>
                <img src="./Content/insta.png" alt="image" className="imgFooter"/>
                <img src="./Content/youtube.png" alt="image" className="imgFooter"/>
            </div>
            <h1 dir="rtl" className="text-gray-600 text9">ما را در شبکه های اجتماعی دنبال کنید   |      </h1>
        </div>
        <img src="./Content/logo.png" alt="image" className="lg:block hidden"/>
        
    </div>
  )
}

export default FooterDown