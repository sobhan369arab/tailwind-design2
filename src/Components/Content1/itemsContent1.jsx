/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

const ItemsContent1 = ({title,img}) => {

    const { t } = useTranslation();
    return (
        <div className="itemBox1">
            <img src={img} alt="image" className="img1" />
            <h1 className="text4">{t(title)}</h1>
        </div>
    )
}

export default ItemsContent1