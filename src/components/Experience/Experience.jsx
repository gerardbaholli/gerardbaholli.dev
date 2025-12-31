import "./Experience.css";
import { H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import ExperienceItem from "../ExperienceItem/ExperienceItem.jsx";
import experienceData from "../../data/Experience.json";
import { useLanguage } from "../../context/LanguageContext";

export default function Experience() {
    const { lang, t } = useLanguage();

    return (
        <div className="experience-container">
            <H3 color={Text.paragraph1}>{t("experience_title") || "Experience"}</H3>
            
            <div className="experience-list">
                {experienceData.map((item) => (
                    <ExperienceItem 
                        key={item.id}
                        company={item.company[lang]}
                        role={item.role[lang]}
                        period={item.period}
                        location={item.location[lang]}
                        description={item.description[lang]}
                    />
                ))}
            </div>
        </div>
    );
}
