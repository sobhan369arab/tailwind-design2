import { useState } from "react"
import ItemsContent3 from "./itemsContent3";
import { useTranslation } from "react-i18next";


const PartTop = () => {
    const { t } = useTranslation();
    const [items4] = useState([
        { title4: "PartTop_title1", desc4: "PartTop_desc1"},
        { title4: "PartTop_title2", desc4: "PartTop_desc2"},
        { title4: "PartTop_title3", desc4: "PartTop_desc3"},     
    ]);

    return (
        <div dir="ltr" className=" sm:flex justify-between ">
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
                <h1 className="text3 dark:text-zinc-100 pt-14 ">{t("PartTop_text")}</h1>
                {items4.map((item, index) => {
                        return (
                            <ItemsContent3
                            key={index}
                            title={item.title4}
                            desc={item.desc4}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default PartTop