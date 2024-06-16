import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const ItemsContent3 = ({ title, desc}) => {
    const { t } = useTranslation();

    return (
        <div className="pt-6">
            <span className="text7">{t(title)} </span>
            <span className="text8">{t(desc)}</span>
        </div>
    )
}

export default ItemsContent3