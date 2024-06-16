import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const ItemsContent2 = ({title,desc,img}) => {
    const { t } = useTranslation();
    return (
        <div className=" itemsBox2 py-5 px-4  ">
        <img src={img} alt="image" className="img2"/>
        <h1 className="text5">{t(title)}</h1>
        <h1 className="text6">{t(desc)}</h1>
    </div>
    )
}

export default ItemsContent2