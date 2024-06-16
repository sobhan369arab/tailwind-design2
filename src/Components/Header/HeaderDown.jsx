import { useTranslation } from "react-i18next"
const HeaderDown = () => {

  const {t} = useTranslation();
  return (
    <div className=" sm:border-b-4 sm:border-solid sm:border-black h-[77%]  flex ">
      <div className="w-[53%] h-full sm:block hidden " >
        <img src="./hero-img2.png" alt="image" className="h-full " />
      </div>
      <div  className="sm:w-[47%] w-full h-full ">
        <h1 className="text1 text-Skyblue">{t("headerDownText1")}</h1>
        <h1 className="text1 md:pt-0 dark:text-zinc-200">{t("headerDownText2")} <br/> {t("headerDownText25")} </h1>
        <div className="sm:flex sm:gap-3 mr-1 mt-4 text2">
          <div className="Box2 border border-solid border-gray-700 bg-white dark:bg-neutral-400 "> {t("headerDownText4")}</div>
          <div className="Box2  bg-Skyblue dark:text-zinc-300">{t("headerDownText3")}</div>
        </div>
        <div className="sm:flex sm:items-center sm:gap-2 lg:pt-6 pt-0 " >
          <img src="./member.png" alt="image" className="md:h-10 sm:h-6 h-8 sm:m-0 m-auto " />
          <span className="text2 sm:m-0 sm:m-4 sm:mt-0 mt-4 mx-10   inline-block   dark:text-zinc-200"> {t("headerDownText5")}</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderDown