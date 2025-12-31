import "./Education.css";
import { H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import EducationItem from "../EducationItem/EducationItem.jsx";
import educationData from "../../data/Education.json";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
    const { lang, t } = useLanguage();

    return (
        <div className="education-container">
            <H3 color={Text.paragraph1}>{t("education_title")}</H3>
            
            <div className="education-list">
                {educationData.map((item) => (
                    <EducationItem 
                        key={item.id}
                        institute={item.institute[lang]}
                        degree={item.degree[lang]}
                        year={item.year}
                        location={item.location[lang]}
                    />
                ))}
            </div>
        </div>
    );
}
