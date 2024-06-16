import { useState } from "react"
import ItemsContent2 from "./itemsContent2";

const SectionDown = () => {

    const [item2] = useState([
        { title2: "SectionDownText1", desc2: "SectionDownText11", img2: "./Content/1.png" },
        { title2: "SectionDownText2", desc2:"SectionDownText22", img2: "./Content/2.png" },
        { title2: "SectionDownText3", desc2: "SectionDownText33", img2: "./Content/3.png" },
        { title2: "SectionDownText4", desc2: "SectionDownText44", img2: "./Content/4.png" }
     
    ]);
    return (
        <div>
            <div className="my-28 flex flex-wrap justify-around relative gap-y-4 ">
                {item2.map((item, index) =>{
                    return(
                    <ItemsContent2
                    key={index}
                    title={item.title2}
                    desc={item.desc2}
                    img={item.img2}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default SectionDown