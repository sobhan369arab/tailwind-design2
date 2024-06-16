import { useState } from "react"
import ItemsContent1 from "./itemsContent1";
import { useTranslation } from "react-i18next";

const SectionTop = () => {
    const { t } = useTranslation();

    const [items1] = useState([
        { title1: "SectionTopText2", img1: "./Content/apple.png" },
        { title1: "SectionTopText3", img1: "./Content/Union.png" },
        { title1: "SectionTopText4", img1: "./Content/tooth.png" },
        { title1: "SectionTopText5", img1: "./Content/dog.png" },
        { title1: "SectionTopText6", img1: "./Content/rojh.png" },
        { title1: "SectionTopText7", img1: "./Content/plant.png" },
        { title1: "SectionTopText8", img1: "./Content/shirt.png" }
    ]);
    return (
        <div>
            <div className=" sm:mt-20 mt-24 lg:w-[73%] w-full m-auto relative">
                <h1 className="text3 text-center dark:text-zinc-200"> {t("SectionTopText1")}</h1>
                <div className="flex flex-wrap justify-center xl:gap-20 lg:gap-6  gap-4 mt-16 relative z-50">
                    {items1.map((item, index) => {
                        return (
                            <ItemsContent1
                            key={index}
                            title={item.title1}
                            img={item.img1}
                            />
                        )
                    })}
                    <div className="itemBox1 md:w-24 sm:w-20 w-16 ">
                        <img src="./Content/mosk.png" alt="image" className="img1" />
                        <h1 className="text4">{t("SectionTopText9")}</h1>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SectionTop